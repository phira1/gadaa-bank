import React from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Application error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-16">
          <div className="max-w-xl w-full rounded-3xl border border-slate-200 bg-white p-8 shadow-xl text-center">
            <p className="text-sm font-semibold tracking-[0.28em] text-red-600 uppercase mb-4">Application error</p>
            <h1 className="text-3xl font-bold text-slate-900 mb-3">Something went wrong</h1>
            <p className="text-slate-600 mb-8">
              The page failed to render. Refresh the browser or return to the home page.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="rounded-full bg-slate-950 px-5 py-3 text-white font-semibold hover:bg-red-700 transition-colors"
              >
                Reload
              </button>
              <Link
                to="/"
                className="rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-800 hover:border-red-600 hover:text-red-600 transition-colors"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;