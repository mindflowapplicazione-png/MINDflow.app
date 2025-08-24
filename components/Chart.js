// components/Chart.js
export default function Chart({ data }) {
  const { type = 'bar', title = '', series = [] } = data || {};
  const max = Math.max(1, ...series.map(s => s.value));
  const w = 360, h = 160, pad = 28;
  const innerW = w - pad * 2, innerH = h - pad * 2;

  if (!series.length) return <div style={{opacity:.7}}>Nessun dato</div>;

  return (
    <div className="chart">
      {title && <div className="title">{title}</div>}
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" height="180">
        <rect x="0" y="0" width={w} height={h} fill="#0c0c0e" stroke="#222" />
        {/* axes */}
        <line x1={pad} y1={h-pad} x2={w-pad} y2={h-pad} stroke="#333"/>
        <line x1={pad} y1={pad} x2={pad} y2={h-pad} stroke="#333"/>
        {type === 'bar' ? (
          series.map((s, i) => {
            const bw = innerW / series.length - 8;
            const x  = pad + i * (innerW / series.length) + 4;
            const vh = (s.value / max) * (innerH - 6);
            const y  = h - pad - vh;
            return (
              <g key={i}>
                <rect x={x} y={y} width={bw} height={vh} fill="#7c5cff"/>
                <text x={x + bw/2} y={h - pad + 14} textAnchor="middle" fontSize="10" fill="#aaa">{s.label}</text>
                <text x={x + bw/2} y={y - 4} textAnchor="middle" fontSize="10" fill="#aaa">{s.value}</text>
              </g>
            );
          })
        ) : (
          // line
          <>
            {series.map((s, i) => {
              const x = pad + (i/(series.length-1 || 1))*innerW;
              const y = h - pad - (s.value/max)*(innerH-6);
              return <circle key={i} cx={x} cy={y} r="3" fill="#7c5cff"/>;
            })}
            <polyline
              fill="none" stroke="#7c5cff" strokeWidth="2"
              points={series.map((s,i)=>{
                const x = pad + (i/(series.length-1 || 1))*innerW;
                const y = h - pad - (s.value/max)*(innerH-6);
                return `${x},${y}`;
              }).join(' ')}
            />
            {series.map((s, i) => {
              const x = pad + (i/(series.length-1 || 1))*innerW;
              return <text key={i} x={x} y={h - pad + 14} textAnchor="middle" fontSize="10" fill="#aaa">{s.label}</text>;
            })}
          </>
        )}
      </svg>
      <style jsx>{`.title{margin-bottom:6px; font-weight:700}`}</style>
    </div>
  );
}
