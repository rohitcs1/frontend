export default function Settings() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4 shadow-control">
        <div className="mb-4">
          <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">System settings</p>
          <h1 className="mt-1 text-2xl font-semibold text-slate-100">Operational Configuration</h1>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Connection mode</p>
            <p className="mt-3 text-lg font-medium text-slate-100">Hardware mode</p>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">WebSocket</p>
            <p className="mt-3 text-lg font-medium text-slate-100">Connected</p>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Alert policy</p>
            <p className="mt-3 text-lg font-medium text-slate-100">High priority enabled</p>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Data sync</p>
            <p className="mt-3 text-lg font-medium text-slate-100">API ready</p>
          </div>
        </div>
      </div>
    </div>
  );
}
