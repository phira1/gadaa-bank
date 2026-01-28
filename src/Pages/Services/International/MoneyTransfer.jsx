import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaCheckCircle, 
  FaMoneyBillWave, 
  FaGlobe,
  FaExchangeAlt,
  FaShieldAlt,
  FaClock,
  FaArrowRight,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaBuilding,
  FaUsers,
  FaBolt,
  FaSyncAlt,
  FaCoins,
  FaHandHoldingUsd,
  FaInfoCircle
} from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';

const MoneyTransfer = () => {
  const [animated, setAnimated] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const servicesRef = useRef(null);
  const partnersRef = useRef(null);

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

    const servicesObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const serviceCards = entry.target.querySelectorAll('.service-card');
            serviceCards.forEach((card, index) => {
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
    if (servicesRef.current) servicesObserver.observe(servicesRef.current);
    if (partnersRef.current) servicesObserver.observe(partnersRef.current);

    observers.push(mainObserver, servicesObserver);

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [animated, controls]);

  const moneyTransferServices = [
    { 
      icon: FaExchangeAlt, 
      title: 'Inward Transfers', 
      description: 'International Banking services (IBS) provides incoming transfer services to customer through its correspondent banking via SWIFT (GDAAETAA).',
      animation: 'slideUp'
    },
    { 
      icon: FaGlobe, 
      title: 'Outward Foreign Payments', 
      description: 'International Banking services (IBS) also provides foreign currency transfers to foreign beneficiaries on behalf of local customers against foreign exchange permit approved by the Bank via SWIFT (GDAAETAA).',
      animation: 'slideRight'
    },
    { 
      icon: FaMoneyBillWave, 
      title: 'Local Transfers', 
      description: 'Fast and reliable money transfer services to send money to other local banks and agents within Ethiopia.',
      animation: 'slideLeft'
    },
  ];

  const partners = [
    { 
      name: 'Dahabshiil',
      logo: '/images/Dahabshiil.png',
      description: 'Leading international money transfer operator providing worldwide coverage and convenience.',
      color: 'from-white to-gray-50'
    },
    { 
      name: 'Ria Money Transfer',
      logo: '/images/Ria Money Transfer.png',
      description: 'Global money transfer service offering reliable and secure international transfers.',
      color: 'from-white to-gray-50'
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

  const partnerCardVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.9 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    },
    hover: { 
      y: -10, 
      scale: 1.02,
      transition: { type: "spring", stiffness: 400, damping: 10 }
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
            <span className="text-white font-semibold">Money Transfer</span>
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
          src="/images/moneytransfer.jpg"
          alt="Money Transfer Services"
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
                  <FaMoneyBillWave className="text-white text-2xl" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Money Transfer
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
                Fast and reliable money transfer services to send money to other local banks and agents
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
                Money Transfer Services
              </h2>
              <p className="text-gray-700 leading-relaxed">
                By Using Gadaa Bank's fast and reliable Money transfer services, you can send money to other local banks and agents. Our Foreign Exchange Remittances services are classified into two major categories:
              </p>
            </div>
          </motion.div>

          {/* Money Transfer Services */}
          <motion.div 
            ref={servicesRef}
            variants={itemVariants} 
            className="mb-12"
          >
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-8 text-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Our <span className="text-red-600">Money Transfer</span> Services
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {moneyTransferServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="service-card"
                  custom={{ animation: service.animation, delay: index * 0.1 }}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:border-red-200 transition-all duration-300"
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-red-100 to-white rounded-xl flex items-center justify-center mb-6 mx-auto shadow-md"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className="text-2xl text-red-600" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-center">{service.description}</p>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                    <div className="inline-flex items-center text-red-600 text-sm font-semibold">
                      <FaCheckCircle className="mr-2 text-red-600" />
                      Available via SWIFT (GDAAETAA)
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* International Partners */}
          <motion.div 
            ref={partnersRef}
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
                International <span className="text-red-600">Partners</span>
              </motion.h2>
              
              <motion.p 
                className="text-gray-700 text-center text-lg mb-8 max-w-3xl mx-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Gadaa Bank has partnered with leading international operators to give you worldwide coverage and convenience
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {partners.map((partner, index) => (
                  <motion.div
                    key={index}
                    variants={partnerCardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, amount: 0.3 }}
                    className={`bg-gradient-to-br ${partner.color} rounded-xl p-8 shadow-lg border border-gray-300 hover:border-red-300 transition-all duration-300`}
                  >
                    <div className="flex flex-col items-center">
                      {/* Partner Logo with Fallback */}
                      <div className="w-full h-32 mb-6 flex items-center justify-center">
                        <img
                          src={partner.logo}
                          alt={`${partner.name} Logo`}
                          className="max-w-full max-h-full object-contain"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                            const fallbackDiv = document.createElement('div');
                            fallbackDiv.className = 'w-full h-32 flex items-center justify-center bg-gradient-to-br from-red-100 to-white rounded-lg';
                            fallbackDiv.innerHTML = `
                              <div class="text-center">
                                <div class="w-16 h-16 bg-gradient-to-br from-red-200 to-white rounded-xl flex items-center justify-center mb-2 mx-auto">
                                  <svg class="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                  </svg>
                                </div>
                                <span class="font-bold text-gray-900">${partner.name}</span>
                              </div>
                            `;
                            e.target.parentNode.appendChild(fallbackDiv);
                          }}
                        />
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{partner.name}</h3>
                      <p className="text-gray-600 text-center mb-4">{partner.description}</p>
                      
                      <div className="mt-4 pt-4 border-t border-gray-200 w-full">
                        <div className="flex items-center justify-center text-red-600 text-sm font-semibold">
                          <FaCheckCircle className="mr-2" />
                          Active Partnership
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="mt-8 p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-white rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <FaMapMarkerAlt className="text-xl text-red-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">For more information</h4>
                <p className="text-gray-700 mb-4">Please visit your nearest branch!</p>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/branches"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-black text-white font-bold rounded-xl hover:shadow-xl transition-all duration-300"
                  >
                    <FaMapMarkerAlt className="mr-2" />
                    <span>Locate Branch</span>
                  </Link>
                </motion.div>
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
                <FaMoneyBillWave className="text-white text-2xl sm:text-3xl" />
              </motion.div>
              
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Start Transferring Today
              </motion.h2>
              
              <motion.p 
                className="text-base sm:text-lg text-white/90 mb-8 sm:mb-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Experience fast, secure, and reliable money transfer services with Gadaa Bank
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
                    <span>Contact Transfer Desk</span>
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/branches"
                    className="group px-8 py-3 sm:px-10 sm:py-4 border border-white text-white font-bold rounded-lg sm:rounded-xl hover:bg-white/10 shadow-lg flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base transition-all duration-300"
                  >
                    <FaMapMarkerAlt className="text-xs sm:text-sm" />
                    <span>Locate Branch</span>
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
                  { icon: FaPhoneAlt, title: 'Transfer Hotline', desc: '+251-XXX-TRANSFER' },
                  { icon: FaEnvelope, title: 'Email', desc: 'transfer@gadaabank.com' },
                  { icon: FaClock, title: 'Service Hours', desc: 'Mon-Fri: 8:30AM-4:30PM' }
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

export default MoneyTransfer;