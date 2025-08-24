// pages/api/jindi.js
export const config = {
  runtime: 'edge', // veloce su Vercel; se preferisci node: togli questa riga
};

const SYSTEM_PROMPT = `
Sei "Jindi", l'AI di MINDflow. Tono empatico e pratico.
Compiti:
- Genera esempi pratici (5/10) per qualsiasi sezione dell'app.
- Crea workout settimanali personalizzati in formato breve e chiaro.
- Suggerisci come strutturare grafici/metriche (senza immagini), indicando che cosa plottare e con che intervallo.
- Risposte concise, elenco puntato quando utile. Italiano. 
`;

export default async function handler(req) {
  try {
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method Not Allowed' }), { status: 405 });
    }

    const { messages } = await req.json();
    if (!Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: 'Missing messages[]' }), { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    const model = process.env.JINDI_MODEL || 'gpt-4o-mini';

    // Se manca la chiave, rispondiamo con un fallback così l'app non si rompe
    if (!apiKey) {
      return new Response(
        JSON.stringify({
          role: 'assistant',
          content:
            '⚠️ Jindi non è collegata a un provider AI (manca OPENAI_API_KEY). ' +
            'Esempi: 1) “Bere 2L d’acqua” 2) “10’ meditazione” 3) “Camminata 10k passi” 4) “Leggere 15 pagine” 5) “Chiamare un amico”.',
        }),
        { status: 200, headers: { 'content-type': 'application/json' } }
      );
    }

    // OpenAI Chat Completions REST (no SDK)
    const resp = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        temperature: 0.7,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages, // [{role:'user'|'assistant', content:string}]
        ],
      }),
    });

    if (!resp.ok) {
      const errText = await resp.text();
      return new Response(JSON.stringify({ error: 'Upstream error', detail: errText }), { status: 500 });
    }

    const data = await resp.json();
    const content = data?.choices?.[0]?.message?.content?.trim() || 'Nessuna risposta.';
    return new Response(JSON.stringify({ role: 'assistant', content }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err?.message || 'Server error' }), { status: 500 });
  }
}
