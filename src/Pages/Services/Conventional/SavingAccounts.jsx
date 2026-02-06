import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaCheckCircle, 
  FaPiggyBank, 
  FaChartLine,
  FaUsers,
  FaShieldAlt,
  FaMobileAlt,
  FaLaptop,
  FaCreditCard,
  FaBook,
  FaPercentage,
  FaCalendarAlt,
  FaUserCheck,
  FaBalanceScale,
  FaRocket,
  FaStar,
  FaGem,
  FaCrown,
  FaArrowRight,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaHandHoldingUsd,
  FaCoins,
  FaWallet
} from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';

const SavingAccounts = () => {
  const [animated, setAnimated] = useState(false);
  const [interestRate, setInterestRate] = useState(0);
  
  // Create refs for scroll animations
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const statsRef = useRef(null);
  const featuresRef = useRef(null);
  const eligibilityRef = useRef(null);
  const ctaRef = useRef(null);
  
  // Use InView hooks
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isIntroInView = useInView(introRef, { once: true, amount: 0.2 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.3 });
  const isEligibilityInView = useInView(eligibilityRef, { once: true, amount: 0.3 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  // Controls for animations
  const heroControls = useAnimation();
  const introControls = useAnimation();
  const statsControls = useAnimation();
  const featuresControls = useAnimation();
  const eligibilityControls = useAnimation();
  const ctaControls = useAnimation();

  useEffect(() => {
    if (isHeroInView) {
      heroControls.start('visible');
      // Animate interest rate counter
      const targetRate = 4.5;
      const duration = 2000;
      const steps = 60;
      const increment = targetRate / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= targetRate) {
          current = targetRate;
          clearInterval(timer);
        }
        setInterestRate(parseFloat(current.toFixed(1)));
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isHeroInView, heroControls]);

  useEffect(() => {
    if (isIntroInView) introControls.start('visible');
    if (isStatsInView) statsControls.start('visible');
    if (isFeaturesInView) featuresControls.start('visible');
    if (isEligibilityInView) eligibilityControls.start('visible');
    if (isCtaInView) ctaControls.start('visible');
  }, [isIntroInView, isStatsInView, isFeaturesInView, isEligibilityInView, isCtaInView, introControls, statsControls, featuresControls, eligibilityControls, ctaControls]);

  const features = [
    {
      icon: FaPercentage,
      title: 'Monthly Compounded Interest',
      description: 'Interest bearing compounded monthly for maximum growth',
    },
    {
      icon: FaUsers,
      title: 'Individual or Joint Accounts',
      description: 'Opened individually or jointly for flexible banking',
    },
    {
      icon: FaMobileAlt,
      title: 'Mobile Banking',
      description: 'Full account access through our mobile app',
    },
    {
      icon: FaLaptop,
      title: 'Internet Banking',
      description: '24/7 online banking from any device',
    },
  ];

  const eligibility = [
    {
      title: 'All Natural Persons',
      description: 'Individual adults and citizens',
      icon: FaUserCheck
    },
    {
      title: 'Legal Entities',
      description: 'Businesses and organizations',
      icon: FaBalanceScale
    },
    {
      title: 'Minors with Guardians',
      description: 'Children through parents or guardians',
      icon: FaUsers
    },
    {
      title: 'Special Needs',
      description: 'Interdicted persons through legal guardians',
      icon: FaShieldAlt
    }
  ];

  const stats = [
    { value: '0', label: 'Minimum Opening Balance', suffix: 'ETB', icon: FaCoins },
    { value: '24/7', label: 'Account Access', suffix: '', icon: FaMobileAlt },
    { value: '50+', label: 'Branch Network', suffix: '', icon: FaMapMarkerAlt },
    { value: '99.9%', label: 'Uptime', suffix: '', icon: FaCheckCircle }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animated Background Particles */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-500/10 rounded-full"
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </motion.div>

      {/* Breadcrumb Navigation */}
      <motion.div 
        ref={heroRef}
        initial={{ opacity: 0, y: -20 }}
        animate={heroControls}
        variants={fadeInUp}
        className="relative bg-gradient-to-r from-black via-gray-900 to-black py-6 overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-10">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-white/80 hover:text-white font-medium transition-all duration-300 group">
              <span className="group-hover:underline">Home</span>
            </Link>
            <span className="text-red-500">›</span>
            <Link to="/services" className="text-white/80 hover:text-white font-medium transition-all duration-300 group">
              <span className="group-hover:underline">Services</span>
            </Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Saving Accounts</span>
          </nav>
        </div>
        
        {/* Animated underline */}
        <motion.div 
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </motion.div>

      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
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

      {/* Full-width Image Background with Text at Bottom */}
      <motion.div 
        ref={heroRef}
        className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden"
      >
        {/* Background Image */}
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={isHeroInView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          src="/images/savingaccountbackground.jpg"
          alt="Saving Accounts"
          className="w-full h-full object-cover object-top md:object-top object-right md:object-center"
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = 'none';
            e.target.parentElement.style.background = 'linear-gradient(to bottom right, #dc2626, #000000)';
          }}
        />
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

        {/* Text Content at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
          <div className="max-w-6xl mx-auto">
            {/* Title with Piggy Bank Icon */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center mb-4"
            >
              <motion.div 
                initial={{ scale: 0, rotate: -180 }}
                animate={isHeroInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
                className="w-16 h-16 bg-gradient-to-br from-red-600/90 to-black/90 rounded-full flex items-center justify-center mr-4 backdrop-blur-sm border border-white/20"
              >
                <FaPiggyBank className="text-white text-2xl" />
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-3xl md:text-4xl font-bold"
              >
                Saving Accounts
              </motion.h1>
            </motion.div>
            
            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-white/90 max-w-3xl font-light"
            >
              Your gateway to smart savings with premium features and security
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 relative">
        {/* Introductory Text */}
        <motion.div 
          ref={introRef}
          initial={{ opacity: 0, y: 40 }}
          animate={introControls}
          variants={fadeInUp}
          className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 md:p-10 shadow-2xl mb-12 md:mb-16 border border-gray-200"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10">
            <div className="lg:w-2/3">
              <motion.h2 
                variants={fadeInUp}
                initial="hidden"
                animate={isIntroInView ? "visible" : "hidden"}
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaGem className="text-red-600 mr-3 md:mr-4" />
                </motion.div>
                Smart Savings Solutions
              </motion.h2>
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate={isIntroInView ? "visible" : "hidden"}
              >
                <motion.p variants={itemVariants} className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                  We provide a wide range of Savings accounts with smart features. Open an account with us and enjoy premium banking!
                </motion.p>
                <motion.p variants={itemVariants} className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Savings Accounts: It is a regular saving account which allows customers to deposit money, keep it safe, and withdraw funds while earning interest.
                </motion.p>
              </motion.div>
            </div>
            <div className="lg:w-1/3 mt-6 lg:mt-0">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gradient-to-br from-red-600 to-black rounded-2xl p-6 md:p-8 text-center shadow-xl"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={isIntroInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                  className="text-4xl md:text-5xl font-black text-white mb-3 md:mb-4"
                >
                  {interestRate}%
                </motion.div>
                <div className="text-white/90 text-base md:text-lg font-semibold">Annual Interest Rate</div>
                <div className="text-white/70 text-sm md:text-base mt-1 md:mt-2">Compounded Monthly</div>
                <div className="mt-4 md:mt-6">
                  <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-white to-red-200"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div 
          ref={statsRef}
          variants={staggerContainer}
          initial="hidden"
          animate={statsControls}
          className="mb-12 md:mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={statItemVariants}
                custom={index}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-lg border border-gray-200"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-red-100 to-white rounded-lg md:rounded-xl mb-3 md:mb-4"
                >
                  <stat.icon className="text-xl md:text-2xl text-red-600" />
                </motion.div>
                <div className="text-2xl md:text-3xl font-black text-gray-900 mb-1 md:mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-600 font-medium text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features & Benefits */}
        <motion.div 
          ref={featuresRef}
          initial={{ opacity: 0, y: 40 }}
          animate={featuresControls}
          variants={fadeInUp}
          className="mb-12 md:mb-16"
        >
          <div className="text-center mb-6 md:mb-8">
            <motion.h2 
              variants={fadeInUp}
              initial="hidden"
              animate={isFeaturesInView ? "visible" : "hidden"}
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4"
            >
              Features & Benefits
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              initial="hidden"
              animate={isFeaturesInView ? "visible" : "hidden"}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto"
            >
              Experience banking designed for your convenience and growth
            </motion.p>
          </div>

          <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-gray-200">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate={isFeaturesInView ? "visible" : "hidden"}
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ y: -5 }}
                  className="flex flex-col p-3 md:p-4 hover:bg-red-50/50 rounded-lg transition-colors duration-300 h-full"
                >
                  <div className="mb-3 md:mb-4">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-10 h-10 md:w-12 md:h-12 bg-red-100 rounded-lg md:rounded-xl flex items-center justify-center mb-3"
                    >
                      <feature.icon className="text-red-600 text-base md:text-lg" />
                    </motion.div>
                    <h3 className="font-semibold text-gray-900 text-sm md:text-base mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm">
                      {feature.description}
                    </p>
                  </div>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center mt-auto text-xs md:text-sm text-green-600 font-medium"
                  >
                    <FaCheckCircle className="mr-2 text-xs md:text-sm" />
                    <span>Available</span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Eligible Entities */}
        <motion.div 
          ref={eligibilityRef}
          initial={{ opacity: 0, y: 40 }}
          animate={eligibilityControls}
          variants={fadeInUp}
          className="mb-12 md:mb-16"
        >
          <div className="text-center mb-6 md:mb-8">
            <motion.h2 
              variants={fadeInUp}
              initial="hidden"
              animate={isEligibilityInView ? "visible" : "hidden"}
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4"
            >
              Eligible Entities
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              initial="hidden"
              animate={isEligibilityInView ? "visible" : "hidden"}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto"
            >
              We pride ourselves on cultivating lasting client relationships built on trust and mutual respect
            </motion.p>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-red-100">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate={isEligibilityInView ? "visible" : "hidden"}
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"
            >
              {eligibility.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-3 md:p-4 rounded-lg md:rounded-xl border border-gray-200 text-center hover:border-red-200 transition-all duration-300 h-full flex flex-col"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-10 h-10 md:w-12 md:h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3"
                  >
                    <item.icon className="text-red-600 text-base md:text-lg" />
                  </motion.div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm flex-grow">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          ref={ctaRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={ctaControls}
          variants={scaleIn}
          className="relative rounded-3xl md:rounded-4xl overflow-hidden mb-12 md:mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-black"></div>
          
          {/* Floating elements */}
          <motion.div 
            className="absolute inset-0 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={isCtaInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-white/10 rounded-full"
                animate={{
                  y: [0, -100, 0],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
              />
            ))}
          </motion.div>

          <div className="relative z-10 p-6 md:p-12 lg:p-16 text-center">
            <div className="max-w-3xl mx-auto">
              <motion.div 
                initial={{ scale: 0, rotate: -180 }}
                animate={isCtaInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
                className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white/10 rounded-full backdrop-blur-sm mb-6 md:mb-8 border border-white/20"
              >
                <FaHandHoldingUsd className="text-white text-2xl md:text-3xl lg:text-4xl" />
              </motion.div>
              
              <motion.h2 
                variants={fadeInUp}
                initial="hidden"
                animate={isCtaInView ? "visible" : "hidden"}
                className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-4 md:mb-6"
              >
                Ready to Start Saving?
              </motion.h2>
              
              <motion.p 
                variants={fadeInUp}
                initial="hidden"
                animate={isCtaInView ? "visible" : "hidden"}
                transition={{ delay: 0.1 }}
                className="text-base md:text-lg lg:text-xl text-white/90 mb-8 md:mb-12 max-w-2xl mx-auto"
              >
                Did you want to enjoy premium banking with smart savings features?
              </motion.p>

              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate={isCtaInView ? "visible" : "hidden"}
                className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
              >
                <motion.div variants={itemVariants}>
                  <Link 
                    to="/contact"
                    className="group px-6 md:px-8 lg:px-12 py-3 md:py-4 lg:py-5 bg-white text-red-600 font-bold rounded-xl md:rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-2 md:gap-3 text-sm md:text-base"
                  >
                    <span>Open An Account Now</span>
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Link 
                    to="/contact"
                    className="group px-6 md:px-8 lg:px-12 py-3 md:py-4 lg:py-5 border-2 border-white text-white font-bold rounded-xl md:rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 md:gap-3 text-sm md:text-base"
                  >
                    <FaPhoneAlt />
                    <span>Speak with Advisor</span>
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate={isCtaInView ? "visible" : "hidden"}
                className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
              >
                {[
                  { icon: FaMapMarkerAlt, title: 'Visit Branch', desc: '50+ locations' },
                  { icon: FaEnvelope, title: 'Email Us', desc: 'savings@gadaabank.com' },
                  { icon: FaPhoneAlt, title: 'Call Center', desc: '+251-XXX-XXX-XXX' }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    custom={index}
                    className="flex items-center space-x-3 md:space-x-4"
                  >
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0"
                    >
                      <item.icon className="text-white text-base md:text-xl" />
                    </motion.div>
                    <div className="text-left">
                      <div className="text-white font-semibold text-sm md:text-base">{item.title}</div>
                      <div className="text-white/70 text-xs md:text-sm">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Contact Button */}
      <motion.div 
        className="fixed bottom-6 md:bottom-8 right-6 md:right-8 z-40"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, type: 'spring' }}
      >
        <Link 
          to="/contact"
          className="group w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-600 to-black rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaWallet className="text-white text-lg md:text-xl lg:text-2xl group-hover:rotate-12 transition-transform duration-500" />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};

export default SavingAccounts;