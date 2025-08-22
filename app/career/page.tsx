'use client';
import Link from 'next/link';
import { useState } from 'react';

type Priority = { text:string; pct:number; done:boolean };

export default function Career(){
  const [prio,setPrio]=useState<Priority[]>([
    {text:'Fare workout',pct:70,done:false}
  ]);
  const [mainGoal,setMainGoal]=useState('Cosa conta di più');
  const [mini,setMini]=useState<string[]>([]);
  const [planner,setPlanner]=useState<any[]>([]);

  function addPrio(){ setPrio(p=>[...p,{text:'',pct:0,done:false}]); }
  function addMini(){ setMini(m=>[...m,'']); }
  function addSlot(){ setPlanner(p=>[...p,{start:'08:00',end:'08:30',what:'Lavoro',done:false}]); }

  return (
    <main className="panel">
      <Link href="/" className="back">← Carriera & Mindset</Link>

      <section className="card">
        <div className="sectionTitle">⚠️ Priorità del giorno (max 5)</div>
        {prio.map((x,i)=>(
          <div key={i} className="card">
            <input className="input" placeholder="Priorità..." value={x.text} onChange={e=>{
              const v=[...prio]; v[i].text=e.target.value; setPrio(v);
            }}/>
            <div className="row"><input type="range" min={0} max={100} value={x.pct}
              onChange={e=>{const v=[...prio]; v[i].pct=+e.target.value; setPrio(v);}}/>
              <span className="badge">{x.pct}%</span>
              <div className={'checkbox '+(x.done?'on':'')} onClick={()=>{const v=[...prio]; v[i].done=!v[i].done; setPrio(v);}}>{x.done?'✓':''}</div>
            </div>
            <button className="ctaGrad" onClick={()=>setPrio(prio.filter((_,j)=>j!==i))}>Elimina</button>
          </div>
        ))}
        {prio.length<5 && <button className="ctaGrad" onClick={addPrio}>+ Aggiungi</button>}
      </section>

      <section className="card">
        <div className="sectionTitle">🥇 Obiettivo principale (ripete 3 mesi)</div>
        <input className="input" value={mainGoal} onChange={e=>setMainGoal(e.target.value)}/>
      </section>

      <section className="card">
        <div className="sectionTitle">🥈 Mini obiettivi (settimanali)</div>
        {mini.map((m,i)=>(
          <div key={i} className="row">
            <input className="input" value={m} onChange={e=>{
              const v=[...mini]; v[i]=e.target.value; setMini(v);
            }}/>
            <button className="ctaGrad" onClick={()=>setMini(mini.filter((_,j)=>j!==i))}>Elimina</button>
          </div>
        ))}
        <button className="ctaGrad" onClick={addMini}>+ Aggiungi</button>
      </section>

      <section className="card">
        <div className="sectionTitle">📆 Daily Planner</div>
        {planner.map((s,i)=>(
          <div key={i} className="card">
            <div className="row">
              <input className="input" style={{maxWidth:100}} type="time" value={s.start} onChange={e=>{const v=[...planner];v[i].start=e.target.value;setPlanner(v);}}/>
              <input className="input" style={{maxWidth:100}} type="time" value={s.end} onChange={e=>{const v=[...planner];v[i].end=e.target.value;setPlanner(v);}}/>
              <div className={'checkbox '+(s.done?'on':'')} onClick={()=>{const v=[...planner];v[i].done=!v[i].done;setPlanner(v);}}>{s.done?'✓':''}</div>
            </div>
            <input className="input" placeholder="Azione..." value={s.what} onChange={e=>{const v=[...planner];v[i].what=e.target.value;setPlanner(v);}}/>
            <button className="ctaGrad" onClick={()=>setPlanner(planner.filter((_,j)=>j!==i))}>Elimina</button>
          </div>
        ))}
        <button className="ctaGrad" onClick={addSlot}>+ Aggiungi slot</button>
      </section>
    </main>
  );
}
