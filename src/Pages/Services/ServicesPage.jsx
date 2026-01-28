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

const ServicesPage = () => {
  const [animated, setAnimated] = useState(false);
  const [activeHover, setActiveHover] = useState(null);
  const [expandedCards, setExpandedCards] = useState({});
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);
  const progressRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <div className="min-h-screen relative overflow-hidden" ref={sectionRef}>
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div 
          className="h-full bg-gradient-to-r from-red-600 to-black transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
          ref={progressRef}
        ></div>
      </div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Breadcrumb with animation */}
      <div className={`bg-gradient-to-r from-black to-gray-900 py-4 md:py-6 relative overflow-hidden ${
        animated ? 'animate-slideInDown' : 'opacity-0'
      }`}>
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
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-transparent"></div>
      </div>

      {/* Three Image Sections - SUPER Compact on Mobile */}
      <div className="relative">
        {/* Mobile View - Vertical Stack with VERY Compact Height */}
        <div className="md:hidden">
          {imageSections.map((section, index) => (
            <div 
              key={section.id}
              className="relative overflow-hidden group h-[21vh] mb-2 last:mb-0"
            >
              {/* Background Image - Object center to show middle portion */}
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover object-center"
              />
              
              {/* Dark Overlay - Only at bottom for text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent"></div>

              {/* Text Content - SUPER Compact YouTube style */}
              <Link 
                to={section.link}
                className="absolute inset-0 flex flex-col justify-end p-3 text-white group"
              >
                <div className="transform transition-all duration-200">
                  <h3 className="text-sm font-bold mb-0.5 group-hover:text-red-300 transition-colors duration-200 truncate">
                    {section.title}
                  </h3>
                  <p className="text-white/90 text-[10px] opacity-80 group-hover:opacity-100 transition-opacity duration-200 truncate">
                    {section.description}
                  </p>
                  
                  {/* Click indicator - very small and subtle */}
                  <div className="flex items-center text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-1">
                    <span className="font-medium mr-1">Explore →</span>
                  </div>
                </div>
              </Link>

              {/* Overlay for entire card for better click target */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200"></div>
            </div>
          ))}
        </div>

        {/* Desktop View - Horizontal Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-0 w-full h-[80vh]">
          {imageSections.map((section, index) => (
            <div 
              key={section.id}
              className="relative overflow-hidden group"
            >
              {/* Background Image */}
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover object-top"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              {/* Text Content */}
              <Link 
                to={section.link}
                className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-white group"
              >
                <div className="transform transition-all duration-500 group-hover:translate-y-[-10px]">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-red-300 transition-colors duration-500">
                    {section.title}
                  </h3>
                  <div className="text-lg md:text-xl font-semibold text-red-300 mb-3 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                    {section.subtitle}
                  </div>
                  <p className="text-white/90 text-base md:text-lg max-w-md opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                    {section.description}
                  </p>
                  
                  {/* Click indicator */}
                  <div className="mt-4 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-sm font-medium mr-2">Click to explore</span>
                    <FaArrowRight className="transform group-hover:translate-x-2 transition-transform duration-500" />
                  </div>
                </div>
              </Link>

              {/* Divider lines between images */}
              {index < imageSections.length - 1 && (
                <div className="absolute right-0 top-0 bottom-0 w-px bg-white/20 z-10"></div>
              )}
            </div>
          ))}
        </div>

        {/* Section indicator - Desktop only */}
        <div className="hidden md:flex absolute bottom-6 left-1/2 transform -translate-x-1/2 space-x-2 z-20">
          {imageSections.map((_, index) => (
            <div 
              key={index}
              className="w-2 h-2 rounded-full bg-white/60"
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-3 md:px-4 py-6 md:py-20 relative">
        {/* Section Title */}
        <div className={`text-center mb-6 md:mb-20 ${
          animated ? 'animate-fadeInUp' : 'opacity-0'
        }`} style={{ animationDelay: '300ms' }}>
          <div className="inline-block relative">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 relative z-10">
              Our <span className="text-red-600">Banking</span> Services
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 md:w-32 lg:w-48 h-1 md:h-2 bg-gradient-to-r from-red-600 to-black rounded-full"></div>
          </div>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto mt-4 md:mt-10 px-2 md:px-4">
            Explore our comprehensive range of banking products and services
          </p>
        </div>

        {/* Our Banking Services - 2x2 Grid on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6 max-w-4xl mx-auto mb-10 md:mb-32">
          {serviceCategories.map((service, index) => (
            <div 
              key={service.id}
              className={`relative group ${
                animated ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: service.delay }}
              onMouseEnter={() => setActiveHover(service.id)}
              onMouseLeave={() => setActiveHover(null)}
            >
              {/* Service Card - WHITE BACKGROUND with brand colors */}
              <div className={`relative h-full transform transition-all duration-500 ${
                expandedCards[service.id] ? '-translate-y-2' : 'group-hover:-translate-y-1'
              }`}>
                {/* Badge - Red or Black based on category */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`${service.badgeBg} ${service.badgeText} px-3 py-1 rounded-full text-xs md:text-sm font-bold shadow`}>
                    {service.badge}
                  </div>
                </div>

                {/* Card - WHITE BACKGROUND */}
                <div 
                  className={`${service.bgColor} rounded-lg md:rounded-xl overflow-hidden shadow-lg hover:shadow-xl h-full border ${service.borderColor} cursor-pointer`}
                  onClick={() => toggleCardExpand(service.id)}
                >
                  {/* Card Header */}
                  <div className="p-4 md:p-6">
                    <div className="flex items-start mb-3 md:mb-4">
                      <div className={`w-10 h-10 md:w-12 md:h-12 flex-shrink-0 ${service.color === 'text-red-600' ? 'bg-red-50' : 'bg-gray-50'} rounded-lg flex items-center justify-center mr-3 md:mr-4`}>
                        <service.icon className={`text-base md:text-xl ${service.color}`} />
                      </div>
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
                      {expandedCards[service.id] ? (
                        <FaChevronDown className="text-gray-400 text-sm" />
                      ) : (
                        <FaChevronRight className="text-gray-400 text-sm" />
                      )}
                    </div>
                  </div>

                  {/* Expanded Features List */}
                  {expandedCards[service.id] && (
                    <div className="bg-gray-50 p-4 md:p-6 animate-fadeIn border-t border-gray-200">
                      <div className="mb-3 md:mb-4">
                        <h4 className="font-bold text-gray-900 mb-2 md:mb-3 flex items-center text-sm md:text-base">
                          <FaStar className={`${service.color} mr-2 text-sm`} />
                          Available Services
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li 
                              key={idx}
                              className="flex items-center justify-between group/feature bg-white p-2 rounded border border-gray-100"
                            >
                              <div className="flex items-center max-w-[70%]">
                                <div className={`w-2 h-2 rounded-full mr-2 ${
                                  feature.status === 'available' ? 'bg-green-500' : 'bg-yellow-500'
                                }`}></div>
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
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Subtle brand-colored glow effect */}
                <div className={`absolute inset-0 rounded-lg md:rounded-xl ${
                  service.color === 'text-red-600' ? 'bg-red-600' : 'bg-gray-900'
                } opacity-0 group-hover:opacity-5 blur-lg transition-opacity duration-700 -z-10`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section - 2x3 Grid on Mobile */}
        <div className={`max-w-6xl mx-auto mb-10 md:mb-32 ${
          animated ? 'animate-fadeInUp' : 'opacity-0'
        }`} style={{ animationDelay: '500ms' }}>
          <div className="text-center mb-6 md:mb-16 px-4">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-6">
              Why <span className="text-red-600">Gadaa Bank</span> Stands Out
            </h2>
            <p className="text-sm md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
              Our commitment to excellence is reflected in every aspect of our service
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`bg-white rounded-lg md:rounded-xl p-3 md:p-4 shadow-sm border border-gray-200 hover:border-red-300 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 ${
                  animated ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100 + 600}ms` }}
              >
                <div className={`${benefit.bg} w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-2 md:mb-3 mx-auto`}>
                  <benefit.icon className={`text-base md:text-lg ${benefit.color}`} />
                </div>
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1 md:mb-2 text-center">{benefit.title}</h3>
                <p className="text-gray-600 text-center text-xs md:text-sm">{benefit.description}</p>
                <div className="mt-2 md:mt-3 pt-2 border-t border-gray-100">
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 mx-0.5 text-xs" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className={`relative rounded-lg md:rounded-3xl overflow-hidden mb-6 md:mb-20 ${
          animated ? 'animate-fadeInUp' : 'opacity-0'
        }`} style={{ animationDelay: '800ms' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-black"></div>
          <div className="relative z-10 p-4 md:p-8 lg:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-16 md:h-16 bg-white/20 rounded-full backdrop-blur-sm mb-3 md:mb-6 border border-white/30">
                <FaCrown className="text-white text-lg md:text-2xl" />
              </div>
              <h2 className="text-lg md:text-2xl lg:text-4xl font-bold text-white mb-2 md:mb-4 lg:mb-6">
                Ready to Explore Our Services?
              </h2>
              <p className="text-xs md:text-sm lg:text-base text-white/90 mb-3 md:mb-8 max-w-2xl mx-auto px-2">
                Click on any service category above to see detailed features and products
              </p>
              <div className="flex flex-col sm:flex-row gap-2 md:gap-4 lg:gap-6 justify-center">
                <Link 
                  to="/contact"
                  className="group px-4 py-2 md:px-8 md:py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span className="flex items-center justify-center gap-2 text-sm md:text-base">
                    Contact Us
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
                <Link 
                  to="/about"
                  className="group px-4 py-2 md:px-8 md:py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-2 text-sm md:text-base">
                    Learn About Us
                    <FaHandshake className="group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </Link>
              </div>
              <p className="text-white/70 mt-3 md:mt-6 text-xs md:text-sm">
                Our customer service team is available 24/7 to assist you
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Help Button */}
      <div className={`fixed bottom-4 right-4 z-40 ${
        animated ? 'animate-bounceIn' : 'opacity-0'
      }`}>
        <Link 
          to="/contact"
          className="group w-12 h-12 bg-gradient-to-br from-red-600 to-black rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          <FaLightbulb className="text-white text-lg group-hover:rotate-45 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default ServicesPage;