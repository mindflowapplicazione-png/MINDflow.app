import Link from 'next/link';

export default function Home() {
  const tiles = [
    { href:'/career', icon:'🧠', t:'Carriera', s:'Mindset' },
    { href:'/emotions', icon:'💖', t:'Emozioni', s:'Equilibrio' },
    { href:'/fitness', icon:'💪', t:'Fitness', s:'Salute' },
    { href:'/spirituality', icon:'🔮', t:'Spiritualità', s:'Crescita' },
    { href:'/community', icon:'🫂', t:'Community', s:'Connessioni' },
    { href:'/profile', icon:'🌀', t:'Profilo', s:'Piani' },
  ];
  return (
    <main className="panel">
      <div className="grid6">
        {tiles.map(x=>(
          <Link key={x.href} href={x.href} className="tile">
            <div style={{fontSize:22}}>{x.icon}</div>
            <h3>{x.t}</h3><small>{x.s}</small>
          </Link>
        ))}
      </div>

      <div style={{display:'flex',justifyContent:'space-between',marginTop:14}}>
        <Link href="/" className="btnGrad">🏠</Link>
        <Link href="/system" className="btnGrad">⚙️ Sistema</Link>
      </div>
    </main>
  );
}
