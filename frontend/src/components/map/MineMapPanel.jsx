import { mockMapHazards } from '../../data/mockData';

export default function MineMapPanel() {
  return (
    <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4 shadow-control">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Mine map</p>
          <h2 className="mt-1 text-lg font-semibold text-slate-100">Tunnel Risk Network</h2>
        </div>
        <div className="flex gap-2 text-[10px] uppercase tracking-[0.2em] text-slate-300">
          <button className="rounded border border-slate-700 bg-slate-800 px-2 py-1">Zoom</button>
          <button className="rounded border border-slate-700 bg-slate-800 px-2 py-1">Center</button>
        </div>
      </div>

      <div className="grid-bg relative overflow-hidden rounded-xl border border-slate-700 bg-slate-950/70 p-4">
        <div className="relative h-[320px] w-full rounded-xl border border-slate-700 bg-[radial-gradient(circle_at_center,_rgba(30,41,59,0.2),_rgba(2,6,23,0.8))]">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
            <path d="M20 20 L62 18 L78 32 L72 70 L38 78 L16 60 Z" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(148,163,184,0.7)" strokeWidth="0.7" />
            <path d="M16 60 L38 52 L60 55 L72 70" fill="none" stroke="rgba(148,163,184,0.45)" strokeWidth="0.7" />
            <path d="M38 52 L36 32 L62 18" fill="none" stroke="rgba(148,163,184,0.45)" strokeWidth="0.7" />
            <path d="M26 75 L42 60 L54 75" fill="none" stroke="rgba(148,163,184,0.45)" strokeWidth="0.7" />
            <path d="M46 26 L56 38" fill="none" stroke="rgba(34,197,94,0.4)" strokeWidth="1.2" />
            <path d="M58 58 L70 62" fill="none" stroke="rgba(248,113,113,0.4)" strokeWidth="1.2" />
            <path d="M30 44 L42 48" fill="none" stroke="rgba(250,204,21,0.4)" strokeWidth="1.2" />
            <circle cx="52" cy="40" r="2.6" fill="#22d3ee" />
            <circle cx="52" cy="40" r="5.8" fill="rgba(34,211,238,0.18)" />
          </svg>

          {mockMapHazards.map((hazard) => (
            <div key={hazard.label} className="absolute" style={{ left: `${hazard.x}%`, top: `${hazard.y}%` }}>
              <span className={`inline-flex h-3.5 w-3.5 items-center justify-center rounded-full ${
                hazard.risk === 'CRITICAL' ? 'bg-red-500' : hazard.risk === 'HIGH' ? 'bg-orange-400' : 'bg-yellow-400'
              }`} />
              <div className="mt-2 rounded border border-slate-700 bg-slate-900/90 px-2 py-1 text-[9px] uppercase tracking-[0.18em] text-slate-200">{hazard.label}</div>
            </div>
          ))}

          <div className="absolute bottom-4 left-4 rounded border border-slate-700 bg-slate-900/90 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-slate-300">
            <div>Explored 64%</div>
            <div className="mt-1 text-cyan-300">Rover path active</div>
          </div>
        </div>
      </div>
    </div>
  );
}
