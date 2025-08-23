"use client";
import Section from "@/components/Section";
import StripeButtons from "@/components/StripeButtons";
import { useState } from "react";

export default function Profilo(){
  const [email, setEmail] = useState("");
  return (
    <>
      <h1 className="h1">MINDflow</h1>
      <div className="subtitle">Il tuo viaggio verso la consapevolezza</div>

      <Section title="Dati utente" emoji="🧑‍💻">
        <div className="row">
          <input className="input" placeholder="Email (usata per abbonamento)" value={email} onChange={e=>setEmail(e.target.value)} />
          <button className="btn">Salva</button>
        </div>
      </Section>

      <Section title="Piani & Upgrade" emoji="💎">
        <StripeButtons/>
        <div className="row" style={{marginTop:10, gap:10}}>
          <a className="badge" href="https://billing.stripe.com/p/login" target="_blank">Gestisci abbonamento</a>
          <a className="badge" href="/success">Verifica stato</a>
        </div>
      </Section>

      <Section title="Preferenze" emoji="⚙️">
        <select className="select"><option>Scuro</option><option>Chiaro</option></select>
        <div style={{height:8}}/>
        <button className="btn">Salva</button>
      </Section>
    </>
  );
}
