export default function MineMap() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4 shadow-control">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Mine map</p>
            <h1 className="mt-1 text-2xl font-semibold text-slate-100">Tunnel Risk Network</h1>
          </div>
          <div className="flex gap-2 text-[10px] uppercase tracking-[0.16em] text-slate-300">
            <button className="rounded border border-slate-700 bg-slate-800 px-2 py-1">Zoom</button>
            <button className="rounded border border-slate-700 bg-slate-800 px-2 py-1">Center</button>
          </div>
        </div>

        <div className="relative h-[440px] overflow-hidden rounded-xl border border-slate-700 bg-slate-950/60">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
            <path d="M20 20 L62 18 L78 32 L72 70 L38 78 L16 60 Z" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(148,163,184,0.6)" strokeWidth="0.8" />
            <path d="M16 60 L38 52 L60 55 L72 70" fill="none" stroke="rgba(148,163,184,0.5)" strokeWidth="0.8" />
            <path d="M38 52 L36 32 L62 18" fill="none" stroke="rgba(148,163,184,0.5)" strokeWidth="0.8" />
            <path d="M46 26 L56 38" fill="none" stroke="rgba(34,197,94,0.35)" strokeWidth="1.2" />
            <path d="M58 58 L70 62" fill="none" stroke="rgba(248,113,113,0.35)" strokeWidth="1.2" />
            <path d="M30 44 L42 48" fill="none" stroke="rgba(250,204,21,0.35)" strokeWidth="1.2" />
            <circle cx="52" cy="40" r="2.6" fill="#22d3ee" />
            <circle cx="52" cy="40" r="6" fill="rgba(34,211,238,0.18)" />
          </svg>
          <div className="absolute left-[52%] top-[38%] z-10 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
          <div className="absolute left-[26%] top-[22%] h-3 w-3 rounded-full bg-red-500" />
          <div className="absolute left-[54%] top-[34%] h-3 w-3 rounded-full bg-orange-400" />
          <div className="absolute left-[60%] top-[58%] h-3 w-3 rounded-full bg-amber-300" />
          <div className="absolute left-[44%] top-[68%] h-3 w-3 rounded-full bg-red-500" />
        </div>
      </div>
    </div>
  );
}
