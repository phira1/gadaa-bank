import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaCheckCircle, 
  FaShieldAlt,
  FaStar,
  FaLock,
  FaHandHoldingUsd,
  FaUniversity
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const WadiahSaving = () => {
  const features = [
    'Safe custody of your funds',
    'Bank guarantee of safety',
    'Sharia-compliant operations',
    'No interest involved (Riba-free)',
    'Easy withdrawals anytime',
    'Ethical banking practices'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-red-500">›</span>
            <Link to="/services" className="text-white/80 hover:text-white">Services</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Wadiah Saving Account</span>
          </nav>
        </div>
        <motion.div 
          className="h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        />
      </div>

      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6">
        <Link 
          to="/services"
          className="inline-flex items-center text-red-600 hover:text-red-700 mb-4"
        >
          <FaArrowLeft className="mr-2" />
          Back to Services
        </Link>
      </div>

      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        {/* Background Image */}
        <img
          src="/images/wadiah.jpg"
          alt="Wadiah Saving Account"
          className="w-full h-full object-cover object-top md:object-center"
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = 'none';
            e.target.parentElement.style.background = 'linear-gradient(to bottom right, #dc2626, #000000)';
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent md:bg-gradient-to-r md:from-black/70 md:via-black/50 md:to-transparent"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center p-6 md:p-12 text-white">
          <div className="max-w-6xl mx-auto w-full">
            <div className="max-w-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600/90 to-black/90 rounded-full flex items-center justify-center mr-4 backdrop-blur-sm border border-white/20">
                  <FaShieldAlt className="text-white text-2xl" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Wadiah Saving Account
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
                Safe custody account based on Islamic banking principles
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Main Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-600 to-black rounded-full mb-6 shadow-lg">
            <FaShieldAlt className="text-white text-4xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            <span className="text-red-600">Wadiah</span> Saving Account
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Safe custody account based on Islamic banking principles
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Description */}
          <div className="bg-gradient-to-r from-red-50 to-white rounded-2xl p-8 shadow-lg mb-8 border border-red-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FaStar className="text-red-600 mr-3" />
              Islamic Safe Keeping Account
            </h2>
            <p className="text-gray-700 mb-6">
              Wadiah is a safekeeping contract where you deposit funds with our bank for 
              safekeeping. The bank guarantees the safety of your funds while operating 
              on complete trust and transparency principles.
            </p>
            <div className="flex items-center text-red-600">
              <FaLock className="mr-2" />
              <span className="font-semibold">Bank Guarantee of Safety</span>
            </div>
          </div>

          {/* Features Grid - 2x3 on Mobile */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Key <span className="text-red-600">Features</span>
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
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center">
              <FaUniversity className="mr-3" />
              How Wadiah Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="text-center p-4 md:p-6 bg-white/10 rounded-xl">
                <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">1</div>
                <h3 className="font-bold mb-1 md:mb-2 text-sm md:text-base">Deposit Funds</h3>
                <p className="text-white/80 text-xs md:text-sm">You deposit money for safekeeping</p>
              </div>
              
              <div className="text-center p-4 md:p-6 bg-white/10 rounded-xl">
                <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">2</div>
                <h3 className="font-bold mb-1 md:mb-2 text-sm md:text-base">Bank Guarantee</h3>
                <p className="text-white/80 text-xs md:text-sm">Bank guarantees safety of funds</p>
              </div>
              
              <div className="text-center p-4 md:p-6 bg-white/10 rounded-xl">
                <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">3</div>
                <h3 className="font-bold mb-1 md:mb-2 text-sm md:text-base">Withdraw Anytime</h3>
                <p className="text-white/80 text-xs md:text-sm">Access your money when needed</p>
              </div>
            </div>

            <div className="bg-white/10 p-4 md:p-6 rounded-xl">
              <h3 className="font-bold mb-2 md:mb-3 text-base md:text-lg">Islamic Principle:</h3>
              <p className="text-white/90 text-sm md:text-base">
                Wadiah means "safekeeping" or "custody" in Islamic banking. It's a trust-based 
                contract where the bank acts as the custodian of your funds with a guarantee 
                to return them upon request.
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
                  <span className="text-sm md:text-base">Completed application form</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-red-600 font-bold">✓</span>
                  </div>
                  <span className="text-sm md:text-base">Agreement to Sharia principles</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-red-600 to-black rounded-2xl p-6 md:p-8 lg:p-10 text-center text-white shadow-xl">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">Open Your Wadiah Account</h2>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8">
              Experience secure, interest-free banking today
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link 
                to="/contact"
                className="px-6 md:px-8 py-2.5 md:py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 shadow-lg transition duration-300 flex items-center justify-center text-sm md:text-base"
              >
                <FaHandHoldingUsd className="mr-2" />
                Open Account
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

export default WadiahSaving;