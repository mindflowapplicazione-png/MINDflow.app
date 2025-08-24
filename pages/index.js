import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  const cards = [
    { href: '/sezioni',     title: '🧠 Carriera & Mindset', sub: 'Piani' },
    { href: '/emozioni',    title: '🩷 Emozioni',           sub: 'Equilibrio' },
    { href: '/fitness',     title: '💪🏼 Fitness & Salute',   sub: 'Benessere' },
    { href: '/spiritualita',title: '🔮 Spiritualità',       sub: 'Crescita' },
    { href: '/community',   title: '🫂 Community',          sub: 'Connessioni' },
    { href: '/profilo',     title: '🫆 Profilo',            sub: 'Piani & Upgrade' },
  ];

  return (
    <Layout>
      <div className="card">
        <h2 style={{marginTop:0}}>MINDflow</h2>
        <div className="sub">Scegli un’area</div>

        <div className="grid">
          {cards.map(c => (
            <Link key={c.href} className="card" href={c.href}>
              <div style={{fontSize:20,fontWeight:700}}>{c.title}</div>
              <div className="meta">{c.sub}</div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
