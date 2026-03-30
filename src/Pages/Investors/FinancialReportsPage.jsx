// src/Pages/Investors/FinancialReportsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const FinancialReportsPage = () => {
  const auditReportLink = 'https://drive.google.com/file/d/1YSxGlv-9OtXvnbo_NTHrumk66mgvW93Z/view?usp=sharing';
  const reportImage = '/images/report1.jpg'; // stored in public/images

  // Placeholder for interim report link – you can replace later
  const interimReportLink = '#';

  return (
    <div className="min-h-screen bg-white">
      {/* Header / Breadcrumb */}
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
        {/* Back Button */}
        <Link 
          to="/investors"
          className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 group"
        >
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Investors
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Financial Reports & Statements
            </h1>
            <p className="text-gray-600">
              Access audited financial statements and reports.
            </p>
          </div>

          {/* Audited Financial Statement */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mb-8">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h2 className="font-semibold text-gray-700">
                Audited Financial Statement for the year ended 30 June 2025
              </h2>
            </div>
            <div className="p-6 text-center">
              <a 
                href={auditReportLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-90 transition-opacity"
              >
                <img 
                  src={reportImage}
                  alt="Audited Financial Statement"
                  className="mx-auto rounded-lg shadow-md max-w-full h-auto"
                />
              </a>
              <p className="mt-4 text-gray-500 text-sm">
                Click on the image to open the full report.
              </p>
            </div>
          </div>

          {/* Auditor's Report on Interim Financial Statements */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mb-8">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h2 className="font-semibold text-gray-700">
                Auditor's Report on Interim Financial Statements for the Period ended 31 December 2025
              </h2>
            </div>
            <div className="p-6 text-center">
              {interimReportLink !== '#' ? (
                <a 
                  href={interimReportLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-90 transition-opacity"
                >
                  <img 
                    src={reportImage}
                    alt="Interim Financial Statement"
                    className="mx-auto rounded-lg shadow-md max-w-full h-auto"
                  />
                </a>
              ) : (
                <div className="bg-gray-100 rounded-lg p-8 text-center">
                  <p className="text-gray-500">
                    This report will be available soon. Please check back later.
                  </p>
                </div>
              )}
              {interimReportLink !== '#' && (
                <p className="mt-4 text-gray-500 text-sm">
                  Click on the image to open the report.
                </p>
              )}
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-6 text-center">
            <p className="text-gray-700">
              For inquiries about financial statements, please <Link to="/investors/contact" className="text-red-600 font-medium underline">contact our investor relations team</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialReportsPage;