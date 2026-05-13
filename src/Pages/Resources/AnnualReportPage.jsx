import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFilePdf, FaDownload, FaEye } from 'react-icons/fa';
import { reportService } from '../../services';
import { getAssetUrl } from '../../utils/assetUrl';

const AnnualReportPage = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    reportService.getAll({ type: 'annual' })
      .then(res => setReports(res.data?.data || res.data || (Array.isArray(res) ? res : [])))
      .catch(err => setError('Failed to load reports.'))
      .finally(() => setLoading(false));
  }, []);

  const getReportImage = (report) => {
    if (report.image) return `/images/reports/${report.image}`;
    return `https://ui-avatars.com/api/?name=${report.year || 'AR'}&background=dc2626&color=fff&bold=true&size=400`;
  };

  const getReportLink = (report) => {
    if (report.file_url) return report.file_url;
    if (report.file_path) return getAssetUrl(report.file_path);
    return report.pdfLink || '#';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header / Breadcrumb */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-red-500">›</span>
            <Link to="/resources" className="text-white/80 hover:text-white">Resources</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Annual Reports</span>
          </nav>
        </div>
      </div>

      {/* Main content – added top padding to avoid navbar overlap */}
      <div className="container mx-auto px-4 py-8 md:py-12 pt-20 md:pt-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-600 to-black rounded-full mb-6 shadow-lg">
            <FaFilePdf className="text-white text-4xl" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Annual Reports
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Download our annual reports to learn more about our performance, strategies, and impact.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-16">
            <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center py-16 text-red-600">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {reports.map((report) => (
              <div
                key={report.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Cover Image */}
                <div className="relative overflow-hidden h-64 bg-gray-100 flex items-center justify-center">
                  <img
                    src={getReportImage(report)}
                    alt={report.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-sm font-medium">Click to view</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {report.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    Fiscal Year {report.year || 'N/A'}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-gray-400 text-xs">
                      <FaFilePdf className="mr-1 text-red-500" />
                      <span>{report.fileSize || 'PDF Document'}</span>
                    </div>
                    <a
                      href={getReportLink(report)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium text-sm group/link"
                    >
                      <FaEye />
                      View Report
                      <FaDownload className="text-xs group-hover/link:translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
            
            {reports.length === 0 && (
              <div className="col-span-full text-center text-gray-500 py-8">
                No annual reports available.
              </div>
            )}
          </div>
        )}

        {/* Note */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>All reports are in PDF format. Click on any report to view or download.</p>
        </div>
      </div>
    </div>
  );
};

export default AnnualReportPage;