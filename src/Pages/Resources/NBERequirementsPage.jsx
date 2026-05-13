import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaFilePdf, FaDownload } from 'react-icons/fa';
import { reportService } from '../../services';
import { getAssetUrl } from '../../utils/assetUrl';

const NBERequirementsPage = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    reportService.getNBE()
      .then((response) => {
        if (!isMounted) return;
        const payload = response?.data ?? response ?? [];
        const items = Array.isArray(payload.data) ? payload.data : Array.isArray(payload) ? payload : [];
        setDocuments(items);
      })
      .catch((loadError) => {
        if (!isMounted) return;
        setError(loadError.message || 'Failed to load NBE documents.');
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const getDocumentLink = (doc) => doc.file_url || (doc.file_path ? getAssetUrl(doc.file_path) : '#');

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-black to-gray-900 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-red-500">›</span>
            <Link to="/resources" className="text-white/80 hover:text-white">Resources</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">NBE Requirements</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 pt-20 md:pt-24">
        <Link to="/resources" className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 group">
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Resources
        </Link>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-600 to-black rounded-full mb-6 shadow-lg">
            <FaFilePdf className="text-white text-4xl" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            NBE Requirements & Guidelines
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access National Bank of Ethiopia directives, circulars, and regulatory guidelines applicable to Gadaa Bank.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-16">
            <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center py-16 text-red-600">{error}</div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {documents.map((doc) => (
              <div key={doc.id} className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{doc.title}</h3>
                    <p className="text-gray-500 text-sm mb-2">{doc.year || 'NBE Document'}</p>
                    <p className="text-gray-400 text-xs">{doc.description || 'Official NBE document.'}</p>
                  </div>
                  <a
                    href={getDocumentLink(doc)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                  >
                    <FaDownload size={12} /> PDF
                  </a>
                </div>
              </div>
            ))}

            {documents.length === 0 && (
              <div className="col-span-full text-center text-gray-500 py-8">
                No NBE documents available.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NBERequirementsPage;