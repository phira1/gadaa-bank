import React, { useEffect, useState } from 'react';
import { NavLink, Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { FaBalanceScale, FaBars, FaChartLine, FaColumns, FaFolderOpen, FaHome, FaKey, FaMapMarkedAlt, FaRegFileAlt, FaRegHandshake, FaRegImages, FaSignOutAlt, FaSlidersH, FaTimes, FaUsersCog } from 'react-icons/fa';
import { authService } from '../../services';
import { clearToken, isAuthenticated } from '../../services/api';

const navItems = [
  { label: 'Overview', to: '/admin', icon: FaChartLine, end: true },
  { label: 'Content settings', to: '/admin/content', icon: FaSlidersH },
  { label: 'Product comparison', to: '/admin/product-comparison', icon: FaColumns },
  { label: 'Branches & ATMs', to: '/admin/locations', icon: FaMapMarkedAlt },
  { label: 'Board of directors', to: '/admin/board', icon: FaUsersCog },
  { label: 'Sharia committee', to: '/admin/sharia-committee', icon: FaBalanceScale },
  { label: 'Management team', to: '/admin/management', icon: FaFolderOpen },
  { label: 'Partners', to: '/admin/partners', icon: FaRegHandshake },
  { label: 'Reports', to: '/admin/reports', icon: FaRegFileAlt },
  { label: 'Website stats', to: '/admin/stats', icon: FaRegImages },
  { label: 'Change password', to: '/admin/change-password', icon: FaKey },
];

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [status, setStatus] = useState('loading');
  const [user, setUser] = useState(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    let active = true;

    const verifyAdmin = async () => {
      if (!isAuthenticated()) {
        if (active) {
          setStatus('unauthorized');
        }
        return;
      }

      try {
        const response = await authService.me();
        if (active) {
          setUser(response?.data ?? response);
          setStatus('ready');
        }
      } catch (error) {
        clearToken();
        if (active) {
          setStatus('unauthorized');
        }
      }
    };

    verifyAdmin();

    return () => {
      active = false;
    };
  }, [location.pathname]);

  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [location.pathname]);

  const handleLogout = async () => {
    try {
      await authService.logout();
    } catch (error) {
      clearToken();
    } finally {
      navigate('/admin/login', { replace: true });
    }
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
          <span>Checking admin access...</span>
        </div>
      </div>
    );
  }

  if (status === 'unauthorized') {
    return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 lg:grid lg:grid-cols-[280px_1fr]">
      {isMobileNavOpen && (
        <button
          type="button"
          aria-label="Close admin navigation"
          onClick={() => setIsMobileNavOpen(false)}
          className="fixed inset-0 z-20 bg-slate-950/60 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside className={`fixed inset-y-0 left-0 z-30 w-[min(20rem,86vw)] transform bg-slate-950 text-white px-5 py-6 flex flex-col gap-8 transition-transform duration-300 ease-out lg:static lg:z-auto lg:w-auto lg:min-h-screen lg:translate-x-0 ${isMobileNavOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="flex items-center justify-between gap-3">
          <div className="h-11 w-11 rounded-2xl bg-red-600 flex items-center justify-center font-bold shadow-lg shadow-red-600/30">
            GB
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs uppercase tracking-[0.28em] text-white/60">Admin Portal</p>
            <h1 className="text-lg font-semibold">Gadaa Bank</h1>
          </div>
          <button
            type="button"
            onClick={() => setIsMobileNavOpen(false)}
            className="rounded-full border border-white/10 p-2 text-white/80 hover:bg-white/10 lg:hidden"
            aria-label="Close navigation"
          >
            <FaTimes />
          </button>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.end}
                className={({ isActive }) => `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${isActive ? 'bg-white/12 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
              >
                <Icon className="text-red-400" />
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="mt-auto rounded-3xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase tracking-[0.24em] text-white/50 mb-2">Signed in as</p>
          <p className="font-semibold">{user?.name || 'Administrator'}</p>
          <p className="text-sm text-white/60 break-words">{user?.email || 'admin'}</p>
          <button
            type="button"
            onClick={handleLogout}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-white text-slate-950 px-4 py-2 text-sm font-semibold hover:bg-red-50 transition-colors"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </aside>

      <div className="min-w-0 lg:ml-0">
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="flex items-center justify-between gap-4 px-4 py-4 lg:px-8">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Operations console</p>
              <h2 className="text-xl font-semibold text-slate-900">Bank content management</h2>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/"
                className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:border-red-600 hover:text-red-600 transition-colors"
              >
                <FaHome />
                Public site
              </a>
              <button
                type="button"
                onClick={() => setIsMobileNavOpen(true)}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:border-red-600 hover:text-red-600 transition-colors lg:hidden"
                aria-label="Open admin navigation"
              >
                <FaBars />
                Menu
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 transition-colors lg:hidden"
              >
                <FaSignOutAlt />
                Logout
              </button>
            </div>
          </div>
        </header>

        <main className="px-4 py-6 lg:px-8 lg:py-8">
          <Outlet context={{ user }} />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;