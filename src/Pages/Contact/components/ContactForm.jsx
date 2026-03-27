import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUser, FaEnvelope, FaHeading, FaComments, FaPaperPlane 
} from 'react-icons/fa';

const ContactForm = ({ refProp, controls, slideInLeft, isMobile }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ fullName: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      ref={refProp}
      initial="hidden"
      animate={controls}
      variants={slideInLeft}
      className="w-full"
    >
      <div className="bg-gradient-to-r from-red-50 to-white rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-lg border border-red-100 hover:shadow-xl transition-all duration-300 w-full">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
          How can we <span className="text-red-600">help you out?</span>
        </h2>
        <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
          Reach out to us in the nearest office. We're here to assist you!
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-50 border border-green-200 rounded-xl md:rounded-2xl p-4 md:p-6 text-center"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <FaPaperPlane className="text-green-600 text-lg md:text-xl lg:text-2xl" />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Message Sent!</h3>
            <p className="text-gray-700 text-sm md:text-base">
              Thank you for contacting us. We'll get back to you within 24 hours.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4 lg:space-y-6">
            <div>
              <label className="flex items-center text-gray-700 font-medium mb-1 md:mb-2 text-xs md:text-sm">
                <FaUser className="mr-2 text-red-500 text-xs md:text-sm" />
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="flex items-center text-gray-700 font-medium mb-1 md:mb-2 text-xs md:text-sm">
                <FaEnvelope className="mr-2 text-red-500 text-xs md:text-sm" />
                E-mail *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label className="flex items-center text-gray-700 font-medium mb-1 md:mb-2 text-xs md:text-sm">
                <FaHeading className="mr-2 text-red-500 text-xs md:text-sm" />
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                placeholder="What is this regarding?"
              />
            </div>

            <div>
              <label className="flex items-center text-gray-700 font-medium mb-1 md:mb-2 text-xs md:text-sm">
                <FaComments className="mr-2 text-red-500 text-xs md:text-sm" />
                Your Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={isMobile ? 3 : 4}
                className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none text-sm md:text-base"
                placeholder="Type your message here..."
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-black text-white font-bold py-3 md:py-4 rounded-lg md:rounded-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <FaPaperPlane className="text-xs md:text-sm" />
              Submit Message
            </motion.button>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default ContactForm;