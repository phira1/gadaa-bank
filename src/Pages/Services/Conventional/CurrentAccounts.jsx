import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaCheckCircle, 
  FaBriefcase, 
  FaUsers,
  FaShieldAlt,
  FaMobileAlt,
  FaLaptop,
  FaFileInvoiceDollar,
  FaCoins,
  FaWallet,
  FaCreditCard,
  FaArrowRight,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaHandHoldingUsd,
  FaChevronUp,
  FaBolt,
  FaSyncAlt,
  FaChartLine
} from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';

const CurrentAccounts = () => {
  const [balanceCount, setBalanceCount] = useState({ corporate: 0, individual: 0 });
  const [animated, setAnimated] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const featuresRef = useRef(null);
  const eligibilityRef = useRef(null);

  useEffect(() => {
    const observers = [];

    // Main section observer
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

    // Stats observer for counter animation
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate balance counters
            animateCounter('corporate', 1000);
            animateCounter('individual', 500);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Features observer for staggered animation
    const featuresObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger feature animations
            const featureCards = entry.target.querySelectorAll('.feature-card');
            featureCards.forEach((card, index) => {
              setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) mainObserver.observe(sectionRef.current);
    if (statsRef.current) statsObserver.observe(statsRef.current);
    if (featuresRef.current) featuresObserver.observe(featuresRef.current);
    if (eligibilityRef.current) featuresObserver.observe(eligibilityRef.current);

    observers.push(mainObserver, statsObserver, featuresObserver);

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [animated, controls]);

  const animateCounter = (type, target) => {
    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setBalanceCount(prev => ({
        ...prev,
        [type]: Math.floor(current)
      }));
    }, duration / steps);
  };

  const features = [
    {
      icon: FaFileInvoiceDollar,
      title: 'Non-Interest Bearing',
      description: 'It is Non-interest bearing account',
      animation: 'slideUp'
    },
    {
      icon: FaCoins,
      title: 'Corporate Minimum Balance',
      description: 'Opening minimum balance of Birr 1,000.00 for corporate customer type',
      animation: 'slideRight'
    },
    {
      icon: FaWallet,
      title: 'Individual Minimum Balance',
      description: 'Birr 500.00 minimum for individual customer type',
      animation: 'slideLeft'
    },
    {
      icon: FaBriefcase,
      title: 'Smooth Business Transactions',
      description: 'Facilitates business transaction very smoothly',
      animation: 'scale'
    },
    {
      icon: FaCreditCard,
      title: 'Cheque Operations',
      description: 'Can be operated by using cheque',
      animation: 'rotate'
    },
    {
      icon: FaMobileAlt,
      title: 'Digital Banking',
      description: 'Can be operated by Mobile and Internet banking',
      animation: 'bounce'
    },
  ];

  const eligibility = [
    {
      title: 'Natural Persons',
      description: 'All eligible natural persons',
      icon: FaUsers,
      delay: 0
    },
    {
      title: 'Legal Entities',
      description: 'All eligible legal persons',
      icon: FaBriefcase,
      delay: 100
    },
    {
      title: 'Verified Entities',
      description: 'Not found in Mal Operation List by NBE',
      icon: FaCheckCircle,
      delay: 200
    },
  ];

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
    },
    hover: { 
      y: -15, 
      scale: 1.05,
      transition: { type: "spring", stiffness: 400 }
    }
  };

  const titleVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 1
      }
    }
  };

  const cardVariants = {
    hidden: (custom) => ({
      y: custom === 'slideUp' ? 40 : 0,
      x: custom === 'slideRight' ? 40 : custom === 'slideLeft' ? -40 : 0,
      scale: custom === 'scale' ? 0.8 : 1,
      rotate: custom === 'rotate' ? -10 : 0,
      opacity: 0
    }),
    visible: (custom) => ({
      y: 0,
      x: 0,
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: custom === 'bounce' ? 200 : 100,
        damping: custom === 'bounce' ? 10 : 15,
        delay: custom.delay || 0,
        duration: 0.8
      }
    }),
    hover: {
      y: -8,
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const counterVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
        duration: 1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white" ref={sectionRef}>
      {/* Animated Background Elements */}
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

      {/* Breadcrumb with Animation */}
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
            <span className="text-white font-semibold">Current Accounts</span>
          </nav>
        </div>
        <motion.div 
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        />
      </motion.div>

      {/* Back Button */}
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

      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        {/* Background Image - Same as Digital Banking page */}
        <img
          src="/images/current-account.jpg"
          alt="Current Accounts"
          className="w-full h-full object-cover object-top md:object-center"
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = 'none';
            e.target.parentElement.style.background = 'linear-gradient(to bottom right, #dc2626, #000000)';
          }}
        />
        
        {/* Dark Overlay - Gradient from left to right for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent md:bg-gradient-to-r md:from-black/70 md:via-black/50 md:to-transparent"></div>

        {/* Text Content - Positioned on Left Side */}
        <div className="absolute inset-0 flex items-center p-6 md:p-12 text-white">
          <div className="max-w-6xl mx-auto w-full">
            <div className="max-w-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600/90 to-black/90 rounded-full flex items-center justify-center mr-4 backdrop-blur-sm border border-white/20">
                  <FaBriefcase className="text-white text-2xl" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Current Accounts
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
                Manage your everyday banking easily with a Gadaa Bank cheque book and more
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Description */}
          <motion.div 
            variants={itemVariants}
            className="mb-12"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
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
                Demand Accounts / Current Accounts
              </h2>
              <p className="text-gray-700 leading-relaxed">
                It is an account from which money can be withdrawn without notice, typically an active account catering for frequent deposits and withdrawals by Cheque.
              </p>
            </div>
          </motion.div>

          {/* Balance Requirements - Side by side boxes */}
          <motion.div 
            ref={statsRef}
            variants={itemVariants} 
            className="mb-12"
          >
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-8 text-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Minimum <span className="text-red-600">Balance</span> Requirements
            </motion.h2>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <motion.div 
                variants={counterVariants}
                className="flex-1 bg-gradient-to-br from-red-50 to-white rounded-xl p-6 shadow-lg border border-red-100 text-center relative overflow-hidden"
                whileHover="hover"
                custom="slideUp"
              >
                <motion.div 
                  className="absolute -top-8 -right-8 w-32 h-32 bg-red-500/5 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-100 to-white rounded-xl flex items-center justify-center mb-4 mx-auto shadow-md">
                    <FaBriefcase className="text-2xl text-red-600" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Birr <span className="text-red-600">{balanceCount.corporate.toLocaleString()}</span>.00
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Corporate Customers</h3>
                  <p className="text-gray-600 text-sm">Minimum opening balance</p>
                  
                  <motion.div 
                    className="mt-4 h-1.5 bg-red-100 rounded-full overflow-hidden"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  >
                    <div className="h-full bg-gradient-to-r from-red-600 to-red-800"></div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div 
                variants={counterVariants}
                className="flex-1 bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg border border-gray-200 text-center relative overflow-hidden"
                whileHover="hover"
                custom="slideUp"
              >
                <motion.div 
                  className="absolute -bottom-8 -left-8 w-32 h-32 bg-gray-900/5 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-white rounded-xl flex items-center justify-center mb-4 mx-auto shadow-md">
                    <FaUsers className="text-2xl text-gray-900" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Birr <span className="text-red-600">{balanceCount.individual.toLocaleString()}</span>.00
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Individual Customers</h3>
                  <p className="text-gray-600 text-sm">Minimum opening balance</p>
                  
                  <motion.div 
                    className="mt-4 h-1.5 bg-gray-200 rounded-full overflow-hidden"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.7, duration: 1 }}
                  >
                    <div className="h-full bg-gradient-to-r from-gray-900 to-black"></div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Features - Free floating, no boxes, 2 columns on mobile */}
          <motion.div 
            ref={featuresRef}
            variants={itemVariants} 
            className="mb-12"
          >
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-6 text-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Features and <span className="text-red-600">Benefits</span>
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card"
                  custom={{ animation: feature.animation, delay: index * 0.1 }}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-transparent p-3 md:p-4 text-gray-900 transform transition-all duration-300 hover:bg-gray-50 rounded-lg"
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div 
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-2 md:mb-3 bg-gradient-to-br from-red-50 to-red-100"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon className="text-base md:text-lg text-red-600" />
                    </motion.div>
                    <h3 className="text-sm md:text-base font-bold mb-1 md:mb-2 line-clamp-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed line-clamp-2">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Eligibility */}
          <motion.div 
            ref={eligibilityRef}
            variants={itemVariants} 
            className="mb-12"
          >
            <div className="bg-gradient-to-r from-red-50 to-white rounded-xl p-8 shadow-xl border border-red-100">
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-6 text-center"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Eligible <span className="text-red-600">Entities</span>
              </motion.h2>
              
              <motion.p 
                className="text-gray-700 text-center text-base sm:text-lg mb-8 max-w-3xl mx-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                All eligible natural and legal persons not found in Mal Operation List by NBE
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {eligibility.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-5 sm:p-6 shadow-lg border border-gray-200 text-center transform transition-all duration-500 hover:shadow-xl hover:border-red-200"
                    initial={{ y: 40, opacity: 0, scale: 0.9 }}
                    whileInView={{ y: 0, opacity: 1, scale: 1 }}
                    whileHover={{ y: -6, scale: 1.03 }}
                    transition={{ delay: index * 0.15, type: "spring" }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <motion.div 
                      className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-red-100 to-white rounded-xl flex items-center justify-center mb-4 mx-auto shadow-md"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="text-xl sm:text-2xl text-red-600" />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 truncate">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    
                    <motion.div 
                      className="mt-4 inline-flex items-center text-red-600 text-sm font-semibold"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <FaCheckCircle className="mr-2 text-sm" />
                      Eligible
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-br from-red-600 via-red-700 to-black rounded-2xl sm:rounded-3xl p-8 sm:p-10 text-center text-white shadow-xl relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {/* Floating particles */}
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
                Ready for Active Banking?
              </motion.h2>
              
              <motion.p 
                className="text-base sm:text-lg text-white/90 mb-8 sm:mb-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Did you want to enjoy with this account?
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
                    <span>Open An Account</span>
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
                    <span>Business Advisor</span>
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
                  { icon: FaEnvelope, title: 'Email', desc: 'info@gadaabank.com' },
                  { icon: FaPhoneAlt, title: 'Call Center', desc: '+251-XXX-XXX-XXX' }
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

      {/* Floating CTA Button */}
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

export default CurrentAccounts;