import '../styles/globals.css';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="container">
      <header style={{display:'flex',justifyContent:'space-between',alignItems:'center',margin:'14px 0 6px'}}>
        <div>
          <div className="title">MINDflow</div>
          <div className="sub">Il tuo viaggio verso la consapevolezza</div>
        </div>
        <nav className="row">
          <Link className="btn-ghost" href="/">Home</Link>
          <Link className="btn-ghost" href="/sezioni">🗂️ Sezioni</Link>
          <Link className="btn-ghost" href="/emozioni">🩷 Emozioni</Link>
          <Link className="btn-ghost" href="/fitness">💪🏼 Fitness</Link>
          <Link className="btn-ghost" href="/spiritualita">🔮 Spiritualità</Link>
          <Link className="btn-ghost" href="/community">🫂 Community</Link>
          <Link className="btn-ghost" href="/profilo">👤 Profilo</Link>
        </nav>
      </header>
      {children}
      <footer style={{opacity:.6,textAlign:'center',padding:20}}>© MINDflow</footer>
    </div>
  );
}
