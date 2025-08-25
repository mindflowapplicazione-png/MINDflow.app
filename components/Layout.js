// components/Layout.js
import Link from 'next/link';
import '../styles/globals.css';
import FabJindi from './FabJindi';

export default function Layout({ children, title='MINDflow' }) {
  return (
    <div className="container">
      <header className="header">
        <div className="header-left">
          <Link href="/" className="close-btn">✕</Link>
        </div>
        <div className="header-center">
          <div className="app-title">{title}</div>
        </div>
        <div className="header-right">
          <Link href="/sistema" className="menu-btn">⋯</Link>
        </div>
      </header>
      <main className="main-content">{children}</main>
      <FabJindi/>
      <style jsx>{`
        .container {
          min-height: 100vh;
          background: var(--bg);
          position: relative;
        }
        
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          position: sticky;
          top: 0;
          background: var(--bg);
          z-index: 100;
          border-bottom: 1px solid var(--border);
        }
        
        .header-left, .header-right {
          width: 40px;
          display: flex;
          justify-content: center;
        }
        
        .header-center {
          flex: 1;
          text-align: center;
        }
        
        .app-title {
          font-weight: 600;
          font-size: 18px;
          color: var(--fg);
        }
        
        .close-btn, .menu-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--card-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border);
          font-size: 16px;
          color: var(--fg-secondary);
          transition: all 0.2s ease;
        }
        
        .close-btn:hover, .menu-btn:hover {
          background: var(--border);
          color: var(--fg);
          transform: scale(1.05);
        }
        
        .main-content {
          padding: 0;
          padding-bottom: 100px; /* Space for FAB */
        }
        
        @media (max-width: 768px) {
          .header {
            padding: 12px 16px;
          }
          
          .app-title {
            font-size: 16px;
          }
          
          .close-btn, .menu-btn {
            width: 28px;
            height: 28px;
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}
