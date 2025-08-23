import { useEffect, useMemo, useState } from "react";
import { load, save } from "../lib/storage";
import ItemRow from "./ItemRow";
import Uploader from "./Uploader";
import { nanoid } from "nanoid";

export default function SectionBlock({ section }){
  const storageKey = `mf_${section.id}`;
  const [items,setItems] = useState([]);

  useEffect(()=>{ setItems(load(storageKey, [])); },[storageKey]);
  useEffect(()=>{ save(storageKey, items); },[items,storageKey]);

  const [form,setForm] = useState({});

  const addItem = () => {
    if(section.limit && items.length >= section.limit) return alert(`Max ${section.limit}`);
    const id = nanoid();
    const withFiles = {};
    for(const f of section.fields||[]){
      if(f.type==="file" && form[f.key] instanceof File){
        withFiles[f.key] = {name: form[f.key].name, size: form[f.key].size};
      } else {
        withFiles[f.key] = form[f.key] ?? "";
      }
    }
    const label = withFiles.titolo || withFiles.azione || withFiles.nome || withFiles.item || "";
    const subtitle = [withFiles.inizio, withFiles.fine].filter(Boolean).join(" → ");
    setItems(prev=>[{id, ...withFiles, __label: label, __subtitle: subtitle}, ...prev]);
    setForm({});
  };

  const onChange = (key,val)=> setForm(prev=>({...prev,[key]:val}));

  return (
    <div className="panel" id={section.id}>
      <h2>{section.icon} {section.title}</h2>

      {/* FORM */}
      <div className="row">
        {(section.fields||[]).map(f=>{
          const common = {key:f.key, value:form[f.key]||"", onChange:e=>onChange(f.key, f.target ? e.target[f.target] : e.target?.value)};
          if(f.type==="textarea") return <textarea key={f.key} className="input" placeholder={f.label} value={form[f.key]||""} onChange={e=>onChange(f.key,e.target.value)} />;
          if(f.type==="select") return (
            <select key={f.key} className="input" value={form[f.key]||""} onChange={e=>onChange(f.key,e.target.value)}>
              <option value="">— {f.label} —</option>
              {f.options?.map(o=><option key={o} value={o}>{o}</option>)}
            </select>
          );
          if(f.type==="file") return <Uploader key={f.key} onFile={file=>onChange(f.key,file)} />;
          return <input key={f.key} className="input" type={f.type||"text"} placeholder={f.label} value={form[f.key]||""} min={f.min} max={f.max} step={f.step} onChange={e=>onChange(f.key,e.target.value)} />;
        })}
        <button className="btn" onClick={addItem}>Aggiungi</button>
      </div>

      <hr/>

      {/* LISTA */}
      {items.map((it,idx)=>(
        <ItemRow
          key={it.id}
          item={it}
          checkable={!!section.checkable}
          onToggle={()=> setItems(prev=>{
            const copy=[...prev]; copy[idx]={...copy[idx], done:!copy[idx].done}; return copy;
          })}
          onDelete={()=> setItems(prev=> prev.filter(x=>x.id!==it.id))}
        />
      ))}
      {!items.length && <div className="small">Nessun elemento ancora.</div>}
    </div>
  );
}
