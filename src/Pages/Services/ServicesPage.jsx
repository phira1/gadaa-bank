import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import { serviceCategories } from '../../data/servicesData';
import ServicesHero from './components/ServicesHero';
import ServicesCTA from './components/ServicesCTA';
import ServiceCard from './components/ServiceCard';
import BenefitsGrid from './components/BenefitsGrid';

const ServicesPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const progressRef = useRef(null);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // For the services section animation
  const [servicesRef, setServicesRef] = useState(null);
  const [servicesInView, setServicesInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setServicesInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (servicesRef) observer.observe(servicesRef);
    return () => observer.disconnect();
  }, [servicesRef]);

  // Scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      if (progressRef.current) {
        const scrolled = window.pageYOffset;
        const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrolled / maxHeight) * 100;
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
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
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
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
          animate={{ width: '100%' }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-transparent"
        ></motion.div>
      </motion.div>

      {/* Hero: Three image sections */}
      <ServicesHero />

      <div className="container mx-auto px-3 md:px-4 py-6 md:py-20 relative">
        {/* CTA Section */}
        <ServicesCTA />

        {/* Section Title - Our Banking Services */}
        <div ref={setServicesRef} className="text-center mb-6 md:mb-20">
          <div className="inline-block relative">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              animate={servicesInView ? 'visible' : 'hidden'}
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 relative z-10"
            >
              Our <span className="text-red-600">Banking</span> Services
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={servicesInView ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 md:h-2 bg-gradient-to-r from-red-600 to-black rounded-full"
            ></motion.div>
          </div>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate={servicesInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto mt-4 md:mt-10 px-2 md:px-4"
          >
            Explore our comprehensive range of banking products and services
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6 max-w-4xl mx-auto mb-10 md:mb-32">
          {serviceCategories.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} inView={servicesInView} />
          ))}
        </div>

        {/* Benefits Section */}
        <BenefitsGrid />
      </div>
    </div>
  );
};

export default ServicesPage;