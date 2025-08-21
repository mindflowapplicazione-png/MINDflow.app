export const config = { runtime: "edge" };

export default async function handler(req) {
  try {
    if (req.method !== "POST") {
      return new Response("Use POST", { status: 405 });
    }
    const { message = "" } = await req.json();
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) return new Response("Missing OPENAI_API_KEY", { status: 500 });

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
              "Sei Jindi, coach positivo e concreto. Rispondi in italiano, breve ma utile, con tono incoraggiante e pratico. Se opportuno suggerisci piccoli step/rituali.",
          },
          { role: "user", content: message || "Dimmi qualcosa di motivante." },
        ],
      }),
    });

    if (!r.ok) {
      const err = await r.text();
      return new Response(err || "OpenAI error", { status: 500 });
    }
    const data = await r.json();
    const text =
      data.choices?.[0]?.message?.content?.trim() ||
      "Sto riflettendo… ✨";

    return new Response(JSON.stringify({ reply: text }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ reply: "Ops, errore 🙏" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}
