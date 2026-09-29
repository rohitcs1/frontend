import { BrainCircuit } from 'lucide-react';

export default function AIIntelligence() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4 shadow-control">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">AI intelligence</p>
            <h1 className="mt-1 text-2xl font-semibold text-slate-100">Mission Assessment</h1>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/40 bg-cyan-500/10 text-cyan-300">
            <BrainCircuit className="h-5 w-5" />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-7 space-y-4">
            <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Detection</p>
              <p className="mt-3 text-xl font-semibold text-slate-100">Human detected</p>
              <div className="mt-3 flex items-center justify-between text-sm text-slate-300">
                <span>Confidence</span>
                <span className="font-mono text-cyan-300">94%</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm text-slate-300">
                <span>Location</span>
                <span className="font-mono text-slate-100">Zone B-12</span>
              </div>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">AI assessment</p>
              <p className="mt-3 text-slate-100">Possible trapped worker detected in a hazardous gas environment. Immediate rescue routing recommended after environmental risk confirmation.</p>
            </div>
          </div>

          <div className="col-span-5 space-y-4">
            <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Gas hazard</p>
              <p className="mt-3 text-2xl font-semibold text-orange-300">CH₄ 2.1%</p>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Overall risk</p>
              <p className="mt-3 text-2xl font-semibold text-red-300">HIGH</p>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Recommended priority</p>
              <p className="mt-3 text-lg font-semibold text-amber-300">HIGH</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
