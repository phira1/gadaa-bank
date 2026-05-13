import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaHome, FaNewspaper, FaPhoneAlt } from 'react-icons/fa';
import usePageMeta from '../components/hooks/usePageMeta';

const NotFoundPage = () => {
  usePageMeta({
    title: '404',
    description: 'The requested page was not found on the Gadaa Bank website.',
    canonicalPath: '/404',
  })

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.12),transparent_40%),linear-gradient(180deg,#f8fafc_0%,#ffffff_55%,#f8fafc_100%)] flex items-center justify-center px-4 py-16">
      <div className="max-w-3xl w-full bg-white/90 backdrop-blur rounded-3xl border border-gray-200 shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-[1.15fr_0.85fr]">
          <div className="p-8 md:p-12">
            <p className="text-sm font-semibold tracking-[0.3em] text-red-600 uppercase mb-4">404</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">Page not found</h1>
            <p className="text-gray-600 text-lg mb-8 max-w-xl">
              The page you requested does not exist or has moved. Use the links below to continue browsing the bank site.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
              >
                <FaHome />
                Back to Home
              </Link>
              <Link
                to="/resources/news"
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-800 px-5 py-3 rounded-full font-semibold hover:border-red-600 hover:text-red-600 transition-colors"
              >
                <FaNewspaper />
                Latest News
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-800 px-5 py-3 rounded-full font-semibold hover:border-red-600 hover:text-red-600 transition-colors"
              >
                <FaPhoneAlt />
                Contact Us
              </Link>
            </div>

            <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mt-8">
              <FaArrowLeft />
              Return to the public site
            </Link>
          </div>

          <div className="bg-gradient-to-br from-black via-gray-900 to-red-700 text-white p-8 md:p-12 flex flex-col justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-red-200 mb-3">Gadaa Bank</p>
              <h2 className="text-2xl font-bold mb-4">Corporate site navigation</h2>
              <p className="text-white/80 leading-relaxed">
                If you were looking for a specific service, check the navigation menu or the site search to find it quickly.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 text-sm">
              {['About', 'Services', 'Digital Banking', 'Investors', 'Resources', 'Locators'].map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 border border-white/10 px-4 py-3 text-center">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;