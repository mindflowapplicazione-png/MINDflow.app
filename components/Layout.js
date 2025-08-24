// components/Layout.js
import Link from 'next/link';
import '../styles/globals.css';
import FabJindi from './FabJindi';

export default function Layout({ children, title = 'MINDflow' }) {
  return (
    <div className="container">
      <header className="header">
        <div className="brand">{title}</div>

        {/* NAV DESTRA */}
        <nav className="top-actions">
          {/* Casa per tornare sempre alla home */}
          <Link href="/" className="btn-ghost" aria-label="Home">
            🏡
          </Link>
        </nav>
      </header>

      <main>{children}</main>
      <footer className="footer">© MINDflow</footer>

      {/* Floating chat con Jindi */}
      <FabJindi />
      <style jsx>{`
        .container { padding: 24px; max-width: 980px; margin: 0 auto; }
        .header {
          display:flex; align-items:center; justify-content:space-between;
          margin-bottom: 20px;
        }
        .brand { font-weight: 800; letter-spacing:.3px; }
        .top-actions { display:flex; gap:10px; }
        .btn-ghost {
          padding:8px 10px; border-radius:10px; border:1px solid #333;
          background: #121214; text-decoration:none;
        }
        main { display:block; }
        .footer { opacity:.6; text-align:center; padding:28px 0 8px; }
      `}</style>
    </div>
  );
}
