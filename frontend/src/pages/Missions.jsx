export default function Missions() {
  const missions = [
    { id: 'MR-001', rover: 'ROVER-01', operator: 'A. Singh', start: '09:10', end: '11:42', duration: '02:32:18', distance: '3.6 km', hazards: '2', persons: '1', status: 'In Progress' },
    { id: 'MR-0009', rover: 'ROVER-07', operator: 'M. Patel', start: '07:12', end: '09:02', duration: '01:50:17', distance: '2.9 km', hazards: '5', persons: '2', status: 'Completed' },
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4 shadow-control">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Mission management</p>
            <h1 className="mt-1 text-2xl font-semibold text-slate-100">Operations Log</h1>
          </div>
          <div className="flex gap-2">
            <button className="rounded border border-slate-700 bg-slate-800 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-slate-200">Start Mission</button>
            <button className="rounded border border-slate-700 bg-slate-800 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-slate-200">Pause</button>
            <button className="rounded border border-slate-700 bg-slate-800 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-slate-200">Resume</button>
          </div>
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
                <th className="px-3 py-3">Persons</th>
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
                  <td className="px-3 py-3">{mission.persons}</td>
                  <td className="px-3 py-3"><span className={`rounded-full border px-2 py-1 text-[9px] uppercase tracking-[0.18em] ${mission.status === 'In Progress' ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300' : 'border-slate-600 text-slate-200'}`}>{mission.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
