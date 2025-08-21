export const config = { runtime: "edge" };

export default async function handler(req) {
  if (req.method !== "POST") return new Response("Use POST", { status: 405 });
  const { message = "" } = await req.json();
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return new Response("Missing OPENAI_API_KEY", { status: 500 });

  const prompt = [
    { role: "system", content: "Sei Jindi, coach motivazionale, risposte brevi e pratiche in italiano." },
    { role: "user", content: message }
  ];

  const r = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ model: "gpt-4o-mini", messages: prompt, temperature: 0.7 })
  });

  if (!r.ok) return new Response(await r.text(), { status: r.status });
  const data = await r.json();
  const reply = data.choices?.[0]?.message?.content?.trim() || "…";
  return Response.json({ reply });
}
