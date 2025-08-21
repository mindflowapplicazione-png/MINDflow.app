export const config = { runtime: "edge" };

export default async function handler(req){
  if (req.method!=="POST") return new Response("Use POST",{status:405});
  const { goal="forza", days="3" } = await req.json();
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return new Response("Missing OPENAI_API_KEY",{status:500});

  const prompt = `Crea un piano di allenamento settimanale di ${days} giorni per obiettivo ${goal}.
  Utente principiante-intermedio, nessun infortunio. Ogni giorno: riscaldamento, 4-6 esercizi (serie x reps o tempo), defaticamento.
  Aggiungi 3 consigli motivazionali brevi. Italiano, elenco puntato.`;

  const r = await fetch("https://api.openai.com/v1/chat/completions",{
    method:"POST",
    headers:{Authorization:`Bearer ${apiKey}`,"Content-Type":"application/json"},
    body:JSON.stringify({model:"gpt-4o-mini",messages:[
      {role:"system",content:"Coach chiaro, pratico e motivante."},
      {role:"user",content:prompt}], temperature:0.7})
  });
  if(!r.ok) return new Response(await r.text(),{status:r.status});
  const data=await r.json(); const text=data.choices?.[0]?.message?.content||"";
  return new Response(JSON.stringify({text}),{headers:{"Content-Type":"application/json"}});
}
