import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactCTA = ({ refProp, controls, fadeInUp }) => {
  return (
    <motion.div
      ref={refProp}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      className="bg-gradient-to-r from-red-600 to-black rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 text-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3">Have any questions?</h2>
      <p className="text-base md:text-lg lg:text-xl text-white/90 mb-4 md:mb-6">
        Our customer service team is ready to assist you 24/7
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
        <motion.a
          href="tel:+251641"
          className="px-4 md:px-6 py-2 md:py-2.5 bg-white text-red-600 font-bold rounded-lg md:rounded-xl hover:bg-gray-100 shadow-md transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base w-full sm:w-auto"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaPhone className="text-xs md:text-sm" />
          Call Now: +251 641
        </motion.a>
        <motion.a
          href="mailto:info@gadaabank.com.et"
          className="px-4 md:px-6 py-2 md:py-2.5 border border-white text-white font-bold rounded-lg md:rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base w-full sm:w-auto"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaEnvelope className="text-xs md:text-sm" />
          Email Us
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ContactCTA;