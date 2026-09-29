export default function MissionHistoryTable({ missions }) {
  return (
    <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4 shadow-control">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Mission history</p>
          <h2 className="mt-1 text-lg font-semibold text-slate-100">Operations Log</h2>
        </div>
        <button className="rounded border border-slate-700 bg-slate-800 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-200">View All</button>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-700">
        <table className="min-w-full text-left text-sm text-slate-300">
          <thead className="bg-slate-950/80 text-[10px] uppercase tracking-[0.2em] text-slate-400">
            <tr>
              <th className="px-3 py-3">Mission</th>
              <th className="px-3 py-3">Rover</th>
              <th className="px-3 py-3">Operator</th>
              <th className="px-3 py-3">Duration</th>
              <th className="px-3 py-3">Distance</th>
              <th className="px-3 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <tr key={mission.id} className="border-t border-slate-700/80 bg-slate-900/40">
                <td className="px-3 py-3 font-medium text-slate-100">{mission.id}</td>
                <td className="px-3 py-3">{mission.rover}</td>
                <td className="px-3 py-3">{mission.operator}</td>
                <td className="px-3 py-3 font-mono text-slate-200">{mission.duration}</td>
                <td className="px-3 py-3 font-mono text-slate-200">{mission.distance}</td>
                <td className="px-3 py-3">
                  <span className={`rounded-full border px-2 py-1 text-[9px] uppercase tracking-[0.18em] ${mission.status === 'In Progress' ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300' : 'border-slate-600 bg-slate-800 text-slate-200'}`}>
                    {mission.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
