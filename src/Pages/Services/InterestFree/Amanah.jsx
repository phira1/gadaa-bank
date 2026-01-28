import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaCheckCircle, 
  FaHandshake,
  FaBook,
  FaFileSignature,
  FaPenFancy
} from 'react-icons/fa';

const Amanah = () => {
  const features = [
    'Non-profit sharing account',
    'Operated by cheque book',
    'For literate customers only',
    'Current/Checking account type',
    'Trust-based banking',
    'Transparent transactions'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-black to-gray-900 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-red-500">›</span>
            <Link to="/services" className="text-white/80 hover:text-white">Services</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Amanah Account</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          to="/services"
          className="inline-flex items-center text-red-600 hover:text-red-700 mb-8"
        >
          <FaArrowLeft className="mr-2" />
          Back to Services
        </Link>

        {/* Main Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-600 to-black rounded-full mb-6 shadow-lg">
            <FaHandshake className="text-white text-4xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            <span className="text-red-600">Amanah</span> Deposit Account
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Demand / Current Account based on trust principles
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Description */}
          <div className="bg-gradient-to-r from-red-50 to-white rounded-2xl p-8 shadow-lg mb-8 border border-red-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FaHandshake className="text-red-600 mr-3" />
              Trust-Based Current Account
            </h2>
            <p className="text-gray-700 mb-6">
              Is a non-profit sharing account that is opened by literate customers only 
              and operated by chequebook.
            </p>
            <div className="flex items-center text-red-600">
              <FaBook className="mr-2" />
              <span className="font-semibold">For Literate Customers Only</span>
            </div>
          </div>

          {/* Features Grid - 2x3 on Mobile */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Account <span className="text-red-600">Features</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-md border border-gray-200 hover:border-red-300 transition duration-300 h-full flex flex-col"
                >
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4">
                      <FaCheckCircle className="text-red-600 text-lg md:text-xl" />
                    </div>
                    <span className="font-medium text-gray-800 text-sm md:text-base flex-grow">
                      {feature}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-gradient-to-r from-red-600 to-black rounded-2xl p-6 md:p-8 text-white shadow-xl mb-10">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">How Amanah Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="bg-white/10 p-4 md:p-6 rounded-xl">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <FaBook className="text-white text-lg" />
                  </div>
                  <h3 className="font-bold text-base md:text-lg">Literacy Requirement</h3>
                </div>
                <p className="text-white/80 text-sm md:text-base">
                  Specifically designed for literate customers who can read, write, 
                  and understand banking documents.
                </p>
              </div>
              
              <div className="bg-white/10 p-4 md:p-6 rounded-xl">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <FaFileSignature className="text-white text-lg" />
                  </div>
                  <h3 className="font-bold text-base md:text-lg">Cheque Book Operation</h3>
                </div>
                <p className="text-white/80 text-sm md:text-base">
                  All transactions are processed through cheque book for 
                  proper documentation and record keeping.
                </p>
              </div>
            </div>

            <div className="bg-white/10 p-4 md:p-6 rounded-xl">
              <h3 className="font-bold mb-2 md:mb-3 text-base md:text-lg">Islamic Principle:</h3>
              <p className="text-white/90 text-sm md:text-base">
                Amanah means "trust" in Arabic. This account operates on complete trust 
                between the bank and customer, with transparent documentation through 
                cheque-based transactions.
              </p>
            </div>
          </div>

          {/* Requirements */}
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Requirements to Open</h2>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-red-600 font-bold">✓</span>
                  </div>
                  <span className="text-sm md:text-base">Must be literate (able to read and write)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-red-600 font-bold">✓</span>
                  </div>
                  <span className="text-sm md:text-base">Valid government-issued ID</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-red-600 font-bold">✓</span>
                  </div>
                  <span className="text-sm md:text-base">Minimum opening balance</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-red-600 font-bold">✓</span>
                  </div>
                  <span className="text-sm md:text-base">Agreement to cheque book operations</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-red-600 to-black rounded-2xl p-6 md:p-8 lg:p-10 text-center text-white shadow-xl">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">Open Your Amanah Account</h2>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8">
              Trust-based banking for literate customers
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link 
                to="/contact"
                className="px-6 md:px-8 py-2.5 md:py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 shadow-lg transition duration-300 flex items-center justify-center text-sm md:text-base"
              >
                <FaPenFancy className="mr-2" />
                Apply Now
              </Link>
              <Link 
                to="/contact"
                className="px-6 md:px-8 py-2.5 md:py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition duration-300 text-sm md:text-base"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amanah;