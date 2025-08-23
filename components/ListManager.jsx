"use client";
import { useState, useEffect } from "react";
import { load, save } from "@/lib/storage";

export default function ListManager({ storeKey, placeholder="Aggiungi voce...", extraFields=[] }) {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  useEffect(()=> setItems(load(storeKey, [])), [storeKey]);
  useEffect(()=> save(storeKey, items), [items, storeKey]);

  const add = () => {
    if(!text.trim()) return;
    const obj = { id: crypto.randomUUID(), text, done:false, createdAt: Date.now() };
    extraFields.forEach(f=> obj[f.name] = f.default ?? "");
    setItems([obj, ...items]); setText("");
  };
  const toggle = id => setItems(items.map(i=> i.id===id? {...i, done:!i.done}:i));
  const del = id => setItems(items.filter(i=> i.id!==id));
  const setField = (id, name, value) => setItems(items.map(i=> i.id===id? {...i, [name]:value}:i));

  return (
    <div>
      <div className="row">
        <input className="input" value={text} onChange={e=>setText(e.target.value)} placeholder={placeholder}/>
        <button className="btn" onClick={add}>Aggiungi</button>
      </div>

      {items.map(i=>(
        <div key={i.id} className="item">
          <div style={{display:"grid", gap:6}}>
            <div className="row" style={{gap:8}}>
              <button className="badge" onClick={()=>toggle(i.id)}>{i.done ? "✅" : "⬜️"}</button>
              <div style={{textDecoration:i.done?"line-through":"none"}}>{i.text}</div>
            </div>
            {extraFields.map(f=>(
              <input key={f.name}
                     className="input"
                     type={f.type || "text"}
                     value={i[f.name] ?? ""}
                     onChange={e=>setField(i.id, f.name, e.target.value)}
                     placeholder={f.placeholder} />
            ))}
          </div>
          <button onClick={()=>del(i.id)} className="badge">Elimina</button>
        </div>
      ))}
    </div>
  );
}
