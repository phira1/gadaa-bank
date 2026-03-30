import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaFileAlt } from 'react-icons/fa';

const MOAPage = () => {
  const fileId = '1RG9drnjl5dQeWg_TVuurXOAixeuaPLHf';
  const driveUrl = `https://drive.google.com/file/d/${fileId}/view`;

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
        <Link 
          to="/investors"
          className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 group"
        >
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Investors
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-600 to-black rounded-full mb-6 shadow-lg">
              <FaFileAlt className="text-white text-3xl" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Memorandum of Association
            </h1>
            <p className="text-gray-600 mb-4">
              መመስረቻ ፅሁፍ
            </p>
          </div>

          {/* Clickable Image */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mb-8">
            <a 
              href={driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer hover:opacity-95 transition-opacity"
            >
              <img 
                src="/images/moafile1.jpg" 
                alt="Memorandum of Association Cover"
                className="w-full h-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/800x1000?text=Memorandum+of+Association";
                }}
              />
            </a>
          </div>

          <div className="bg-red-50 rounded-lg p-6 text-center">
            <p className="text-gray-700">
              Click the image above to open the document, or 
              <a 
                href={driveUrl} 
                className="text-red-600 font-medium underline ml-1" 
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
  );
};

export default MOAPage;