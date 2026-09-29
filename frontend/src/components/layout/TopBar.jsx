import { BatteryCharging, Bell, Clock3, Radio, ShieldCheck, UserRound } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/85 backdrop-blur-xl">
      <div className="flex items-center justify-between px-6 py-3.5">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.28em] text-cyan-400">System Online</span>
            <span className="status-dot bg-emerald-400 text-emerald-400" />
          </div>
          <div className="h-5 w-px bg-slate-700" />
          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Current Mission</p>
            <p className="text-sm font-medium text-slate-100">MR-001 / South Drift Rescue</p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-slate-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            <span>Rover-01 Connected</span>
          </div>
          <div className="flex items-center gap-2">
            <Radio className="h-3.5 w-3.5 text-cyan-400" />
            <span>Signal Strong</span>
          </div>
          <div className="flex items-center gap-2">
            <BatteryCharging className="h-3.5 w-3.5 text-amber-300" />
            <span>Battery 87%</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock3 className="h-3.5 w-3.5 text-slate-300" />
            <span>11:42:18</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="relative rounded-lg border border-slate-700 bg-slate-900 p-2 text-slate-200">
            <Bell className="h-4 w-4" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-400" />
          </button>
          <div className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-300">
              <UserRound className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Operator</p>
              <p className="text-sm font-medium text-slate-100">A. Singh</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
