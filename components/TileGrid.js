// components/TileGrid.js
import Link from 'next/link';

const tiles = [
  { href: '/carriera',     title: 'Carriera',      sub: 'Mindset',       emoji: '🧠', bgColor: 'var(--accent-blue)' },
  { href: '/emozioni',     title: 'Emozioni',      sub: 'Equilibrio',    emoji: '💗', bgColor: 'var(--accent-purple)' },
  { href: '/fitness',      title: 'Fitness',       sub: 'Alimentazione', emoji: '💪', bgColor: 'var(--accent-brown)' },
  { href: '/spiritualita', title: 'Spiritualità',  sub: 'Crescita',      emoji: '🔮', bgColor: 'var(--accent-green)' },
  { href: '/community',    title: 'Community',     sub: '',              emoji: '👥', bgColor: 'var(--accent-orange)' },
  { href: '/profilo',      title: 'Profilo',       sub: '',              emoji: '👤', bgColor: 'var(--accent-pink)' },
];

const bottomButtons = [
  { href: '/sezioni', emoji: '🏠', bgColor: 'var(--accent-orange)' },
  { href: '/sistema', emoji: '⚙️', bgColor: 'transparent', border: true },
];

export default function TileGrid(){
  return (
    <div className="grid-container">
      <div className="main-grid">
        {tiles.map(t => (
          <Link key={t.href} href={t.href} className="tile" style={{'--bg-color': t.bgColor}}>
            <div className="emoji">{t.emoji}</div>
            <div className="title">{t.title}</div>
            <div className="sub">{t.sub}</div>
          </Link>
        ))}
      </div>
      
      <div className="bottom-actions">
        {bottomButtons.map((btn, index) => (
          <Link key={index} href={btn.href} className={`bottom-btn ${btn.border ? 'bordered' : ''}`} style={{'--bg-color': btn.bgColor}}>
            <div className="emoji">{btn.emoji}</div>
          </Link>
        ))}
      </div>
      
      <style jsx>{`
        .grid-container {
          flex: 1;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        
        .main-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        
        .tile {
          aspect-ratio: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 20px;
          border-radius: 20px;
          background: var(--bg-color);
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
          position: relative;
          overflow: hidden;
        }
        
        .tile:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .tile:hover:before {
          opacity: 1;
        }
        
        .tile:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 12px 40px rgba(0,0,0,0.4);
        }
        
        .emoji {
          font-size: 32px;
          margin-bottom: 4px;
        }
        
        .title {
          color: white;
          font-weight: 600;
          font-size: 16px;
          text-align: center;
          margin-bottom: 2px;
        }
        
        .sub {
          color: rgba(255,255,255,0.8);
          font-size: 14px;
          text-align: center;
          font-weight: 400;
        }
        
        .bottom-actions {
          display: flex;
          justify-content: center;
          gap: 40px;
          padding: 20px 0;
        }
        
        .bottom-btn {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: var(--bg-color);
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }
        
        .bottom-btn.bordered {
          border: 2px solid var(--border);
          background: var(--card-bg);
        }
        
        .bottom-btn:hover {
          transform: translateY(-2px) scale(1.1);
          box-shadow: 0 12px 40px rgba(0,0,0,0.4);
        }
        
        .bottom-btn .emoji {
          font-size: 24px;
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .grid-container {
            padding: 16px;
            gap: 30px;
          }
          
          .main-grid {
            gap: 12px;
          }
          
          .tile {
            padding: 16px;
            border-radius: 16px;
          }
          
          .emoji {
            font-size: 28px;
          }
          
          .title {
            font-size: 14px;
          }
          
          .sub {
            font-size: 12px;
          }
          
          .bottom-actions {
            gap: 30px;
            padding: 15px 0;
          }
          
          .bottom-btn {
            width: 56px;
            height: 56px;
          }
          
          .bottom-btn .emoji {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
}
