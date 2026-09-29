export default function ReportsPanel({ reports }) {
  return (
    <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4 shadow-control">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Reports</p>
          <h2 className="mt-1 text-lg font-semibold text-slate-100">Mission Documents</h2>
        </div>
        <button className="rounded border border-slate-700 bg-slate-800 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-200">Export</button>
      </div>

      <div className="space-y-3">
        {reports.map((report) => (
          <div key={report.title} className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-950/60 p-3">
            <div>
              <p className="text-sm font-medium text-slate-100">{report.title}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-400">{report.category}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Updated</p>
              <p className="mt-1 text-xs text-slate-200">{report.updated}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
