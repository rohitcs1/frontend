import { NavLink, Outlet } from 'react-router-dom';
import { Activity, AlertTriangle, Bell, Camera, Gauge, MapPinned, Radar, ShieldAlert, ThermometerSun, Truck, Settings as SettingsIcon, FileText, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useRover } from '../../context/RoverContext';

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: Gauge },
  { to: '/rover-control', label: 'Rover Control', icon: Truck },
  { to: '/monitoring', label: 'Monitoring', icon: Camera },
  { to: '/thermal-vision', label: 'Thermal Vision', icon: ThermometerSun },
  { to: '/mine-map', label: 'Mine Map', icon: MapPinned },
  { to: '/ai-intelligence', label: 'AI Intelligence', icon: Radar },
  { to: '/alerts', label: 'Alerts', icon: Bell },
  { to: '/missions', label: 'Missions', icon: Activity },
  { to: '/reports', label: 'Reports', icon: FileText },
  { to: '/settings', label: 'Settings', icon: SettingsIcon },
];

export default function AppLayout() {
  const { logout, user } = useAuth();
  const { rover } = useRover();

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      <aside className="w-64 border-r border-slate-800 bg-slate-950/90 px-3 py-4">
        <div className="mb-6 flex items-center gap-3 px-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
            <ShieldAlert className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">Mine Rescue</p>
            <h1 className="text-sm font-semibold text-slate-100">Control Station</h1>
          </div>
        </div>

        <nav className="space-y-1">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl border px-3 py-2.5 text-sm transition ${
                  isActive
                    ? 'border-cyan-500/40 bg-cyan-500/10 text-cyan-200'
                    : 'border-transparent text-slate-300 hover:border-slate-700 hover:bg-slate-900/70'
                }`
              }
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="mt-8 rounded-xl border border-slate-700 bg-slate-900 p-3">
          <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Operator</p>
          <p className="mt-2 text-sm font-medium text-slate-100">{user?.username || 'Rescue Operator'}</p>
          <button
            className="mt-3 flex w-full items-center justify-center gap-2 rounded border border-slate-700 bg-slate-800 px-3 py-2 text-xs uppercase tracking-[0.2em] text-slate-200"
            onClick={logout}
          >
            <LogOut className="h-3.5 w-3.5" />
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1">
        <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl">
          <div className="flex items-center justify-between px-6 py-3.5">
            <div className="flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-[0.28em] text-cyan-400">System online</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                {rover.status}
              </span>
            </div>

            <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-slate-300">
              <span>{rover.name}</span>
              <span>{rover.signal} signal</span>
              <span>{rover.battery}% battery</span>
              <span>{rover.location}</span>
            </div>
          </div>
        </header>

        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
