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
    <Layout title="Sistema">
      <div className="system-container">
        <div className="system-header">
          <div className="settings-icon">⚙️</div>
          <h1>Sistema</h1>
        </div>

        <div className="setting-card">
          <div className="setting-header">
            <h3>Backup & Restore</h3>
          </div>
          <div className="button-row">
            <button onClick={exportData} className="btn-primary">
              <span className="btn-icon">⬇️</span>
              Esporta dati
            </button>
            <button onClick={()=>{ if(confirm('Sicuro?')) clearAll(); }} className="btn-danger">
              <span className="btn-icon">🗑️</span>
              Reset totale
            </button>
          </div>
          <textarea 
            rows={8} 
            value={json} 
            onChange={e=>setJson(e.target.value)} 
            placeholder='Incolla qui il JSON per importare i dati...'
            className="json-input"
          />
          <button onClick={importData} className="btn-secondary">
            <span className="btn-icon">⬆️</span>
            Importa JSON
          </button>
        </div>

        <div className="setting-card">
          <div className="setting-header">
            <h3>Informazioni App</h3>
          </div>
          <div className="info-list">
            <div className="info-item">
              <span className="info-label">Versione</span>
              <span className="info-value">1.0</span>
            </div>
            <div className="info-item">
              <span className="info-label">Sezioni presenti</span>
              <span className="info-value">{Object.keys(all).length}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Storage utilizzato</span>
              <span className="info-value">{(JSON.stringify(all).length/1024).toFixed(1)} KB</span>
            </div>
            <div className="info-item">
              <span className="info-label">API Status</span>
              <span className="info-value">{process.env.NEXT_PUBLIC_DUMMY ? 'Public' : 'Server-only'}</span>
            </div>
          </div>
        </div>

        <div className="app-info">
          <p>MINDflow - Il tuo viaggio verso la consapevolezza</p>
          <p className="version">Versione 1 📱</p>
        </div>
      </div>

      <style jsx>{`
        .system-container {
          min-height: 100vh;
          background: var(--bg);
          padding: 0;
        }

        .system-header {
          text-align: center;
          padding: 30px 20px;
          background: linear-gradient(135deg, var(--bg) 0%, #0f0f0f 100%);
          border-bottom: 1px solid var(--border);
        }

        .settings-icon {
          font-size: 48px;
          margin-bottom: 16px;
          opacity: 0.8;
        }

        .system-header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: 300;
          color: var(--fg);
        }

        .setting-card {
          background: var(--card-bg);
          margin: 16px;
          border-radius: 20px;
          padding: 24px;
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
        }

        .setting-header h3 {
          margin: 0 0 20px 0;
          font-size: 20px;
          font-weight: 600;
          color: var(--fg);
        }

        .button-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 20px;
        }

        .btn-primary, .btn-secondary, .btn-danger {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 16px;
          border: none;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-primary {
          background: var(--accent-blue);
          color: white;
        }

        .btn-secondary {
          background: var(--accent-green);
          color: white;
          width: 100%;
        }

        .btn-danger {
          background: #8b4747;
          color: white;
        }

        .btn-primary:hover, .btn-secondary:hover, .btn-danger:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }

        .btn-icon {
          font-size: 16px;
        }

        .json-input {
          width: 100%;
          background: var(--bg);
          color: var(--fg);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 16px;
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 12px;
          resize: vertical;
          min-height: 120px;
        }

        .json-input::placeholder {
          color: var(--fg-secondary);
        }

        .info-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .info-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid var(--border);
        }

        .info-item:last-child {
          border-bottom: none;
        }

        .info-label {
          color: var(--fg-secondary);
          font-size: 14px;
        }

        .info-value {
          color: var(--fg);
          font-weight: 600;
          font-size: 14px;
        }

        .app-info {
          text-align: center;
          padding: 40px 20px;
          color: var(--fg-secondary);
          opacity: 0.8;
        }

        .app-info p {
          margin: 8px 0;
          font-size: 14px;
        }

        .version {
          font-size: 12px !important;
          opacity: 0.6;
        }

        @media (max-width: 768px) {
          .system-header {
            padding: 24px 16px;
          }

          .settings-icon {
            font-size: 40px;
            margin-bottom: 12px;
          }

          .system-header h1 {
            font-size: 24px;
          }

          .setting-card {
            margin: 12px;
            padding: 20px;
            border-radius: 16px;
          }

          .setting-header h3 {
            font-size: 18px;
          }

          .button-row {
            gap: 10px;
          }

          .btn-primary, .btn-secondary, .btn-danger {
            padding: 10px 12px;
            font-size: 13px;
          }

          .json-input {
            font-size: 11px;
            padding: 12px;
          }

          .app-info {
            padding: 30px 16px;
          }
        }
      `}</style>
    </Layout>
  );
}
