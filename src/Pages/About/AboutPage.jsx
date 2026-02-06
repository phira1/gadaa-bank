import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight, FaHistory, FaUsers, FaSitemap, FaUserTie } from 'react-icons/fa'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const AboutPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  
  // Create refs for scroll animations
  const heroRef = useRef(null)
  const storyRef = useRef(null)
  const statsRef = useRef(null)
  const exploreRef = useRef(null)
  const missionRef = useRef(null)
  
  // Use InView hooks
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const isStoryInView = useInView(storyRef, { once: true, amount: 0.2 })
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 })
  const isExploreInView = useInView(exploreRef, { once: true, amount: 0.3 })
  const isMissionInView = useInView(missionRef, { once: true, amount: 0.3 })
  
  // Scroll progress animation
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  
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

  const slideVariants = {
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
    <div className="min-h-screen bg-white">
      {/* Full-width Image Slideshow with Animation */}
      <motion.div 
        ref={heroRef}
        className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden"
      >
        {/* Slides */}
        <div className="relative w-full h-full">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={index === currentSlide ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.style.display = 'none'
                  e.target.parentElement.style.backgroundColor = index % 2 === 0 ? '#dc2626' : '#000000'
                }}
              />
              
              {/* Dark Overlay with animation */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={index === currentSlide ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
              ></motion.div>
              
              {/* Image Title */}
              <div className={`absolute bottom-8 ${isMobile ? 'left-4 right-4 text-center' : 'left-8'}`}>
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={index === currentSlide ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className={`font-light tracking-wider uppercase text-white ${
                    isMobile ? 'text-xs' : 'text-sm'
                  }`}
                >
                  {image.title}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gadaa Bank Text Overlay */}
        <div className={`absolute z-20 text-white ${
          isMobile 
            ? 'bottom-16 left-4 right-4 text-center' 
            : 'bottom-12 left-8'
        }`}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`font-bold tracking-tight leading-tight ${
              isMobile 
                ? 'text-2xl sm:text-3xl' 
                : 'text-4xl md:text-5xl lg:text-6xl'
            }`}
          >
            GADAA
            <br />
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 100 }}
              className="text-red-400"
            >
              BANK
            </motion.span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className={`mt-2 md:mt-3 max-w-md mx-auto ${
              isMobile 
                ? 'text-xs sm:text-sm text-center px-2' 
                : 'text-base md:text-lg'
            }`}
          >
            Empowering communities through innovative banking since our inception
          </motion.p>
        </div>

        {/* Navigation Arrows */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          onClick={prevSlide}
          className={`absolute top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-all duration-300 z-20 hover:scale-110 ${
            isMobile 
              ? 'left-2 p-2' 
              : 'left-4 p-4'
          }`}
          aria-label="Previous slide"
        >
          <FaChevronLeft size={isMobile ? 16 : 24} />
        </motion.button>
        
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          onClick={nextSlide}
          className={`absolute top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-all duration-300 z-20 hover:scale-110 ${
            isMobile 
              ? 'right-2 p-2' 
              : 'right-4 p-4'
          }`}
          aria-label="Next slide"
        >
          <FaChevronRight size={isMobile ? 16 : 24} />
        </motion.button>

        {/* Slide Indicators */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className={`absolute left-1/2 transform -translate-x-1/2 flex z-20 ${
            isMobile ? 'bottom-4 space-x-1.5' : 'bottom-6 space-x-3'
          }`}
        >
          {galleryImages.map((_, index) => (
            <motion.button
              key={index}
              initial={{ scale: 0 }}
              animate={isHeroInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: index * 0.1 + 1.1 }}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? `bg-white ${isMobile ? 'w-6' : 'w-8'}` 
                  : 'bg-white/50 hover:bg-white/80'
              } ${isMobile ? 'h-1.5' : 'h-3'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Content Section */}
      <div className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-6xl mx-auto">
            {/* Main Content Grid */}
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 md:gap-8">
              {/* Our Story Card */}
              <motion.div 
                ref={storyRef}
                initial={{ opacity: 0, y: 40 }}
                animate={isStoryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 space-y-6 md:space-y-8"
              >
                <motion.div 
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-gradient-to-br from-white to-gray-50 p-4 md:p-6 lg:p-8 rounded-xl lg:rounded-2xl shadow-md lg:shadow-lg border border-gray-100"
                >
                  <div className={`flex ${isMobile ? 'flex-col' : 'items-center'} mb-4 md:mb-6`}>
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`flex-shrink-0 bg-gradient-to-r from-red-600 to-black rounded-lg flex items-center justify-center ${
                        isMobile 
                          ? 'w-10 h-10 mb-3' 
                          : 'w-12 h-12 mr-4'
                      }`}
                    >
                      <FaHistory className="text-white text-lg md:text-xl" />
                    </motion.div>
                    <motion.h2 
                      variants={fadeInUp}
                      initial="hidden"
                      animate={isStoryInView ? "visible" : "hidden"}
                      className={`font-bold text-gray-900 ${
                        isMobile ? 'text-xl md:text-2xl' : 'text-3xl'
                      }`}
                    >
                      Our Story
                    </motion.h2>
                  </div>
                  
                  <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isStoryInView ? "visible" : "hidden"}
                    className="space-y-3 md:space-y-4"
                  >
                    <motion.p variants={itemVariants} className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg">
                      Gadaa Bank was established with a clear vision: to contribute towards 
                      economic empowerment and holistic transformation of the low & medium-income 
                      section of the population in the country.
                    </motion.p>
                    
                    <motion.p variants={itemVariants} className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg">
                      Through innovative banking solutions and community-focused approaches, 
                      we've grown to become a trusted financial partner for thousands of 
                      individuals and businesses across the nation.
                    </motion.p>
                    
                    <motion.p variants={itemVariants} className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg">
                      Our commitment to excellence, integrity, and social responsibility 
                      continues to drive our mission of creating lasting financial impact.
                    </motion.p>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
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
                  </motion.div>
                </motion.div>

                {/* Stats Section */}
                <motion.div 
                  ref={statsRef}
                  variants={staggerContainer}
                  initial="hidden"
                  animate={isStatsInView ? "visible" : "hidden"}
                  className="grid grid-cols-2 gap-3 md:gap-4"
                >
                  {[
                    { value: '100+', label: 'Branches', bg: 'bg-red-50', text: 'text-red-600' },
                    { value: '32K+', label: 'Shareholders', bg: 'bg-gray-900', text: 'text-white' },
                    { value: '1.43B+', label: 'Capital', bg: 'bg-red-50', text: 'text-red-600' },
                    { value: '100+', label: 'Banking Products', bg: 'bg-gray-900', text: 'text-white' }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      custom={index}
                      whileHover={{ scale: 1.05, y: -3 }}
                      className={`${stat.bg} ${stat.text} p-4 md:p-6 rounded-lg md:rounded-xl text-center hover:shadow-md transition-all duration-300`}
                    >
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={isStatsInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 100 }}
                        className={`font-bold mb-1 md:mb-2 ${
                          isMobile ? 'text-xl md:text-2xl' : 'text-3xl'
                        }`}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="font-medium text-xs md:text-sm opacity-90">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Quick Links Column */}
              <div className="space-y-6 md:space-y-8">
                {/* Explore Card */}
                <motion.div 
                  ref={exploreRef}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isExploreInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-white to-gray-50 p-4 md:p-6 lg:p-8 rounded-xl lg:rounded-2xl shadow-md lg:shadow-lg border border-gray-100"
                >
                  <div className={`flex ${isMobile ? 'flex-col' : 'items-center'} mb-4 md:mb-6`}>
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`flex-shrink-0 bg-gradient-to-r from-red-600 to-black rounded-lg flex items-center justify-center ${
                        isMobile 
                          ? 'w-10 h-10 mb-3' 
                          : 'w-12 h-12 mr-4'
                      }`}
                    >
                      <FaSitemap className="text-white text-lg md:text-xl" />
                    </motion.div>
                    <motion.h2 
                      variants={fadeInUp}
                      initial="hidden"
                      animate={isExploreInView ? "visible" : "hidden"}
                      className={`font-bold text-gray-900 ${
                        isMobile ? 'text-xl md:text-2xl' : 'text-3xl'
                      }`}
                    >
                      Explore
                    </motion.h2>
                  </div>
                  
                  <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isExploreInView ? "visible" : "hidden"}
                    className="space-y-3 md:space-y-4"
                  >
                    {[
                      { icon: FaHistory, title: 'Company History', desc: 'Our journey through time', link: '/about/company-history' },
                      { icon: FaSitemap, title: 'Organizational Structure', desc: "How we're organized", link: '/about/organizational-structure' },
                      { icon: FaUsers, title: 'Company Teams', desc: 'Meet our leadership', link: '/about/company-teams' },
                      { icon: FaUserTie, title: 'Other Profiles', desc: 'Additional information', link: '/about/other-profiles' }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        custom={index}
                        whileHover={{ x: 5 }}
                      >
                        <Link 
                          to={item.link} 
                          className="flex items-center p-3 md:p-4 bg-white hover:bg-red-50 rounded-lg md:rounded-xl border border-gray-200 hover:border-red-200 transition-all duration-300 group hover:shadow-sm md:hover:shadow-md"
                        >
                          <item.icon className={`text-red-600 ${
                            isMobile ? 'mr-3 text-base' : 'mr-4 text-lg'
                          }`} />
                          <div className="flex-1 min-w-0">
                            <div className={`font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300 ${
                              isMobile ? 'text-sm md:text-base' : ''
                            }`}>
                              {item.title}
                            </div>
                            <div className="text-gray-600 mt-0.5 text-xs md:text-sm">
                              {item.desc}
                            </div>
                          </div>
                          <FaChevronRight className={`text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all duration-300 ${
                            isMobile ? 'ml-2 text-sm' : 'ml-auto'
                          }`} />
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Mission Statement */}
                <motion.div 
                  ref={missionRef}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isMissionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                  className="bg-gradient-to-r from-red-600 to-black text-white p-4 md:p-6 rounded-lg md:rounded-2xl hover:shadow-md md:hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
                >
                  {/* Animated background elements */}
                  <motion.div 
                    initial={{ x: -100, y: -100 }}
                    animate={isMissionInView ? { x: 0, y: 0 } : { x: -100, y: -100 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-3xl"
                  />
                  <motion.div 
                    initial={{ x: 100, y: 100 }}
                    animate={isMissionInView ? { x: 0, y: 0 } : { x: 100, y: 100 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl"
                  />
                  
                  <motion.h3 
                    variants={fadeInUp}
                    initial="hidden"
                    animate={isMissionInView ? "visible" : "hidden"}
                    className={`font-bold mb-2 md:mb-3 relative z-10 ${
                      isMobile ? 'text-lg md:text-xl' : 'text-xl'
                    }`}
                  >
                    Our Mission
                  </motion.h3>
                  <motion.p 
                    variants={fadeInUp}
                    initial="hidden"
                    animate={isMissionInView ? "visible" : "hidden"}
                    transition={{ delay: 0.1 }}
                    className="text-white/90 leading-relaxed text-sm md:text-base relative z-10"
                  >
                    To provide innovative banking solutions that empower individuals, 
                    businesses, and communities towards sustainable economic growth.
                  </motion.p>
                </motion.div>
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