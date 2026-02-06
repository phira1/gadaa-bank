import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCheckCircle, 
  FaMobileAlt, 
  FaBuilding, 
  FaGlobe,
  FaArrowRight,
  FaShieldAlt,
  FaChartLine,
  FaUsers,
  FaBalanceScale,
  FaChevronRight,
  FaChevronDown,
  FaStar,
  FaRocket,
  FaHeart,
  FaAward,
  FaHandshake,
  FaLightbulb,
  FaCrown,
  FaGem,
  FaClock,
  FaExternalLinkAlt
} from 'react-icons/fa';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const ServicesPage = () => {
  const [animated, setAnimated] = useState(false);
  const [activeHover, setActiveHover] = useState(null);
  const [expandedCards, setExpandedCards] = useState({});
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);
  const progressRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Create refs for scroll animations
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const benefitsRef = useRef(null);
  const ctaRef = useRef(null);
  
  // Use InView hooks
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const isBenefitsInView = useInView(benefitsRef, { once: true, amount: 0.3 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  // Scroll progress animation
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Scroll progress indicator
    const handleScroll = () => {
      if (progressRef.current) {
        const scrolled = window.pageYOffset;
        const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrolled / maxHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animated]);

  const toggleCardExpand = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const serviceCategories = [
    {
      id: 'conventional',
      title: 'Conventional Banking',
      icon: FaBuilding,
      color: 'text-red-600',
      bgColor: 'bg-white',
      borderColor: 'border-red-100',
      badgeBg: 'bg-red-50',
      badgeText: 'text-red-600',
      description: 'Time-tested financial solutions with modern convenience and reliability.',
      features: [
        { name: 'Saving Accounts', status: 'available', link: '/services/saving-accounts' },
        { name: 'Current Accounts', status: 'available', link: '/services/current-accounts' },
        { name: 'Time Deposit', status: 'available', link: '/services/time-deposit' },
        { name: 'Personal Loans', status: 'available', link: '/services/personal-loans' },
        { name: 'Business Loans', status: 'available', link: '/services/business-loans' },
        { name: 'Guarantee Facilities', status: 'available', link: '/services/guarantee-facilities' }
      ],
      stats: '50+ Products',
      badge: 'Traditional',
      delay: '100ms'
    },
    {
      id: 'international',
      title: 'International Banking',
      icon: FaGlobe,
      color: 'text-gray-900',
      bgColor: 'bg-white',
      borderColor: 'border-gray-100',
      badgeBg: 'bg-black',
      badgeText: 'text-white',
      description: 'Global financial gateway connecting Ethiopia to worldwide opportunities.',
      features: [
        { name: 'Forex Service', status: 'available', link: '/services/forex-service' },
        { name: 'Trade Finance', status: 'available', link: '/services/trade-finance' },
        { name: 'Money Transfer', status: 'available', link: '/services/money-transfer' }
      ],
      stats: 'Global Reach',
      badge: 'Premium',
      delay: '200ms'
    },
    {
      id: 'ifb',
      title: 'Interest Free Banking',
      icon: FaBalanceScale,
      color: 'text-red-600',
      bgColor: 'bg-white',
      borderColor: 'border-red-100',
      badgeBg: 'bg-red-50',
      badgeText: 'text-red-600',
      description: 'Ethical banking aligned with Islamic principles and your values.',
      features: [
        { name: 'Deposit product', status: 'available', link: '/services/deposit-product' },
        { name: 'Wadiah Saving', status: 'available', link: '/services/wadiah-saving' },
        { name: 'Amanah', status: 'available', link: '/services/amanah' },
        { name: 'Mudarabah Saving Accounts', status: 'available', link: '/services/mudarabah-saving-accounts' },
        { name: 'Financing & investment', status: 'available', link: '/services/financing-investment' },
        { name: 'Other Services', status: 'available', link: '/services/other-services' }
      ],
      stats: 'Sharia Compliant',
      badge: 'Ethical',
      delay: '300ms'
    },
    {
      id: 'corporate',
      title: 'Corporate Banking Service',
      icon: FaUsers,
      color: 'text-gray-900',
      bgColor: 'bg-white',
      borderColor: 'border-gray-100',
      badgeBg: 'bg-black',
      badgeText: 'text-white',
      description: 'Tailored financial solutions for businesses, institutions, and corporate clients.',
      features: [
        { name: 'Diaspora Account', status: 'available', link: '/services/diaspora-account' },
        { name: 'Diaspora Loan Facilities', status: 'available', link: '/services/diaspora-loan-facilities' },
        { name: 'NGO\'s, Institutions & Corporate Loan Packages', status: 'available', link: '/services/ngo-corporate-loan-packages' }
      ],
      stats: 'B2B Focus',
      badge: 'Corporate',
      delay: '400ms'
    }
  ];

  const benefits = [
    {
      icon: FaShieldAlt,
      title: 'Bank-Level Security',
      description: 'Military-grade encryption and fraud protection',
      color: 'text-red-600',
      bg: 'bg-red-50'
    },
    {
      icon: FaChartLine,
      title: 'Competitive Edge',
      description: 'Best-in-market rates and terms',
      color: 'text-gray-900',
      bg: 'bg-gray-50'
    },
    {
      icon: FaUsers,
      title: 'Personalized Service',
      description: 'Dedicated relationship managers',
      color: 'text-red-600',
      bg: 'bg-red-50'
    },
    {
      icon: FaRocket,
      title: 'Digital Innovation',
      description: 'Cutting-edge banking technology',
      color: 'text-gray-900',
      bg: 'bg-gray-50'
    },
    {
      icon: FaHeart,
      title: 'Community Focus',
      description: 'Supporting local economic growth',
      color: 'text-red-600',
      bg: 'bg-red-50'
    },
    {
      icon: FaAward,
      title: 'Award Winning',
      description: 'Recognized excellence in banking',
      color: 'text-gray-900',
      bg: 'bg-gray-50'
    }
  ];

  // Three connected image sections
  const imageSections = [
    {
      id: 1,
      title: 'Digital Banking',
      subtitle: '',
      description: 'Comprehensive digital solutions for modern banking',
      image: '/images/gadaa-digital2.jpg',
      link: '/digital'
    },
    {
      id: 2,
      title: 'Personal Banking',
      subtitle: '',
      description: 'Accounts, loans and investment options',
      image: '/images/service pageimage2.jpg',
      link: '/services/saving-accounts'
    },
    {
      id: 3,
      title: 'Business Solutions',
      subtitle: '',
      description: 'Corporate banking and financial services',
      image: '/images/business-samson.jpg',
      link: '/services/business-loans'
    }
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

  const serviceItemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const imageSectionVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="min-h-screen relative overflow-hidden" ref={sectionRef}>
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-red-600 to-black"
          style={{ width: `${scrollProgress}%` }}
          ref={progressRef}
        ></motion.div>
      </div>

      {/* Animated Background Elements */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{ y: backgroundY }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 1 }}
            className="absolute w-1 h-1 bg-red-500/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          ></motion.div>
        ))}
      </motion.div>

      {/* Breadcrumb with animation */}
      <motion.div 
        ref={heroRef}
        initial={{ opacity: 0, y: -20 }}
        animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-black to-gray-900 py-4 md:py-6 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-10">
          <nav>
            <ol className="flex items-center space-x-3">
              <li>
                <Link to="/" className="text-white/80 hover:text-white font-medium transition-colors duration-300 group text-sm md:text-base">
                  <span className="group-hover:underline">Home</span>
                </Link>
              </li>
              <li className="text-red-500">
                <FaChevronRight className="text-xs md:text-sm" />
              </li>
              <li className="text-white font-semibold text-sm md:text-base">
                Products & Services
              </li>
            </ol>
          </nav>
        </div>
        <motion.div 
          initial={{ width: '0%' }}
          animate={isHeroInView ? { width: '100%' } : { width: '0%' }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-transparent"
        ></motion.div>
      </motion.div>

      {/* Three Image Sections */}
      <div className="relative" ref={heroRef}>
        {/* Mobile View */}
        <div className="md:hidden">
          {imageSections.map((section, index) => (
            <motion.div 
              key={section.id}
              variants={imageSectionVariants}
              custom={index}
              initial="hidden"
              animate={isHeroInView ? "visible" : "hidden"}
              className="relative overflow-hidden group h-[21vh] mb-2 last:mb-0"
            >
              <motion.img
                initial={{ scale: 1.1 }}
                animate={isHeroInView ? { scale: 1 } : { scale: 1.1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover object-center"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent"></div>

              <Link 
                to={section.link}
                className="absolute inset-0 flex flex-col justify-end p-3 text-white group"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="transform transition-all duration-200"
                >
                  <h3 className="text-sm font-bold mb-0.5 group-hover:text-red-300 transition-colors duration-200 truncate">
                    {section.title}
                  </h3>
                  <p className="text-white/90 text-[10px] opacity-80 group-hover:opacity-100 transition-opacity duration-200 truncate">
                    {section.description}
                  </p>
                  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="flex items-center text-[10px] mt-1"
                  >
                    <span className="font-medium mr-1">Explore →</span>
                  </motion.div>
                </motion.div>
              </Link>

              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.2 }}
                className="absolute inset-0 bg-black transition-all duration-200"
              ></motion.div>
            </motion.div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-3 gap-0 w-full h-[80vh]">
          {imageSections.map((section, index) => (
            <motion.div 
              key={section.id}
              variants={imageSectionVariants}
              custom={index}
              initial="hidden"
              animate={isHeroInView ? "visible" : "hidden"}
              className="relative overflow-hidden group"
            >
              <motion.img
                initial={{ scale: 1.2 }}
                animate={isHeroInView ? { scale: 1 } : { scale: 1.2 }}
                transition={{ duration: 1, delay: index * 0.1 }}
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover object-top"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              <Link 
                to={section.link}
                className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-white group"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  className="transform transition-all duration-500 group-hover:translate-y-[-10px]"
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-red-300 transition-colors duration-500">
                    {section.title}
                  </h3>
                  <div className="text-lg md:text-xl font-semibold text-red-300 mb-3 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                    {section.subtitle}
                  </div>
                  <p className="text-white/90 text-base md:text-lg max-w-md opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                    {section.description}
                  </p>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="mt-4 flex items-center"
                  >
                    <span className="text-sm font-medium mr-2">Click to explore</span>
                    <FaArrowRight className="transform group-hover:translate-x-2 transition-transform duration-500" />
                  </motion.div>
                </motion.div>
              </Link>

              {index < imageSections.length - 1 && (
                <div className="absolute right-0 top-0 bottom-0 w-px bg-white/20 z-10"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Section indicator */}
        <div className="hidden md:flex absolute bottom-6 left-1/2 transform -translate-x-1/2 space-x-2 z-20">
          {imageSections.map((_, index) => (
            <motion.div 
              key={index}
              initial={{ scale: 0 }}
              animate={isHeroInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: index * 0.1 + 0.8 }}
              className="w-2 h-2 rounded-full bg-white/60"
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-3 md:px-4 py-6 md:py-20 relative">
        {/* Section Title */}
        <motion.div 
          ref={servicesRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-20"
        >
          <div className="inline-block relative">
            <motion.h2 
              variants={fadeInUp}
              initial="hidden"
              animate={isServicesInView ? "visible" : "hidden"}
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 relative z-10"
            >
              Our <span className="text-red-600">Banking</span> Services
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              animate={isServicesInView ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 md:h-2 bg-gradient-to-r from-red-600 to-black rounded-full"
            ></motion.div>
          </div>
          <motion.p 
            variants={fadeInUp}
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto mt-4 md:mt-10 px-2 md:px-4"
          >
            Explore our comprehensive range of banking products and services
          </motion.p>
        </motion.div>

        {/* Our Banking Services */}
        <motion.div 
          ref={servicesRef}
          variants={staggerContainer}
          initial="hidden"
          animate={isServicesInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6 max-w-4xl mx-auto mb-10 md:mb-32"
        >
          {serviceCategories.map((service, index) => (
            <motion.div 
              key={service.id}
              variants={serviceItemVariants}
              custom={index}
              onMouseEnter={() => setActiveHover(service.id)}
              onMouseLeave={() => setActiveHover(null)}
            >
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative h-full"
              >
                {/* Badge */}
                <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  animate={isServicesInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20"
                >
                  <div className={`${service.badgeBg} ${service.badgeText} px-3 py-1 rounded-full text-xs md:text-sm font-bold shadow`}>
                    {service.badge}
                  </div>
                </motion.div>

                {/* Card */}
                <div 
                  className={`${service.bgColor} rounded-lg md:rounded-xl overflow-hidden shadow-lg hover:shadow-xl h-full border ${service.borderColor} cursor-pointer`}
                  onClick={() => toggleCardExpand(service.id)}
                >
                  <div className="p-4 md:p-6">
                    <div className="flex items-start mb-3 md:mb-4">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`w-10 h-10 md:w-12 md:h-12 flex-shrink-0 ${service.color === 'text-red-600' ? 'bg-red-50' : 'bg-gray-50'} rounded-lg flex items-center justify-center mr-3 md:mr-4`}
                      >
                        <service.icon className={`text-base md:text-xl ${service.color}`} />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <div className={`text-xs md:text-sm font-semibold ${service.color} mb-1`}>
                          {service.stats}
                        </div>
                        <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1 line-clamp-1">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="text-gray-500 text-xs md:text-sm">
                        {expandedCards[service.id] ? 'Click to collapse' : 'Click to expand'}
                      </span>
                      <motion.div
                        animate={{ rotate: expandedCards[service.id] ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaChevronDown className="text-gray-400 text-sm" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Expanded Features List */}
                  {expandedCards[service.id] && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gray-50 p-4 md:p-6 border-t border-gray-200"
                    >
                      <div className="mb-3 md:mb-4">
                        <h4 className="font-bold text-gray-900 mb-2 md:mb-3 flex items-center text-sm md:text-base">
                          <FaStar className={`${service.color} mr-2 text-sm`} />
                          Available Services
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <motion.li 
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="flex items-center justify-between group/feature bg-white p-2 rounded border border-gray-100"
                            >
                              <div className="flex items-center max-w-[70%]">
                                <motion.div 
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                                  className={`w-2 h-2 rounded-full mr-2 ${
                                    feature.status === 'available' ? 'bg-green-500' : 'bg-yellow-500'
                                  }`}
                                ></motion.div>
                                <span className="text-sm text-gray-700 group-hover/feature:text-gray-900 transition-colors truncate">
                                  {feature.name}
                                </span>
                              </div>
                              <Link 
                                to={feature.link}
                                className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center gap-1"
                                onClick={(e) => e.stopPropagation()}
                              >
                                Details
                                <FaExternalLinkAlt className="text-xs" />
                              </Link>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Subtle glow effect */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.05 }}
                  className={`absolute inset-0 rounded-lg md:rounded-xl ${
                    service.color === 'text-red-600' ? 'bg-red-600' : 'bg-gray-900'
                  } blur-lg -z-10`}
                ></motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div 
          ref={benefitsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isBenefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-10 md:mb-32"
        >
          <div className="text-center mb-6 md:mb-16 px-4">
            <motion.h2 
              variants={fadeInUp}
              initial="hidden"
              animate={isBenefitsInView ? "visible" : "hidden"}
              className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-6"
            >
              Why <span className="text-red-600">Gadaa Bank</span> Stands Out
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              initial="hidden"
              animate={isBenefitsInView ? "visible" : "hidden"}
              transition={{ delay: 0.1 }}
              className="text-sm md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Our commitment to excellence is reflected in every aspect of our service
            </motion.p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={isBenefitsInView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                custom={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-lg md:rounded-xl p-3 md:p-4 shadow-sm border border-gray-200 hover:border-red-300 hover:shadow-md transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`${benefit.bg} w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-2 md:mb-3 mx-auto`}
                >
                  <benefit.icon className={`text-base md:text-lg ${benefit.color}`} />
                </motion.div>
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1 md:mb-2 text-center">{benefit.title}</h3>
                <p className="text-gray-600 text-center text-xs md:text-sm">{benefit.description}</p>
                <div className="mt-2 md:mt-3 pt-2 border-t border-gray-100">
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 mx-0.5 text-xs" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          ref={ctaRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isCtaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="relative rounded-lg md:rounded-3xl overflow-hidden mb-6 md:mb-20"
        >
          {/* Animated background elements */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={isCtaInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-black"
          ></motion.div>
          
          <div className="relative z-10 p-4 md:p-8 lg:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <motion.div 
                initial={{ scale: 0, rotate: -180 }}
                animate={isCtaInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
                className="inline-flex items-center justify-center w-10 h-10 md:w-16 md:h-16 bg-white/20 rounded-full backdrop-blur-sm mb-3 md:mb-6 border border-white/30"
              >
                <FaCrown className="text-white text-lg md:text-2xl" />
              </motion.div>
              
              <motion.h2 
                variants={fadeInUp}
                initial="hidden"
                animate={isCtaInView ? "visible" : "hidden"}
                className="text-lg md:text-2xl lg:text-4xl font-bold text-white mb-2 md:mb-4 lg:mb-6"
              >
                Ready to Explore Our Services?
              </motion.h2>
              
              <motion.p 
                variants={fadeInUp}
                initial="hidden"
                animate={isCtaInView ? "visible" : "hidden"}
                transition={{ delay: 0.1 }}
                className="text-xs md:text-sm lg:text-base text-white/90 mb-3 md:mb-8 max-w-2xl mx-auto px-2"
              >
                Click on any service category above to see detailed features and products
              </motion.p>
              
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate={isCtaInView ? "visible" : "hidden"}
                className="flex flex-col sm:flex-row gap-2 md:gap-4 lg:gap-6 justify-center"
              >
              
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={isCtaInView ? { opacity: 0.7 } : { opacity: 0 }}
                transition={{ delay: 0.8 }}
                className="text-white/70 mt-3 md:mt-6 text-xs md:text-sm"
              >
                Our customer service team is available 24/7 to assist you
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Help Button */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        className="fixed bottom-4 right-4 z-40"
      >
        <Link 
          to="/contact"
          className="group w-12 h-12 bg-gradient-to-br from-red-600 to-black rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaLightbulb className="text-white text-lg group-hover:rotate-45 transition-transform duration-300" />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};

export default ServicesPage;