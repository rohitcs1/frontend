export default function AlertCenter({ alerts }) {
  return (
    <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4 shadow-control">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Alert center</p>
          <h2 className="mt-1 text-lg font-semibold text-slate-100">Live Incidents</h2>
        </div>
        <span className="rounded-full border border-red-500/30 bg-red-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-red-300">{alerts.length} active</span>
      </div>

      <div className="space-y-3">
        {alerts.map((alert) => (
          <div key={alert.id} className="rounded-xl border border-slate-700 bg-slate-950/60 p-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{alert.time}</p>
                <p className="mt-1 text-sm font-semibold text-slate-100">{alert.type}</p>
              </div>
              <span className={`rounded-full border px-2 py-1 text-[9px] uppercase tracking-[0.18em] ${
                alert.severity === 'CRITICAL' ? 'border-red-500/30 bg-red-500/10 text-red-300' :
                alert.severity === 'HIGH' ? 'border-orange-500/30 bg-orange-500/10 text-orange-300' :
                'border-amber-500/30 bg-amber-500/10 text-amber-300'
              }`}>{alert.severity}</span>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-slate-300">
              <div><span className="text-slate-400">Location</span><p className="mt-1 text-slate-100">{alert.location}</p></div>
              <div><span className="text-slate-400">Status</span><p className="mt-1 text-slate-100">{alert.status}</p></div>
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-slate-700/80 pt-2 text-[10px] uppercase tracking-[0.18em] text-slate-400">
              <span>{alert.sensor}</span>
              <span className="font-mono text-slate-200">{alert.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
