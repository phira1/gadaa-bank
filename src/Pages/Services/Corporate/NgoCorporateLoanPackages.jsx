import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaCheckCircle, 
  FaBuilding,
  FaUsers,
  FaHome,
  FaCar,
  FaUserTie,
  FaHandshake,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaStar,
  FaBolt,
  FaClock,
  FaShieldAlt,
  FaHandHoldingUsd
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const NgoCorporateLoanPackages = () => {
  const ngoLoans = [
    { 
      name: 'Mortgage Loan', 
      description: 'Home financing for NGO/institution staff',
      icon: FaHome,
      details: 'Residential property purchase'
    },
    { 
      name: 'Non-Commercial Vehicle Loan', 
      description: 'Personal vehicle financing',
      icon: FaCar,
      details: 'Staff personal transport'
    },
    { 
      name: 'Personal Loan', 
      description: 'General purpose staff financing',
      icon: FaUserTie,
      details: 'Various personal needs'
    },
  ];

  const corporateFinancing = [
    'Working Capital Financing',
    'Trade Finance Facilities',
    'Project Financing',
    'Equipment Leasing'
  ];

  const institutionalPartnerships = [
    'NGO Operational Financing',
    'Educational Institution Loans',
    'Healthcare Facility Financing',
    'Religious Organization Support'
  ];

  const contactInfo = [
    { icon: FaPhone, title: 'Phone', details: '+251-XXX-CORPORATE' },
    { icon: FaEnvelope, title: 'Email', details: 'corporate@gadaabank.com' },
    { icon: FaMapMarkerAlt, title: 'Head Office', details: 'Addis Ababa, Ethiopia' },
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
            <span className="text-white font-semibold">NGO & Corporate Loans</span>
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
          src="/images/ngo.jpg"
          alt="NGO & Corporate Loans"
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
                  <FaBuilding className="text-white text-2xl" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  NGO's, Institutions & Corporate
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
                Corporate Banking Services for Organizations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-red-50 to-white rounded-2xl p-6 md:p-8 shadow-lg mb-10 border border-red-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <FaStar className="text-red-600 mr-3" />
            Specialized Corporate Lending
          </h2>
          <p className="text-gray-700">
            Tailored loan packages for NGOs, institutions, and corporate entities 
            operating in Ethiopia, including special facilities for their staff members.
          </p>
        </motion.div>

        {/* NGO Staff Loans - 2x2 Grid on Mobile */}
        <div className="mb-10">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-gray-900 mb-6 text-center"
          >
            NGO's and Institutions <span className="text-red-600">Staff's Loan Packages</span>
          </motion.h2>
          
          {/* Grid - 2 columns on mobile, 3 on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {ngoLoans.map((loan, index) => {
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
                  className="p-4 border-l-4 border-red-500 bg-gradient-to-r from-red-50/50 to-transparent hover:from-red-100 transition-all duration-300 rounded-r-lg"
                >
                  <div className="flex flex-col">
                    <div className="flex items-center mb-3">
                      <motion.div 
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-red-100 to-red-50 mr-3 flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="text-red-600" />
                      </motion.div>
                      <h3 className="font-bold text-gray-900 text-sm md:text-lg">
                        {loan.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm mb-2">
                      {loan.description}
                    </p>
                    <div className="text-red-600 text-xs md:text-sm font-semibold">
                      {loan.details}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Corporate Loan Packages */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Corporate <span className="text-red-600">Loan Packages</span>
          </h2>
          
          <div className="bg-gradient-to-r from-red-600 to-black rounded-2xl p-6 md:p-8 text-white shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <FaBuilding className="mr-3" />
                  Corporate Financing Solutions
                </h3>
                <ul className="space-y-3">
                  {corporateFinancing.map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <FaCheckCircle className="text-red-300 mr-3 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <FaUsers className="mr-3" />
                  Institutional Partnerships
                </h3>
                <ul className="space-y-3">
                  {institutionalPartnerships.map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <FaCheckCircle className="text-red-300 mr-3 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* How We Can Help - Modernized Contact Info */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            HOW CAN WE <span className="text-red-600">HELP YOU?</span>
          </h2>
          <p className="text-gray-700 text-center text-lg mb-8 max-w-2xl mx-auto">
            Contact us at the Consulting WP office nearest to you or submit a business inquiry online.
          </p>
          
          {/* Modernized Contact Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 40, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="p-5 border-l-4 border-red-500 bg-gradient-to-r from-red-50/50 to-transparent hover:from-red-100 transition-all duration-300 rounded-r-lg"
                >
                  <div className="flex items-center">
                    <motion.div 
                      className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-red-100 to-red-50 mr-4 flex-shrink-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="text-red-600 text-lg" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{contact.title}</h3>
                      <p className="text-gray-700 text-sm md:text-base">{contact.details}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Choose Our <span className="text-red-600">Corporate Packages?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <motion.div 
              className="p-5 border-l-4 border-red-500 bg-gradient-to-r from-red-50/50 to-transparent"
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="font-bold text-lg mb-4 text-red-600 flex items-center">
                <FaShieldAlt className="mr-2" />
                For Organizations
              </h3>
              <ul className="space-y-3">
                {[
                  'Tailored loan structures',
                  'Bulk staff loan facilities',
                  'Relationship banking approach',
                  'Competitive corporate rates'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-red-600 font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="p-5 border-l-4 border-red-500 bg-gradient-to-r from-red-50/50 to-transparent"
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
            >
              <h3 className="font-bold text-lg mb-4 text-red-600 flex items-center">
                <FaHandHoldingUsd className="mr-2" />
                For Staff Members
              </h3>
              <ul className="space-y-3">
                {[
                  'Preferential interest rates',
                  'Simplified documentation',
                  'Payroll deduction options',
                  'Quick approval process'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-red-600 font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-red-600 to-black rounded-2xl p-8 md:p-10 text-center text-white shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8">
            Let's discuss your organizational financing needs
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
                <FaHandshake className="mr-2" />
                Request Consultation
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
                Submit Inquiry
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

export default NgoCorporateLoanPackages;