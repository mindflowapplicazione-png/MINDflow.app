// components/TileGrid.js
import Link from 'next/link';

const tiles = [
  { href: '/carriera',   title: 'Carriera & Mindset',  sub: 'Piani',      emoji: '🧠', color: '#ff87b7' },
  { href: '/emozioni',   title: 'Emozioni',            sub: 'Equilibrio', emoji: '💗', color: '#ffa2d3' },
  { href: '/fitness',    title: 'Fitness & Salute',    sub: 'Benessere',  emoji: '💪', color: '#ffd166' },
  { href: '/spiritualita', title:'Spiritualità',       sub: 'Crescita',   emoji: '🔮', color: '#a78bfa' },
  { href: '/community',  title: 'Community',           sub: 'Connessioni',emoji: '👥', color: '#7dd3fc' },
  { href: '/profilo',    title: 'Profilo',             sub: 'Piani & Upgrade', emoji: '🌀', color: '#94facc' },
];

export default function TileGrid(){
  return (
    <div className="grid">
      {tiles.map(t => (
        <Link key={t.href} href={t.href} className="tile" style={{'--accent': t.color}}>
          <div className="emoji">{t.emoji}</div>
          <div className="title">{t.title}</div>
          <div className="sub">{t.sub}</div>
        </Link>
      ))}
      <style jsx>{`
        .grid{
          display:grid; gap:16px;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        }
        .tile{
          --bg: #101014;
          display:flex; flex-direction:column; gap:6px;
          padding:18px; border-radius:16px;
          background: var(--bg); border:1px solid #232326;
          text-decoration:none;
          transition: transform .08s ease, border-color .08s ease;
        }
        .tile:hover{ transform: translateY(-2px); border-color: var(--accent); }
        .emoji{ font-size:28px }
        .title{ color:#f1d7e0; font-weight:800; font-size:18px }
        .sub{ color:#bdaec0 }
      `}</style>
    </div>
  );
}
