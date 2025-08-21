export const config = { runtime: "edge" };

export default async function handler(req) {
  if (req.method !== "POST") return new Response("Use POST", { status: 405 });
  const { message = "" } = await req.json();
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return new Response("Missing OPENAI_API_KEY", { status: 500 });

  const body = {
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Sei Jindi, coach empatico. Rispondi in modo pratico e sintetico in italiano." },
      { role: "user", content: message }
    ],
    temperature: 0.7
  };

  const r = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  if (!r.ok) return new Response(await r.text(), { status: r.status });
  const data = await r.json();
  const reply = data.choices?.[0]?.message?.content?.trim() || "";
  return new Response(JSON.stringify({ reply }), { headers: { "Content-Type": "application/json" } });
}
