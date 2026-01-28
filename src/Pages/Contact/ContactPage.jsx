import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaClock,
  FaBuilding,
  FaUser,
  FaHeading,
  FaComments,
  FaHeadset,
  FaWhatsapp,
  FaTelegram,
  FaFacebook,
  FaTwitter
} from 'react-icons/fa';
import { motion, useAnimation, useInView } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Refs for scroll animations
  const headerRef = useRef(null);
  const contactCardsRef = useRef(null);
  const formRef = useRef(null);
  const mapRef = useRef(null);
  const departmentsRef = useRef(null);
  const hoursRef = useRef(null);
  const socialRef = useRef(null);
  const ctaRef = useRef(null);

  // Animation controls
  const headerControls = useAnimation();
  const contactCardsControls = useAnimation();
  const formControls = useAnimation();
  const mapControls = useAnimation();
  const departmentsControls = useAnimation();
  const hoursControls = useAnimation();
  const socialControls = useAnimation();
  const ctaControls = useAnimation();

  // Check if elements are in view
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const contactCardsInView = useInView(contactCardsRef, { once: true, amount: 0.2 });
  const formInView = useInView(formRef, { once: true, amount: 0.2 });
  const mapInView = useInView(mapRef, { once: true, amount: 0.2 });
  const departmentsInView = useInView(departmentsRef, { once: true, amount: 0.2 });
  const hoursInView = useInView(hoursRef, { once: true, amount: 0.2 });
  const socialInView = useInView(socialRef, { once: true, amount: 0.2 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.2 });

  // Trigger animations when elements come into view
  useEffect(() => {
    if (headerInView) headerControls.start('visible');
  }, [headerInView, headerControls]);

  useEffect(() => {
    if (contactCardsInView) contactCardsControls.start('visible');
  }, [contactCardsInView, contactCardsControls]);

  useEffect(() => {
    if (formInView) formControls.start('visible');
  }, [formInView, formControls]);

  useEffect(() => {
    if (mapInView) mapControls.start('visible');
  }, [mapInView, mapControls]);

  useEffect(() => {
    if (departmentsInView) departmentsControls.start('visible');
  }, [departmentsInView, departmentsControls]);

  useEffect(() => {
    if (hoursInView) hoursControls.start('visible');
  }, [hoursInView, hoursControls]);

  useEffect(() => {
    if (socialInView) socialControls.start('visible');
  }, [socialInView, socialControls]);

  useEffect(() => {
    if (ctaInView) ctaControls.start('visible');
  }, [ctaInView, ctaControls]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you would send this data to a backend
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

  const contactInfo = [
    { icon: FaPhone, title: 'Call us', details: '+251 116392578', description: 'Main Office Line' },
    { icon: FaHeadset, title: 'Hotline', details: '641', description: '24/7 Customer Service' },
    { icon: FaEnvelope, title: 'Email', details: 'info@gadaabank.com.et', description: 'General Inquiries' },
    { icon: FaMapMarkerAlt, title: 'Head Office', details: 'Gotera, kirkos SubCity W-03, HNo-#745', description: 'Addis Ababa, Ethiopia' }
  ];

  const socialMedia = [
    { icon: FaWhatsapp, name: 'WhatsApp', color: 'bg-green-500', link: '#' },
    { icon: FaTelegram, name: 'Telegram', color: 'bg-blue-500', link: '#' },
    { icon: FaFacebook, name: 'Facebook', color: 'bg-blue-600', link: '#' },
    { icon: FaTwitter, name: 'Twitter', color: 'bg-blue-400', link: '#' }
  ];

  const departments = [
    { name: 'Customer Service', email: 'support@gadaabank.com.et', phone: '641' },
    { name: 'Account Opening', email: 'accounts@gadaabank.com.et', phone: '+251 116392500' },
    { name: 'Loan Department', email: 'loans@gadaabank.com.et', phone: '+251 116392501' },
    { name: 'Card Services', email: 'cards@gadaabank.com.et', phone: '+251 116392502' }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black py-3 md:py-4">
        <div className="container mx-auto px-3 md:px-4">
          <nav className="flex items-center space-x-2 text-xs md:text-sm">
            <Link to="/" className="text-white/80 hover:text-white font-medium transition-colors duration-300">
              Home
            </Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Contact Us</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-4 py-6 md:py-8">
        {/* Back Button */}
        <Link 
          to="/"
          className="inline-flex items-center text-red-600 hover:text-red-700 mb-6 md:mb-8 group text-sm md:text-base"
        >
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Home
        </Link>

        {/* Main Header with Animation */}
        <motion.div 
          ref={headerRef}
          initial="hidden"
          animate={headerControls}
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

        {/* Contact Information Cards - 2x2 Grid on Mobile */}
        <motion.div 
          ref={contactCardsRef}
          initial="hidden"
          animate={contactCardsControls}
          variants={staggerChildren}
          className="mb-8 md:mb-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
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
                    <p className="text-gray-900 text-xs md:text-sm lg:text-base font-semibold mb-0.5 md:mb-1">
                      {info.details}
                    </p>
                    <p className="text-gray-600 text-xs md:text-sm line-clamp-2">
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Main Content with Form and Map */}
        <div className="mb-8 md:mb-12">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {/* Left Column - Contact Form */}
            <motion.div
              ref={formRef}
              initial="hidden"
              animate={formControls}
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

            {/* Right Column - Map and Info */}
            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              {/* Map Section */}
              <motion.div
                ref={mapRef}
                initial="hidden"
                animate={mapControls}
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
                        {/* Ethiopia Map with Pin */}
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
                            
                            {/* Location Pin */}
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
                        
                        {/* Map Legend */}
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

              {/* Departments Info */}
              <motion.div
                ref={departmentsRef}
                initial="hidden"
                animate={departmentsControls}
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
            </div>
          </div>
        </div>

        {/* Working Hours & Social Media */}
        <div className="mb-8 md:mb-12">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {/* Working Hours */}
            <motion.div
              ref={hoursRef}
              initial="hidden"
              animate={hoursControls}
              variants={slideInLeft}
              className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-lg border border-gray-200"
            >
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center">
                <FaClock className="text-red-600 mr-2 md:mr-3" />
                Working Hours
              </h3>
              <div className="space-y-2 md:space-y-3">
                {[
                  { day: 'Monday - Thursday', time: '8:30 AM - 5:30 PM' },
                  { day: 'Friday', time: '8:30 AM - 11:30 AM, 1:30 PM - 5:30 PM' },
                  { day: 'Saturday', time: '8:30 AM - 12:30 PM' },
                  { day: 'Sunday', time: 'Closed' }
                ].map((schedule, index) => (
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

            {/* Social Media */}
            <motion.div
              ref={socialRef}
              initial="hidden"
              animate={socialControls}
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
                  <span className="font-semibold">Telegram Channel:</span> Join 31,190+ subscribers for updates
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          ref={ctaRef}
          initial="hidden"
          animate={ctaControls}
          variants={fadeInUp}
          className="bg-gradient-to-r from-red-600 to-black rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 text-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3">Have any questions?</h2>
          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-4 md:mb-6">
            Our customer service team is ready to assist you 24/7
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <motion.a 
              href="tel:+251116392578"
              className="px-4 md:px-6 py-2 md:py-2.5 bg-white text-red-600 font-bold rounded-lg md:rounded-xl hover:bg-gray-100 shadow-md transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base w-full sm:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPhone className="text-xs md:text-sm" />
              Call Now: +251 116392578
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
      </div>
    </div>
  );
};

export default ContactPage;