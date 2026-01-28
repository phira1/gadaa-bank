import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaCheckCircle, 
  FaUsers,
  FaUserFriends,
  FaCoins,
  FaStar,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaBolt,
  FaSyncAlt,
  FaClock
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const MudarabahSavingAccounts = () => {
  const accountTypes = [
    { 
      name: 'Atfal', 
      description: 'Children Mudarabah Saving', 
      image: 'atfal.jpg'
    },
    { 
      name: 'Nisa', 
      description: 'Women Mudarabah Saving', 
      image: 'nisa.jpg'
    },
    { 
      name: 'Shabaab', 
      description: 'Youth Mudarabah Saving', 
      image: 'shabaab.jpg'
    },
    { 
      name: 'Muaqil', 
      description: 'Handicapped Mudarabah Saving', 
      image: 'muaqil.jpg'
    },
    { 
      name: 'Mazarie', 
      description: 'Farmers Mudarabah Saving', 
      image: 'mazarie.jpg'
    },
    { 
      name: 'Mutaqaeid', 
      description: 'Retirees Mudarabah Saving', 
      image: 'mutaqaeid.jpg'
    },
    { 
      name: 'Taelim', 
      description: 'Education Mudarabah Saving', 
      image: 'taelim.jpg'
    },
    { 
      name: 'Labbayk', 
      description: 'Hajji & Umrah Mudarabah Saving', 
      image: 'labbayk.jpg'
    },
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
            <span className="text-white font-semibold">Mudarabah Saving Accounts</span>
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
          src="/images/mudarabah.jpg"
          alt="Mudarabah Saving Accounts"
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
                  <FaCoins className="text-white text-2xl" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Mudarabah Saving Accounts
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
                Profit-sharing savings for every stage of life
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
          className="bg-gradient-to-r from-red-50 to-white rounded-2xl p-8 shadow-lg mb-10 border border-red-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <FaStar className="text-red-600 mr-3" />
            Islamic Profit-Sharing Savings
          </h2>
          <p className="text-gray-700 mb-4">
            Gadaa Al Rayyan offers specialized Mudarabah savings accounts designed for 
            different segments of society. Each account follows Islamic profit-sharing 
            principles tailored to specific needs.
          </p>
          <div className="flex items-center text-red-600">
            <FaCoins className="mr-2" />
            <span className="font-semibold">Sharia-Compliant Profit Distribution</span>
          </div>
        </motion.div>

        {/* Account Types Grid - 4x3 Grid with Images */}
        <div className="mb-12">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Specialized <span className="text-red-600">Account Types</span>
          </motion.h2>
          
          {/* Grid Container */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {accountTypes.map((account, index) => (
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
                className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img
                    src={`/images/mudarabah-accounts/${account.image}`}
                    alt={account.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/placeholder-account.jpg';
                    }}
                  />
                  {/* Dark Overlay on Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="p-4 md:p-5">
                  <h3 className="font-bold text-gray-900 text-lg md:text-xl mb-1 text-center">
                    {account.name}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base text-center mb-3">
                    {account.description}
                  </p>
                  
                  {/* Check Circle with Animation */}
                  <motion.div 
                    className="flex items-center justify-center text-red-600"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <FaCheckCircle className="mr-2" />
                    <span className="text-sm font-semibold">Mudarabah</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How Mudarabah Works */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-red-600 to-black rounded-2xl p-8 text-white shadow-xl mb-10"
        >
          <h2 className="text-2xl font-bold mb-6">How Mudarabah Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            <motion.div 
              className="text-center p-4 md:p-6 bg-white/10 rounded-xl"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl font-bold mb-2">1</div>
              <h3 className="font-bold mb-2 text-lg">Customer Provides Capital</h3>
              <p className="text-white/80 text-sm md:text-base">You invest your savings as capital</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-4 md:p-6 bg-white/10 rounded-xl"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
            >
              <div className="text-3xl font-bold mb-2">2</div>
              <h3 className="font-bold mb-2 text-lg">Bank Manages Investment</h3>
              <p className="text-white/80 text-sm md:text-base">Bank invests in Sharia-compliant projects</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-4 md:p-6 bg-white/10 rounded-xl"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
            >
              <div className="text-3xl font-bold mb-2">3</div>
              <h3 className="font-bold mb-2 text-lg">Profit Sharing</h3>
              <p className="text-white/80 text-sm md:text-base">Profits shared according to agreed ratio</p>
            </motion.div>
          </div>

          <motion.div 
            className="bg-white/10 p-6 rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="font-bold mb-3 text-lg">Islamic Principle:</h3>
            <p className="text-white/90">
              Mudarabah is a partnership where one party provides capital (Rab-ul-Mal) 
              and the other provides labor/management (Mudarib). Profits are shared 
              according to pre-agreed ratios, while losses are borne only by the 
              capital provider.
            </p>
          </motion.div>
        </motion.div>

        {/* Key Features - Simplified */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Key <span className="text-red-600">Benefits</span>
          </h2>
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-4">
                  {[
                    'Profit-sharing based on Islamic principles',
                    'Specialized accounts for different needs',
                    'Sharia Advisory Board supervision',
                    'Regular profit distribution'
                  ].map((feature, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <FaCheckCircle className="text-red-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div>
                <ul className="space-y-4">
                  {[
                    'Transparent investment reporting',
                    'Halal investment only',
                    'Easy account opening process',
                    'Competitive profit rates'
                  ].map((feature, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <FaCheckCircle className="text-red-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
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
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-red-600 to-black rounded-2xl p-8 md:p-10 text-center text-white shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Choose Your Mudarabah Account
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8">
            Start profit-sharing savings tailored to your needs
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
                Open Account
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
                View Account Details
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

export default MudarabahSavingAccounts;