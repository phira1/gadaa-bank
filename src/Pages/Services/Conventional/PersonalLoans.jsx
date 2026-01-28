import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaCoins,
  FaArrowRight,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaShieldAlt,
  FaHandHoldingUsd,
  FaBolt,
  FaSyncAlt,
  FaInfoCircle
} from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';

const PersonalLoans = () => {
  const [animated, setAnimated] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const mainObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
            controls.start('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) mainObserver.observe(sectionRef.current);

    return () => {
      mainObserver.disconnect();
    };
  }, [animated, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 40, 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white" ref={sectionRef}>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute ${i % 3 === 0 ? 'w-3 h-3' : i % 3 === 1 ? 'w-2 h-2' : 'w-1 h-1'} ${
              i % 2 === 0 ? 'bg-red-500/10' : 'bg-gray-900/10'
            } rounded-full`}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <motion.div 
        className="bg-gradient-to-r from-black via-gray-900 to-black py-6 relative overflow-hidden"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-white/80 hover:text-white font-medium transition-all duration-300">
              Home
            </Link>
            <span className="text-red-500">›</span>
            <Link to="/services" className="text-white/80 hover:text-white font-medium transition-all duration-300">
              Services
            </Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Personal Loans</span>
          </nav>
        </div>
        <motion.div 
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        />
      </motion.div>

      <div className="container mx-auto px-4 pt-8">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
        >
          <Link 
            to="/services"
            className="inline-flex items-center text-red-600 hover:text-red-700 font-medium group transition-all duration-300"
          >
            <FaArrowLeft className="mr-3 transform group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="group-hover:underline">Back to All Services</span>
          </Link>
        </motion.div>
      </div>

      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src="/images/savingaccountbackground.jpg"
          alt="Personal Loans"
          className="w-full h-full object-cover object-top md:object-center"
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = 'none';
            e.target.parentElement.style.background = 'linear-gradient(to bottom right, #dc2626, #000000)';
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent md:bg-gradient-to-r md:from-black/70 md:via-black/50 md:to-transparent"></div>

        <div className="absolute inset-0 flex items-center p-6 md:p-12 text-white">
          <div className="max-w-6xl mx-auto w-full">
            <div className="max-w-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600/90 to-black/90 rounded-full flex items-center justify-center mr-4 backdrop-blur-sm border border-white/20">
                  <FaHandHoldingUsd className="text-white text-2xl" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Personal Loans
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
                Flexible financing solutions for your personal needs
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div 
            variants={itemVariants}
            className="mb-12"
          >
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="mr-3"
                >
                  <FaSyncAlt className="text-red-600 text-lg" />
                </motion.div>
                Personal Financing Solutions
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Gadaa Bank is developing comprehensive personal loan solutions tailored to meet your 
                financial needs. Our upcoming offerings will provide flexible financing options for 
                various personal requirements, with competitive terms and a customer-focused approach.
              </p>
              <motion.div 
                className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-blue-800 font-medium flex items-center">
                  <FaInfoCircle className="mr-2" />
                  Detailed loan information will be available soon. Please check back later or contact us for updates.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-br from-red-600 via-red-700 to-black rounded-2xl sm:rounded-3xl p-8 sm:p-10 text-center text-white shadow-xl relative overflow-hidden"
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/10 rounded-full"
                animate={{
                  y: [0, -80, 0],
                  x: [0, Math.random() * 40 - 20, 0],
                }}
                transition={{
                  duration: 6 + Math.random() * 4,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
              />
            ))}

            <div className="relative z-10 max-w-2xl mx-auto">
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full mb-6 sm:mb-8 backdrop-blur-sm border border-white/20"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity }
                }}
              >
                <FaHandHoldingUsd className="text-white text-2xl sm:text-3xl" />
              </motion.div>
              
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Get in Touch for More Information
              </motion.h2>
              
              <motion.p 
                className="text-base sm:text-lg text-white/90 mb-8 sm:mb-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Contact our loan specialists to learn more about our upcoming personal loan products
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-10">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/contact"
                    className="group px-8 py-3 sm:px-10 sm:py-4 bg-white text-red-600 font-bold rounded-lg sm:rounded-xl hover:bg-gray-100 shadow-lg flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base transition-all duration-300"
                  >
                    <span>Contact Us</span>
                    <FaArrowRight className="group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300 text-xs sm:text-sm" />
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/contact"
                    className="group px-8 py-3 sm:px-10 sm:py-4 border border-white text-white font-bold rounded-lg sm:rounded-xl hover:bg-white/10 shadow-lg flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base transition-all duration-300"
                  >
                    <FaPhoneAlt className="text-xs sm:text-sm" />
                    <span>Loan Advisor</span>
                  </Link>
                </motion.div>
              </div>

              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {[
                  { icon: FaMapMarkerAlt, title: 'Visit Branch', desc: 'Multiple locations' },
                  { icon: FaEnvelope, title: 'Email', desc: 'loans@gadaabank.com' },
                  { icon: FaPhoneAlt, title: 'Call Center', desc: 'Contact for details' }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-center space-x-3 sm:space-x-4"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring" }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <contact.icon className="text-white text-base sm:text-lg" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-sm sm:text-base">{contact.title}</div>
                      <div className="text-white/70 text-xs sm:text-sm">{contact.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ rotate: 90, scale: 1.1 }}
      >
        <Link 
          to="/contact"
          className="group w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-600 to-black rounded-full flex items-center justify-center shadow-lg hover:shadow-xl"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <FaBolt className="text-white text-lg sm:text-xl" />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};

export default PersonalLoans;