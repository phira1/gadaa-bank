import React from 'react';
import { motion } from 'framer-motion';
import { FaClock } from 'react-icons/fa';
import { workingHours } from '../../../data/contactData';

const WorkingHours = ({ refProp, controls, slideInLeft, fadeInUp }) => {
  return (
    <motion.div
      ref={refProp}
      initial="hidden"
      animate={controls}
      variants={slideInLeft}
      className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-lg border border-gray-200"
    >
      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center">
        <FaClock className="text-red-600 mr-2 md:mr-3" />
        Working Hours
      </h3>
      <div className="space-y-2 md:space-y-3">
        {workingHours.map((schedule, index) => (
          <motion.div
            key={index}
            className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-gray-100 last:border-b-0"
            variants={fadeInUp}
          >
            <span className="font-medium text-gray-900 text-sm md:text-base mb-0.5 sm:mb-0">{schedule.day}</span>
            <span className="font-semibold text-red-600 text-xs md:text-sm lg:text-base">{schedule.time}</span>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-200"
        variants={fadeInUp}
      >
        <p className="text-gray-600 text-xs md:text-sm">
          <span className="font-semibold">Note:</span> Emergency services available 24/7 via hotline: 641
        </p>
      </motion.div>
    </motion.div>
  );
};

export default WorkingHours;