import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';

const ContactMap = ({ refProp, controls, slideInRight }) => {
  return (
    <motion.div
      ref={refProp}
      initial="hidden"
      animate={controls}
      variants={slideInRight}
      className="bg-white rounded-2xl md:rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="p-4 md:p-6 border-b border-gray-100">
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 md:mb-3 flex items-center">
          <FaMapMarkerAlt className="text-red-600 mr-2 md:mr-3" />
          Find Us on Map
        </h3>
        <p className="text-gray-700 text-xs md:text-sm lg:text-base">
          Gadaa Bank Head Office – Gotera, Kirkos SubCity W-03, HNo-#745, Addis Ababa, Ethiopia
        </p>
      </div>

      <div className="relative h-56 md:h-64 lg:h-80 xl:h-96">
        <iframe
          title="Gadaa Bank Head Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.175!2d38.762526!3d8.9812552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b858540ac1c95%3A0x9af101abd8488869!2sGadaa%20Bank%20S.C.!5e0!3m2!1sen!2set!4v1712345678901!5m2!1sen!2set"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default ContactMap;