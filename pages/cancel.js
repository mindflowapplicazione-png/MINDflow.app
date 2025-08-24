// pages/cancel.js
import Layout from '../components/Layout';
export default function Cancel(){
  return (
    <Layout title="Pagamento annullato">
      <div className="card">
        <p>Nessun addebito è stato effettuato.</p>
        <a className="btn" href="/carriera">Riprova</a>
      </div>
      <style jsx>{`
        .card{border:1px solid #2a2a2a;background:#0f0f11;border-radius:16px;padding:16px}
        .btn{display:inline-block;margin-top:12px;padding:8px 12px;border:1px solid #333;background:#121214;border-radius:10px;text-decoration:none}
      `}</style>
    </Layout>
  );
}
