import { BatteryCharging, ChevronDown, Gauge, ShieldAlert, Siren, Zap } from 'lucide-react';

export default function RoverControlPanel({ rover, health }) {
  return (
    <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4 shadow-control">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Rover control</p>
          <h2 className="mt-1 text-lg font-semibold text-slate-100">Movement & Remote Systems</h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-300">Connected</span>
          <button className="rounded border border-red-500/30 bg-red-500/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-red-300">Emergency Stop</button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-7 rounded-xl border border-slate-700 bg-slate-950/60 p-4">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div />
            <button className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm font-medium text-slate-100">Forward</button>
            <div />
            <button className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm font-medium text-slate-100">Left</button>
            <button className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-300">Stop</button>
            <button className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm font-medium text-slate-100">Right</button>
            <div />
            <button className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm font-medium text-slate-100">Backward</button>
            <div />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-slate-700 bg-slate-900 p-3">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Speed control</p>
              <div className="mt-3 flex items-center gap-2">
                <input type="range" min="0" max="100" defaultValue="64" className="h-1.5 w-full accent-cyan-400" />
              </div>
              <p className="mt-3 font-mono text-sm text-cyan-300">64% / 1.8 m/s</p>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-900 p-3">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Camera</p>
              <div className="mt-3 flex gap-2">
                <button className="flex-1 rounded border border-slate-700 bg-slate-800 px-2 py-2 text-xs">Pan</button>
                <button className="flex-1 rounded border border-slate-700 bg-slate-800 px-2 py-2 text-xs">Tilt</button>
              </div>
              <p className="mt-3 text-xs text-slate-300">Direction: 32° / 12°</p>
            </div>
          </div>
        </div>

        <div className="col-span-5 space-y-3">
          <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-3">
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Current telemetry</p>
            <div className="mt-3 space-y-2 text-sm text-slate-300">
              <div className="flex items-center justify-between"><span>Speed</span><span className="font-mono text-slate-100">1.8 m/s</span></div>
              <div className="flex items-center justify-between"><span>Direction</span><span className="font-mono text-slate-100">NW</span></div>
              <div className="flex items-center justify-between"><span>Motor</span><span className="text-emerald-300">ONLINE</span></div>
              <div className="flex items-center justify-between"><span>Battery</span><span className="font-mono text-amber-300">87%</span></div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-3">
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Auxiliary systems</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <button className="rounded border border-slate-700 bg-slate-800 px-2 py-2 text-xs">Headlights</button>
              <button className="rounded border border-slate-700 bg-slate-800 px-2 py-2 text-xs">Buzzer</button>
              <button className="rounded border border-slate-700 bg-slate-800 px-2 py-2 text-xs">Lights</button>
              <button className="rounded border border-slate-700 bg-slate-800 px-2 py-2 text-xs">Aux</button>
            </div>
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-3">
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">System health</p>
            <div className="mt-3 space-y-2 text-sm text-slate-300">
              <div className="flex items-center justify-between"><span>Rover health</span><span className="text-emerald-300">STABLE</span></div>
              <div className="flex items-center justify-between"><span>Latency</span><span className="font-mono text-slate-100">42 ms</span></div>
              <div className="flex items-center justify-between"><span>Driver</span><span className="text-cyan-300">ONLINE</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
