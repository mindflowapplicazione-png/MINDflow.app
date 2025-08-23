// pages/profilo.js
import Layout from '../components/Layout';
export default function Profilo(){
  return (
    <Layout>
      <div className="card"><h2 style={{margin:0}}>👤 Profilo & Piani</h2></div>
      <div className="card">
        Dashboard riepilogo, statistiche, spiritualità personale, benessere, libreria, upgrade abbonamenti.
        La pagina è pronta per collegarsi a Stripe/Supabase quando imposti le chiavi.
      </div>
    </Layout>
  );
}
