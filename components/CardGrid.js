import Link from "next/link";
const cards = [
  {href:"/sezioni#mindset", emoji:"🧠", title:"Carriera", subtitle:"Mindset"},
  {href:"/sezioni#emozioni", emoji:"💗", title:"Emozioni", subtitle:"Equilibrio"},
  {href:"/sezioni#fitness", emoji:"💪🏼", title:"Fitness", subtitle:"Salute"},
  {href:"/sezioni#spiritualita", emoji:"🔮", title:"Spiritualità", subtitle:"Crescita"},
  {href:"/sezioni#community", emoji:"🫂", title:"Community", subtitle:"Connessioni"},
  {href:"/sezioni#profilo", emoji:"👤", title:"Profilo", subtitle:"Piani"}
];
export default function CardGrid(){
  return (
    <div className="cardgrid">
      {cards.map(c=>(
        <Link key={c.href} href={c.href} className="card">
          <div style={{fontSize:"28px"}}>{c.emoji}</div>
          <h3>{c.title}</h3>
          <div className="small">{c.subtitle}</div>
        </Link>
      ))}
    </div>
  );
}
