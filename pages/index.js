import Header from "../components/Header";
import CardGrid from "../components/CardGrid";

export default function Home(){
  return (
    <div className="container">
      <Header/>
      <CardGrid/>
      <div className="panel">
        <h3>Collegamenti (dev)</h3>
        <form method="POST" action="/api/checkout" onSubmit={(e)=>{
          // POST plain submit per test Boccioli
        }}>
          <input className="input" name="priceId" placeholder="PRICE ID (es. Boccioli)" />
          <button className="btn" type="submit">Prova checkout</button>
        </form>
      </div>
    </div>
  );
}
