import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaCheckCircle, 
  FaMoneyBillWave, 
  FaGlobe,
  FaChartLine,
  FaEnvelope,
  FaUser,
  FaShieldAlt,
  FaClock,
  FaArrowRight,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaExchangeAlt,
  FaCreditCard,
  FaDownload,
  FaUpload,
  FaBolt,
  FaSyncAlt,
  FaCoins,
  FaHandHoldingUsd,
  FaInfoCircle,
  FaDollarSign,
  FaReceipt,
  FaPlane,
  FaBriefcaseMedical,
  FaGraduationCap,
  FaUmbrellaBeach
} from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';

const ForexService = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [animated, setAnimated] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const featuresRef = useRef(null);
  const ratesRef = useRef(null);

  useEffect(() => {
    const observers = [];

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

    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger any counter animations here if needed
          }
        });
      },
      { threshold: 0.5 }
    );

    const featuresObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
    if (ratesRef.current) featuresObserver.observe(ratesRef.current);

    observers.push(mainObserver, statsObserver, featuresObserver);

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [animated, controls]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Forex request submitted:', formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ fullName: '', email: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const forexServices = [
    { 
      icon: FaDollarSign, 
      title: 'Purchase of FCY Cash Notes', 
      description: 'Forex bureau of the Gadaa Bank buy FCY Cash Notes at the prevailing exchange rate of day.',
      animation: 'slideUp'
    },
    { 
      icon: FaReceipt, 
      title: 'Sales of FCY Cash Notes', 
      description: 'Sell FCY Cash Notes for various expenses as per NBE directives and bank policies.',
      animation: 'slideRight'
    }
  ];

  const allowedPurposes = [
    {
      icon: FaPlane,
      title: 'Business Travel',
      description: 'Travel allowance for business purposes',
      color: 'from-red-50 to-red-100'
    },
    {
      icon: FaBriefcaseMedical,
      title: 'Medical Expenses',
      description: 'Healthcare and medical treatment costs',
      color: 'from-red-50 to-red-100'
    },
    {
      icon: FaGraduationCap,
      title: 'Educational Expenses',
      description: 'Tuition fees and educational costs',
      color: 'from-red-50 to-red-100'
    },
    {
      icon: FaUmbrellaBeach,
      title: 'Holiday Travel',
      description: 'Vacation and holiday travel expenses',
      color: 'from-red-50 to-red-100'
    },
    {
      icon: FaExchangeAlt,
      title: 'General Transfers',
      description: 'Other approved transfers as per directives',
      color: 'from-red-50 to-red-100'
    }
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
            <span className="text-white font-semibold">Forex Service</span>
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
        {/* Background Image - Updated to forex-service.jpg */}
        <img
          src="/images/forex-service.jpg"
          alt="Forex Services"
          className="w-full h-full object-cover object-top md:object-center"
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = 'none';
            e.target.parentElement.style.background = 'linear-gradient(to bottom right, #dc2626, #000000)';
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent md:bg-gradient-to-r md:from-black/70 md:via-black/50 md:to-transparent"></div>

        {/* Text Content - Positioned on Left Side */}
        <div className="absolute inset-0 flex items-center p-6 md:p-12 text-white">
          <div className="max-w-6xl mx-auto w-full">
            <div className="max-w-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600/90 to-black/90 rounded-full flex items-center justify-center mr-4 backdrop-blur-sm border border-white/20">
                  <FaExchangeAlt className="text-white text-2xl" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Forex Service
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
                Purchase and Sales of Foreign Currency (FCY) Cash Notes
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
                Foreign Currency Services
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Forex bureau of the Gadaa Bank buys FCY Cash Notes at the prevailing exchange rate of day.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Forex bureau of the Gadaa Bank also sells FCY Cash Notes for Business travel allowance, medical expenses, educational expenses, Holiday travel expenses, and General transfers as per updated NBE's Directives and the Bank's Policies and Procedures.
              </p>
            </div>
          </motion.div>

          {/* Forex Request Form */}
          <motion.div 
            variants={itemVariants} 
            className="mb-12"
            ref={statsRef}
          >
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-8 text-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Forex <span className="text-red-600">Rate</span> Request
            </motion.h2>

            <motion.div 
              className="w-full max-w-2xl mx-auto bg-gradient-to-br from-red-50 to-white rounded-xl p-8 shadow-lg border border-red-100 relative overflow-hidden"
              whileHover="hover"
              custom="slideUp"
            >
              <motion.div 
                className="absolute -top-8 -right-8 w-40 h-40 bg-red-500/5 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-white rounded-xl flex items-center justify-center mb-4 mx-auto shadow-md">
                    <FaExchangeAlt className="text-3xl text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    GET UPDATED CURRENCY EXCHANGE RATE IN YOUR EMAIL ADDRESS!
                  </h3>
                </div>
              
                {submitted ? (
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-red-50 border border-red-200 rounded-xl p-8 text-center"
                  >
                    <FaCheckCircle className="text-red-600 text-5xl mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Submitted!</h3>
                    <p className="text-gray-700">
                      We'll send updated currency exchange rates to <strong className="text-red-700">{formData.email}</strong>
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaUser className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="pl-10 w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaEnvelope className="text-gray-400" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="pl-10 w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300"
                          placeholder="Enter your email address"
                          required
                        />
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-gradient-to-r from-red-600 to-black text-white font-bold rounded-xl hover:shadow-xl transition-all duration-300 text-lg"
                    >
                      Get Exchange Rates
                    </motion.button>
                  </form>
                )}
                
                <div className="mt-6 text-center text-gray-600 text-sm flex items-center justify-center">
                  <FaShieldAlt className="inline-block mr-2 text-red-600" />
                  Your information is secure and will only be used for rate updates
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Forex Services */}
          <motion.div 
            ref={featuresRef}
            variants={itemVariants} 
            className="mb-12"
          >
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-8 text-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Our <span className="text-red-600">Forex</span> Services
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {forexServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="feature-card"
                  custom={{ animation: service.animation, delay: index * 0.1 }}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:border-red-200 transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-red-100 to-white rounded-xl flex items-center justify-center mb-6 mx-auto shadow-md"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon className="text-2xl text-red-600" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Allowed Purposes */}
          <motion.div 
            ref={ratesRef}
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
                Allowed <span className="text-red-600">Purposes</span> for FCY Sales
              </motion.h2>
              
              <motion.p 
                className="text-gray-700 text-center text-base sm:text-lg mb-8 max-w-3xl mx-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Forex bureau sells FCY Cash Notes for the following purposes as per NBE directives:
              </motion.p>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {allowedPurposes.map((purpose, index) => (
                  <motion.div
                    key={index}
                    className={`bg-gradient-to-br ${purpose.color} rounded-xl p-4 shadow-sm border border-red-100 text-center`}
                    initial={{ y: 40, opacity: 0, scale: 0.9 }}
                    whileInView={{ y: 0, opacity: 1, scale: 1 }}
                    whileHover={{ y: -6, scale: 1.03 }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <div className="flex flex-col items-center">
                      <motion.div 
                        className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <purpose.icon className="text-lg text-red-600" />
                      </motion.div>
                      <h3 className="text-sm font-bold text-gray-900 mb-1 line-clamp-1">
                        {purpose.title}
                      </h3>
                      <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                        {purpose.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="mt-8 p-6 bg-white rounded-xl border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-start">
                  <FaInfoCircle className="text-red-600 text-xl mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Important Information:</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      All FCY transactions are conducted in compliance with National Bank of Ethiopia (NBE) directives and Gadaa Bank's internal policies and procedures. Proper documentation is required for all FCY purchases and sales.
                    </p>
                  </div>
                </div>
              </motion.div>
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
                <FaExchangeAlt className="text-white text-2xl sm:text-3xl" />
              </motion.div>
              
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Need Forex Services?
              </motion.h2>
              
              <motion.p 
                className="text-base sm:text-lg text-white/90 mb-8 sm:mb-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Get expert assistance with currency exchange and FCY transactions
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
                    <FaPhoneAlt className="text-xs sm:text-sm" />
                    <span>Contact Forex Desk</span>
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
                    <FaMapMarkerAlt className="text-xs sm:text-sm" />
                    <span>Visit Our Branch</span>
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
                  { icon: FaPhoneAlt, title: 'Forex Hotline', desc: '+251-XXX-FOREX' },
                  { icon: FaEnvelope, title: 'Forex Email', desc: 'forex@gadaabank.com' },
                  { icon: FaClock, title: 'Operating Hours', desc: 'Mon-Fri: 8:30AM-4:30PM' }
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

export default ForexService;