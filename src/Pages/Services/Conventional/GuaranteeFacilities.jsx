import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaCheckCircle, 
  FaFileContract, 
  FaShieldAlt,
  FaHandshake,
  FaGlobe,
  FaShip,
  FaPlane,
  FaTruck,
  FaBuilding,
  FaOilCan,
  FaBalanceScale,
  FaArrowRight,
  FaFileSignature,
  FaCertificate
} from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';

const GuaranteeFacilities = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [controls]);

  const guaranteeTypes = [
    { icon: FaFileContract, title: 'Bid Bond Guarantee', description: 'Secures bid submissions for contracts' },
    { icon: FaCheckCircle, title: 'Performance Bond Guarantee', description: 'Ensures contract performance completion' },
    { icon: FaHandshake, title: 'Advance Payment Guarantee', description: 'Secures advance payments to contractors' },
    { icon: FaTruck, title: 'Suppliers Credit Guarantee', description: 'Trade credit guarantee for suppliers' },
    { icon: FaBalanceScale, title: 'Retention Payment Guarantee', description: 'Covers retention money in contracts' },
    { icon: FaShip, title: 'Customs Duty/Bond Guarantee', description: 'Guarantee for customs duties and bonds' },
    { icon: FaGlobe, title: 'Overseas Employment Guarantee', description: 'For foreign employment agencies' },
    { icon: FaBuilding, title: 'Line of Credit Facility', description: 'Credit line guarantee facilities' },
    { icon: FaGlobe, title: 'Foreign Bank Guarantee', description: 'International bank guarantees' },
    { icon: FaPlane, title: 'IATA Guarantee', description: 'For International Air Transport Association' },
    { icon: FaOilCan, title: 'Oil Companies Guarantee', description: 'Guarantees for oil industry companies' },
    { icon: FaShip, title: 'Steamers Guarantee', description: 'Letters of Indemnity for shipping' },
  ];

  const benefits = [
    { title: 'Financial Security', description: 'Protects against payment defaults' },
    { title: 'Business Credibility', description: 'Enhances your business reputation' },
    { title: 'Risk Management', description: 'Minimizes financial risks in transactions' },
    { title: 'Global Acceptance', description: 'Accepted by local and international parties' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    },
    hover: { y: -5, transition: { duration: 0.3 } }
  };

  const guaranteeCardVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (index) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: index * 0.1
      }
    }),
    hover: { 
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white" ref={sectionRef}>
      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black py-4 md:py-6">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-xs md:text-sm">
            <Link to="/" className="text-white/80 hover:text-white font-medium">Home</Link>
            <span className="text-red-500">›</span>
            <Link to="/services" className="text-white/80 hover:text-white font-medium">Services</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Guarantee Facilities</span>
          </nav>
        </div>
      </div>

      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6 md:pt-8">
        <Link 
          to="/services"
          className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm md:text-base"
        >
          <FaArrowLeft className="mr-2 md:mr-3" />
          Back to All Services
        </Link>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Main Title */}
          <motion.div variants={itemVariants} className="text-center mb-10 md:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-red-600 to-black rounded-full mb-4 md:mb-8">
              <FaShieldAlt className="text-white text-2xl md:text-3xl" />
            </div>
            
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent">
                Guarantee Facilities
              </span>
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-700 mb-6 md:mb-8 max-w-3xl mx-auto px-2">
              Secure your business transactions with our comprehensive guarantee services
            </p>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="mb-12 md:mb-16">
            <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200">
              <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                Bank Guarantee Services
              </h2>
              <p className="text-gray-700 text-sm md:text-lg leading-relaxed mb-4 md:mb-6">
                A letter of guarantee issued by a bank is a written promise by the bank to compensate 
                (pay a sum of money) to the beneficiary (local or foreign) in the event that the obligor 
                fails to honor its obligations in accordance with the terms and conditions of the guarantee agreement/contract.
              </p>
              <p className="text-gray-700 text-sm md:text-lg leading-relaxed font-semibold text-red-600">
                Gadaa Bank offers the following bank guarantees to its esteemed customers.
              </p>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div variants={itemVariants} className="mb-12 md:mb-16">
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
              Key Benefits
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-gray-200 text-center"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-red-100 to-white rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 mx-auto">
                    <FaCheckCircle className="text-red-600 text-base md:text-xl" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Guarantee Types */}
          <motion.div variants={itemVariants} className="mb-12 md:mb-16">
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
              Types of Guarantees We Offer
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {guaranteeTypes.map((type, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={guaranteeCardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-gray-200 hover:border-red-300 transition-all duration-300"
                >
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-red-100 to-white rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                      <type.icon className="text-red-600 text-base md:text-xl" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2">{type.title}</h3>
                      <p className="text-gray-600 text-xs md:text-sm">{type.description}</p>
                    </div>
                  </div>
                  <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-100">
                    <div className="flex items-center text-red-600 text-xs md:text-sm font-semibold">
                      <FaCheckCircle className="mr-1 md:mr-2 text-green-500 text-xs md:text-sm" />
                      Available for qualified clients
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Services (kept) */}
          <motion.div variants={itemVariants} className="mb-12 md:mb-16">
            <div className="bg-gradient-to-r from-red-50 to-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-red-100">
              <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-center">
                Additional Guarantee Services
              </h2>
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-white rounded-lg md:rounded-xl p-5 md:p-6 shadow-md border border-gray-200">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4 flex items-center">
                    <FaFileSignature className="text-red-600 mr-2 md:mr-3 text-base md:text-xl" />
                    Other Forms of Guarantees
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Customized guarantee solutions tailored to specific business needs and requirements.
                  </p>
                </div>
                <div className="bg-white rounded-lg md:rounded-xl p-5 md:p-6 shadow-md border border-gray-200">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4 flex items-center">
                    <FaCertificate className="text-red-600 mr-2 md:mr-3 text-base md:text-xl" />
                    International Guarantees
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Cross-border guarantee facilities for international trade and business transactions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* The heavy CTA section has been removed entirely – no more "Secure Your Business Transactions" etc. */}

        </motion.div>
      </div>
    </div>
  );
};

export default GuaranteeFacilities;