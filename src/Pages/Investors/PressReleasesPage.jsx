import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCalendarAlt, FaFilePdf, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { investorPressReleases } from '../../data/investorData';

const PressReleasesPage = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const sortedReleases = [...investorPressReleases].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-black to-gray-900 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-red-500">›</span>
            <Link to="/investors" className="text-white/80 hover:text-white">Investors</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Press Releases</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Link to="/investors" className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 group">
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Investors
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Press Releases</h1>
          <p className="text-gray-600">Official announcements and news for investors and the public.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {sortedReleases.map((release) => (
            <div key={release.id} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <FaCalendarAlt className="mr-2 text-red-500" />
                  {new Date(release.date).toLocaleDateString('en-ET', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>

                {/* Optional image */}
                {release.image && (
                  <div className="mb-4">
                    <img
                      src={release.image}
                      alt={release.title}
                      className="rounded-lg max-w-full h-auto max-h-64 object-cover"
                    />
                  </div>
                )}

                <h2 className="text-xl font-bold text-gray-900 mb-2">{release.title}</h2>

                {/* Summary or short version */}
                <p className="text-gray-600 mb-4">{release.summary}</p>

                {/* Expandable full content */}
                {expandedId === release.id && release.fullContent && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg text-gray-700 border-l-4 border-red-500">
                    <p className="whitespace-pre-line">{release.fullContent}</p>
                  </div>
                )}

                <div className="flex items-center justify-between flex-wrap gap-4 mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    {release.pdfLink && release.pdfLink !== '#' && (
                      <a
                        href={release.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-red-600 font-medium hover:underline"
                      >
                        <FaFilePdf className="mr-2" />
                        Download PDF
                      </a>
                    )}
                  </div>

                  {release.fullContent && (
                    <button
                      onClick={() => toggleExpand(release.id)}
                      className="inline-flex items-center text-red-600 font-medium hover:underline"
                    >
                      {expandedId === release.id ? (
                        <>Show Less <FaChevronUp className="ml-2" /></>
                      ) : (
                        <>Read Full Release <FaChevronDown className="ml-2" /></>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PressReleasesPage;