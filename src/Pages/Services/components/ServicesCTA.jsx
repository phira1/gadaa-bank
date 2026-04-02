import React from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCrown } from 'react-icons/fa';
import { useRef } from 'react';

const ServicesCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
      className="relative rounded-lg md:rounded-3xl overflow-hidden mb-6 md:mb-20"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-black"
      ></motion.div>

      <div className="relative z-10 p-4 md:p-8 lg:p-12 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 100 }}
            className="inline-flex items-center justify-center w-10 h-10 md:w-16 md:h-16 bg-white/20 rounded-full backdrop-blur-sm mb-3 md:mb-6 border border-white/30"
          >
            <FaCrown className="text-white text-lg md:text-2xl" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="text-lg md:text-2xl lg:text-4xl font-bold text-white mb-2 md:mb-4 lg:mb-6"
          >
            Ready to Explore Our Services?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.1 }}
            className="text-xs md:text-sm lg:text-base text-white/90 mb-3 md:mb-8 max-w-2xl mx-auto px-2"
          >
            Click on any service category above to see detailed features and products
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.7 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
            className="text-white/70 mt-3 md:mt-6 text-xs md:text-sm"
          >
            Our customer service team is available 24/7 to assist you
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesCTA;