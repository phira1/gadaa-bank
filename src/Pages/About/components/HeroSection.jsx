import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = ({ icon: Icon, title, description, fadeInUp }) => {
  return (
    <motion.div
      className="text-center mb-12"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
    >
      <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-600 to-black rounded-full mb-6 shadow-lg animate-pulse">
        <Icon className="text-white text-4xl" />
      </div>
      <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
        {title}
      </h1>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto">
        {description}
      </p>
    </motion.div>
  );
};

export default HeroSection;