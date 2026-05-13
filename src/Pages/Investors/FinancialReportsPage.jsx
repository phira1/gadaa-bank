import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaFilePdf, FaDownload, FaEye } from 'react-icons/fa';
import { reportService } from '../../services';
import { getAssetUrl } from '../../utils/assetUrl';

const FinancialReportsPage = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    reportService.getAll({ type: 'financial' })
      .then((response) => {
        if (!isMounted) return;
        const payload = response?.data ?? response ?? [];
        const items = Array.isArray(payload.data) ? payload.data : Array.isArray(payload) ? payload : [];
        setReports(items);
      })
      .catch((loadError) => {
        if (!isMounted) return;
        setError(loadError.message || 'Failed to load financial reports.');
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const getDocumentLink = (report) => report.file_url || (report.file_path ? getAssetUrl(report.file_path) : '#');

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-black to-gray-900 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-red-500">›</span>
            <Link to="/investors" className="text-white/80 hover:text-white">Investors</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Financial Reports</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Link to="/investors" className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 group">
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Investors
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Financial Reports & Statements</h1>
          <p className="text-gray-600">Access audited financial statements and reports.</p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-16">
            <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center py-16 text-red-600">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {reports.map((report) => (
              <div key={report.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <h2 className="font-semibold text-gray-800 line-clamp-2">{report.title}</h2>
                </div>
                <div className="p-6 text-center">
                  <div className="bg-gray-100 rounded-lg p-8 text-center">
                    <p className="text-gray-500 mb-2">Fiscal Year {report.year || 'N/A'}</p>
                    <p className="text-sm text-gray-600">{report.description || 'Financial statement document.'}</p>
                  </div>
                  <a
                    href={getDocumentLink(report)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-2 text-red-600 font-medium group-hover:underline"
                  >
                    <FaEye />
                    <span>View Report</span>
                    <FaDownload className="text-sm" />
                  </a>
                </div>
              </div>
            ))}

            {reports.length === 0 && (
              <div className="col-span-full text-center text-gray-500 py-8">
                No financial reports available.
              </div>
            )}
          </div>
        )}

        <div className="bg-red-50 rounded-lg p-6 text-center mt-8">
          <p className="text-gray-700">
            For inquiries about financial statements, please <Link to="/investors/contact" className="text-red-600 font-medium underline">contact our investor relations team</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinancialReportsPage;