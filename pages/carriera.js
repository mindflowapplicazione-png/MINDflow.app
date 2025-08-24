// pages/carriera.js
import Layout from '../components/Layout';
import ItemList from '../components/ItemList';
import Chart from '../components/Chart';
import { useJindi } from '../lib/jindi';
import { products } from '../lib/products';
import ProductCard from '../components/ProductCard';

const SECTION_KEY = 'carriera';

export default function Carriera() {
  const { ask, lastChart, messages } = useJindi();

  // importa automaticamente esempi testuali di Jindi nelle voci (facoltativo)
  // puoi mantenerlo o toglierlo se non serve qui
  // ...

  return (
    <Layout title="Carriera & Mindset">
      {/* -------- SHOP -------- */}
      <h2 style={{margin:'10px 0'}}>🛒 Shop – Podcast, Libri & PDF</h2>
      <div className="shop">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>

      {/* -------- TOOLS JINDI -------- */}
      <div className="row">
        <button className="ghost" onClick={()=>ask(`Per la sezione "carriera", proponi 8 azioni pratiche (elenco puntato) che le persone possono fare oggi.`)}>🤖 Suggerisci con Jindi</button>
        <button className="ghost" onClick={()=>ask(`Crea un grafico "bar" delle ore dedicate alla carriera negli ultimi 7 giorni e restituisci anche "chart".`)}>📊 Grafico settimanale</button>
      </div>

      {lastChart && (
        <div className="card">
          <h3>Grafico proposto da Jindi</h3>
          <Chart data={lastChart}/>
        </div>
      )}

      {/* -------- LISTA VOCI -------- */}
      <ItemList
        section={SECTION_KEY}
        title="Obiettivi & Azioni"
        fields={[
          { name:'title', label:'Titolo/Attività', placeholder:'Es. Rivedere CV' },
          { name:'desc',  label:'Descrizione' },
          { name:'score', label:'Priorità (0–100)', placeholder:'60' },
        ]}
      />

      <style jsx>{`
        .shop{ display:grid; gap:14px; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); margin: 8px 0 18px }
        .row{ display:flex; gap:8px; margin:8px 0 12px; flex-wrap:wrap }
        .ghost{ padding:8px 12px; border:1px solid #333; background:#121214; border-radius:10px }
        .card{ border:1px solid #2a2a2a; border-radius:16px; padding:16px; margin:16px 0; background:#0f0f11 }
      `}</style>
    </Layout>
  );
}
