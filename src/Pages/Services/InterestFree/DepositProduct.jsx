import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaCheckCircle, 
  FaShieldAlt,
  FaHandshake,
  FaCoins,
  FaChartLine,
  FaGlobe,
  FaStar,
  FaMapMarkerAlt,
  FaBolt,
  FaSyncAlt,
  FaUsers
} from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';

const DepositProduct = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [animated, setAnimated] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const productsRef = useRef(null);

  useEffect(() => {
    const observers = [];

    const mainObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
            controls.start('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const productsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const productCards = entry.target.querySelectorAll('.product-card');
            productCards.forEach((card, index) => {
              setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) mainObserver.observe(sectionRef.current);
    if (productsRef.current) productsObserver.observe(productsRef.current);

    observers.push(mainObserver, productsObserver);

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [animated, controls]);

  const depositProducts = [
    {
      name: 'Wadiah Savings Account',
      description: 'A safe custody account where your funds are kept with our guarantee of safety.',
      icon: FaShieldAlt
    },
    {
      name: 'Amanah Current Account',
      description: 'Current account operated on the principles of trust and honesty in transactions.',
      icon: FaHandshake
    },
    {
      name: 'Mudarabah Savings Account',
      description: 'Profit-sharing investment account where bank manages funds for profit generation.',
      icon: FaChartLine
    },
    {
      name: 'Mudarabah Investment Account',
      description: 'Higher investment account for larger deposits with profit-sharing arrangements.',
      icon: FaCoins
    },
    {
      name: 'Foreign Currency Deposit Accounts',
      description: 'Sharia-compliant foreign currency accounts for international transactions.',
      icon: FaGlobe
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.8 }
    },
    hover: { y: -15, scale: 1.05, transition: { type: "spring", stiffness: 400 } }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.9 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } },
    hover: { y: -8, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 10 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white" ref={sectionRef}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute ${i % 3 === 0 ? 'w-3 h-3' : i % 3 === 1 ? 'w-2 h-2' : 'w-1 h-1'} ${
              i % 2 === 0 ? 'bg-red-500/10' : 'bg-gray-900/10'
            } rounded-full`}
            animate={{ y: [0, -30, 0], x: [0, (Math.random() * 20) - 10, 0] }}
            transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      {/* Breadcrumb */}
      <motion.div 
        className="bg-gradient-to-r from-black via-gray-900 to-black py-4 md:py-6 relative overflow-hidden"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <nav className="flex items-center space-x-2 text-xs md:text-sm">
            <Link to="/" className="text-white/80 hover:text-white font-medium">Home</Link>
            <span className="text-red-500">›</span>
            <Link to="/services" className="text-white/80 hover:text-white font-medium">Services</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Deposit Products</span>
          </nav>
        </div>
        <motion.div 
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        />
      </motion.div>

      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6 md:pt-8">
        <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4, type: "spring" }}>
          <Link to="/services" className="inline-flex items-center text-red-600 hover:text-red-700 font-medium group text-sm md:text-base">
            <FaArrowLeft className="mr-2 md:mr-3 transform group-hover:-translate-x-1 transition-transform" />
            <span className="group-hover:underline">Back to All Services</span>
          </Link>
        </motion.div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[35vh] md:h-[50vh] overflow-hidden">
        <img
          src="/images/depositproduct.jpg"
          alt="Deposit Products"
          className="w-full h-full object-cover object-top md:object-center"
          onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; e.target.parentElement.style.background = 'linear-gradient(to bottom right, #dc2626, #000000)'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent md:bg-gradient-to-r md:from-black/70 md:via-black/50 md:to-transparent"></div>
        <div className="absolute inset-0 flex items-center p-4 md:p-12 text-white">
          <div className="max-w-6xl mx-auto w-full">
            <div className="max-w-xl">
              <div className="flex items-center mb-3 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-red-600/90 to-black/90 rounded-full flex items-center justify-center mr-3 md:mr-4 backdrop-blur-sm border border-white/20">
                  <FaStar className="text-white text-xl md:text-2xl" />
                </div>
                <h1 className="text-2xl md:text-5xl font-bold">Deposit Products</h1>
              </div>
              <p className="text-sm md:text-2xl text-white/90 font-light leading-relaxed">Interest Free Banking • GADAA Al Rayyan</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <motion.div className="max-w-6xl mx-auto" variants={containerVariants} initial="hidden" animate={controls}>
          {/* Introduction */}
          <motion.div variants={itemVariants} className="mb-8 md:mb-12" whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300 }}>
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl md:rounded-2xl p-4 md:p-8 shadow-xl border border-gray-200">
              <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="mr-2 md:mr-3">
                  <FaSyncAlt className="text-red-600 text-sm md:text-lg" />
                </motion.div>
                Sharia-Compliant Banking Solutions
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                We offer a range of Sharia-compliant deposit products to meet your financial needs. All our products are designed in accordance with Islamic banking principles, ensuring ethical and interest-free banking solutions.
              </p>
            </div>
          </motion.div>

          {/* Products Grid */}
          <motion.div ref={productsRef} variants={itemVariants} className="mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
              Our <span className="text-red-600">Islamic</span> Deposit Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {depositProducts.map((product, index) => {
                const Icon = product.icon;
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setActiveProduct(index)}
                    className={`product-card p-3 md:p-4 cursor-pointer transition-all duration-300 hover:bg-gray-50 rounded-lg ${
                      activeProduct === index ? 'bg-red-50 border-l-4 border-red-500' : 'border-l-4 border-transparent'
                    }`}
                  >
                    <div className="flex flex-row items-start">
                      <motion.div 
                        className="w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center mr-3 md:mr-4 bg-gradient-to-br from-red-50 to-red-100 flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="text-base md:text-xl text-red-600" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-1 line-clamp-1">{product.name}</h3>
                        <p className="text-gray-600 text-xs md:text-sm leading-relaxed line-clamp-3">{product.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Selected Product Details */}
          <motion.div variants={itemVariants} className="mb-10 md:mb-12">
            <motion.div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-xl border border-gray-200" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }}>
              <div className="flex items-center mb-6 md:mb-8">
                {(() => {
                  const Icon = depositProducts[activeProduct].icon;
                  return (
                    <motion.div 
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mr-4 md:mr-6 bg-gradient-to-br from-red-50 to-red-100"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                      <Icon className="text-2xl md:text-3xl text-red-600" />
                    </motion.div>
                  );
                })()}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 text-gray-900">{depositProducts[activeProduct].name}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{depositProducts[activeProduct].description}</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4 text-gray-900 flex items-center">
                    <FaCheckCircle className="text-red-600 mr-2" /> Key Benefits:
                  </h4>
                  <ul className="space-y-2 md:space-y-3">
                    <li className="flex items-start"><div className="w-2 h-2 bg-red-500 rounded-full mr-2 md:mr-3 mt-1.5"></div><span className="text-gray-700 text-sm md:text-base">Completely interest-free banking</span></li>
                    <li className="flex items-start"><div className="w-2 h-2 bg-red-500 rounded-full mr-2 md:mr-3 mt-1.5"></div><span className="text-gray-700 text-sm md:text-base">Sharia Advisory Board approved</span></li>
                    <li className="flex items-start"><div className="w-2 h-2 bg-red-500 rounded-full mr-2 md:mr-3 mt-1.5"></div><span className="text-gray-700 text-sm md:text-base">Ethical and transparent practices</span></li>
                    <li className="flex items-start"><div className="w-2 h-2 bg-red-500 rounded-full mr-2 md:mr-3 mt-1.5"></div><span className="text-gray-700 text-sm md:text-base">Profit-sharing opportunities</span></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4 text-gray-900 flex items-center">
                    <FaUsers className="text-red-600 mr-2" /> How to Open:
                  </h4>
                  <ul className="space-y-2 md:space-y-3">
                    <li className="flex items-start"><div className="w-2 h-2 bg-gray-900 rounded-full mr-2 md:mr-3 mt-1.5"></div><span className="text-gray-700 text-sm md:text-base">Visit any Gadaa Bank branch</span></li>
                    <li className="flex items-start"><div className="w-2 h-2 bg-gray-900 rounded-full mr-2 md:mr-3 mt-1.5"></div><span className="text-gray-700 text-sm md:text-base">Valid ID or passport required</span></li>
                    <li className="flex items-start"><div className="w-2 h-2 bg-gray-900 rounded-full mr-2 md:mr-3 mt-1.5"></div><span className="text-gray-700 text-sm md:text-base">Minimum deposit applies</span></li>
                    <li className="flex items-start"><div className="w-2 h-2 bg-gray-900 rounded-full mr-2 md:mr-3 mt-1.5"></div><span className="text-gray-700 text-sm md:text-base">Sign Sharia compliance agreement</span></li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Simplified CTA */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-red-600 via-red-700 to-black rounded-2xl sm:rounded-3xl p-6 md:p-10 text-center text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <motion.div 
                className="inline-flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-white/10 rounded-full mb-5 md:mb-8 backdrop-blur-sm border border-white/20"
                animate={{ rotate: [0, 360], scale: [1, 1.05, 1] }}
                transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 3, repeat: Infinity } }}
              >
                <FaStar className="text-white text-2xl md:text-3xl" />
              </motion.div>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Ready to Bank Islamically?</h2>
              <p className="text-sm md:text-base lg:text-lg text-white/90 mb-6 md:mb-8">Join thousands who have chosen ethical banking with Gadaa Bank Al Rayyan</p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <a
                  href="https://ibs.gadaabank.com.et/alpha-onboarding/get-started"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 md:px-8 md:py-3 bg-white text-red-600 font-bold rounded-lg md:rounded-xl hover:bg-gray-100 shadow-lg flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <span>Open Account Now</span>
                  <FaCheckCircle className="text-xs md:text-sm" />
                </a>
                <Link to="/locators/branch" className="px-6 py-2 md:px-8 md:py-3 border border-white text-white font-bold rounded-lg md:rounded-xl hover:bg-white/10 shadow-lg flex items-center justify-center gap-2 text-sm md:text-base">
                  <FaMapMarkerAlt className="text-xs md:text-sm" /> <span>Visit Branch</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating CTA Button (optional) */}
      <motion.div 
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-40"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ rotate: 90, scale: 1.1 }}
      >
        <Link to="/contact" className="group w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-red-600 to-black rounded-full flex items-center justify-center shadow-lg hover:shadow-xl">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
            <FaBolt className="text-white text-sm md:text-xl" />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};

export default DepositProduct;