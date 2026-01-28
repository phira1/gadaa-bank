import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaCheckCircle, 
  FaGlobe,
  FaPassport,
  FaFileSignature,
  FaMoneyBillWave,
  FaExchangeAlt,
  FaHandshake,
  FaPlane,
  FaUserFriends,
  FaFileDownload,
  FaStar,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaBolt,
  FaClock,
  FaShieldAlt,
  FaUsers
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const DiasporaAccount = () => {
  const accountTypes = [
    { 
      name: 'Diaspora Current Account', 
      icon: FaMoneyBillWave,
      description: 'Operational account for daily transactions'
    },
    { 
      name: 'Non-Repatriable Birr Account', 
      icon: FaExchangeAlt,
      description: 'Local currency account for investments'
    },
    { 
      name: 'Fixed or Time Deposit Account', 
      icon: FaHandshake,
      description: 'Fixed-term savings with competitive returns'
    },
    { 
      name: 'Foreign Currency Saving Account', 
      icon: FaGlobe,
      description: 'Multi-currency savings account'
    },
  ];

  const currencies = [
    { name: 'US Dollar', symbol: 'USD', flag: '🇺🇸' },
    { name: 'Pound Sterling', symbol: 'GBP', flag: '🇬🇧' },
    { name: 'Euro', symbol: 'EUR', flag: '🇪🇺' },
  ];

  const benefits = [
    'Make local payments in Birr',
    'Make foreign payments for import',
    'Effect Transfer abroad',
    'Withdraw for travel in cash notes',
    'Convert into a Birr account at the prevailing exchange rate',
    'Serve as collateral or guarantee for loans or bids',
    'Can be withdrawn against a cheque written and a withdrawal slip',
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
            <span className="text-white font-semibold">Diaspora Account</span>
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
          src="/images/diaspora.jpg"
          alt="Diaspora Account"
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
                  <FaPlane className="text-white text-2xl" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Diaspora Account
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
                Corporate Banking Services for Ethiopians Abroad
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
            Banking for Ethiopians Worldwide
          </h2>
          <p className="text-gray-700 mb-4">
            Gadaa Bank offers specialized banking services for Ethiopians living abroad. 
            Our Diaspora accounts provide secure, convenient banking solutions to connect 
            you with your homeland.
          </p>
          <div className="flex items-center text-red-600">
            <FaShieldAlt className="mr-2" />
            <span className="font-semibold">Secure & Convenient Banking from Anywhere</span>
          </div>
        </motion.div>

        {/* Account Types - 2x2 Grid on Mobile, No Learn More Text */}
        <div className="mb-10">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-gray-900 mb-6 text-center"
          >
            Diaspora <span className="text-red-600">Account Types</span>
          </motion.h2>
          
          {/* Grid Container - 2x2 on mobile, 4x1 on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {accountTypes.map((account, index) => {
              const Icon = account.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 40, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  whileHover={{ 
                    y: -6,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="p-4 border-l-4 border-red-500 bg-gradient-to-r from-red-50/50 to-transparent hover:from-red-100 transition-all duration-300 rounded-r-lg"
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div 
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-3 bg-gradient-to-br from-red-100 to-red-50"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="text-lg md:text-xl text-red-600" />
                    </motion.div>
                    <h3 className="font-bold text-gray-900 text-sm md:text-lg mb-1">
                      {account.name}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                      {account.description}
                    </p>
                    {/* REMOVED: Learn More text and icon */}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Accepted Currencies - Single Line, No Boxes */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Accepted <span className="text-red-600">Currencies</span>
          </h2>
          
          {/* Single Line Layout - No Boxes */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {currencies.map((currency, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-2"
              >
                <span className="text-2xl">{currency.flag}</span>
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-lg">{currency.symbol}</div>
                  <div className="text-gray-600 text-sm">{currency.name}</div>
                </div>
                {index < currencies.length - 1 && (
                  <div className="hidden md:block w-px h-8 bg-gray-300"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Minimum Requirements */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Minimum <span className="text-red-600">Requirements</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <motion.div 
              className="bg-white rounded-xl p-5 md:p-6 shadow-sm border border-gray-200 text-center"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-red-600 mb-2">USD 100</div>
              <p className="text-gray-700 text-sm md:text-base">For an individual (or equivalent)</p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl p-5 md:p-6 shadow-sm border border-gray-200 text-center"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-red-600 mb-2">USD 5,000</div>
              <p className="text-gray-700 text-sm md:text-base">For fixed time deposit</p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl p-5 md:p-6 shadow-sm border border-gray-200 text-center"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-red-600 mb-2">USD 50</div>
              <p className="text-gray-700 text-sm md:text-base">For foreign currency saving</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Documents Required */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Required <span className="text-red-600">Documents</span>
          </h2>
          
          <div className="bg-gradient-to-r from-red-50 to-white rounded-xl p-6 md:p-8 shadow-lg border border-red-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-3">
                  {[
                    'Properly filled and signed application by account holder',
                    'Can be operated by power of attorney',
                    'Resident Permit/Certification',
                    'Valid passport and/or identification card'
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <FaCheckCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div>
                <ul className="space-y-3">
                  {[
                    'Certification of ownership entitlement for the organization',
                    'Article and memorandum of association',
                    'Recent passport-sized photographs',
                    'Proof of address (utility bill, bank statement)'
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <FaCheckCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Account <span className="text-red-600">Benefits</span>
          </h2>
          
          <div className="bg-gradient-to-r from-red-600 to-black rounded-2xl p-6 md:p-8 text-white shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <ul className="space-y-3">
                  {benefits.slice(0, 4).map((benefit, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <FaCheckCircle className="text-red-300 mr-3 mt-1 flex-shrink-0" />
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  {benefits.slice(4).map((benefit, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <FaCheckCircle className="text-red-300 mr-3 mt-1 flex-shrink-0" />
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* How to Credit Accounts */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Who Can <span className="text-red-600">Credit</span> Accounts?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <ul className="space-y-4">
                {[
                  'The account holder',
                  'The spouse of the account holder upon presentation of marriage certificate',
                  'The employer upon presentation of valid employment agreement',
                  'The business entity owned by the account holder'
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <FaUserFriends className="text-red-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="bg-red-50 rounded-xl p-6 border border-red-100">
              <h3 className="font-bold text-lg mb-4 text-red-600">Repatriation of the Deposit</h3>
              <p className="text-gray-700">
                Funds in Diaspora accounts can be repatriated according to the prevailing 
                regulations and exchange control directives of Ethiopia.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-red-600 to-black rounded-2xl p-8 md:p-10 text-center text-white shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Open Your Diaspora Account Today
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8">
            Connect with your homeland through secure banking
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
                <FaFileDownload className="mr-2" />
                Get Account Forms
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
                <FaPhoneAlt className="mr-2" />
                Contact Diaspora Desk
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

export default DiasporaAccount;