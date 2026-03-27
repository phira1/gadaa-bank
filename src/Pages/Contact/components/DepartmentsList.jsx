import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { departments } from '../../../data/contactData';

const DepartmentsList = ({ refProp, controls, fadeInUp }) => {
  return (
    <motion.div
      ref={refProp}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      className="bg-gradient-to-r from-red-600 to-black rounded-2xl md:rounded-3xl p-4 md:p-6 text-white shadow-lg"
    >
      <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">Department Contacts</h3>
      <div className="space-y-2 md:space-y-3">
        {departments.map((dept, index) => (
          <motion.div
            key={index}
            className="bg-white/10 p-3 md:p-4 rounded-lg md:rounded-xl hover:bg-white/15 transition-all duration-200"
            whileHover={{ x: 3 }}
          >
            <h4 className="font-bold text-sm md:text-base lg:text-lg mb-1">{dept.name}</h4>
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center">
                <FaPhone className="text-red-300 mr-2 text-xs md:text-sm" />
                <span className="text-xs md:text-sm">{dept.phone}</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-red-300 mr-2 text-xs md:text-sm" />
                <span className="text-xs truncate max-w-[150px] md:max-w-none">{dept.email}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default DepartmentsList;