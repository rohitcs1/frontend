import { Gauge, Activity, ThermometerSun, Wind, Droplets, ShieldAlert } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, CartesianGrid, XAxis, YAxis } from 'recharts';
import { useLiveTelemetry } from '../hooks/useLiveTelemetry';

export default function Monitoring() {
  const sensors = useLiveTelemetry();

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4 shadow-control">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Environmental monitoring</p>
            <h1 className="mt-1 text-2xl font-semibold text-slate-100">Gas & Air Quality</h1>
          </div>
          <span className="rounded border border-amber-500/30 bg-amber-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-amber-300">Live telemetry</span>
        </div>

        <div className="grid grid-cols-2 gap-4 xl:grid-cols-3">
          {sensors.map((sensor) => (
            <div key={sensor.key} className="rounded-xl border border-slate-700 bg-slate-950/60 p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{sensor.key}</p>
                  <p className="mt-2 text-lg font-semibold text-slate-100">{sensor.name}</p>
                </div>
                <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-1 text-[9px] uppercase tracking-[0.18em] text-amber-300">{sensor.status}</span>
              </div>

              <div className="mt-4 flex items-end justify-between">
                <div>
                  <p className="text-2xl font-semibold text-slate-50">{sensor.displayValue}</p>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Threshold: {sensor.threshold}</p>
                </div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">{sensor.unit}</div>
              </div>

              <div className="mt-4 h-16">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={sensor.history}>
                    <defs>
                      <linearGradient id={`${sensor.key}-trace`} x1="0" x2="0" y1="0" y2="1">
                        <stop offset="5%" stopColor={sensor.color} stopOpacity={0.4} />
                        <stop offset="95%" stopColor={sensor.color} stopOpacity={0.06} />
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="value" stroke={sensor.color} fill={`url(#${sensor.key}-trace)`} strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
