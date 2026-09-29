import { Activity, AlertTriangle, Droplets, Flame, Gauge, Wind, ThermometerSun } from 'lucide-react';

const sensorMap = {
  Flame,
  ShieldAlert: AlertTriangle,
  AirVent: Wind,
  Wind,
  ThermometerSun,
  Droplets,
  Gauge,
};

export default function MonitoringPanel({ sensors }) {
  return (
    <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4 shadow-control">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Environmental monitoring</p>
          <h2 className="mt-1 text-lg font-semibold text-slate-100">Gas & Atmosphere</h2>
        </div>
        <button className="rounded border border-slate-700 bg-slate-800 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-200">Live Feed</button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {sensors.map((sensor) => {
          const Icon = sensorMap[sensor.icon] || Gauge;
          const statusTone = {
            NORMAL: 'text-emerald-300 border-emerald-500/30 bg-emerald-500/10',
            WARNING: 'text-amber-300 border-amber-500/30 bg-amber-500/10',
            HIGH: 'text-orange-300 border-orange-500/30 bg-orange-500/10',
            CRITICAL: 'text-red-300 border-red-500/30 bg-red-500/10',
          }[sensor.status] || 'text-slate-300 border-slate-600';

          return (
            <div key={sensor.name} className="rounded-xl border border-slate-700 bg-slate-950/60 p-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-slate-200"><Icon className="h-4 w-4" /></div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{sensor.short}</p>
                    <p className="text-sm font-medium text-slate-100">{sensor.name}</p>
                  </div>
                </div>
                <span className={`rounded-full border px-2 py-1 text-[9px] uppercase tracking-[0.18em] ${statusTone}`}>{sensor.status}</span>
              </div>

              <div className="mt-4 flex items-end justify-between">
                <div>
                  <p className="text-xl font-semibold text-slate-50">{sensor.value}</p>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">{sensor.range}</p>
                </div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">{sensor.unit}</div>
              </div>

              <div className="mt-4 h-8 rounded bg-slate-800 p-1">
                <svg viewBox="0 0 100 20" className="h-full w-full">
                  <path d={sensor.trend.map((point, idx) => `${idx === 0 ? 'M' : 'L'} ${idx * 20} ${20 - point * 0.7}`).join(' ')} stroke="rgba(94,234,212,0.9)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
