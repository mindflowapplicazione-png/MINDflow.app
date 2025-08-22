'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Emotions(){
  const [moods,setMoods]=useState<any[]>([{time:'08:00',score:3,int:70,note:''}]);
  const add=()=>setMoods(m=>[...m,{time:'12:00',score:3,int:50,note:''}]);

  return (
    <main className="panel">
      <Link href="/" className="back">← 💖 Emozioni</Link>

      <section className="card">
        <div className="sectionTitle">📊 Tracker umore</div>
        {moods.map((x,i)=>(
          <div key={i} className="card">
            <div className="row">
              <input className="input" type="time" style={{maxWidth:110}} value={x.time} onChange={e=>{const v=[...moods];v[i].time=e.target.value;setMoods(v);}}/>
              <select className="input" style={{maxWidth:130}} value={x.score} onChange={e=>{const v=[...moods];v[i].score=+e.target.value;setMoods(v);}}>
                <option value={1}>😭 1</option><option value={2}>☹️ 2</option><option value={3}>😑 3</option><option value={4}>🙂 4</option><option value={5}>🥰 5</option>
              </select>
            </div>
            <div className="row">
              <input type="range" min={0} max={100} value={x.int} onChange={e=>{const v=[...moods];v[i].int=+e.target.value;setMoods(v);}}/>
              <span className="badge">{x.int}%</span>
            </div>
            <input className="input" placeholder="Nota/contesto..." value={x.note} onChange={e=>{const v=[...moods];v[i].note=e.target.value;setMoods(v);}}/>
            <button className="ctaGrad" onClick={()=>setMoods(moods.filter((_,j)=>j!==i))}>Elimina</button>
          </div>
        ))}
        <button className="ctaGrad" onClick={add}>+ Aggiungi umore</button>
      </section>

      <section className="card">
        <div className="sectionTitle">🙏 Gratitudine (max 5)</div>
        {[1,2,3,4,5].map(i=><input key={i} className="input" placeholder={`#${i} Oggi sono grato per...`}/>)}
      </section>

      <section className="card">
        <div className="sectionTitle">📓 Diario emozionale</div>
        <textarea className="input" placeholder="Scrivi come ti senti..."></textarea>
        <div className="space"></div>
        <div className="row">
          <input type="file" className="input" style={{padding:'8px'}}/>
          <button className="ctaGrad">Pubblica</button>
        </div>
      </section>
    </main>
  );
}
