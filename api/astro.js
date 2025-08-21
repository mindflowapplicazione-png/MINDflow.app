export const config = { runtime: "edge" };

export default async function handler(req) {
  if (req.method !== "POST") return new Response("Use POST", { status: 405 });
  const { date, time, place } = await req.json();
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return new Response("Missing OPENAI_API_KEY", { status: 500 });

  const prompt = `
Genera una lettura di "tema natale" leggera e motivazionale.
Dati: data ${date||"?"}, ora ${time||"?"}, luogo ${place||"?"}.
Spiega in 5-8 punti come potrebbe influire oggi su: energia, umore, relazioni, decisioni e lavoro.
Chiudi con 3 azioni pratiche. Italiano, tono empatico.`;

  const r = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: { "Authorization": `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Guida spirituale positiva e concreta." },
        { role: "user", content: prompt }
      ],
      temperature: 0.8
    })
  });

  if (!r.ok) return new Response(await r.text(), { status: r.status });
  const data = await r.json();
  const text = data.choices?.[0]?.message?.content || "—";
  return Response.json({ text });
}