import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight } from 'react-icons/fa';
import { imageSections } from '../../../data/servicesData';

const ServicesHero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const imageSectionVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.8, ease: 'easeOut' }
    })
  };

  return (
    <div ref={ref}>
      {/* Mobile View */}
      <div className="md:hidden">
        {imageSections.map((section, index) => (
          <motion.div
            key={section.id}
            variants={imageSectionVariants}
            custom={index}
            initial="hidden"
            animate={controls}
            className="relative overflow-hidden group h-[21vh] mb-2 last:mb-0"
          >
            <motion.img
              initial={{ scale: 1.1 }}
              animate={controls ? { scale: 1 } : { scale: 1.1 }}
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
                animate={controls ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
            animate={controls}
            className="relative overflow-hidden group"
          >
            <motion.img
              initial={{ scale: 1.2 }}
              animate={controls ? { scale: 1 } : { scale: 1.2 }}
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
                animate={controls ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
            animate={controls ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: index * 0.1 + 0.8 }}
            className="w-2 h-2 rounded-full bg-white/60"
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesHero;