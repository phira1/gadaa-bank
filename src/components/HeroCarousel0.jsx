import React, { useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from 'react-icons/fa';

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      title: "New Generations Bank",
      subtitle: "Building futures, together with innovative financial solutions.",
      buttonText: "Open Account",
      image: "slide2.jpg",
      alt: "Modern banking solutions for families"
    },
    {
      id: 2,
      title: "To Inspire and Enable Your Dream.",
      subtitle: "Secure, convenient banking at your fingertips, anytime, anywhere.",
      buttonText: "Explore Digital Banking",
      image: "slide2abbaagadaa.png",
      alt: "Digital banking technology"
    },
    {
      id: 3,
      title: "Banking made simple",
      subtitle: "Access mobile banking services easily by dialing *877# from your phone.",
      buttonText: "Learn About Business Banking",
      image: "slide3ussd.jpg",
      alt: "Business growth and investment"
    },
    {
      id: 4,
      title: "user-friendly",
      subtitle: "Fast and efficient service",
      buttonText: "Download App",
      image: "mobileappimage.jpg",
      alt: "Investment and wealth management"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [containerHeight, setContainerHeight] = useState('40vh');

  // Check for mobile viewport and set appropriate height
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Set different heights based on screen size
      if (window.innerWidth < 640) {
        setContainerHeight('40vh'); // Small mobile
      } else if (window.innerWidth < 768) {
        setContainerHeight('45vh'); // Medium mobile
      } else if (window.innerWidth < 1024) {
        setContainerHeight('55vh'); // Tablet
      } else {
        setContainerHeight('60vh'); // Desktop (reduced from 70vh)
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlay && slides.length > 1) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlay, nextSlide, slides.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === ' ') {
        e.preventDefault();
        toggleAutoPlay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide, toggleAutoPlay]);

  return (
    <section 
      id="home" 
      className="relative overflow-hidden"
      style={{ height: containerHeight, minHeight: isMobile ? '300px' : '400px' }}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image - Significantly reduced height for mobile */}
          <div className="absolute inset-0">
            <img
              src={`/images/${slide.image}`}
              alt={slide.alt}
              className={`w-full h-full object-cover ${isMobile ? 'scale-110' : ''}`}
              style={{ 
                // Force image to show only top portion on mobile
                objectPosition: isMobile ? 'center 30%' : 'center center',
              }}
              loading="lazy"
            />
            <div className={`absolute inset-0 ${
              isMobile 
                ? 'bg-gradient-to-b from-black/80 via-black/60 to-black/40' 
                : 'bg-gradient-to-r from-black/70 via-black/50 to-black/30'
            }`}></div>
          </div>

          {/* Slide Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4 md:px-6">
              <div className={`max-w-full ${isMobile ? 'md:max-w-xl' : 'md:max-w-2xl'} text-white ${isMobile ? 'text-center px-2' : ''}`}>
                <h1 className={`font-bold mb-3 md:mb-4 ${
                  isMobile 
                    ? 'text-xl sm:text-2xl animate-fadeInUp leading-tight' 
                    : 'text-3xl md:text-4xl lg:text-5xl animate-fadeInUp'
                }`}>
                  {slide.title}
                </h1>
                <p className={`text-gray-200 mb-4 md:mb-6 ${
                  isMobile 
                    ? 'text-sm sm:text-base animate-fadeInUp animate-delay-300 line-clamp-2 md:line-clamp-3' 
                    : 'text-lg md:text-xl animate-fadeInUp animate-delay-300'
                }`}>
                  {slide.subtitle}
                </p>
                <button className={`bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition duration-300 animate-fadeInUp animate-delay-500 ${
                  isMobile 
                    ? 'px-4 py-2 text-sm w-full max-w-xs mx-auto' 
                    : 'px-6 py-3 text-base md:text-lg'
                }`}>
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - Mobile Optimized */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className={`absolute top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full transition duration-300 z-20 ${
              isMobile 
                ? 'left-1 p-2' 
                : 'left-2 md:left-4 p-2 md:p-3'
            }`}
            aria-label="Previous slide"
          >
            <FaChevronLeft size={isMobile ? 16 : 20} />
          </button>
          <button
            onClick={nextSlide}
            className={`absolute top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full transition duration-300 z-20 ${
              isMobile 
                ? 'right-1 p-2' 
                : 'right-2 md:right-4 p-2 md:p-3'
            }`}
            aria-label="Next slide"
          >
            <FaChevronRight size={isMobile ? 16 : 20} />
          </button>
        </>
      )}

      {/* Navigation Dots - Mobile Optimized */}
      <div className={`absolute left-1/2 transform -translate-x-1/2 flex space-x-1 md:space-x-2 z-20 ${
        isMobile ? 'bottom-3' : 'bottom-4 md:bottom-6'
      }`}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-110'
                : 'bg-white/40 hover:bg-white/60'
            } ${isMobile ? 'w-1.5 h-1.5 md:w-2 md:h-2' : 'w-2 h-2 md:w-3 md:h-3'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play Controls - Only show on desktop */}
      {!isMobile && slides.length > 1 && (
        <div className="absolute bottom-4 md:bottom-6 right-2 md:right-4 z-20">
          <button
            onClick={toggleAutoPlay}
            className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition duration-300"
            aria-label={isAutoPlay ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isAutoPlay ? <FaPause size={16} /> : <FaPlay size={16} />}
          </button>
        </div>
      )}

      {/* Mobile Swipe Indicator */}
      {isMobile && slides.length > 1 && (
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex items-center space-x-1">
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
          </div>
        </div>
      )}

      {/* Add CSS styles */}
      <style jsx>{`
        /* Animation classes */
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animate-delay-500 {
          animation-delay: 0.5s;
        }
        
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
        
        /* Touch-friendly buttons for mobile */
        @media (max-width: 768px) {
          button {
            min-height: 36px;
            min-width: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          /* Ensure carousel doesn't take too much space */
          section {
            max-height: 50vh !important;
          }
        }
        
        /* Small mobile optimizations */
        @media (max-width: 640px) {
          .container {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
          
          section {
            max-height: 45vh !important;
            min-height: 280px !important;
          }
        }
        
        /* Prevent image distortion */
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        
        /* Smooth transitions */
        * {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .animate-fadeInUp,
          .animate-delay-300,
          .animate-delay-500 {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;