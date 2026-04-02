import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaComments } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactHeader = ({ refProp, controls, fadeInUp, fadeInUpVariants }) => {
  return (
    <>
      <div className="container mx-auto px-3 md:px-4 py-6 md:py-8">
        <Link
          to="/"
          className="inline-flex items-center text-red-600 hover:text-red-700 mb-6 md:mb-8 group text-sm md:text-base"
        >
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Home
        </Link>

        <motion.div
          ref={refProp}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="text-center mb-8 md:mb-12"
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-red-600 to-black rounded-full mb-4 md:mb-6 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <FaComments className="text-white text-2xl md:text-3xl lg:text-4xl" />
          </motion.div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-3 md:mb-4 px-2">
            <span className="text-red-600">Contact</span> Us
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl md:max-w-3xl mx-auto px-2">
            Please let us know if you have a question, want to leave a comment, or would like further information about Gadaa Bank!
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default ContactHeader;