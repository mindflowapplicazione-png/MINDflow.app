export const config = { runtime: "edge" };

export default async function handler(req) {
  try {
    if (req.method !== "POST") return new Response("Use POST", { status: 405 });
    const { date = "", time = "", place = "" } = await req.json();
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) return new Response("Missing OPENAI_API_KEY", { status: 500 });

    const prompt = `
Dati approssimativi per una lettura: data di nascita "${date}", ora "${time}", luogo "${place}".
Fornisci una lettura motivazionale sul potenziale quotidiano: mindset, emozioni, azioni consigliate,
finestre orarie favorevoli (mattina/pomeriggio/sera) e 3 affermazioni. 
Spiega che è una lettura qualitativa (senza effemeridi). Italiano, pratico.`;

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
              "Sei un life coach che integra astrologia in modo ispirazionale ma pratico. Niente pretese scientifiche.",
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
