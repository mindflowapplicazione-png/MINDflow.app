export const config = { runtime: "edge" };

export default async function handler(req) {
  if (req.method !== "POST") return new Response("Use POST", { status: 405 });
  const { ingredients = "" } = await req.json();
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return new Response("Missing OPENAI_API_KEY", { status: 500 });

  const prompt = `Ingredienti: ${ingredients}.
Proponi 3 ricette sane (colazione/pranzo/cena). Ogni ricetta: titolo, kcal stimate, ingredienti, passaggi, motivazione.
Formato markdown breve.`;

  const r = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Dietista professionale. Italiano. Conciso." },
        { role: "user", content: prompt }
      ],
      temperature: 0.6
    })
  });

  if (!r.ok) return new Response(await r.text(), { status: r.status });
  const data = await r.json();
  const text = data.choices?.[0]?.message?.content || "";
  return Response.json({ text });
}
