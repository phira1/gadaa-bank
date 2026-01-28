import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, 
  FaMobileAlt, 
  FaCreditCard, 
  FaHandshake, 
  FaGlobe,
  FaChevronRight
} from 'react-icons/fa';

const Services = () => {
  const [activeTab, setActiveTab] = useState('digital');
  const [isAnimating, setIsAnimating] = useState(false);
  const [animatedItems, setAnimatedItems] = useState(Array(20).fill(false));
  const contentRef = useRef(null);
  const sectionRef = useRef(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const itemRefs = useRef([]);
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

  const tabs = [
    { id: 'digital', label: 'Digital Banking', icon: FaMobileAlt },
    { id: 'conventional', label: 'Conventional Banking', icon: FaCreditCard },
    { id: 'ifb', label: 'IFB Banking', icon: FaHandshake },
    { id: 'international', label: 'International Banking', icon: FaGlobe },
  ];

  const servicesData = {
    digital: {
      title: 'Digital Banking',
      description: 'The ability to manage finances online from your computer, tablet, or smartphone.',
      image: 'Atmcardimage.jpg',
      features: [
        { name: 'Mobile Banking App', icon: FaMobileAlt, desc: 'Full banking features on your smartphone' },
        { name: 'Online Banking Portal', icon: FaChevronRight, desc: 'Advanced web banking platform' },
        { name: 'Digital Wallet', icon: FaCreditCard, desc: 'Secure contactless payments' },
        { name: 'USSD Banking', icon: FaChevronRight, desc: 'Banking without internet' }
      ],
      link: '/digital',
    },
    conventional: {
      title: 'Conventional Banking',
      description: 'Different types of conventional banking services and unique saving products.',
      image: 'conventional.jpg',
      features: [
        { name: 'Savings Accounts', icon: FaChevronRight, desc: 'Grow money with competitive rates' },
        { name: 'Checking Accounts', icon: FaCreditCard, desc: 'Everyday banking with premium features' },
        { name: 'Personal Loans', icon: FaChevronRight, desc: 'Flexible loans for personal needs' },
        { name: 'Mortgage Services', icon: FaChevronRight, desc: 'Home financing solutions' }
      ],
      link: '/services',
    },
    ifb: {
      title: 'IFB Banking',
      description: 'Interest-free banking products in line with Islamic principles.',
      image: 'Ifbimage.jpg',
      features: [
        { name: 'Sharia Accounts', icon: FaHandshake, desc: 'Ethical banking compliance' },
        { name: 'Mudarabah Investments', icon: FaChevronRight, desc: 'Profit-sharing opportunities' },
        { name: 'Murabaha Financing', icon: FaChevronRight, desc: 'Cost-plus financing' },
        { name: 'Ijarah Services', icon: FaChevronRight, desc: 'Lease-based solutions' }
      ],
      link: '/services',
    },
    international: {
      title: 'International Banking',
      description: 'Connect to world markets with international banking products.',
      image: 'international-banking.jpg',
      features: [
        { name: 'Forex Accounts', icon: FaGlobe, desc: 'Multi-currency management' },
        { name: 'Intl. Transfers', icon: FaChevronRight, desc: 'Swift global money transfers' },
        { name: 'Trade Finance', icon: FaHandshake, desc: 'Import/export financing' },
        { name: 'Letters of Credit', icon: FaChevronRight, desc: 'Secure trade documents' }
      ],
      link: '/services',
    }
  };

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target);
            if (index !== -1 && !animatedItems[index]) {
              setAnimatedItems(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      itemRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, [animatedItems]);

  const handleTabClick = (tabId) => {
    if (isAnimating || activeTab === tabId) return;
    
    setIsAnimating(true);
    
    setTimeout(() => {
      setActiveTab(tabId);
      setIsAnimating(false);
    }, 300);
  };

  const activeService = servicesData[activeTab];

  return (
    <section id="services" className="py-8 md:py-16 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-3 md:px-4">
        {/* Header */}
        <div className="text-center mb-6 md:mb-12 px-2">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
            Products & <span className="text-red-600">Services</span>
          </h2>
          <p className="text-xs md:text-base text-gray-600 max-w-2xl mx-auto">
            Comprehensive banking solutions for all your needs
          </p>
        </div>

        {/* Tabs - Mobile: 2x2 Grid | Desktop: Horizontal Row */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-10">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <div 
                key={tab.id} 
                ref={el => itemRefs.current[index] = el}
                className={`w-[calc(50%-4px)] md:w-auto ${animatedItems[index] ? 'animate-fadeInUp opacity-100' : 'opacity-0'}`}
                style={animatedItems[index] ? { animationDelay: `${index * 50}ms` } : {}}
              >
                <button
                  onClick={() => handleTabClick(tab.id)}
                  className={`group relative w-full px-3 md:px-5 py-2.5 md:py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isMobile ? 'text-sm' : 'text-base'
                  } ${
                    isActive
                      ? 'bg-red-600 text-white shadow-md'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-sm'
                  } ${isAnimating ? 'cursor-not-allowed opacity-80' : ''}`}
                  disabled={isAnimating}
                >
                  <div className={`flex items-center ${isMobile ? 'justify-center space-x-1.5' : 'space-x-2'}`}>
                    <Icon className={`${isMobile ? 'text-sm' : 'text-base'} ${
                      isActive ? 'text-white' : 'text-red-600 group-hover:text-red-700'
                    }`} />
                    <span className={`${isMobile ? 'text-xs md:text-base whitespace-nowrap' : 'text-base whitespace-nowrap'}`}>
                      {tab.label}
                    </span>
                  </div>
                  
                  {/* Active Indicator */}
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-red-600 rounded-full animate-pulse"></div>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="relative">
          <div className={`transition-all duration-300 ${
            isAnimating 
              ? 'opacity-0 transform scale-95' 
              : 'opacity-100 transform scale-100'
          }`}>
            <div 
              ref={el => itemRefs.current[4] = el}
              className={`bg-white rounded-lg md:rounded-xl shadow-md md:shadow-lg border border-gray-100 overflow-hidden transition-all duration-700 ${
                animatedItems[4] ? 'animate-fadeInUp opacity-100' : 'opacity-0'
              }`}
              style={animatedItems[4] ? { animationDelay: '200ms' } : {}}
            >
              <div className="p-4 md:p-8">
                <div 
                  ref={contentRef}
                  className={`transition-all duration-300 ease-out ${
                    isAnimating 
                      ? 'opacity-0 transform translate-y-4' 
                      : 'opacity-100 transform translate-y-0'
                  }`}
                >
                  <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8">
                    {/* Image Section */}
                    <div className="space-y-4 md:space-y-6">
                      <div 
                        ref={el => itemRefs.current[5] = el}
                        className={`h-40 md:h-56 lg:h-64 rounded-lg md:rounded-xl overflow-hidden relative group transition-all duration-700 ${
                          animatedItems[5] ? 'animate-fadeInUp opacity-100' : 'opacity-0'
                        }`}
                        style={animatedItems[5] ? { animationDelay: '300ms' } : {}}
                      >
                        <img
                          src={`/images/${activeService.image}`}
                          alt={activeService.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                      
                      <div>
                        <h3 
                          ref={el => itemRefs.current[6] = el}
                          className={`font-bold text-gray-900 mb-2 transition-all duration-700 ${
                            animatedItems[6] ? 'animate-fadeInUp opacity-100' : 'opacity-0'
                          } ${isMobile ? 'text-lg md:text-2xl' : 'text-2xl'}`}
                          style={animatedItems[6] ? { animationDelay: '400ms' } : {}}
                        >
                          {activeService.title}
                        </h3>
                        <p 
                          ref={el => itemRefs.current[7] = el}
                          className={`text-gray-600 leading-relaxed transition-all duration-700 ${
                            animatedItems[7] ? 'animate-fadeInUp opacity-100' : 'opacity-0'
                          } ${isMobile ? 'text-xs md:text-base' : 'text-base'}`}
                          style={animatedItems[7] ? { animationDelay: '500ms' } : {}}
                        >
                          {activeService.description}
                        </p>
                      </div>
                    </div>

                    {/* Features Grid - Responsive 2x2 Layout */}
                    <div className="space-y-4 md:space-y-6">
                      <h4 
                        ref={el => itemRefs.current[8] = el}
                        className={`font-semibold text-gray-900 transition-all duration-700 ${
                          animatedItems[8] ? 'animate-fadeInUp opacity-100' : 'opacity-0'
                        } ${isMobile ? 'text-base md:text-xl' : 'text-xl'}`}
                        style={animatedItems[8] ? { animationDelay: '600ms' } : {}}
                      >
                        Key Features
                      </h4>
                      <div className="grid grid-cols-2 gap-3 md:gap-4">
                        {activeService.features.map((feature, index) => {
                          const FeatureIcon = feature.icon;
                          const isHovered = hoveredFeature === index;
                          
                          return (
                            <div
                              key={index}
                              ref={el => itemRefs.current[9 + index] = el}
                              className={`p-3 md:p-4 rounded-lg border transition-all duration-300 cursor-pointer group ${
                                isHovered
                                  ? 'bg-red-50 border-red-200 shadow-sm'
                                  : 'bg-gray-50 border-gray-100 hover:bg-gray-100'
                              } ${animatedItems[9 + index] ? 'animate-fadeInUp opacity-100' : 'opacity-0'}`}
                              onMouseEnter={() => setHoveredFeature(index)}
                              onMouseLeave={() => setHoveredFeature(null)}
                              style={animatedItems[9 + index] ? { 
                                animationDelay: `${700 + (index * 50)}ms` 
                              } : {}}
                            >
                              <div className={`flex ${isMobile ? 'flex-col items-center text-center' : 'items-start space-x-3'} mb-2 md:mb-3`}>
                                <div className={`${isMobile ? 'p-1.5 mb-2' : 'p-2'} rounded-lg transition-colors duration-300 flex-shrink-0 ${
                                  isHovered
                                    ? 'bg-red-600 text-white'
                                    : 'bg-white text-red-600 group-hover:bg-red-100'
                                }`}>
                                  <FeatureIcon className={isMobile ? "text-sm" : "text-base"} />
                                </div>
                                <h5 className={`font-semibold text-gray-900 ${
                                  isMobile ? 'text-xs md:text-base mb-1' : 'text-base'
                                }`}>
                                  {feature.name}
                                </h5>
                              </div>
                              
                              <p className={`text-gray-600 leading-relaxed ${
                                isMobile ? 'text-[10px] md:text-sm text-center' : 'text-sm'
                              }`}>
                                {feature.desc}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                      
                      {/* CTA Button */}
                      <Link
                        to={activeService.link}
                        className="inline-flex items-center justify-center w-full bg-red-600 text-white px-4 md:px-6 py-2.5 md:py-3.5 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 hover:shadow-lg mt-2 group animate-fadeInUp animate-delay-900"
                      >
                        <span className={`${isMobile ? 'text-sm md:text-base' : 'text-base'}`}>
                          Explore {activeService.title}
                        </span>
                        <FaArrowRight className={`ml-2 md:ml-3 group-hover:translate-x-2 transition-transform duration-300 ${
                          isMobile ? 'text-sm' : 'text-base'
                        }`} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Dots for Mobile */}
          <div className={`flex justify-center mt-6 space-x-2 md:space-x-3 ${isMobile ? 'block' : 'hidden'}`}>
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-red-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to ${tab.label}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        
        .animate-delay-900 {
          animation-delay: 900ms;
        }
        
        /* Mobile optimizations */
        @media (max-width: 640px) {
          /* Ensure 2x2 grid for tabs */
          .w-\\[calc\\(50\\%-4px\\)\\] {
            width: calc(50% - 4px);
          }
          
          /* Touch-friendly buttons */
          button, a {
            min-height: 44px;
            min-width: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          /* Prevent text overflow */
          .grid-cols-2 > div {
            min-height: 120px;
          }
          
          /* Improve feature card text */
          .text-\\[10px\\] {
            font-size: 10px;
            line-height: 1.3;
          }
        }
        
        /* Tablet optimizations */
        @media (min-width: 641px) and (max-width: 768px) {
          .grid-cols-2 > div {
            min-height: 140px;
          }
        }
        
        /* Reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .animate-fadeInUp,
          .animate-pulse,
          .group-hover\\:scale-105,
          .group-hover\\:translate-x-2 {
            animation: none;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;