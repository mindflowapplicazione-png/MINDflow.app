// pages/index.js
import Layout from '../components/Layout';
import TileGrid from '../components/TileGrid';

export default function Home(){
  return (
    <Layout title="MINDflow - App Aggiornata">
      <div className="home-container">
        <div className="app-logo">
          <div className="logo-icon">🌟</div>
          <div className="app-name">MINDflow</div>
          <div className="app-subtitle">Il tuo viaggio verso la consapevolezza</div>
        </div>
        <TileGrid/>
        <div className="version-info">
          <span>Versione 1</span>
        </div>
      </div>
      <style jsx>{`
        .home-container {
          min-height: calc(100vh - 80px);
          display: flex;
          flex-direction: column;
        }
        
        .app-logo {
          text-align: center;
          padding: 40px 20px 20px;
          background: linear-gradient(135deg, var(--bg) 0%, #0f0f0f 100%);
        }
        
        .logo-icon {
          font-size: 32px;
          margin-bottom: 12px;
        }
        
        .app-name {
          font-size: 42px;
          font-weight: 300;
          color: #f4d4c7;
          margin-bottom: 8px;
          letter-spacing: -1px;
        }
        
        .app-subtitle {
          font-size: 16px;
          color: var(--fg-secondary);
          font-style: italic;
          opacity: 0.8;
        }
        
        .version-info {
          position: fixed;
          bottom: 20px;
          left: 20px;
          color: var(--fg-secondary);
          font-size: 14px;
          opacity: 0.6;
        }
        
        @media (max-width: 768px) {
          .app-logo {
            padding: 30px 20px 15px;
          }
          
          .app-name {
            font-size: 36px;
          }
          
          .app-subtitle {
            font-size: 14px;
          }
          
          .version-info {
            bottom: 15px;
            left: 15px;
            font-size: 12px;
          }
        }
      `}</style>
    </Layout>
  );
}
