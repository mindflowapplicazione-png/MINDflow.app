export const config = { runtime: "edge" };

export default async function handler(req) {
  if (req.method !== "POST") return new Response("Use POST", { status: 405 });
  const { goal = "Forza", days = "3" } = await req.json();
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return new Response("Missing OPENAI_API_KEY", { status: 500 });

  const prompt = `Crea un piano di allenamento ${days} giorni/settimana per obiettivo: ${goal}.
Utente principiante-intermedio, nessun infortunio. Ogni giorno: esercizi, serie×ripetizioni, RPE o tempo, riscaldamento e defaticamento.
Aggiungi 3 consigli motivazionali personalizzati. Tabella markdown. Italiano.`;

  const r = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Coach chiaro e sicuro. Italiano." },
        { role: "user", content: prompt }
      ],
      temperature: 0.7
    })
  });

  if (!r.ok) return new Response(await r.text(), { status: r.status });
  const data = await r.json();
  return Response.json({ text: data.choices?.[0]?.message?.content || "" });
}
