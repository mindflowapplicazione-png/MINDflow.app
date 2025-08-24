// pages/sistema.js
import Layout from '../components/Layout';
import { useStore } from '../lib/store';
import { useState } from 'react';

export default function Sistema(){
  const { all, clearAll } = useStore();
  const [json, setJson] = useState('');

  function exportData(){
    const blob = new Blob([JSON.stringify(all, null, 2)], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'mindflow-backup.json'; a.click();
    URL.revokeObjectURL(url);
  }

  function importData(){
    try{
      const obj = JSON.parse(json);
      localStorage.setItem('mf_items', JSON.stringify(obj));
      location.reload();
    }catch(e){ alert('JSON non valido: '+e.message); }
  }

  return (
    <Layout title="⚙️ Sistema">
      <div className="card">
        <h3>Backup & Restore</h3>
        <div className="row">
          <button onClick={exportData} className="ghost">⬇️ Esporta dati</button>
          <button onClick={()=>{ if(confirm('Sicuro?')) clearAll(); }} className="danger">🗑️ Reset totale</button>
        </div>
        <textarea rows={10} value={json} onChange={e=>setJson(e.target.value)} placeholder='Incolla qui il JSON per import...'/>
        <button onClick={importData} className="ghost">⬆️ Importa JSON</button>
      </div>

      <div className="card">
        <h3>Diagnostica</h3>
        <ul>
          <li>Sezioni presenti: <strong>{Object.keys(all).length}</strong></li>
          <li>OPENAI_API_KEY: <strong>{process.env.NEXT_PUBLIC_DUMMY ? 'public' : 'server-only'}</strong></li>
          <li>Storage size: <strong>{(JSON.stringify(all).length/1024).toFixed(1)} KB</strong></li>
        </ul>
      </div>

      <style jsx>{`
        .card{ border:1px solid #2a2a2a; border-radius:16px; padding:16px; margin:16px 0; background:#0f0f11 }
        .row{ display:flex; gap:8px; margin-bottom:10px }
        .ghost{ padding:8px 12px; border:1px solid #333; background:#121214; border-radius:10px }
        .danger{ padding:8px 12px; border:1px solid #553; background:#1a1010; color:#ffb3b3; border-radius:10px }
        textarea{ width:100%; background:#131313; color:#eee; border:1px solid #333; border-radius:10px; padding:10px; margin:10px 0 }
      `}</style>
    </Layout>
  );
}
