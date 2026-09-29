import { Activity, BatteryCharging, Crosshair, MapPinned, Radio, TimerReset } from 'lucide-react';

export default function DashboardOverview({ mission, stats }) {
  return (
    <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4 shadow-control">
      <div className="flex items-center justify-between border-b border-slate-700/80 pb-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">Mission status</p>
          <h2 className="mt-2 text-xl font-semibold text-slate-100">{mission.id} / {mission.roverId}</h2>
        </div>
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-slate-300">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1 text-emerald-300"><span className="status-dot bg-emerald-400 text-emerald-400" /> {mission.connection}</span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-6 gap-4">
        {stats.map((item, index) => (
          <div key={`${item.label}-${index}`} className="rounded-xl border border-slate-700 bg-slate-950/60 p-3">
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
            <p className="mt-3 text-lg font-semibold text-slate-100">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
