// pages/success.js
import Layout from '../components/Layout';
export default function Success(){
  return (
    <Layout title="Grazie!">
      <div className="card">
        <h2>✅ Pagamento riuscito</h2>
        <p>Riceverai a breve un’email con i link ai contenuti acquistati.</p>
        <p>Se hai già un account, troverai i tuoi acquisti anche nella sezione <strong>Profilo → I miei contenuti</strong> (presto disponibile).</p>
        <a className="btn" href="/carriera">Torna a Carriera & Mindset</a>
      </div>
      <style jsx>{`
        .card{border:1px solid #2a2a2a;background:#0f0f11;border-radius:16px;padding:16px}
        .btn{display:inline-block;margin-top:12px;padding:8px 12px;border:1px solid #333;background:#121214;border-radius:10px;text-decoration:none}
      `}</style>
    </Layout>
  );
}
