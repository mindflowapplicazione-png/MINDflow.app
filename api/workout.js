export const config = { runtime: "edge" };

export default async function handler(req) {
  try {
    if (req.method !== "POST") return new Response("Use POST", { status: 405 });
    const { goal = "Forza", days = "3" } = await req.json();
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) return new Response("Missing OPENAI_API_KEY", { status: 500 });

    const prompt = `
Crea un piano di allenamento personalizzato, obiettivo: ${goal}.
Frequenza: ${days} giorni/settimana. Livello: principiante–intermedio, nessun infortunio.
Includi: split settimanale, esercizi per seduta (serie x ripetizioni), RPE o recupero,
progressione per 4 settimane, warm-up, cool-down e 3 consigli di tecnica.
Stile: schematico a punti, italiano.`;

    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: 0.7,
        messages: [
          {
            role: "system",
            content:
              "Sei un coach di forza e condizionamento. Fornisci piani chiari, sicuri e progressivi.",
          },
          { role: "user", content: prompt },
        ],
      }),
    });

    if (!r.ok) return new Response(await r.text(), { status: 500 });
    const data = await r.json();
    const text = data.choices?.[0]?.message?.content?.trim() || "—";

    return new Response(JSON.stringify({ text }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ text: "Ops, non riesco ora 🙏" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}
