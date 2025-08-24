// components/ProductCard.js
import { useState } from 'react';
import { formatPrice } from '../lib/products';

export default function ProductCard({ product }) {
  const [loading, setLoading] = useState(false);

  async function buy() {
    try {
      setLoading(true);
      const origin =
        typeof window !== 'undefined'
          ? window.location.origin
          : process.env.NEXT_PUBLIC_BASE_URL || '';
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          priceId: product.priceId,
          // per tracciare il prodotto al ritorno
          metadata: { productId: product.id, title: product.title },
          successUrl: `${origin}/success`,
          cancelUrl: `${origin}/carriera`,
        }),
      });
      const data = await res.json();
      if (data?.url) window.location.href = data.url;
      else alert('Errore: impossibile avviare il checkout.');
    } catch (e) {
      alert('Errore checkout: ' + e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="prod">
      <div className="row1">
        <div className="em">{emoji(product.type)}</div>
        <div className="ttl">
          <div className="title">{product.title}</div>
          <div className="desc">{product.desc}</div>
        </div>
        {product.badge && <span className="badge">{product.badge}</span>}
      </div>

      <div className="row2">
        <div className="price">{formatPrice(product.price, product.currency)}</div>
        <button className="btn" disabled={loading} onClick={buy}>
          {loading ? '...' : 'Compra ora'}
        </button>
      </div>

      <style jsx>{`
        .prod{border:1px solid #2a2a2a;background:#0f0f11;border-radius:16px;padding:14px;display:flex;flex-direction:column;gap:10px}
        .row1{display:flex;gap:12px;align-items:flex-start}
        .em{font-size:26px}
        .ttl{flex:1}
        .title{font-weight:800}
        .desc{opacity:.8}
        .badge{border:1px solid #333;border-radius:999px;padding:4px 8px;font-size:12px;background:#15151a}
        .row2{display:flex;justify-content:space-between;align-items:center}
        .price{font-weight:800}
        .btn{padding:8px 12px;border:1px solid #333;background:#121214;border-radius:10px}
      `}</style>
    </div>
  );
}

function emoji(type){
  if(type==='podcast') return '🎧';
  if(type==='book') return '📕';
  return '📄';
}
