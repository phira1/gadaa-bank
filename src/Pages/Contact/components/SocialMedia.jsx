import React from 'react';
import { motion } from 'framer-motion';
import { socialMedia } from '../../../data/contactData';

const SocialMedia = ({ refProp, controls, slideInRight, scaleIn, fadeInUp }) => {
  return (
    <motion.div
      ref={refProp}
      initial="hidden"
      animate={controls}
      variants={slideInRight}
      className="bg-gradient-to-r from-red-50 to-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-lg border border-red-100"
    >
      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Connect With Us</h3>
      <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
        Stay updated with our latest news, offers, and banking tips through our social media channels.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
        {socialMedia.map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${social.color} rounded-lg md:rounded-xl lg:rounded-2xl p-3 md:p-4 text-white text-center hover:shadow-lg transition-all duration-300`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            variants={scaleIn}
          >
            <social.icon className="text-lg md:text-xl lg:text-2xl mx-auto mb-1 md:mb-2" />
            <div className="font-semibold text-xs md:text-sm">{social.name}</div>
          </motion.a>
        ))}
      </div>

      <motion.div
        className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-200"
        variants={fadeInUp}
      >
        <p className="text-gray-600 text-xs md:text-sm">
          <span className="font-semibold">Telegram Channel:</span>{" "}
          <a href="https://t.me/GadaaBankOfficial" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
            Join 31,190+ subscribers
          </a>{" "}
          for updates
        </p>
      </motion.div>
    </motion.div>
  );
};

export default SocialMedia;