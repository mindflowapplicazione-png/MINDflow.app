export const config = { runtime: "edge" };

export default async function handler(req){
  if (req.method!=="POST") return new Response("Use POST",{status:405});
  const { date="", time="", place="" } = await req.json();
  const apiKey = process.env.OPENAI_API_KEY;
  if(!apiKey) return new Response("Missing OPENAI_API_KEY",{status:500});

  const prompt = `Dati utente: data ${date}, ora ${time}, luogo ${place}.
  Crea una lettura personalizzata (non tecnica) su come queste energie possano influenzare umore, azioni e focus di oggi.
  Suggerisci 3 azioni pratiche e una frase motivazionale per ciascuna. Italiano, puntato.`;

  const r=await fetch("https://api.openai.com/v1/chat/completions",{
    method:"POST",
    headers:{Authorization:`Bearer ${apiKey}`,"Content-Type":"application/json"},
    body:JSON.stringify({model:"gpt-4o-mini",messages:[
      {role:"system",content:"Astro-coach leggero e pragmatico. Niente affermazioni deterministiche."},
      {role:"user",content:prompt}], temperature:0.8})
  });
  if(!r.ok) return new Response(await r.text(),{status:r.status});
  const data=await r.json(); const text=data.choices?.[0]?.message?.content||"";
  return new Response(JSON.stringify({text}),{headers:{"Content-Type":"application/json"}});
}
