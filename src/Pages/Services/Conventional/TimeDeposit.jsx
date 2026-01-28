import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaCheckCircle, 
  FaChartLine, 
  FaCalendarAlt,
  FaFileAlt,
  FaCoins,
  FaPercent,
  FaHandshake,
  FaClock,
  FaArrowRight,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaUserCheck,
  FaUsers,
  FaShieldAlt,
  FaBalanceScale,
  FaHandHoldingUsd,
  FaChevronUp,
  FaBolt,
  FaSyncAlt
} from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';

const TimeDeposit = () => {
  const [depositAmount, setDepositAmount] = useState(0);
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
            // Animate deposit counter
            animateDepositCounter(100000);
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

  const animateDepositCounter = (target) => {
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
      setDepositAmount(Math.floor(current));
    }, duration / steps);
  };

  const features = [
    {
      icon: FaCalendarAlt,
      title: 'Fixed Term Period',
      description: 'Opened for fixed agreed period',
      animation: 'slideUp'
    },
    {
      icon: FaFileAlt,
      title: 'Certificate of Deposit',
      description: 'Certificate issued for the customer',
      animation: 'slideRight'
    },
    {
      icon: FaCoins,
      title: 'Minimum Balance',
      description: 'Minimum opening balance of 100,000.00',
      animation: 'slideLeft'
    },
    {
      icon: FaPercent,
      title: 'Attractive Interest',
      description: 'Higher rate than savings account',
      animation: 'scale'
    },
    {
      icon: FaHandshake,
      title: 'Negotiable Rates',
      description: 'Negotiable interest rate option',
      animation: 'rotate'
    },
    {
      icon: FaClock,
      title: '3 Month Minimum',
      description: 'Minimum 3 month period',
      animation: 'bounce'
    },
  ];

  const eligibility = [
    {
      title: 'Natural Persons',
      description: 'All natural persons',
      icon: FaUserCheck,
      delay: 0
    },
    {
      title: 'Legal Entities',
      description: 'All legal persons',
      icon: FaBalanceScale,
      delay: 100
    },
    {
      title: 'Minors with Guardians',
      description: 'Minors through parents/guardian',
      icon: FaUsers,
      delay: 200
    },
    {
      title: 'Special Needs',
      description: 'Interdicted persons through guardians',
      icon: FaShieldAlt,
      delay: 300
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
            <span className="text-white font-semibold">Time Deposit</span>
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
        {/* Background Image */}
        <img
          src="/images/time-deposit.jpg"
          alt="Time Deposit"
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
                  <FaChartLine className="text-white text-2xl" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Time Deposit
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
                Earn more with your savings by placing it in a fixed deposit to maximise its growth potential.
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
                Fixed Term Investment Account
              </h2>
              <p className="text-gray-700 leading-relaxed">
                It is a typically higher interest-bearing deposit account that has a specified date of maturity. 
                The funds in time deposit must be held for the fixed term to receive the agreed upon interest rate.
              </p>
            </div>
          </motion.div>

          {/* Deposit Amount */}
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
              Minimum <span className="text-red-600">Deposit</span> Amount
            </motion.h2>
            
            <div className="flex justify-center">
              <motion.div 
                variants={counterVariants}
                className="w-full max-w-2xl bg-gradient-to-br from-red-50 to-white rounded-xl p-8 shadow-lg border border-red-100 text-center relative overflow-hidden"
                whileHover="hover"
                custom="slideUp"
              >
                <motion.div 
                  className="absolute -top-8 -right-8 w-40 h-40 bg-red-500/5 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-white rounded-xl flex items-center justify-center mb-6 mx-auto shadow-md">
                    <FaCoins className="text-3xl text-red-600" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    Birr <span className="text-red-600">{depositAmount.toLocaleString()}</span>.00
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Minimum Opening Balance</h3>
                  <p className="text-gray-600">Start your high-yield investment</p>
                  
                  <motion.div 
                    className="mt-6 h-2 bg-red-100 rounded-full overflow-hidden"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                  >
                    <div className="h-full bg-gradient-to-r from-red-600 to-red-800"></div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Features & Benefits - 2x2 Grid on Mobile */}
          <motion.div 
            ref={featuresRef}
            variants={itemVariants} 
            className="mb-12"
          >
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Features and <span className="text-red-600">Benefits</span>
            </motion.h2>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  custom={{ animation: feature.animation, delay: index * 0.1 }}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-white p-3 md:p-4 rounded-lg shadow-md border border-gray-200 text-center transform transition-all duration-300 hover:shadow-lg hover:border-red-200"
                >
                  <div className="flex flex-col items-center text-center h-full">
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
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed line-clamp-2 flex-grow">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Eligible Entities - 2x2 Grid on Mobile */}
          <motion.div 
            ref={eligibilityRef}
            variants={itemVariants} 
            className="mb-12"
          >
            <div className="bg-gradient-to-r from-red-50 to-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-xl border border-red-100">
              <motion.h2 
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Eligible <span className="text-red-600">Entities</span>
              </motion.h2>
              
              <motion.p 
                className="text-gray-700 text-center text-sm md:text-base lg:text-lg mb-6 md:mb-8 max-w-3xl mx-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                All natural and legal persons not found in Mal Operation List by NBE
              </motion.p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
                {eligibility.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg md:rounded-xl p-4 md:p-5 shadow-lg border border-gray-200 text-center transform transition-all duration-300 hover:shadow-xl hover:border-red-200 h-full flex flex-col"
                    initial={{ y: 40, opacity: 0, scale: 0.9 }}
                    whileInView={{ y: 0, opacity: 1, scale: 1 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ delay: index * 0.15, type: "spring" }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <motion.div 
                      className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-red-100 to-white rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 mx-auto shadow-md"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="text-lg md:text-xl text-red-600" />
                    </motion.div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2 truncate">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed flex-grow mb-2 md:mb-3">
                      {item.description}
                    </p>
                    
                    <motion.div 
                      className="inline-flex items-center text-green-600 text-xs md:text-sm font-semibold"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <FaCheckCircle className="mr-1 md:mr-2 text-xs md:text-sm" />
                      <span>Eligible</span>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-br from-red-600 via-red-700 to-black rounded-2xl sm:rounded-3xl p-6 md:p-8 lg:p-10 text-center text-white shadow-xl relative overflow-hidden"
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
                className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white/10 rounded-full mb-6 backdrop-blur-sm border border-white/20"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity }
                }}
              >
                <FaHandHoldingUsd className="text-white text-xl md:text-2xl lg:text-3xl" />
              </motion.div>
              
              <motion.h2 
                className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-6"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Grow Your Wealth Today
              </motion.h2>
              
              <motion.p 
                className="text-sm md:text-base lg:text-lg text-white/90 mb-6 md:mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Did you want to enjoy higher returns with our time deposit account?
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/contact"
                    className="group px-6 py-2.5 md:px-8 md:py-3 lg:px-10 lg:py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 shadow-lg flex items-center justify-center gap-2 md:gap-3 text-xs md:text-sm lg:text-base transition-all duration-300"
                  >
                    <span>Open An Account</span>
                    <FaArrowRight className="group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform duration-300 text-xs" />
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/contact"
                    className="group px-6 py-2.5 md:px-8 md:py-3 lg:px-10 lg:py-4 border border-white text-white font-bold rounded-lg hover:bg-white/10 shadow-lg flex items-center justify-center gap-2 md:gap-3 text-xs md:text-sm lg:text-base transition-all duration-300"
                  >
                    <FaPhoneAlt className="text-xs" />
                    <span>Investment Advisor</span>
                  </Link>
                </motion.div>
              </div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {[
                  { icon: FaMapMarkerAlt, title: 'Visit Branch', desc: 'Multiple locations' },
                  { icon: FaEnvelope, title: 'Email', desc: 'invest@gadaabank.com' },
                  { icon: FaPhoneAlt, title: 'Call Center', desc: '+251-XXX-XXX-XXX' }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 md:space-x-4"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring" }}
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <contact.icon className="text-white text-sm md:text-base" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-xs md:text-sm lg:text-base">{contact.title}</div>
                      <div className="text-white/70 text-xs md:text-sm">{contact.desc}</div>
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
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ rotate: 90, scale: 1.1 }}
      >
        <Link 
          to="/contact"
          className="group w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-red-600 to-black rounded-full flex items-center justify-center shadow-lg hover:shadow-xl"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <FaBolt className="text-white text-lg md:text-xl" />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};

export default TimeDeposit;