import { AlertTriangle, BatteryCharging, Gauge, MapPinned, Radio, ShieldAlert, ThermometerSun } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, AreaChart, Area } from 'recharts';
import { useRover } from '../context/RoverContext';
import { useLiveTelemetry } from '../hooks/useLiveTelemetry';
import CameraFeed from '../components/CameraFeed';

const stats = [
  { label: 'Mission ID', value: 'MR-001' },
  { label: 'Current Zone', value: 'B-12' },
  { label: 'Battery', value: '87%' },
  { label: 'Signal', value: 'Strong' },
  { label: 'Gas Risk', value: 'High' },
  { label: 'Alerts', value: '04' },
];

const radarData = [
  { subject: 'Gas', value: 72 },
  { subject: 'Thermal', value: 68 },
  { subject: 'Human', value: 81 },
  { subject: 'Structure', value: 54 },
  { subject: 'Mobility', value: 90 },
  { subject: 'Env', value: 71 },
];

export default function Dashboard() {
  const { rover } = useRover();
  const sensors = useLiveTelemetry();
  const methane = sensors.find((sensor) => sensor.key === 'CH4');
  const temperature = sensors.find((sensor) => sensor.key === 'TEMP');
  const gasHistory = methane?.history.map((point) => ({ name: point.time, methane: point.value })) || [];

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4 shadow-control">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">Mission status</p>
            <h1 className="mt-1 text-2xl font-semibold text-slate-100">Mine Rescue Mission Command</h1>
          </div>
          <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-emerald-300">{rover.status}</span>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-slate-700 bg-slate-950/60 p-3">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
              <p className="mt-3 text-lg font-semibold text-slate-100">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-7 rounded-2xl border border-slate-700 bg-slate-900 p-4 shadow-control">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.26em] text-slate-400">Live camera</p>
              <h2 className="mt-1 text-lg font-semibold text-slate-100">RGB feed</h2>
            </div>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-slate-300">
              <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-emerald-300">REC</span>
              <span>1080p / 29 FPS</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-slate-700 bg-slate-950">
            <CameraFeed />
            <div className="absolute left-4 top-4 rounded border border-slate-700 bg-slate-900/80 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-200">Zone B-12</div>
            <div className="absolute right-4 top-4 rounded border border-slate-700 bg-slate-900/80 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-cyan-300">11:42:18</div>
          </div>
        </div>

        <div className="col-span-5 space-y-6">
          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4 shadow-control">
            <p className="text-[10px] uppercase tracking-[0.26em] text-slate-400">Thermal vision</p>
            <div className="mt-3 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-100">Heat Map</h2>
              <span className="rounded border border-amber-500/30 bg-amber-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-amber-300">Human detection</span>
            </div>
            <div className="mt-4 rounded-xl border border-slate-700 bg-[radial-gradient(circle_at_center,_rgba(251,146,60,0.25),_transparent_35%),linear-gradient(180deg,#1f2937,#0f172a)] p-4">
              <div className="flex h-32 items-center justify-center text-4xl font-bold text-amber-200">{temperature?.displayValue || '34 C'}</div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4 shadow-control">
            <p className="text-[10px] uppercase tracking-[0.26em] text-slate-400">Major risks</p>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <div className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-950/60 p-3"><span className="flex items-center gap-2"><ShieldAlert className="h-4 w-4 text-orange-300" /> Gas hazard</span><span className="text-orange-300">HIGH</span></div>
              <div className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-950/60 p-3"><span className="flex items-center gap-2"><ThermometerSun className="h-4 w-4 text-amber-300" /> Temperature</span><span className="text-amber-300">{temperature?.displayValue || '34 C'}</span></div>
              <div className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-950/60 p-3"><span className="flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-red-300" /> Human detection</span><span className="text-red-300">94%</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8 rounded-2xl border border-slate-700 bg-slate-900 p-4 shadow-control">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.26em] text-slate-400">Sensor telemetry</p>
              <h2 className="mt-1 text-lg font-semibold text-slate-100">Atmosphere Trend</h2>
            </div>
            <span className="rounded border border-slate-700 bg-slate-800 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-slate-300">24 min</span>
          </div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={gasHistory}>
                <defs>
                  <linearGradient id="methaneFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.6} />
                    <stop offset="95%" stopColor="#22d3ee" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="methane" stroke="#22d3ee" strokeWidth={2} fill="url(#methaneFill)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-span-4 rounded-2xl border border-slate-700 bg-slate-900 p-4 shadow-control">
          <p className="text-[10px] uppercase tracking-[0.26em] text-slate-400">Risk radar</p>
          <div className="mt-4 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#475569" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#cbd5e1', fontSize: 10 }} />
                <PolarRadiusAxis tick={{ fill: '#cbd5e1', fontSize: 10 }} axisLine={false} tickCount={5} />
                <Radar dataKey="value" stroke="#22d3ee" fill="#22d3ee" fillOpacity={0.35} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
