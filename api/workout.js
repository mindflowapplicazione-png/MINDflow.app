export const config = { runtime: "edge" };

export default async function handler(req) {
  if (req.method !== "POST") return new Response("Use POST", { status: 405 });
  const { goal="", days="3" } = await req.json();
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return new Response("Missing OPENAI_API_KEY", { status: 500 });

  const prompt = `
Crea un piano allenamento di ${days} giorni/settimana. Obiettivo: ${goal}.
Utente principiante-intermedio, nessun infortunio. Includi riscaldamento, esercizi con serie×ripetizioni, RPE/recuperi, e 1 giornata mobilità.
Aggiungi 3 consigli di progressione. Italiano, schematizza.`;

  const r = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: { "Authorization": `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Coach chiaro, motivante e sicuro." },
        { role: "user", content: prompt }
      ],
      temperature: 0.7
    })
  });

  if (!r.ok) return new Response(await r.text(), { status: r.status });
  const data = await r.json();
  const text = data.choices?.[0]?.message?.content || "—";
  return Response.json({ text });
}
