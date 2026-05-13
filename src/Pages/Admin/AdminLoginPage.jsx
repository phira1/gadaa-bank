import React, { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { FaLock, FaShieldAlt } from 'react-icons/fa';
import { authService } from '../../services';
import { isAuthenticated } from '../../services/api';

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const from = location.state?.from || '/admin';

  if (isAuthenticated()) {
    return <Navigate to={from} replace />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      await authService.login(email, password);
      navigate(from, { replace: true });
    } catch (loginError) {
      setError(loginError.message || 'Unable to sign in. Check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.25),transparent_32%),linear-gradient(160deg,#020617_0%,#0f172a_48%,#ffffff_48%,#ffffff_100%)] flex items-center justify-center px-4 py-10">
      <div className="max-w-5xl w-full grid lg:grid-cols-[1.1fr_0.9fr] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-white">
        <div className="bg-slate-950 text-white p-8 md:p-12 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/80 mb-8">
              <FaShieldAlt className="text-red-400" />
              Secure admin access
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">Gadaa Bank Admin Portal</h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-xl">
              Sign in to manage the bank website.
            </p>
          </div>
        </div>

        <div className="p-8 md:p-12 bg-white">
          <div className="max-w-md mx-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600 mb-3">Administrator sign in</p>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Welcome back</h2>
            <p className="text-slate-600 mb-8">Use an admin account to access the portal.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100"
                  placeholder="admin@gadaabank.com"
                  required
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Password</span>
                <div className="relative">
                  <FaLock className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="w-full rounded-2xl border border-slate-300 pl-11 pr-4 py-3 outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100"
                    placeholder="Enter admin password"
                    required
                  />
                </div>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-slate-950 px-4 py-3 font-semibold text-white hover:bg-red-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Signing in...' : 'Enter Admin Portal'}
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;