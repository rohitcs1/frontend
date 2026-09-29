import { BrainCircuit, CircleAlert, ShieldAlert } from 'lucide-react';

export default function AIIntelligencePanel({ ai }) {
  return (
    <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4 shadow-control">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">AI mission intelligence</p>
          <h2 className="mt-1 text-lg font-semibold text-slate-100">Assessment</h2>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-300"><BrainCircuit className="h-5 w-5" /></div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-700 bg-slate-950/60 p-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Detection</span>
          <span className="rounded-full border border-red-500/30 bg-red-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-red-300">{ai.risk}</span>
        </div>
        <p className="mt-3 text-lg font-semibold text-slate-100">{ai.detection}</p>
        <div className="mt-3 flex items-center justify-between text-xs text-slate-300">
          <span>Confidence</span>
          <span className="font-mono text-cyan-300">{ai.confidence}</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-xs text-slate-300">
          <span>Location</span>
          <span className="font-mono text-slate-100">{ai.location}</span>
        </div>
      </div>

      <div className="mt-4 space-y-3 text-sm text-slate-300">
        <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-3">
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Evidence</p>
          <p className="mt-2 text-slate-100">Thermal anomaly + RGB clustering near tunnel intersection.</p>
        </div>
        <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-3">
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Risk</p>
          <p className="mt-2 text-amber-200">Methane concentration above safe threshold in the same corridor.</p>
        </div>
        <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-3">
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Recommendation</p>
          <p className="mt-2 text-cyan-200">{ai.recommendation}</p>
        </div>
      </div>
    </div>
  );
}
