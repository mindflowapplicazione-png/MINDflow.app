export default function TimeRange({ start, end, onChange }) {
  return (
    <div className="row">
      <input type="time" className="input" value={start} onChange={e=>onChange(e.target.value, end)} />
      <input type="time" className="input" value={end} onChange={e=>onChange(start, e.target.value)} />
    </div>
  );
}
