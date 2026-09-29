export default function Alerts() {
  const alerts = [
    { severity: 'CRITICAL', time: '11:42:18', type: 'Gas critical', location: 'Zone B', message: 'Methane concentration above threshold', status: 'ACTIVE' },
    { severity: 'HIGH', time: '11:40:11', type: 'Human detected', location: 'Access Drift', message: 'Thermal and RGB confidence high', status: 'CONFIRMED' },
    { severity: 'WARNING', time: '11:39:24', type: 'Thermal anomaly', location: 'Zone C', message: 'Heat signature above expected range', status: 'MONITORING' },
    { severity: 'MEDIUM', time: '11:38:07', type: 'Communication loss', location: 'Tunnel 3', message: 'Network latency elevated', status: 'STABLE' },
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4 shadow-control">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Alert center</p>
            <h1 className="mt-1 text-2xl font-semibold text-slate-100">Real-time Incidents</h1>
          </div>
          <span className="rounded border border-red-500/30 bg-red-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-red-300">04 active</span>
        </div>

        <div className="space-y-3">
          {alerts.map((alert, index) => (
            <div key={`${alert.type}-${index}`} className="rounded-xl border border-slate-700 bg-slate-950/60 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{alert.time}</p>
                  <p className="mt-2 text-lg font-semibold text-slate-100">{alert.type}</p>
                </div>
                <span className={`rounded-full border px-2 py-1 text-[9px] uppercase tracking-[0.18em] ${
                  alert.severity === 'CRITICAL' ? 'border-red-500/30 bg-red-500/10 text-red-300' :
                  alert.severity === 'HIGH' ? 'border-orange-500/30 bg-orange-500/10 text-orange-300' :
                  alert.severity === 'WARNING' ? 'border-amber-500/30 bg-amber-500/10 text-amber-300' :
                  'border-slate-600 text-slate-200'
                }`}>{alert.severity}</span>
              </div>
              <p className="mt-3 text-sm text-slate-300">{alert.message}</p>
              <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-slate-400">
                <span>{alert.location}</span>
                <span>{alert.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
