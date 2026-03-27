import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPhone, FaHeadset, FaEnvelope, FaMapMarkerAlt 
} from 'react-icons/fa';
import { contactInfo } from '../../../data/contactData';

const iconMap = {
  FaPhone,
  FaHeadset,
  FaEnvelope,
  FaMapMarkerAlt
};

const ContactInfoCards = ({ refProp, controls, staggerChildren, scaleIn }) => {
  return (
    <motion.div
      ref={refProp}
      initial="hidden"
      animate={controls}
      variants={staggerChildren}
      className="mb-8 md:mb-12"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
        {contactInfo.map((info, index) => {
          const Icon = iconMap[info.icon];
          return (
            <motion.div
              key={index}
              variants={scaleIn}
              className="bg-white rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-6 shadow-lg border border-gray-200 hover:border-red-300 hover:shadow-xl transition-all duration-300 group"
              whileHover={{ y: -3 }}
            >
              <div className="flex flex-col items-center text-center h-full">
                <motion.div
                  className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-red-100 to-white rounded-xl md:rounded-2xl flex items-center justify-center mb-2 md:mb-3 lg:mb-4"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Icon className="text-red-600 text-lg md:text-xl lg:text-2xl" />
                </motion.div>
                <h3 className="text-sm md:text-base lg:text-lg font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-red-600 transition-colors duration-300">
                  {info.title}
                </h3>
                {info.title === "Call us" ? (
                  <a href={`tel:${info.details.replace(/\s/g, '')}`} className="text-gray-900 text-xs md:text-sm lg:text-base font-semibold mb-0.5 md:mb-1 hover:text-red-600">
                    {info.details}
                  </a>
                ) : (
                  <p className="text-gray-900 text-xs md:text-sm lg:text-base font-semibold mb-0.5 md:mb-1">
                    {info.details}
                  </p>
                )}
                <p className="text-gray-600 text-xs md:text-sm line-clamp-2">
                  {info.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ContactInfoCards;