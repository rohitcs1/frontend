import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: 'operator@mine-rescue.local', password: 'minepass123' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await login({
        email: form.email,
        username: form.email,
        password: form.password,
      });

      if (response?.access_token || response?.success) {
        navigate('/rover-connection');
      } else {
        setError('Authentication failed. Verify your credentials.');
      }
    } catch (err) {
      setError(err?.message || 'Backend authentication is unavailable. Please try demo mode or retry later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-10">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-control lg:grid-cols-[1.3fr_1fr]">
        <div className="relative hidden items-center justify-center bg-slate-950 p-10 lg:flex">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.15),_transparent_35%)]" />
          <div className="relative max-w-md text-slate-100">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg border border-cyan-500/40 bg-cyan-500/10 text-cyan-300">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-400">Surface control station</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight">AI Mine Rescue Command</h1>
            <p className="mt-4 text-slate-300">
              Underground rover telemetry, gas analysis, human detection, and emergency rescue coordination in a single command view.
            </p>
          </div>
        </div>

        <div className="p-8 sm:p-10">
          <div className="mb-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">Access</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-100">Operator Login</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-[0.24em] text-slate-400">Email / Username</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-500"
                placeholder="operator@mine-rescue.local"
              />
            </div>

            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-[0.24em] text-slate-400">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none focus:border-cyan-500"
                placeholder="Enter password"
              />
            </div>

            {error ? <p className="text-sm text-red-300">{error}</p> : null}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-4 py-3 text-sm font-medium uppercase tracking-[0.22em] text-cyan-200 disabled:opacity-60"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
