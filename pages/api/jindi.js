// pages/api/jindi.js
export const config = { runtime: 'edge' };

const SYSTEM_PROMPT = `
Sei "Jindi", l'AI di MINDflow. Tono empatico e concreto.
Compiti:
- Genera 5-10 esempi pertinenti per la sezione richiesta (elenco puntato sintetico).
- Se l'utente chiede un grafico, restituisci ANCHE uno schema dati JSON con la chiave "chart"
  nel formato:
  { "type": "bar" | "line", "title": "...", "series": [ { "label": "string", "value": number } ] }
- Rispondi in ITALIANO. Mantieni le liste sintetiche e immediatamente utilizzabili.
`;

export default async function handler(req) {
  try {
    if (req.method !== 'POST')
      return new Response(JSON.stringify({ error: 'Method Not Allowed' }), { status: 405 });

    const { messages } = await req.json();
    const apiKey = process.env.OPENAI_API_KEY;
    const model = process.env.JINDI_MODEL || 'gpt-4o-mini';

    if (!apiKey) {
      return new Response(
        JSON.stringify({
          role: 'assistant',
          content:
            '⚠️ Jindi non è collegata (manca OPENAI_API_KEY). Ecco esempi: • Bere 2L d’acqua • 10’ meditazione • 30’ camminata • Leggere 15 pagine • Scrivere 3 idee.',
        }),
        { status: 200, headers: { 'content-type': 'application/json' } }
      );
    }

    const resp = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'content-type': 'application/json', authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        model,
        temperature: 0.6,
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
        response_format: { type: 'json_schema', json_schema: {
          name: "jindi_response",
          schema: {
            type: "object",
            properties: {
              text: { type: "string" },
              chart: {
                type: "object",
                properties: {
                  type: { enum: ["bar", "line"] },
                  title: { type: "string" },
                  series: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: { label: { type: "string" }, value: { type: "number" } },
                      required: ["label", "value"],
                      additionalProperties: false
                    }
                  }
                },
                required: ["type","series"],
                additionalProperties: false
              }
            },
            required: ["text"],
            additionalProperties: true
          }
        }}
      }),
    });

    if (!resp.ok) {
      const detail = await resp.text();
      return new Response(JSON.stringify({ error: 'Upstream error', detail }), { status: 500 });
    }

    const data = await resp.json();
    const msg = data?.choices?.[0]?.message?.content || '{}';
    let parsed;
    try { parsed = JSON.parse(msg); } catch { parsed = { text: msg }; }

    return new Response(JSON.stringify(parsed), {
      status: 200, headers: { 'content-type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message || 'Server error' }), { status: 500 });
  }
}
