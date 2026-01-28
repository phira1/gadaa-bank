import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaCheckCircle, 
  FaUsers,
  FaCar,
  FaHome,
  FaTractor,
  FaTruck,
  FaIndustry,
  FaHandHoldingUsd,
  FaChartLine,
  FaUserTie,
  FaBuilding,
  FaStar,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaBolt,
  FaClock,
  FaShieldAlt
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const DiasporaLoanFacilities = () => {
  const individualLoans = [
    { 
      name: 'Diaspora Personal Loan', 
      description: 'Personal financing for various needs',
      icon: FaUserTie,
      details: 'Flexible repayment terms'
    },
    { 
      name: 'Diaspora Non-Commercial Vehicle Loan', 
      description: 'Financing for personal vehicles',
      icon: FaCar,
      details: 'New and used vehicles'
    },
    { 
      name: 'Diaspora Mortgage Loan', 
      description: 'Home financing for property purchase',
      icon: FaHome,
      details: 'Residential properties'
    },
  ];

  const projectLoans = [
    { 
      name: 'Commercial Vehicles', 
      description: 'Financing for business transport',
      icon: FaTruck,
      details: 'Trucks, buses, taxis'
    },
    { 
      name: 'Construction Machinery', 
      description: 'Equipment financing for construction',
      icon: FaIndustry,
      details: 'Excavators, cranes, loaders'
    },
    { 
      name: 'Agricultural Machinery', 
      description: 'Farm equipment financing',
      icon: FaTractor,
      details: 'Tractors, harvesters, irrigation'
    },
  ];

  const eligibleEntities = [
    'Ethiopian citizens living abroad',
    'Foreign nationals of Ethiopian origin',
    'Ethiopian diaspora organizations',
    'Business entities owned by diaspora',
    'Individuals with valid residence permits',
    'Those maintaining diaspora accounts'
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
            <span className="text-white font-semibold">Diaspora Loan Facilities</span>
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
          src="/images/loan.jpg"
          alt="Diaspora Loan Facilities"
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
                  <FaHandHoldingUsd className="text-white text-2xl" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Diaspora Loan Facilities
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
                Corporate Banking Services for Investment Back Home
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Eligible Entities */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-red-50 to-white rounded-2xl p-6 md:p-8 shadow-lg mb-10 border border-red-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FaUsers className="text-red-600 mr-3" />
            Eligible Entities
          </h2>
          <p className="text-gray-700 mb-6">
            Who is eligible to open Diaspora accounts and access loan facilities?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {eligibleEntities.map((entity, index) => (
              <motion.div 
                key={index}
                className="flex items-center"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <FaCheckCircle className="text-red-500 mr-3 flex-shrink-0" />
                <span className="text-gray-800">{entity}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Individual Loans - Listed Side by Side, No Boxes */}
        <div className="mb-10">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-gray-900 mb-6 text-center"
          >
            Diaspora <span className="text-red-600">Individual Loans</span>
          </motion.h2>
          
          {/* Grid - No Boxes, Clean Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {individualLoans.map((loan, index) => {
              const Icon = loan.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 40, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.01,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="p-5 border-l-4 border-red-500 bg-gradient-to-r from-red-50/50 to-transparent hover:from-red-100 transition-all duration-300 rounded-r-lg"
                >
                  <div className="flex items-start space-x-4">
                    <motion.div 
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-red-100 to-red-50 flex-shrink-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="text-lg md:text-xl text-red-600" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg md:text-xl mb-1">
                        {loan.name}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base mb-2">
                        {loan.description}
                      </p>
                      <div className="text-red-600 text-sm font-semibold">
                        {loan.details}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Project Loans - Listed Side by Side, No Boxes */}
        <div className="mb-10">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-gray-900 mb-6 text-center"
          >
            Diaspora <span className="text-red-600">Project Loans</span>
          </motion.h2>
          
          {/* Grid - No Boxes, Clean Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {projectLoans.map((loan, index) => {
              const Icon = loan.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 40, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.01,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="p-5 border-l-4 border-red-500 bg-gradient-to-r from-red-50/50 to-transparent hover:from-red-100 transition-all duration-300 rounded-r-lg"
                >
                  <div className="flex items-start space-x-4">
                    <motion.div 
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-red-100 to-red-50 flex-shrink-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="text-lg md:text-xl text-red-600" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg md:text-xl mb-1">
                        {loan.name}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base mb-2">
                        {loan.description}
                      </p>
                      <div className="text-red-600 text-sm font-semibold">
                        {loan.details}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Working Capital Note */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 bg-gradient-to-r from-red-600 to-black rounded-xl p-6 text-white"
          >
            <div className="flex items-center">
              <motion.div 
                className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 mr-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <FaChartLine className="text-white text-xl" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold">Diaspora Working Capital Loans</h3>
                <p className="text-white/90 mt-1 text-sm md:text-base">
                  Operating capital financing for diaspora-owned businesses in Ethiopia
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Loan Features */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Loan <span className="text-red-600">Features</span>
          </h2>
          
          <div className="bg-gradient-to-r from-red-50 to-white rounded-xl p-6 md:p-8 shadow-lg border border-red-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-4 text-red-600 flex items-center">
                  <FaStar className="mr-2" />
                  Benefits
                </h3>
                <ul className="space-y-3">
                  {[
                    'Competitive interest rates',
                    'Flexible repayment periods',
                    'Diaspora-specific terms',
                    'Quick processing for eligible applicants'
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <FaCheckCircle className="text-red-500 mr-3 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-4 text-red-600 flex items-center">
                  <FaShieldAlt className="mr-2" />
                  Requirements
                </h3>
                <ul className="space-y-3">
                  {[
                    'Valid diaspora account with Gadaa Bank',
                    'Proof of income/employment abroad',
                    'Project proposal/business plan',
                    'Collateral as per bank policy'
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <FaCheckCircle className="text-red-500 mr-3 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-red-600 to-black rounded-2xl p-8 md:p-10 text-center text-white shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Invest in Ethiopia
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8">
            Leverage our diaspora loan facilities to build your future back home
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 shadow-lg transition duration-300"
              >
                Apply for Loan
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition duration-300"
              >
                Download Application
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating CTA Button */}
      <motion.div 
        className="fixed bottom-6 right-6 z-40"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ rotate: 90, scale: 1.1 }}
      >
        <Link 
          to="/contact"
          className="group w-12 h-12 bg-gradient-to-br from-red-600 to-black rounded-full flex items-center justify-center shadow-lg hover:shadow-xl"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <FaBolt className="text-white text-lg" />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};

export default DiasporaLoanFacilities;