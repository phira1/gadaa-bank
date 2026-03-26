import React from 'react';
import { motion, useInView } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { useRef } from 'react';
import { benefits } from '../../../data/servicesData';

const BenefitsGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: 'easeOut' }
    })
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto mb-10 md:mb-32"
    >
      <div className="text-center mb-6 md:mb-16 px-4">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-6"
        >
          Why <span className="text-red-600">Gadaa Bank</span> Stands Out
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.1 }}
          className="text-sm md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto"
        >
          Our commitment to excellence is reflected in every aspect of our service
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            custom={index}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white rounded-lg md:rounded-xl p-3 md:p-4 shadow-sm border border-gray-200 hover:border-red-300 hover:shadow-md transition-all duration-300"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className={`${benefit.bg} w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-2 md:mb-3 mx-auto`}
            >
              <benefit.icon className={`text-base md:text-lg ${benefit.color}`} />
            </motion.div>
            <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1 md:mb-2 text-center">{benefit.title}</h3>
            <p className="text-gray-600 text-center text-xs md:text-sm">{benefit.description}</p>
            <div className="mt-2 md:mt-3 pt-2 border-t border-gray-100">
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 mx-0.5 text-xs" />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default BenefitsGrid;