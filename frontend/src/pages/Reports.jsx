export default function Reports() {
  const reports = [
    { name: 'Mission Summary', status: 'Ready' },
    { name: 'Sensor Statistics', status: 'Ready' },
    { name: 'AI Findings', status: 'Ready' },
    { name: 'Hazard Timeline', status: 'Generating' },
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4 shadow-control">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Reports</p>
            <h1 className="mt-1 text-2xl font-semibold text-slate-100">Mission Documentation</h1>
          </div>
          <button className="rounded border border-slate-700 bg-slate-800 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-slate-200">Export report</button>
        </div>

        <div className="space-y-3">
          {reports.map((report) => (
            <div key={report.name} className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-950/60 p-4">
              <div>
                <p className="text-base font-medium text-slate-100">{report.name}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-400">Surface control / AI / safety</p>
              </div>
              <span className={`rounded-full border px-2 py-1 text-[9px] uppercase tracking-[0.18em] ${report.status === 'Generating' ? 'border-amber-500/30 bg-amber-500/10 text-amber-300' : 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'}`}>{report.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
