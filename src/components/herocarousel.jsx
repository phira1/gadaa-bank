import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaChevronLeft, 
  FaChevronRight, 
  FaPause, 
  FaPlay,
  FaArrowRight,
  FaExternalLinkAlt
} from 'react-icons/fa';

const HeroCarousel = () => {
  // Define the three sections with their content and actual page links
  const sections = [
    {
      id: 1,
      title: "New Generations",
      subtitle: "Bank",
      description: "Building futures, together with innovative financial solutions.",
      buttonText: "Open Account",
      buttonLink: "/contact", // Goes to contact page for account opening
      bgImage: "slide2.jpg",
      textColor: "text-white"
    },
    {
      id: 2,
      title: "Digital Banking",
      subtitle: "Excellence",
      description: "Secure, convenient banking at your fingertips, anytime, anywhere.",
      buttonText: "Explore Digital",
      buttonLink: "/digital", // Goes to digital banking page
      textColor: "text-white"
    },
    {
      id: 3,
      title: "Community",
      subtitle: "Focused",
      description: "Serving our communities with personalized banking solutions.",
      buttonText: "Find Branch",
      buttonLink: "/contact", // Goes to contact page for branch info
      bgImage: "community-focused.jpg",
      textColor: "text-white"
    }
  ];

  // Images for middle section carousel with relevant links
  const middleCarouselImages = [
    {
      id: 1,
      image: "slide2abbaagadaa.png",
      title: "Modern Technology",
      description: "Advanced digital banking platform",
      link: "/digital/mobile-banking" // Mobile banking page
    },
    {
      id: 2,
      image: "slide3ussd.jpg",
      title: "Easy Access",
      description: "Bank anytime with *877#",
      link: "/digital" // Main digital page
    },
    {
      id: 3,
      image: "Atmcardimage.jpg",
      title: "Secure Transactions",
      description: "Protected by advanced security",
      link: "/services" // Services page
    }
  ];

  // State for middle section carousel
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const carouselIntervalRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Animation states for each section
  const [animatedSections, setAnimatedSections] = useState([false, false, false]);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle middle carousel navigation
  const nextCarouselSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentCarouselIndex((prev) => 
      prev === middleCarouselImages.length - 1 ? 0 : prev + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevCarouselSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentCarouselIndex((prev) => 
      prev === 0 ? middleCarouselImages.length - 1 : prev - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToCarouselSlide = (index) => {
    if (isAnimating || index === currentCarouselIndex) return;
    setIsAnimating(true);
    setCurrentCarouselIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-play functionality for middle carousel
  useEffect(() => {
    if (isAutoPlay && !isAnimating) {
      carouselIntervalRef.current = setInterval(() => {
        nextCarouselSlide();
      }, 5000);
    }
    
    return () => {
      if (carouselIntervalRef.current) {
        clearInterval(carouselIntervalRef.current);
      }
    };
  }, [isAutoPlay, isAnimating]);

  // Intersection Observer for section animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = parseInt(entry.target.dataset.sectionId) - 1;
            setAnimatedSections(prev => {
              const newState = [...prev];
              newState[sectionId] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe each section
    document.querySelectorAll('.hero-section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Toggle auto-play
  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  // Animation classes based on section state
  const getAnimationClass = (sectionId, delay = 0) => {
    const isAnimated = animatedSections[sectionId - 1];
    return `
      transition-all duration-700 ease-out
      ${isAnimated ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}
      ${isAnimated ? `delay-${delay}00` : ''}
    `;
  };

  return (
    <section id="home" className="relative overflow-hidden min-h-screen lg:min-h-[85vh]">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 z-0"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-8 lg:py-16">
        {/* Header */}
    
        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Section - Static */}
          <div 
            className="hero-section group relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl"
            data-section-id="1"
          >
            {/* Background with minimal overlay */}
            {sections[0].bgImage && (
              <div className="absolute inset-0">
                <img 
                  src={`/images/${sections[0].bgImage}`}
                  alt="Modern banking"
                  className="w-full h-full object-cover"
                />
                {/* Very light red overlay for brand consistency */}
                <div className="absolute inset-0 bg-red-600/10"></div>
                {/* Enhanced gradient overlay for text readability - darker at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
              </div>
            )}
            
            {/* Content with text-specific dark background */}
            <div className="relative z-10 p-6 lg:p-8 h-full flex flex-col justify-end min-h-[400px] lg:min-h-[500px]">
              {/* Dark background overlay specifically for text area */}
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/90 via-black/70 to-transparent z-0"></div>
              
              <div className="relative z-10 mb-12">
                {/* Title with text shadow */}
                <div className={`mb-4 ${getAnimationClass(1)}`}>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
                    {sections[0].title}
                    <span className="block text-red-300 drop-shadow-md">{sections[0].subtitle}</span>
                  </h2>
                </div>

                {/* Description with enhanced visibility */}
                <p className={`text-gray-100 ${getAnimationClass(1, 1)} drop-shadow-md`}>
                  {sections[0].description}
                </p>
              </div>

              {/* Button with Link */}
              <div className={`relative z-10 ${getAnimationClass(1, 4)}`}>
                <Link 
                  to={sections[0].buttonLink}
                  className="block w-full bg-red-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl text-sm lg:text-base flex items-center justify-center space-x-2 drop-shadow-lg group"
                >
                  <span>{sections[0].buttonText}</span>
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Middle Section - Dynamic Carousel */}
          <div 
            className="hero-section group relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl"
            data-section-id="2"
          >
            {/* Carousel Images */}
            <div className="absolute inset-0">
              {middleCarouselImages.map((item, index) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentCarouselIndex
                      ? 'opacity-100'
                      : 'opacity-0'
                  }`}
                >
                  <img
                    src={`/images/${item.image}`}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Very light red overlay for brand consistency */}
                  <div className="absolute inset-0 bg-red-600/10"></div>
                  {/* Enhanced gradient overlay for text readability - darker at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <div className="absolute top-4 right-4 z-20 flex space-x-2">
              <button
                onClick={toggleAutoPlay}
                className="bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all duration-300 drop-shadow-lg"
                aria-label={isAutoPlay ? 'Pause slideshow' : 'Play slideshow'}
              >
                {isAutoPlay ? <FaPause size={16} /> : <FaPlay size={16} />}
              </button>
              <button
                onClick={prevCarouselSlide}
                className="bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all duration-300 drop-shadow-lg"
                aria-label="Previous slide"
              >
                <FaChevronLeft size={16} />
              </button>
              <button
                onClick={nextCarouselSlide}
                className="bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all duration-300 drop-shadow-lg"
                aria-label="Next slide"
              >
                <FaChevronRight size={16} />
              </button>
            </div>

            {/* Carousel Dots - FIXED: Made smaller */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-1">
              {middleCarouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToCarouselSlide(index)}
                  className={`rounded-full transition-all duration-300 drop-shadow-lg ${
                    index === currentCarouselIndex
                      ? 'bg-white scale-125'
                      : 'bg-white/70 hover:bg-white/90'
                  } ${isMobile ? 'w-1 h-1' : 'w-1.5 h-1.5'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Content with text-specific dark background */}
            <div className="relative z-10 p-6 lg:p-8 h-full flex flex-col justify-end min-h-[400px] lg:min-h-[500px]">
              {/* Dark background overlay specifically for text area */}
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/90 via-black/70 to-transparent z-0"></div>
              
              <div className="relative z-10 mb-12">
                {/* Title with text shadow */}
                <div className={`mb-4 ${getAnimationClass(2)}`}>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
                    {sections[1].title}
                    <span className="block text-red-300 drop-shadow-md">{sections[1].subtitle}</span>
                  </h2>
                </div>

                {/* Description with enhanced visibility */}
                <p className={`text-gray-100 ${getAnimationClass(2, 1)} drop-shadow-md`}>
                  {sections[1].description}
                </p>
              </div>

              {/* Button with Link */}
              <div className={`relative z-10 ${getAnimationClass(2, 4)}`}>
                <Link 
                  to={sections[1].buttonLink}
                  className="block w-full bg-red-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl text-sm lg:text-base flex items-center justify-center space-x-2 drop-shadow-lg group"
                >
                  <span>{sections[1].buttonText}</span>
                  <FaExternalLinkAlt className="transition-transform duration-300 group-hover:scale-110" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section - Static */}
          <div 
            className="hero-section group relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl"
            data-section-id="3"
          >
            {/* Background with minimal overlay */}
            {sections[2].bgImage && (
              <div className="absolute inset-0">
                <img 
                  src={`/images/${sections[2].bgImage}`}
                  alt="Community banking"
                  className="w-full h-full object-cover"
                />
                {/* Very light red overlay for brand consistency */}
                <div className="absolute inset-0 bg-red-600/10"></div>
                {/* Enhanced gradient overlay for text readability - darker at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
              </div>
            )}
            
            {/* Content with text-specific dark background */}
            <div className="relative z-10 p-6 lg:p-8 h-full flex flex-col justify-end min-h-[400px] lg:min-h-[500px]">
              {/* Dark background overlay specifically for text area */}
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/90 via-black/70 to-transparent z-0"></div>
              
              <div className="relative z-10 mb-12">
                {/* Title with text shadow */}
                <div className={`mb-4 ${getAnimationClass(3)}`}>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
                    {sections[2].title}
                    <span className="block text-red-300 drop-shadow-md">{sections[2].subtitle}</span>
                  </h2>
                </div>

                {/* Description with enhanced visibility */}
                <p className={`text-gray-100 ${getAnimationClass(3, 1)} drop-shadow-md`}>
                  {sections[2].description}
                </p>
              </div>

              {/* Button with Link */}
              <div className={`relative z-10 ${getAnimationClass(3, 4)}`}>
                <Link 
                  to={sections[2].buttonLink}
                  className="block w-full bg-red-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl text-sm lg:text-base flex items-center justify-center space-x-2 drop-shadow-lg group"
                >
                  <span>{sections[2].buttonText}</span>
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Notification - Make it clickable too */}
        <Link to="/digital/mobile-banking" className="fixed bottom-4 right-4 z-50 animate-bounce hover:no-underline">
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-xl shadow-2xl flex items-center space-x-2 drop-shadow-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 hover:scale-105">
            <span className="text-sm font-semibold">New: Mobile Banking App</span>
            <FaExternalLinkAlt size={12} />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default HeroCarousel;  // FIXED: Capital H!   
 