import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';

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
          Gadaa Bank Head Office - Gotera, Kirkos SubCity W-03, HNo-#745, Addis Ababa, Ethiopia
        </p>
      </div>

      <div className="relative h-56 md:h-64 lg:h-80 xl:h-96">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white flex items-center justify-center p-2 md:p-4">
          <div className="text-center w-full max-w-xs md:max-w-sm">
            <div className="relative">
              <motion.div
                className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-gradient-to-br from-gray-100 to-white rounded-full shadow-xl flex items-center justify-center mx-auto mb-3 md:mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
              >
                <div className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 bg-gradient-to-br from-red-100 to-white rounded-full flex items-center justify-center relative">
                  <div className="text-center">
                    <FaMapMarkerAlt className="text-red-600 text-2xl md:text-3xl lg:text-4xl mx-auto mb-1 md:mb-2" />
                    <div className="text-gray-900 font-bold text-sm md:text-base">Addis Ababa</div>
                    <div className="text-gray-600 text-xs md:text-sm">Gotera Area</div>
                  </div>

                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-red-600 rounded-full flex items-center justify-center"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <FaBuilding className="text-white text-xs md:text-sm" />
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white/90 backdrop-blur-sm rounded-lg md:rounded-xl lg:rounded-2xl p-3 md:p-4 shadow-lg max-w-full mx-auto"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-3 mb-2 md:mb-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-red-600 rounded-full mr-2"></div>
                    <span className="font-semibold text-xs md:text-sm">Gadaa Bank</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-blue-600 rounded-full mr-2"></div>
                    <span className="font-semibold text-xs md:text-sm">Branches</span>
                  </div>
                </div>
                <p className="text-gray-600 text-xs md:text-sm text-center">
                  Multiple branches across Ethiopia
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactMap;