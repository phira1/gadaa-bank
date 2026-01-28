import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight, FaHistory, FaUsers, FaSitemap, FaUserTie } from 'react-icons/fa'

const AboutPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  
  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Using images from public/images folder as placeholders
  const galleryImages = [
    { src: '/images/slide2 - Copy.jpg', alt: 'Gadaa Bank Building', title: 'Our Headquarters' },
    { src: '/images/aboutgadaaslide1.jpg', alt: 'Bank Services', title: 'Modern Banking Services' },
    { src: '/images/horsemen - Copy.jpg', alt: 'Banking Team', title: 'Dedicated Team' },
    { src: '/images/download2.jpg', alt: 'Bank Logo', title: 'Our Brand Identity' },
    { src: '/images/internet-banking2.jpg', alt: 'Bank Operations', title: 'Bank Operations' },
  ]

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [galleryImages.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Full-width Image Slideshow - Responsive Height */}
      <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        {/* Slides */}
        <div className="relative w-full h-full">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  // Fallback to colored background if image doesn't load
                  e.target.onerror = null
                  e.target.style.display = 'none'
                  e.target.parentElement.style.backgroundColor = index % 2 === 0 ? '#dc2626' : '#000000'
                }}
              />
              
              {/* Dark Overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              
              {/* Image Title - Responsive */}
              <div className={`absolute bottom-8 ${isMobile ? 'left-4 right-4 text-center' : 'left-8'}`}>
                <span className={`font-light tracking-wider uppercase opacity-90 text-white ${
                  isMobile ? 'text-xs' : 'text-sm'
                }`}>
                  {image.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Gadaa Bank Text Overlay - Responsive */}
        <div className={`absolute z-20 text-white ${
          isMobile 
            ? 'bottom-16 left-4 right-4 text-center' 
            : 'bottom-12 left-8'
        }`}>
          <h1 className={`font-bold tracking-tight leading-tight ${
            isMobile 
              ? 'text-2xl sm:text-3xl' 
              : 'text-4xl md:text-5xl lg:text-6xl'
          }`}>
            GADAA
            <br />
            <span className="text-red-400">BANK</span>
          </h1>
          <p className={`mt-2 md:mt-3 max-w-md mx-auto ${
            isMobile 
              ? 'text-xs sm:text-sm text-white/80 text-center px-2' 
              : 'text-white/80 text-base md:text-lg'
          }`}>
            Empowering communities through innovative banking since our inception
          </p>
        </div>

        {/* Navigation Arrows - Mobile Optimized */}
        <button
          onClick={prevSlide}
          className={`absolute top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-all duration-300 z-20 hover:scale-110 ${
            isMobile 
              ? 'left-2 p-2' 
              : 'left-4 p-4'
          }`}
          aria-label="Previous slide"
        >
          <FaChevronLeft size={isMobile ? 16 : 24} />
        </button>
        <button
          onClick={nextSlide}
          className={`absolute top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-all duration-300 z-20 hover:scale-110 ${
            isMobile 
              ? 'right-2 p-2' 
              : 'right-4 p-4'
          }`}
          aria-label="Next slide"
        >
          <FaChevronRight size={isMobile ? 16 : 24} />
        </button>

        {/* Slide Indicators - Smaller on Mobile */}
        <div className={`absolute left-1/2 transform -translate-x-1/2 flex z-20 ${
          isMobile ? 'bottom-4 space-x-1.5' : 'bottom-6 space-x-3'
        }`}>
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? `bg-white ${isMobile ? 'w-6' : 'w-8'}` 
                  : 'bg-white/50 hover:bg-white/80'
              } ${isMobile ? 'h-1.5' : 'h-3'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-6xl mx-auto">
            {/* Main Content Grid */}
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 md:gap-8">
              {/* Our Story Card - Left Column */}
              <div className="lg:col-span-2 space-y-6 md:space-y-8">
                <div className="bg-gradient-to-br from-white to-gray-50 p-4 md:p-6 lg:p-8 rounded-xl lg:rounded-2xl shadow-md lg:shadow-lg border border-gray-100">
                  <div className={`flex ${isMobile ? 'flex-col' : 'items-center'} mb-4 md:mb-6`}>
                    <div className={`flex-shrink-0 bg-gradient-to-r from-red-600 to-black rounded-lg flex items-center justify-center ${
                      isMobile 
                        ? 'w-10 h-10 mb-3' 
                        : 'w-12 h-12 mr-4'
                    }`}>
                      <FaHistory className="text-white text-lg md:text-xl" />
                    </div>
                    <h2 className={`font-bold text-gray-900 ${
                      isMobile ? 'text-xl md:text-2xl' : 'text-3xl'
                    }`}>
                      Our Story
                    </h2>
                  </div>
                  
                  <div className="space-y-3 md:space-y-4">
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg">
                      Gadaa Bank was established with a clear vision: to contribute towards 
                      economic empowerment and holistic transformation of the low & medium-income 
                      section of the population in the country.
                    </p>
                    
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg">
                      Through innovative banking solutions and community-focused approaches, 
                      we've grown to become a trusted financial partner for thousands of 
                      individuals and businesses across the nation.
                    </p>
                    
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg">
                      Our commitment to excellence, integrity, and social responsibility 
                      continues to drive our mission of creating lasting financial impact.
                    </p>
                  </div>
                  
                  <Link 
                    to="/about/company-history" 
                    className={`inline-flex items-center mt-6 md:mt-8 text-red-600 font-bold hover:text-red-700 group transition-colors duration-300 ${
                      isMobile ? 'text-base' : 'text-lg'
                    }`}
                  >
                    <span className="border-b-2 border-red-600 group-hover:border-red-700 pb-1">
                      Explore Our Complete History
                    </span>
                    <FaChevronRight className={`ml-2 md:ml-3 group-hover:translate-x-2 transition-transform duration-300 ${
                      isMobile ? 'text-sm' : ''
                    }`} />
                  </Link>
                </div>

                {/* Stats Section - Responsive Grid */}
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="bg-red-50 p-4 md:p-6 rounded-lg md:rounded-xl text-center hover:bg-red-100 transition-colors duration-300">
                    <div className={`font-bold text-red-600 mb-1 md:mb-2 ${
                      isMobile ? 'text-xl md:text-2xl' : 'text-3xl'
                    }`}>
                      50+
                    </div>
                    <div className="font-medium text-gray-700 text-xs md:text-sm">
                      Branches Nationwide
                    </div>
                  </div>
                  <div className="bg-gray-900 text-white p-4 md:p-6 rounded-lg md:rounded-xl text-center hover:bg-black transition-colors duration-300">
                    <div className={`font-bold mb-1 md:mb-2 ${
                      isMobile ? 'text-xl md:text-2xl' : 'text-3xl'
                    }`}>
                      200K+
                    </div>
                    <div className="font-medium text-white text-xs md:text-sm">
                      Satisfied Customers
                    </div>
                  </div>
                  <div className="bg-red-50 p-4 md:p-6 rounded-lg md:rounded-xl text-center hover:bg-red-100 transition-colors duration-300">
                    <div className={`font-bold text-red-600 mb-1 md:mb-2 ${
                      isMobile ? 'text-xl md:text-2xl' : 'text-3xl'
                    }`}>
                      15+
                    </div>
                    <div className="font-medium text-gray-700 text-xs md:text-sm">
                      Years of Service
                    </div>
                  </div>
                  <div className="bg-gray-900 text-white p-4 md:p-6 rounded-lg md:rounded-xl text-center hover:bg-black transition-colors duration-300">
                    <div className={`font-bold mb-1 md:mb-2 ${
                      isMobile ? 'text-xl md:text-2xl' : 'text-3xl'
                    }`}>
                      100+
                    </div>
                    <div className="font-medium text-white text-xs md:text-sm">
                      Banking Products
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links - Right Column */}
              <div className="space-y-6 md:space-y-8">
                <div className="bg-gradient-to-br from-white to-gray-50 p-4 md:p-6 lg:p-8 rounded-xl lg:rounded-2xl shadow-md lg:shadow-lg border border-gray-100">
                  <div className={`flex ${isMobile ? 'flex-col' : 'items-center'} mb-4 md:mb-6`}>
                    <div className={`flex-shrink-0 bg-gradient-to-r from-red-600 to-black rounded-lg flex items-center justify-center ${
                      isMobile 
                        ? 'w-10 h-10 mb-3' 
                        : 'w-12 h-12 mr-4'
                    }`}>
                      <FaSitemap className="text-white text-lg md:text-xl" />
                    </div>
                    <h2 className={`font-bold text-gray-900 ${
                      isMobile ? 'text-xl md:text-2xl' : 'text-3xl'
                    }`}>
                      Explore
                    </h2>
                  </div>
                  
                  <div className="space-y-3 md:space-y-4">
                    <Link 
                      to="/about/company-history" 
                      className="flex items-center p-3 md:p-4 bg-white hover:bg-red-50 rounded-lg md:rounded-xl border border-gray-200 hover:border-red-200 transition-all duration-300 group hover:shadow-sm md:hover:shadow-md"
                    >
                      <FaHistory className={`text-red-600 ${
                        isMobile ? 'mr-3 text-base' : 'mr-4 text-lg'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <div className={`font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300 ${
                          isMobile ? 'text-sm md:text-base' : ''
                        }`}>
                          Company History
                        </div>
                        <div className="text-gray-600 mt-0.5 text-xs md:text-sm">
                          Our journey through time
                        </div>
                      </div>
                      <FaChevronRight className={`text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all duration-300 ${
                        isMobile ? 'ml-2 text-sm' : 'ml-auto'
                      }`} />
                    </Link>
                    
                    <Link 
                      to="/about/organizational-structure" 
                      className="flex items-center p-3 md:p-4 bg-white hover:bg-red-50 rounded-lg md:rounded-xl border border-gray-200 hover:border-red-200 transition-all duration-300 group hover:shadow-sm md:hover:shadow-md"
                    >
                      <FaSitemap className={`text-red-600 ${
                        isMobile ? 'mr-3 text-base' : 'mr-4 text-lg'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <div className={`font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300 ${
                          isMobile ? 'text-sm md:text-base' : ''
                        }`}>
                          Organizational Structure
                        </div>
                        <div className="text-gray-600 mt-0.5 text-xs md:text-sm">
                          How we're organized
                        </div>
                      </div>
                      <FaChevronRight className={`text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all duration-300 ${
                        isMobile ? 'ml-2 text-sm' : 'ml-auto'
                      }`} />
                    </Link>
                    
                    <Link 
                      to="/about/company-teams" 
                      className="flex items-center p-3 md:p-4 bg-white hover:bg-red-50 rounded-lg md:rounded-xl border border-gray-200 hover:border-red-200 transition-all duration-300 group hover:shadow-sm md:hover:shadow-md"
                    >
                      <FaUsers className={`text-red-600 ${
                        isMobile ? 'mr-3 text-base' : 'mr-4 text-lg'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <div className={`font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300 ${
                          isMobile ? 'text-sm md:text-base' : ''
                        }`}>
                          Company Teams
                        </div>
                        <div className="text-gray-600 mt-0.5 text-xs md:text-sm">
                          Meet our leadership
                        </div>
                      </div>
                      <FaChevronRight className={`text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all duration-300 ${
                        isMobile ? 'ml-2 text-sm' : 'ml-auto'
                      }`} />
                    </Link>
                    
                    <Link 
                      to="/about/other-profiles" 
                      className="flex items-center p-3 md:p-4 bg-white hover:bg-red-50 rounded-lg md:rounded-xl border border-gray-200 hover:border-red-200 transition-all duration-300 group hover:shadow-sm md:hover:shadow-md"
                    >
                      <FaUserTie className={`text-red-600 ${
                        isMobile ? 'mr-3 text-base' : 'mr-4 text-lg'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <div className={`font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300 ${
                          isMobile ? 'text-sm md:text-base' : ''
                        }`}>
                          Other Profiles
                        </div>
                        <div className="text-gray-600 mt-0.5 text-xs md:text-sm">
                          Additional information
                        </div>
                      </div>
                      <FaChevronRight className={`text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all duration-300 ${
                        isMobile ? 'ml-2 text-sm' : 'ml-auto'
                      }`} />
                    </Link>
                  </div>
                </div>

                {/* Mission Statement */}
                <div className="bg-gradient-to-r from-red-600 to-black text-white p-4 md:p-6 rounded-lg md:rounded-2xl hover:shadow-md md:hover:shadow-xl transition-shadow duration-300">
                  <h3 className={`font-bold mb-2 md:mb-3 ${
                    isMobile ? 'text-lg md:text-xl' : 'text-xl'
                  }`}>
                    Our Mission
                  </h3>
                  <p className="text-white/90 leading-relaxed text-sm md:text-base">
                    To provide innovative banking solutions that empower individuals, 
                    businesses, and communities towards sustainable economic growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add responsive CSS */}
      <style jsx>{`
        /* Mobile touch-friendly targets */
        @media (max-width: 768px) {
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
          
          /* Prevent text overflow in quick links */
          .min-w-0 {
            min-width: 0;
          }
          
          /* Improve stats readability */
          .text-xs {
            font-size: 0.7rem;
            line-height: 1.2;
          }
        }
        
        /* Small mobile optimization */
        @media (max-width: 640px) {
          .container {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
          
          .grid-cols-2 {
            gap: 0.5rem;
          }
        }
        
        /* Ensure images don't overflow */
        img {
          max-width: 100%;
          height: auto;
        }
        
        /* Prevent horizontal scrolling */
        body {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  )
}

export default AboutPage