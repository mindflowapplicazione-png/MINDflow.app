'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Fitness(){
  const [sleep,setSleep]=useState({hours:0,quality:50,pain:false,painWhere:''});
  const [water,setWater]=useState(0);
  const [smoke,setSmoke]=useState(0);
  const [alcohol,setAlcohol]=useState(0);

  return (
    <main className="panel">
      <Link href="/" className="back">← 💪 Fitness & Salute</Link>

      <section className="card">
        <div className="sectionTitle">😴 Sonno</div>
        <div className="row">
          <input type="number" className="input" style={{maxWidth:120}} placeholder="Ore" value={sleep.hours} onChange={e=>setSleep({...sleep,hours:+e.target.value})}/>
          <input type="range" min={0} max={100} value={sleep.quality} onChange={e=>setSleep({...sleep,quality:+e.target.value})}/>
          <span className="badge">Qualità {sleep.quality}%</span>
        </div>
        <div className="row">
          <div className={'checkbox '+(sleep.pain?'on':'')} onClick={()=>setSleep({...sleep,pain:!sleep.pain})}>{sleep.pain?'✓':''}</div>
          <span>Dolori al risveglio?</span>
        </div>
        {sleep.pain && <input className="input" placeholder="Dove?" value={sleep.painWhere} onChange={e=>setSleep({...sleep,painWhere:e.target.value})}/>}
        <div className="card">📈 Grafici settimanali/mensili (placeholder)</div>
      </section>

      <section className="card">
        <div className="sectionTitle">🍽️ Nutrizione & kcal (auto)</div>
        <input className="input" placeholder="Colazione..."/>
        <input className="input" placeholder="Spuntino..."/>
        <input className="input" placeholder="Pranzo..."/>
        <input className="input" placeholder="Cena..."/>
        <input className="input" placeholder="Spuntino..."/>
        <div className="card">🤖 AI menu in base a obiettivi/intolleranze (placeholder)</div>
      </section>

      <section className="card">
        <div className="sectionTitle">🏋️ Workout</div>
        <input className="input" placeholder="Obiettivo (es. forza, dimagrimento)"/>
        <input className="input" placeholder="Esercizi / giorni settimana"/>
        <div className="card">🤖 AI crea allenamenti & stima kcal (placeholder)</div>
      </section>

      <section className="card">
        <div className="sectionTitle">💧 Idratazione</div>
        <div className="row">
          <button className="ctaGrad" onClick={()=>setWater(w=>w+250)}>+ 250ml</button>
          <div className="badge">{water} ml oggi</div>
        </div>
      </section>

      <section className="card">
        <div className="sectionTitle">🚭 Sigarette</div>
        <div className="row">
          <button className="ctaGrad" onClick={()=>setSmoke(s=>s+1)}>+1</button>
          <div className="badge">{smoke} oggi</div>
        </div>
      </section>

      <section className="card">
        <div className="sectionTitle">🍷 Alcol</div>
        <div className="row">
          <button className="ctaGrad" onClick={()=>setAlcohol(a=>a+1)}>+1 drink</button>
          <div className="badge">{alcohol} oggi</div>
        </div>
      </section>

      <section className="card">
        <div className="sectionTitle">📈 Trend corporei</div>
        <div className="card">Peso, massa grassa, muscolare (placeholder grafici)</div>
      </section>
    </main>
  );
}
