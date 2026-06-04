import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaLock, FaShieldAlt } from 'react-icons/fa';
import { authService } from '../../services';

const AdminChangePasswordPage = () => {
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleResetPassword = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await authService.updateAdminPassword({
        currentPassword,
        password,
        passwordConfirmation,
      });

      setSuccess('Password updated successfully. Use the new password the next time you sign in.');
      setCurrentPassword('');
      setPassword('');
      setPasswordConfirmation('');
    } catch (resetError) {
      setError(resetError.message || 'Unable to reset the password.');
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
              Admin password change
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">Update your password</h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-xl">
              Change the password for the currently signed-in admin account without using email recovery.
            </p>
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
            Keep your password private and rotate it immediately if you suspect the account was exposed.
          </div>
        </div>

        <div className="p-8 md:p-12 bg-white">
          <div className="max-w-md mx-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600 mb-3">Administrator reset</p>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Change password</h2>
            <p className="text-slate-600 mb-8">Enter your current password and choose a new one.</p>

            {error && (
              <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            {success && (
              <div className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                {success}
              </div>
            )}

            <form onSubmit={handleResetPassword} className="space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Current password</span>
                <div className="relative">
                  <FaLock className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(event) => setCurrentPassword(event.target.value)}
                    className="w-full rounded-2xl border border-slate-300 pl-11 pr-4 py-3 outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100"
                    placeholder="Enter your current password"
                    required
                  />
                </div>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">New password</span>
                <div className="relative">
                  <FaLock className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="w-full rounded-2xl border border-slate-300 pl-11 pr-4 py-3 outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100"
                    placeholder="Enter a new password"
                    required
                  />
                </div>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">Confirm password</span>
                <div className="relative">
                  <FaLock className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="password"
                    value={passwordConfirmation}
                    onChange={(event) => setPasswordConfirmation(event.target.value)}
                    className="w-full rounded-2xl border border-slate-300 pl-11 pr-4 py-3 outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100"
                    placeholder="Confirm the new password"
                    required
                  />
                </div>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-slate-950 px-4 py-3 font-semibold text-white hover:bg-red-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Updating...' : 'Update Password'}
              </button>
            </form>

            <div className="mt-8 flex items-center justify-between gap-3 text-sm">
              <Link to="/admin/login" className="font-medium text-red-600 hover:text-red-700 transition-colors">
                Back to login
              </Link>

              <span className="text-slate-500">This changes the currently signed-in admin account only.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminChangePasswordPage;