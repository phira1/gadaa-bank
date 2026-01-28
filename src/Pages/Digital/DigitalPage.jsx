import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaMobileAlt,
  FaLaptop,
  FaCreditCard,
  FaUniversity,
  FaQrcode,
  FaChevronRight,
  FaShieldAlt,
  FaBolt,
  FaGlobe,
  FaLock,
  FaChartLine,
  FaUsers
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const DigitalPage = () => {
  const digitalServices = [
    {
      id: 1,
      title: 'Mobile Banking',
      icon: FaMobileAlt,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      path: '/digital/mobile-banking',
    },
    {
      id: 2,
      title: 'Internet Banking',
      icon: FaLaptop,
      color: 'text-gray-900',
      bgColor: 'bg-gray-50',
      path: '/digital/internet-banking',
    },
    {
      id: 3,
      title: 'Card Banking',
      icon: FaCreditCard,
      color: 'text-red-700',
      bgColor: 'bg-red-50',
      path: '/digital/card-banking',
    },
    {
      id: 4,
      title: 'ATM Services',
      icon: FaUniversity,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      path: '/digital/atm',
    },
    {
      id: 5,
      title: 'Merchant Payments',
      icon: FaQrcode,
      color: 'text-gray-800',
      bgColor: 'bg-gray-50',
      path: '/digital/merchant',
    }
  ];

  const stats = [
    { value: '50K+', label: 'Active Users' },
    { value: '24/7', label: 'Service Availability' },
    { value: '100%', label: 'Secure Transactions' },
    { value: 'Instant', label: 'Processing Speed' }
  ];

  const securityFeatures = [
    { icon: FaLock, title: 'Encryption', detail: '256-bit SSL encryption' },
    { icon: FaShieldAlt, title: 'Protection', detail: 'Real-time fraud detection' },
    { icon: FaGlobe, title: 'Monitoring', detail: '24/7 security monitoring' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black py-6">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-white/80 hover:text-white font-medium transition-colors duration-300">
              Home
            </Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Digital Banking</span>
          </nav>
        </div>
      </div>

      {/* Hero Section with Background Image - Text on Left Side */}
      <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        {/* Background Image */}
        <img
          src="/images/digitalbackgroundimage.jpg"
          alt="Digital Banking"
          className="w-full h-full object-cover object-top md:object-center"
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = 'none';
            e.target.parentElement.style.background = 'linear-gradient(to bottom right, #dc2626, #000000)';
          }}
        />
        
        {/* Dark Overlay - Gradient from left to right for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent md:bg-gradient-to-r md:from-black/70 md:via-black/50 md:to-transparent"></div>

        {/* Text Content - Positioned on Left Side */}
        <div className="absolute inset-0 flex items-center p-6 md:p-12 text-white">
          <div className="max-w-6xl mx-auto w-full">
            <div className="max-w-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600/90 to-black/90 rounded-full flex items-center justify-center mr-4 backdrop-blur-sm border border-white/20">
                  <FaChartLine className="text-white text-2xl" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Digital Banking
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
                Experience banking convenience at your fingertips with our comprehensive digital solutions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Stats Section - Minimalist */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Services Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Our Digital Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base">
              Choose from our range of secure, convenient digital banking solutions
            </p>
          </motion.div>

          {/* Services - 2x2 Grid on Mobile, 5 columns on desktop */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {digitalServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`${service.bgColor} rounded-xl p-4 md:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full`}
                  >
                    <Link to={service.path} className="flex flex-col items-center text-center h-full">
                      {/* Icon */}
                      <div className={`w-12 h-12 md:w-14 md:h-14 ${service.bgColor} ${service.color} rounded-full flex items-center justify-center mb-3 md:mb-4 border border-gray-200`}>
                        <Icon className="text-xl md:text-2xl" />
                      </div>
                      
                      {/* Title */}
                      <h3 className={`text-base md:text-lg font-bold mb-2 md:mb-3 ${service.color}`}>
                        {service.title}
                      </h3>
                      
                      {/* Tell me more link - Horizontal on mobile, vertical on larger screens */}
                      <div className="flex md:flex-col items-center justify-center mt-auto text-gray-600 hover:text-red-600 transition-colors duration-300">
                        <span className="text-xs md:text-sm font-medium mr-1 md:mr-0">Tell me more</span>
                        <FaChevronRight className="text-xs md:mt-1 transform md:rotate-0 rotate-90" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Security Section - Horizontal layout for all screen sizes */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Your Security is Our Priority
              </h2>
              <p className="text-gray-600 text-base mb-10 max-w-3xl mx-auto">
                All our digital banking services are protected with bank-level security, 
                including 256-bit encryption, two-factor authentication, and 24/7 fraud monitoring.
              </p>
              
              {/* Horizontal layout for mobile and desktop */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 max-w-5xl mx-auto justify-center items-stretch">
                {securityFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex-1 flex flex-col items-center p-4 md:p-6 border border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className={`w-12 h-12 md:w-14 md:h-14 ${
                      index === 0 ? 'bg-red-50' : 
                      index === 1 ? 'bg-red-50' : 'bg-gray-50'
                    } rounded-full flex items-center justify-center mb-3 md:mb-4`}>
                      <feature.icon className="text-lg md:text-xl text-gray-900" />
                    </div>
                    <div className="text-lg md:text-xl font-bold text-gray-900 mb-2">{feature.title}</div>
                    <div className="text-gray-600 text-sm md:text-base text-center px-2">{feature.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants}>
            <div className="bg-gradient-to-r from-red-600 to-black rounded-xl p-6 md:p-8 lg:p-10 text-white text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Start Your Digital Banking Journey
              </h2>
              <p className="text-white/90 text-sm md:text-base lg:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
                Join thousands of customers enjoying secure, convenient banking from anywhere
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="px-5 md:px-6 py-2.5 md:py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 text-sm md:text-base flex items-center justify-center gap-2 md:gap-3"
                >
                  <FaMobileAlt className="text-base md:text-lg" />
                  <span>Get Started Today</span>
                </Link>
                
                <Link 
                  to="/services"
                  className="px-5 md:px-6 py-2.5 md:py-3 border border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300 text-sm md:text-base flex items-center justify-center gap-2 md:gap-3"
                >
                  <FaChartLine className="text-base md:text-lg" />
                  <span>View All Services</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default DigitalPage;