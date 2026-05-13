import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaFilePdf, FaDownload } from 'react-icons/fa';
import { reportService } from '../../services';
import { getAssetUrl } from '../../utils/assetUrl';

const ProspectusPage = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    reportService.getAll({ type: 'prospectus' })
      .then((response) => {
        if (!isMounted) return;
        const payload = response?.data ?? response ?? [];
        const items = Array.isArray(payload.data) ? payload.data : Array.isArray(payload) ? payload : [];
        setReports(items);
      })
      .catch((loadError) => {
        if (!isMounted) return;
        setError(loadError.message || 'Failed to load prospectus documents.');
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
      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-black to-gray-900 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-red-500">›</span>
            <Link to="/investors" className="text-white/80 hover:text-white">Investors</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Prospectus</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Link to="/investors" className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 group">
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Investors
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Prospectus</h1>
          <p className="text-gray-600">Gadaa Bank Prospectus – Official Document</p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-16">
            <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center py-16 text-red-600">{error}</div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-8">
            {reports.map((doc) => (
              <div key={doc.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center flex-wrap gap-2">
                  <h2 className="font-semibold text-gray-700">{doc.title}</h2>
                  <span className="text-sm text-gray-500">{doc.year || 'Prospectus'}</span>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{doc.description || 'Official prospectus document.'}</p>
                  <div className="flex items-center gap-4 flex-wrap">
                    <a
                      href={getDocumentLink(doc)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-red-600 font-medium hover:underline"
                    >
                      <FaFilePdf />
                      Open PDF
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {reports.length === 0 && (
              <div className="text-center text-gray-500 py-8">
                No prospectus documents available.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProspectusPage;