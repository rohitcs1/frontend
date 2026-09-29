import { useState } from 'react';
import { BatteryCharging, Siren, Zap } from 'lucide-react';
import { roverService } from '../services/roverService';

const actions = ['FORWARD', 'BACKWARD', 'LEFT', 'RIGHT', 'STOP', 'EMERGENCY STOP'];

export default function RoverControl() {
  const [speed, setSpeed] = useState(64);
  const [ack, setAck] = useState('Awaiting command acknowledgement');

  const sendCommand = async (command) => {
    try {
      await roverService.sendCommand({ command });
      setAck(`${command} acknowledged by backend`);
    } catch (error) {
      setAck(`Command failed: backend unavailable`);
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4 shadow-control">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Rover control</p>
            <h1 className="mt-1 text-2xl font-semibold text-slate-100">Remote Navigation</h1>
          </div>
          <span className="rounded border border-red-500/30 bg-red-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-red-300">Emergency stop armed</span>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8 rounded-xl border border-slate-700 bg-slate-950/60 p-4">
            <div className="grid grid-cols-3 gap-3 text-center">
              <div />
              <button onClick={() => sendCommand('FORWARD')} className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm font-medium text-slate-100">FORWARD</button>
              <div />
              <button onClick={() => sendCommand('LEFT')} className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm font-medium text-slate-100">LEFT</button>
              <button onClick={() => sendCommand('STOP')} className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-300">STOP</button>
              <button onClick={() => sendCommand('RIGHT')} className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm font-medium text-slate-100">RIGHT</button>
              <div />
              <button onClick={() => sendCommand('BACKWARD')} className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm font-medium text-slate-100">BACKWARD</button>
              <div />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-700 bg-slate-900 p-3">
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Speed control</p>
                <input type="range" min="0" max="100" value={speed} onChange={(e) => setSpeed(Number(e.target.value))} className="mt-3 w-full accent-cyan-400" />
                <p className="mt-3 text-sm font-mono text-cyan-300">{speed}% / 1.8 m/s</p>
              </div>

              <div className="rounded-xl border border-slate-700 bg-slate-900 p-3">
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Camera controls</p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <button onClick={() => sendCommand('PAN_LEFT')} className="rounded border border-slate-700 bg-slate-800 px-2 py-2 text-xs">Pan</button>
                  <button onClick={() => sendCommand('TILT_UP')} className="rounded border border-slate-700 bg-slate-800 px-2 py-2 text-xs">Tilt</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4 space-y-4">
            <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-3">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Telemetry</p>
              <div className="mt-3 space-y-2 text-sm text-slate-300">
                <div className="flex items-center justify-between"><span>Speed</span><span className="font-mono text-slate-100">1.8 m/s</span></div>
                <div className="flex items-center justify-between"><span>Direction</span><span className="font-mono text-slate-100">NW</span></div>
                <div className="flex items-center justify-between"><span>Battery</span><span className="font-mono text-amber-300">87%</span></div>
                <div className="flex items-center justify-between"><span>Latency</span><span className="font-mono text-slate-100">42 ms</span></div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-3">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Auxiliary</p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <button onClick={() => sendCommand('HEADLIGHT_ON')} className="rounded border border-slate-700 bg-slate-800 px-2 py-2 text-xs">Headlight</button>
                <button onClick={() => sendCommand('BUZZER_ON')} className="rounded border border-slate-700 bg-slate-800 px-2 py-2 text-xs">Buzzer</button>
              </div>
            </div>

            <button onClick={() => sendCommand('EMERGENCY_STOP')} className="w-full rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-medium uppercase tracking-[0.2em] text-red-300">
              Emergency Stop
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4 shadow-control">
        <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Command acknowledgement</p>
        <p className="mt-3 text-sm text-cyan-300">{ack}</p>
      </div>
    </div>
  );
}
