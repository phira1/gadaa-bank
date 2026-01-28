import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBriefcase, FaMapMarkerAlt, FaCreditCard, FaMobileAlt, FaNewspaper, FaHeadset, FaFileContract, FaUsers } from 'react-icons/fa';

const LookingFor = () => {
  const [animatedItems, setAnimatedItems] = useState(Array(8).fill(false));
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

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
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
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

  const services = [
    { 
      icon: FaBriefcase, 
      title: 'Vacancy', 
      description: 'Explore career opportunities and join our growing team',
      path: '/resources/vacancy'
    },
    { 
      icon: FaMapMarkerAlt, 
      title: 'Branch Location', 
      description: 'Find our nearest branch locations across the country',
      path: '/contact'
    },
    { 
      icon: FaCreditCard, 
      title: 'ATM Locations', 
      description: 'Locate ATMs for convenient cash access anytime',
      path: '/digital/atm'
    },
    { 
      icon: FaMobileAlt, 
      title: 'Download the App', 
      description: 'Get our mobile banking app for on-the-go banking',
      path: '/digital/mobile-banking'
    },
    { 
      icon: FaNewspaper, 
      title: 'News', 
      description: 'Stay updated with the latest news and announcements',
      path: '/resources/news'
    },
    { 
      icon: FaHeadset, 
      title: 'Contact Center', 
      description: 'Get assistance from our 24/7 customer support team',
      path: '/contact'
    },
    { 
      icon: FaFileContract, 
      title: 'Terms and Tariff', 
      description: 'Review our terms, conditions, and service tariffs',
      path: '/terms'
    },
    { 
      icon: FaUsers, 
      title: 'Community Banking', 
      description: 'Learn about our community-focused banking services',
      path: '/about/other-profiles'
    },
  ];

  return (
    <section id="looking" className="py-8 md:py-16 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-3 md:px-4">
        <h2 className="text-xl md:text-3xl font-bold text-center text-gray-900 mb-2 md:mb-4 px-2">
          What Are You Looking For?
        </h2>
        <p className="text-sm md:text-lg text-gray-600 text-center max-w-2xl mx-auto mb-6 md:mb-8 px-2">
          Find exactly what you need with our comprehensive services and resources
        </p>

        <div className="max-w-6xl mx-auto mt-6 md:mt-12 px-1">
          {/* Mobile: 2 columns, 4 rows | Desktop: 2 columns, 4 rows (same layout) */}
          <div className="grid grid-cols-2 gap-3 md:gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <Link
                to={service.path}
                key={index}
                ref={el => itemRefs.current[index] = el}
                className={`block bg-gray-50 rounded-lg p-3 md:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-red-500 cursor-pointer group ${
                  animatedItems[index] ? 'animate-fadeInUp opacity-100' : 'opacity-0'
                }`}
                style={animatedItems[index] ? { animationDelay: `${index * 50}ms` } : {}}
              >
                <div className="flex items-start space-x-2 md:space-x-4">
                  <div className={`${
                    isMobile 
                      ? 'bg-red-600 w-8 h-8 md:w-14 md:h-14' 
                      : 'bg-red-600 w-14 h-14'
                  } rounded-full flex items-center justify-center text-white transition-transform duration-300 flex-shrink-0 group-hover:scale-110 group-hover:bg-red-700`}>
                    <service.icon size={isMobile ? 14 : 22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`${
                      isMobile 
                        ? 'text-xs md:text-lg font-semibold' 
                        : 'text-lg font-semibold'
                    } text-gray-900 mb-1 md:mb-2 group-hover:text-red-600 transition-colors duration-300 truncate`}>
                      {service.title}
                      <span className="ml-1 md:ml-2 text-xs text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        →
                      </span>
                    </h3>
                    <p className={`${
                      isMobile 
                        ? 'text-[10px] md:text-sm' 
                        : 'text-sm'
                    } text-gray-600 line-clamp-2 md:line-clamp-3`}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Add CSS styles for animations */}
      <style jsx>{`
        /* Animation classes */
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Line clamp utilities */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Mobile optimizations */
        @media (max-width: 640px) {
          .grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.5rem;
          }
          
          /* Ensure text doesn't overflow */
          .truncate {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          
          /* Touch-friendly sizing */
          a {
            min-height: 80px;
          }
        }
        
        /* Tablet optimizations */
        @media (min-width: 641px) and (max-width: 768px) {
          .grid-cols-2 {
            gap: 0.75rem;
          }
          
          a {
            min-height: 120px;
          }
        }
        
        /* Ensure icons don't shrink */
        .flex-shrink-0 {
          flex-shrink: 0;
        }
        
        /* Prevent text overflow */
        .min-w-0 {
          min-width: 0;
        }
        
        /* Reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .animate-fadeInUp,
          .group-hover\:scale-110,
          .group-hover\:-translate-y-1 {
            animation: none;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};

export default LookingFor;