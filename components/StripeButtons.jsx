"use client";
async function go(priceId){
  const res = await fetch("/api/checkout", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({ priceId })
  });
  const { url } = await res.json();
  window.location.href = url;
}

export default function StripeButtons(){
  return (
    <div className="row" style={{gap:10}}>
      <button className="btn" onClick={()=>go(process.env.NEXT_PUBLIC_PRICE_BUDS)}>🌱 Boccioli</button>
      <button className="btn" onClick={()=>go(process.env.NEXT_PUBLIC_PRICE_FLOWERS)}>🌸 Fiori</button>
      <button className="btn" onClick={()=>go(process.env.NEXT_PUBLIC_PRICE_PREMIUM)}>💎 Premium</button>
    </div>
  )
}
