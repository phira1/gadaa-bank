import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaCheckCircle, 
  FaHandshake,
  FaChartLine,
  FaBuilding,
  FaIndustry,
  FaCoins,
  FaSeedling,
  FaExchangeAlt,
  FaStar,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaBolt,
  FaClock,
  FaUsers
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const FinancingInvestment = () => {
  const products = [
    { 
      name: 'Murabaha Financing', 
      description: 'Cost-plus financing for trade and asset purchases',
      icon: FaExchangeAlt,
      principle: 'Mark-up financing'
    },
    { 
      name: 'Qard Al Hassan', 
      description: 'Benevolent loan for export pre-shipment financing',
      icon: FaHandshake,
      principle: 'Interest-free loan'
    },
    { 
      name: 'Salam Financing', 
      description: 'Forward financing for agricultural and commodity purchases',
      icon: FaSeedling,
      principle: 'Forward sale'
    },
    { 
      name: 'Istisna\'a Financing', 
      description: 'Manufacturing financing for construction and production',
      icon: FaIndustry,
      principle: 'Manufacturing contract'
    },
    { 
      name: 'Musharaka Financing', 
      description: 'Partnership financing for joint business ventures',
      icon: FaBuilding,
      principle: 'Joint venture'
    },
    { 
      name: 'Mudarabah Financing', 
      description: 'Investment partnership where bank provides capital',
      icon: FaCoins,
      principle: 'Profit-sharing'
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black py-3">
        <div className="container mx-auto px-3">
          <nav className="flex items-center space-x-2 text-xs">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-red-500">›</span>
            <Link to="/services" className="text-white/80 hover:text-white">Services</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Financing & Investment</span>
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
      <div className="container mx-auto px-3 pt-4">
        <Link 
          to="/services"
          className="inline-flex items-center text-red-600 hover:text-red-700 mb-4 text-sm"
        >
          <FaArrowLeft className="mr-1 md:mr-2" />
          <span className="text-xs md:text-sm">Back to Services</span>
        </Link>
      </div>

      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[35vh] md:h-[50vh] overflow-hidden">
        {/* Background Image */}
        <img
          src="/images/financing.jpg"
          alt="Financing & Investment"
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
        <div className="absolute inset-0 flex items-center p-4 md:p-8 lg:p-12 text-white">
          <div className="max-w-6xl mx-auto w-full">
            <div className="max-w-xl">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-600/90 to-black/90 rounded-full flex items-center justify-center mr-3 md:mr-4 backdrop-blur-sm border border-white/20">
                  <FaChartLine className="text-white text-lg md:text-xl lg:text-2xl" />
                </div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                  FINANCING & INVESTMENT
                </h1>
              </div>
              
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 font-light leading-relaxed">
                غدا الريان Gada Rayyan
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-3 py-4 md:py-6">
        {/* Introduction */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-red-50 to-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg mb-6 md:mb-8 lg:mb-10 border border-red-100"
        >
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center">
            <FaStar className="text-red-600 mr-2 md:mr-3 text-sm md:text-base" />
            Islamic Financing Solutions
          </h2>
          <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4">
            I. Financing & Investment Products: Comprehensive Sharia-compliant 
            financing solutions for businesses and individuals.
          </p>
          <div className="flex items-center text-red-600 text-xs md:text-sm">
            <FaChartLine className="mr-1 md:mr-2" />
            <span className="font-semibold">Halal Investment and Financing Options</span>
          </div>
        </motion.div>

        {/* Products Grid - 2x3 on Mobile */}
        <div className="mb-8 md:mb-10 lg:mb-12">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 md:mb-6 lg:mb-8 text-center px-2"
          >
            Financing <span className="text-red-600">Products</span>
          </motion.h2>
          
          {/* Grid Container - 2 columns on mobile, 3 on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 40, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  whileHover={{ 
                    y: -3,
                    scale: 1.01,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="p-3 md:p-4 border-l-2 md:border-l-4 border-red-500 bg-gradient-to-r from-red-50/50 to-transparent hover:from-red-50 transition-all duration-300 rounded-lg md:rounded-xl"
                >
                  <div className="flex flex-col h-full">
                    {/* Icon and Name Row */}
                    <div className="flex items-start space-x-2 md:space-x-3 mb-2 md:mb-3">
                      <motion.div 
                        className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-red-100 to-red-50 flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="text-sm md:text-base lg:text-lg text-red-600" />
                      </motion.div>
                      
                      <div className="flex-1">
                        <h3 className="text-sm md:text-base lg:text-lg font-bold text-gray-900 mb-1">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-xs md:text-sm mb-2 md:mb-3 flex-grow">
                      {product.description}
                    </p>
                    
                    {/* Principle and Arrow */}
                    <div className="flex items-center justify-between mt-auto pt-2 border-t border-red-100">
                      <motion.div 
                        className="flex items-center text-red-600"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <FaCheckCircle className="mr-1 md:mr-2 text-xs md:text-sm" />
                        <span className="text-xs md:text-sm font-semibold">{product.principle}</span>
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-red-600 text-xs md:text-sm font-semibold cursor-pointer"
                      >
                        →
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Islamic Financing Principles */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-red-600 to-black rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 text-white shadow-xl mb-6 md:mb-8 lg:mb-10"
        >
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6">Islamic Financing Principles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6 mb-4 md:mb-6 lg:mb-8">
            <motion.div 
              className="bg-white/10 p-4 md:p-6 rounded-lg md:rounded-xl"
              whileHover={{ y: -3, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="font-bold mb-3 md:mb-4 text-base md:text-lg">Key Concepts</h3>
              <ul className="space-y-2 md:space-y-3">
                {[
                  'Asset-backed transactions only',
                  'Risk-sharing between parties',
                  'No interest (Riba) involved',
                  'Ethical and socially responsible'
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <FaCheckCircle className="text-red-300 mr-2 md:mr-3 mt-0.5 flex-shrink-0 text-xs md:text-sm" />
                    <span className="text-xs md:text-sm lg:text-base">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 p-4 md:p-6 rounded-lg md:rounded-xl"
              whileHover={{ y: -3, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
            >
              <h3 className="font-bold mb-3 md:mb-4 text-base md:text-lg">Benefits</h3>
              <ul className="space-y-2 md:space-y-3">
                {[
                  'Sharia-compliant solutions',
                  'Transparent pricing',
                  'Flexible repayment terms',
                  'Supports real economic activity'
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <FaCheckCircle className="text-red-300 mr-2 md:mr-3 mt-0.5 flex-shrink-0 text-xs md:text-sm" />
                    <span className="text-xs md:text-sm lg:text-base">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Eligibility */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-6 md:mb-8 lg:mb-10"
        >
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center px-2">
            Who Can <span className="text-red-600">Apply?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
            {/* Individuals */}
            <motion.div 
              className="p-4 md:p-6 border-l-2 md:border-l-4 border-red-500 bg-gradient-to-r from-red-50/50 to-transparent rounded-lg md:rounded-xl"
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4 text-red-600 flex items-center">
                <FaUsers className="mr-2 text-sm md:text-base" />
                Individuals
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {[
                  'Personal asset financing',
                  'Home and vehicle purchases',
                  'Small business financing',
                  'Education financing'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-red-100 rounded-full flex items-center justify-center mr-2 md:mr-3 flex-shrink-0">
                      <span className="text-red-600 font-bold text-xs md:text-sm">✓</span>
                    </div>
                    <span className="text-gray-700 text-xs md:text-sm lg:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Businesses */}
            <motion.div 
              className="p-4 md:p-6 border-l-2 md:border-l-4 border-red-500 bg-gradient-to-r from-red-50/50 to-transparent rounded-lg md:rounded-xl"
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
            >
              <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4 text-red-600 flex items-center">
                <FaBuilding className="mr-2 text-sm md:text-base" />
                Businesses
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {[
                  'Trade and working capital',
                  'Project financing',
                  'Export-import financing',
                  'Equipment financing'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-red-100 rounded-full flex items-center justify-center mr-2 md:mr-3 flex-shrink-0">
                      <span className="text-red-600 font-bold text-xs md:text-sm">✓</span>
                    </div>
                    <span className="text-gray-700 text-xs md:text-sm lg:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-red-600 to-black rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 text-center text-white shadow-xl"
        >
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">
            Start Your Islamic Financing
          </h2>
          <p className="text-white/90 text-sm md:text-base lg:text-lg mb-4 md:mb-6 lg:mb-8">
            Explore Sharia-compliant financing options
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3 lg:gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-4 md:px-6 py-2 md:py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 shadow-lg transition duration-300 text-xs md:text-sm lg:text-base"
              >
                Apply for Financing
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-4 md:px-6 py-2 md:py-3 border border-white text-white font-bold rounded-lg hover:bg-white/10 transition duration-300 text-xs md:text-sm lg:text-base"
              >
                Consult Our Experts
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating CTA Button */}
      <motion.div 
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ rotate: 90, scale: 1.1 }}
      >
        <Link 
          to="/contact"
          className="group w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-red-600 to-black rounded-full flex items-center justify-center shadow-lg hover:shadow-xl"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <FaBolt className="text-white text-sm md:text-lg" />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};

export default FinancingInvestment;