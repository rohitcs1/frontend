import { Activity, AlertTriangle, Bell, Camera, ChevronLeft, ChevronRight, Crosshair, Gauge, HelpCircle, MapPinned, Radar, ShieldAlert, ThermometerSun, Truck } from 'lucide-react';

const icons = {
  Dashboard: Gauge,
  'Rover Control': Truck,
  'Live Monitoring': Camera,
  'Thermal Vision': ThermometerSun,
  'Environment & Gas': ShieldAlert,
  'Mine Map': MapPinned,
  'AI Intelligence': Radar,
  'Alerts & Incidents': Bell,
  'Mission History': Activity,
  Reports: HelpCircle,
  Settings: Crosshair,
};

export default function Sidebar({ items, activeItem }) {
  return (
    <aside className="flex w-64 shrink-0 flex-col border-r border-slate-800 bg-slate-950/90 backdrop-blur-sm">
      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/40 bg-cyan-500/10 text-cyan-300">
            <ShieldAlert className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Mine Rescue</p>
            <h2 className="text-sm font-semibold text-slate-100">Ops Console</h2>
          </div>
        </div>
        <button className="rounded border border-slate-700 bg-slate-900 p-2 text-slate-300">
          <ChevronLeft className="h-4 w-4" />
        </button>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {items.map(({ label, icon: Icon }) => {
          const isActive = label === activeItem;
          return (
            <button
              key={label}
              className={`flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left text-sm transition ${
                isActive
                  ? 'border-cyan-500/40 bg-cyan-500/10 text-cyan-200 shadow-[inset_0_0_0_1px_rgba(34,211,238,0.12)]'
                  : 'border-transparent bg-transparent text-slate-300 hover:border-slate-700 hover:bg-slate-900/70'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </button>
          );
        })}
      </nav>

      <div className="border-t border-slate-800 p-4">
        <div className="rounded-xl border border-slate-700 bg-slate-900 p-3">
          <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Mission</p>
          <p className="mt-2 text-sm font-medium text-slate-100">South Drift Rescue</p>
          <div className="mt-3 flex items-center justify-between text-xs text-slate-300">
            <span>Safety Index</span>
            <span className="font-semibold text-amber-300">72</span>
          </div>
          <div className="mt-2 h-2 rounded bg-slate-800">
            <div className="h-2 w-[72%] rounded bg-gradient-to-r from-amber-300 to-orange-500" />
          </div>
        </div>
      </div>
    </aside>
  );
}
