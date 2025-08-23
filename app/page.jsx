import Link from "next/link";

export default function Home() {
  const Card = ({href, title, subtitle, emoji}) => (
    <Link href={href} className="panel" style={{textDecoration:"none", color:"inherit"}}>
      <div style={{fontSize:28}}>{emoji}</div>
      <div style={{fontWeight:800, marginTop:4}}>{title}</div>
      <div className="subtitle">{subtitle}</div>
    </Link>
  );
  return (
    <>
      <h1 className="h1">MINDflow</h1>
      <div className="subtitle">Il tuo viaggio verso la consapevolezza</div>

      <div className="row" style={{flexWrap:"wrap"}}>
        <Card href="/carriera" title="Carriera" subtitle="Mindset" emoji="🧠"/>
        <Card href="/emozioni" title="Emozioni" subtitle="Equilibrio" emoji="💗"/>
        <Card href="/fitness" title="Fitness" subtitle="Salute" emoji="💪"/>
        <Card href="/spiritualita" title="Spiritualità" subtitle="Crescita" emoji="🔮"/>
        <Card href="/community" title="Community" subtitle="Connessioni" emoji="🫂"/>
        <Card href="/profilo" title="Profilo" subtitle="Piani" emoji="👋"/>
      </div>

      <Link href="/sistema" className="badge" style={{position:"fixed", right:16, bottom:16}}>Sistema ⚙️</Link>
    </>
  );
}
