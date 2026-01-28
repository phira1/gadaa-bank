import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaClock } from 'react-icons/fa';

const ComponentName = () => {  // CHANGE THIS LINE
  const serviceName = "Service Name Here";  // CHANGE THIS LINE
  
  return (
    <div className="min-h-screen">
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav>
            <ol className="flex items-center space-x-2 text-sm">
              <li><Link to="/" className="text-red-600 hover:text-red-700 font-medium">Home</Link></li>
              <li className="text-gray-400">›</li>
              <li><Link to="/services" className="text-red-600 hover:text-red-700 font-medium">Services</Link></li>
              <li className="text-gray-400">›</li>
              <li className="text-gray-600 font-medium">{serviceName}</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <Link 
            to="/services"
            className="inline-flex items-center text-red-600 hover:text-red-700 mb-8"
          >
            <FaArrowLeft className="mr-2" />
            Back to Services
          </Link>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaClock className="text-red-600 text-2xl" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{serviceName}</h1>
              <p className="text-gray-600 mb-8">
                This service page is under development. Content will be added soon.
              </p>
              <div className="bg-red-50 p-4 rounded-lg mb-8">
                <p className="text-red-700 font-medium">Detailed information coming soon</p>
              </div>
              <Link 
                to="/services"
                className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition duration-300"
              >
                Return to Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentName;  // CHANGE THIS LINE