import { Flame, ThermometerSun } from 'lucide-react';

export default function ThermalVision() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4 shadow-control">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Thermal vision</p>
            <h1 className="mt-1 text-2xl font-semibold text-slate-100">Infrared Monitoring</h1>
          </div>
          <span className="rounded border border-amber-500/30 bg-amber-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-amber-300">Human detection</span>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8 rounded-xl border border-slate-700 bg-slate-950/60 p-4">
            <div className="relative h-[420px] overflow-hidden rounded-xl border border-slate-700 bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.2),_transparent_30%),linear-gradient(180deg,#1f2937,#0f172a)]">
              <div className="absolute inset-0 opacity-80 bg-[linear-gradient(135deg,transparent_0%,transparent_26%,rgba(255,255,255,0.05)_27%,transparent_28%,transparent_100%)]" />
              <div className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-amber-200/80">39.6°C</div>
            </div>
          </div>

          <div className="col-span-4 space-y-4">
            <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Thermal metrics</p>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <div className="flex items-center justify-between"><span>Max</span><span className="font-mono text-amber-200">39.6°C</span></div>
                <div className="flex items-center justify-between"><span>Min</span><span className="font-mono text-cyan-200">18.9°C</span></div>
                <div className="flex items-center justify-between"><span>Avg</span><span className="font-mono text-slate-100">27.1°C</span></div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Detection</p>
              <div className="mt-4 flex items-center gap-3 text-slate-100">
                <Flame className="h-5 w-5 text-orange-300" />
                <span>Possible trapped worker detected</span>
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-slate-400">Confidence 94%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
