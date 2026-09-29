import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRover } from '../context/RoverContext';

export default function RoverConnection() {
  const navigate = useNavigate();
  const { connect } = useRover();
  const [form, setForm] = useState({
    roverId: 'ROVER-01',
    ip: '10.0.0.149',
    password: 'ROVER@2026',
  });
  const [status, setStatus] = useState('DISCONNECTED');
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleConnect = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus('CONNECTING');

    try {
      await connect({
        roverId: form.roverId,
        id: form.roverId,
        name: form.roverId,
        ip: form.ip,
        password: form.password,
        status: 'CONNECTED',
      });
      setStatus('CONNECTED');
      navigate('/dashboard');
    } catch (error) {
      setStatus('CONNECTION ERROR');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-10">
      <div className="w-full max-w-2xl rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-control">
        <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Rover connection</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-100">Connect Surface Control to Rover</h1>

        <form onSubmit={handleConnect} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-[10px] uppercase tracking-[0.24em] text-slate-400">Rover ID</label>
            <input name="roverId" value={form.roverId} onChange={handleChange} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100" />
          </div>

          <div>
            <label className="mb-2 block text-[10px] uppercase tracking-[0.24em] text-slate-400">Raspberry Pi IP Address</label>
            <input name="ip" value={form.ip} onChange={handleChange} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100" />
          </div>

          <div>
            <label className="mb-2 block text-[10px] uppercase tracking-[0.24em] text-slate-400">Password</label>
            <input type="password" name="password" value={form.password} onChange={handleChange} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100" />
          </div>

          <div className="flex items-center justify-between gap-4 pt-2">
            <div className="text-sm text-slate-300">
              Status: <span className="font-medium text-cyan-300">{status}</span>
            </div>
            <button type="submit" disabled={loading} className="rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-5 py-3 text-sm font-medium uppercase tracking-[0.2em] text-cyan-200 disabled:opacity-60">
              {loading ? 'CONNECTING...' : 'CONNECT ROVER'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
