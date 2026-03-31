import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaFilePdf } from 'react-icons/fa';
import { moaList } from '../../data/investorData';

const MOAPage = () => {
  const doc = moaList[0]; // assume only one for now

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-black to-gray-900 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-red-500">›</span>
            <Link to="/investors" className="text-white/80 hover:text-white">Investors</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Memorandum of Association</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Link to="/investors" className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 group">
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Investors
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Memorandum of Association</h1>
          <p className="text-gray-600">መመስረቻ ፅሁፍ</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="font-semibold text-gray-700">{doc.title}</h2>
              <span className="text-sm text-gray-500">{doc.fileSize}</span>
            </div>
            <div className="p-4">
              <a
                href={doc.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-95 transition-opacity"
              >
                <img
                  src={doc.image}
                  alt={doc.title}
                  className="w-full h-auto rounded-lg shadow-md"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/800x1000?text=Memorandum+of+Association";
                  }}
                />
              </a>
            </div>
            <div className="bg-red-50 px-6 py-4 text-center">
              <p className="text-gray-700">
                Click the image above to open the document, or{" "}
                <a
                  href={doc.pdfLink}
                  className="text-red-600 font-medium underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  click here
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MOAPage;