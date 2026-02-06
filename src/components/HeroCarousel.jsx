import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight,
  FaExternalLinkAlt,
  FaShieldAlt,
  FaBolt,
  FaUsers,
  FaMobileAlt,
  FaQrcode,
  FaCreditCard
} from 'react-icons/fa';

const HeroCarousel = () => {
  // Helper function for optimal image positioning
  const getImagePosition = (imageName) => {
    if (imageName.includes('slide2') && !imageName.includes('abbaagadaa')) {
      return 'object-[center_25%]';
    }
    if (imageName.includes('slide2abbaagadaa')) {
      return 'object-[center_30%]';
    }
    if (imageName.includes('slide3ussd')) {
      return 'object-[center_35%]';
    }
    if (imageName.includes('Atmcardimage')) {
      return 'object-center';
    }
    if (imageName.includes('community-focused')) {
      return 'object-[center_20%]';
    }
    return 'object-center';
  };

  const sections = [
    {
      id: 1,
      title: "New Generations",
      subtitle: "Bank",
      description: "Building futures with innovative financial solutions.",
      buttonText: "Open Account",
      buttonLink: "/contact",
      bgImage: "slide2.jpg",
      icon: <FaShieldAlt className="text-red-400" />,
      gradient: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 35%, transparent 75%)",
      imagePosition: getImagePosition("slide2.jpg")
    },
    {
      id: 2,
      title: "Digital Banking",
      subtitle: "Excellence",
      description: "Secure, seamless banking experience anytime, anywhere.",
      buttonText: "Explore Digital",
      buttonLink: "/digital",
      icon: <FaBolt className="text-red-400" />,
      gradient: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 35%, transparent 75%)"
    },
    {
      id: 3,
      title: "Community",
      subtitle: "Focused",
      description: "Personalized banking that empowers local communities.",
      buttonText: "Find Branch",
      buttonLink: "/contact",
      bgImage: "community-focused.jpg",
      icon: <FaUsers className="text-red-400" />,
      gradient: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 35%, transparent 75%)",
      imagePosition: getImagePosition("community-focused.jpg")
    }
  ];

  const middleCarouselImages = [
    {
      id: 1,
      image: "slide2abbaagadaa.png",
      title: "Mobile Banking",
      description: "AI-powered financial insights & instant transfers",
      link: "/digital/mobile-banking",
      icon: <FaMobileAlt className="text-white" />,
      imagePosition: getImagePosition("slide2abbaagadaa.png")
    },
    {
      id: 2,
      image: "slide3ussd.jpg",
      title: "USSD Banking",
      description: "Bank anytime with *877#, no internet required",
      link: "/digital",
      icon: <FaQrcode className="text-white" />,
      imagePosition: getImagePosition("slide3ussd.jpg")
    },
    {
      id: 3,
      image: "Atmcardimage.jpg",
      title: "ATM Cards",
      description: "Contactless payments with advanced security",
      link: "/services",
      icon: <FaCreditCard className="text-white" />,
      imagePosition: getImagePosition("Atmcardimage.jpg")
    }
  ];

  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
  const carouselIntervalRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animatedSections, setAnimatedSections] = useState([false, false, false]);
  const [isMobile, setIsMobile] = useState(false);

  // Check mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-slide
  useEffect(() => {
    carouselIntervalRef.current = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentCarouselIndex((prev) => 
          prev === middleCarouselImages.length - 1 ? 0 : prev + 1
        );
        setTimeout(() => setIsAnimating(false), 500);
      }
    }, 4000);
    
    return () => {
      if (carouselIntervalRef.current) {
        clearInterval(carouselIntervalRef.current);
      }
    };
  }, [isAnimating]);

  // Intersection Observer
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
      { threshold: 0.2 }
    );

    document.querySelectorAll('.hero-section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const getAnimationClass = (sectionId) => {
    const isAnimated = animatedSections[sectionId - 1];
    return `transition-all duration-500 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`;
  };

  return (
    <section id="home" className="relative overflow-hidden bg-black">
      {/* ADDED PADDING HERE - Top padding for spacing below header/navigation */}
      <div className="relative z-10 container mx-auto px-3 sm:px-4 pt-6 pb-4 sm:pt-8 sm:pb-6 lg:pt-12 lg:pb-8">
        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {/* Left Section */}
          <div 
            className="hero-section group relative overflow-hidden rounded-lg lg:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            data-section-id="1"
          >
            {/* Image Container */}
            <div className="relative h-[35vh] sm:h-[40vh] md:h-[65vh] lg:h-[75vh] xl:h-[80vh] max-h-[700px] min-h-[250px]">
              {sections[0].bgImage && (
                <img 
                  src={`/images/${sections[0].bgImage}`}
                  alt="Modern banking"
                  className={`w-full h-full object-cover ${sections[0].imagePosition || 'object-center'}`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1920&h=1080&auto=format&fit=crop";
                  }}
                />
              )}
              <div 
                className="absolute inset-0"
                style={{background: sections[0].gradient}}
              ></div>
            </div>

            {/* Text Content - REMOVED top padding, kept reduced button size */}
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:pb-8 lg:px-6">
              <div className={getAnimationClass(1)}>
                {/* Title */}
                <div className="flex items-start justify-between mb-2 lg:mb-3">
                  <div>
                    <h2 className={`font-bold text-white leading-tight ${isMobile ? 'text-lg' : 'text-xl lg:text-2xl'}`}>
                      {sections[0].title}
                    </h2>
                    <div className={`text-red-400 font-bold mt-1 ${isMobile ? 'text-base' : 'text-lg lg:text-xl'}`}>
                      {sections[0].subtitle}
                    </div>
                  </div>
                  <div className={`text-red-400 ${isMobile ? 'text-xl' : 'text-2xl lg:text-3xl'}`}>
                    {sections[0].icon}
                  </div>
                </div>

                {/* Description */}
                <p className={`text-gray-200 mb-3 lg:mb-4 ${isMobile ? 'text-sm' : 'text-base lg:text-lg'}`}>
                  {sections[0].description}
                </p>

                {/* Button - REDUCED SIZE */}
                <div className="mt-1 lg:mt-3">
                  <Link 
                    to={sections[0].buttonLink}
                    className={`block w-full bg-red-600 hover:bg-red-700 text-white text-center rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
                      isMobile 
                        ? 'py-2 px-3 text-xs'  // Reduced mobile size
                        : 'py-2 px-3 text-sm lg:py-2.5 lg:px-4 lg:text-base'  // Reduced desktop size
                    }`}
                  >
                    {sections[0].buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Section - Carousel */}
          <div 
            className="hero-section relative overflow-hidden rounded-lg lg:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            data-section-id="2"
          >
            {/* Carousel Container */}
            <div className="relative h-[35vh] sm:h-[40vh] md:h-[65vh] lg:h-[75vh] xl:h-[80vh] max-h-[700px] min-h-[250px]">
              {/* Auto-sliding Images */}
              {middleCarouselImages.map((item, index) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-opacity duration-800 ${
                    index === currentCarouselIndex
                      ? 'opacity-100'
                      : 'opacity-0'
                  }`}
                >
                  <img
                    src={`/images/${item.image}`}
                    alt={item.title}
                    className={`w-full h-full object-cover ${item.imagePosition || 'object-center'}`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&h=1080&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent"></div>
                </div>
              ))}

              {/* Content - REMOVED top padding, kept reduced button size */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:pb-8 lg:px-6">
                <div className={`${getAnimationClass(2)} transition-opacity duration-500 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
                  <div className="flex items-start justify-between mb-2 lg:mb-3">
                    <div>
                      <h3 className={`font-bold text-white leading-tight ${isMobile ? 'text-lg' : 'text-xl lg:text-2xl'}`}>
                        {middleCarouselImages[currentCarouselIndex].title}
                      </h3>
                    </div>
                    <div className={`text-white ${isMobile ? 'text-xl' : 'text-2xl lg:text-3xl'}`}>
                      {middleCarouselImages[currentCarouselIndex].icon}
                    </div>
                  </div>

                  <p className={`text-gray-200 mb-3 lg:mb-4 ${isMobile ? 'text-sm' : 'text-base lg:text-lg'}`}>
                    {middleCarouselImages[currentCarouselIndex].description}
                  </p>

                  {/* Button - REDUCED SIZE */}
                  <div className="mt-1 lg:mt-3">
                    <Link 
                      to={middleCarouselImages[currentCarouselIndex].link}
                      className={`block w-full bg-red-600 hover:bg-red-700 text-white text-center rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
                        isMobile 
                          ? 'py-2 px-3 text-xs'  // Reduced mobile size
                          : 'py-2 px-3 text-sm lg:py-2.5 lg:px-4 lg:text-base'  // Reduced desktop size
                      }`}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>

              {/* Minimal Dots */}
              <div className="absolute bottom-16 sm:bottom-20 lg:bottom-24 right-3 sm:right-4 lg:right-5 flex gap-1.5">
                {middleCarouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (!isAnimating && index !== currentCarouselIndex) {
                        setIsAnimating(true);
                        setCurrentCarouselIndex(index);
                        setTimeout(() => setIsAnimating(false), 500);
                      }
                    }}
                    className={`rounded-full transition-all duration-300 ${
                      index === currentCarouselIndex 
                        ? 'bg-white' 
                        : 'bg-white/50 hover:bg-white/70'
                    } ${isMobile ? 'w-2 h-2' : 'w-2.5 h-2.5 lg:w-3 lg:h-3'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div 
            className="hero-section group relative overflow-hidden rounded-lg lg:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            data-section-id="3"
          >
            {/* Image Container */}
            <div className="relative h-[35vh] sm:h-[40vh] md:h-[65vh] lg:h-[75vh] xl:h-[80vh] max-h-[700px] min-h-[250px]">
              {sections[2].bgImage && (
                <img 
                  src={`/images/${sections[2].bgImage}`}
                  alt="Community banking"
                  className={`w-full h-full object-cover ${sections[2].imagePosition || 'object-center'}`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&h=1080&auto=format&fit=crop";
                  }}
                />
              )}
              <div 
                className="absolute inset-0"
                style={{background: sections[2].gradient}}
              ></div>
            </div>

            {/* Text Content - REMOVED top padding, kept reduced button size */}
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:pb-8 lg:px-6">
              <div className={getAnimationClass(3)}>
                <div className="flex items-start justify-between mb-2 lg:mb-3">
                  <div>
                    <h2 className={`font-bold text-white leading-tight ${isMobile ? 'text-lg' : 'text-xl lg:text-2xl'}`}>
                      {sections[2].title}
                    </h2>
                    <div className={`text-red-400 font-bold mt-1 ${isMobile ? 'text-base' : 'text-lg lg:text-xl'}`}>
                      {sections[2].subtitle}
                    </div>
                  </div>
                  <div className={`text-red-400 ${isMobile ? 'text-xl' : 'text-2xl lg:text-3xl'}`}>
                    {sections[2].icon}
                  </div>
                </div>

                <p className={`text-gray-200 mb-3 lg:mb-4 ${isMobile ? 'text-sm' : 'text-base lg:text-lg'}`}>
                  {sections[2].description}
                </p>

                {/* Button - REDUCED SIZE */}
                <div className="mt-1 lg:mt-3">
                  <Link 
                    to={sections[2].buttonLink}
                    className={`block w-full bg-red-600 hover:bg-red-700 text-white text-center rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
                      isMobile 
                        ? 'py-2 px-3 text-xs'  // Reduced mobile size
                        : 'py-2 px-3 text-sm lg:py-2.5 lg:px-4 lg:text-base'  // Reduced desktop size
                    }`}
                  >
                    {sections[2].buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile App Notification - Smaller */}
        {isMobile && (
          <Link 
            to="/digital/mobile-banking" 
            className="fixed bottom-4 right-3 z-40"
          >
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-2 rounded-lg shadow-lg flex items-center gap-2 hover:from-red-700 hover:to-red-800 transition-all duration-300 active:scale-95">
              <FaMobileAlt className="text-base" />
              <div className="text-left">
                <div className="text-xs font-bold">Mobile App</div>
              </div>
            </div>
          </Link>
        )}
      </div>
    </section>
  );
};

export default HeroCarousel;