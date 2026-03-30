import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaCheckCircle, 
  FaBriefcase, 
  FaUsers,
  FaShieldAlt,
  FaMobileAlt,
  FaLaptop,
  FaFileInvoiceDollar,
  FaCoins,
  FaWallet,
  FaCreditCard,
  FaArrowRight,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaHandHoldingUsd,
  FaChevronUp,
  FaBolt,
  FaSyncAlt,
  FaChartLine
} from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import { contactInfo, departments } from '../../../data/contactData';

const CurrentAccounts = () => {
  const [balanceCount, setBalanceCount] = useState({ corporate: 0, individual: 0 });
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.5 });

  // Get contact data
  const hotline = contactInfo.find(info => info.title === 'Hotline')?.details || '641';
  const email = contactInfo.find(info => info.title === 'Email')?.details || 'info@gadaabank.com.et';
  const headOffice = contactInfo.find(info => info.title === 'Head Office')?.details || 'Gotera, Kirkos SubCity W-03, HNo-#745';

  // Animate counters when stats become visible
  useEffect(() => {
    if (statsInView) {
      const animateCounter = (type, target) => {
        let current = 0;
        const increment = target / 60;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setBalanceCount(prev => ({ ...prev, [type]: Math.floor(current) }));
        }, 25);
      };
      animateCounter('corporate', 1000);
      animateCounter('individual', 500);
    }
  }, [statsInView]);

  // Feature data (could be moved to a data file later)
  const features = [
    { icon: FaFileInvoiceDollar, title: 'Non-Interest Bearing', description: 'It is Non-interest bearing account' },
    { icon: FaCoins, title: 'Corporate Minimum Balance', description: 'Opening minimum balance of Birr 1,000.00 for corporate customer type' },
    { icon: FaWallet, title: 'Individual Minimum Balance', description: 'Birr 500.00 minimum for individual customer type' },
    { icon: FaBriefcase, title: 'Smooth Business Transactions', description: 'Facilitates business transaction very smoothly' },
    { icon: FaCreditCard, title: 'Cheque Operations', description: 'Can be operated by using cheque' },
    { icon: FaMobileAlt, title: 'Digital Banking', description: 'Can be operated by Mobile and Internet banking' },
  ];

  const eligibility = [
    { title: 'Natural Persons', description: 'All eligible natural persons', icon: FaUsers },
    { title: 'Legal Entities', description: 'All eligible legal persons', icon: FaBriefcase },
    { title: 'Verified Entities', description: 'Not found in Mal Operation List by NBE', icon: FaCheckCircle },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white" ref={sectionRef}>
      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-black to-gray-900 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-red-500">›</span>
            <Link to="/services" className="text-white/80 hover:text-white">Services</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Current Accounts</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-8">
        {/* Back Button */}
        <Link 
          to="/services"
          className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 group"
        >
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to All Services
        </Link>

        {/* Hero Section with Image */}
        <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden rounded-2xl mb-12">
          <img
            src="/images/current-account.jpg"
            alt="Current Accounts"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = 'none';
              e.target.parentElement.style.background = 'linear-gradient(to bottom right, #dc2626, #000000)';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 flex items-center p-6 md:p-12 text-white">
            <div className="max-w-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600/90 to-black/90 rounded-full flex items-center justify-center mr-4 backdrop-blur-sm border border-white/20">
                  <FaBriefcase className="text-white text-2xl" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">Current Accounts</h1>
              </div>
              <p className="text-xl md:text-2xl text-white/90 font-light">
                Manage your everyday banking easily with a Gadaa Bank cheque book and more
              </p>
            </div>
          </div>
        </div>

        <motion.div 
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Description */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FaSyncAlt className="text-red-600 mr-3 animate-spin-slow" />
                Demand Accounts / Current Accounts
              </h2>
              <p className="text-gray-700 leading-relaxed">
                It is an account from which money can be withdrawn without notice, typically an active account catering for frequent deposits and withdrawals by Cheque.
              </p>
            </div>
          </motion.div>

          {/* Balance Requirements */}
          <motion.div ref={statsRef} variants={itemVariants} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Minimum <span className="text-red-600">Balance</span> Requirements
            </h2>
            <div className="flex flex-col sm:flex-row gap-6">
              {[
                { type: 'corporate', label: 'Corporate Customers', icon: FaBriefcase, balance: balanceCount.corporate },
                { type: 'individual', label: 'Individual Customers', icon: FaUsers, balance: balanceCount.individual }
              ].map((item, idx) => (
                <div key={idx} className="flex-1 bg-gradient-to-br from-red-50 to-white rounded-xl p-6 shadow-md border border-red-100 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-100 to-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <item.icon className="text-2xl text-red-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    Birr <span className="text-red-600">{item.balance.toLocaleString()}</span>.00
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.label}</h3>
                  <p className="text-gray-600">Minimum opening balance</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Features and <span className="text-red-600">Benefits</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow border border-gray-100">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="text-red-600 text-lg" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 truncate">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Eligibility */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="bg-gradient-to-r from-red-50 to-white rounded-xl p-8 shadow-lg border border-red-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Eligible <span className="text-red-600">Entities</span>
              </h2>
              <p className="text-gray-700 text-center text-lg mb-8">
                All eligible natural and legal persons not found in Mal Operation List by NBE
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {eligibility.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-md border border-gray-200 text-center">
                    <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <item.icon className="text-2xl text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                    <div className="mt-4 text-red-600 text-sm font-semibold flex items-center justify-center">
                      <FaCheckCircle className="mr-1" /> Eligible
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-red-600 via-red-700 to-black rounded-2xl p-8 text-center text-white shadow-xl">
            <div className="max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
                <FaHandHoldingUsd className="text-white text-3xl" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Ready for Active Banking?</h2>
              <p className="text-white/90 mb-8">Did you want to enjoy with this account?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="https://ibs.gadaabank.com.et/alpha-onboarding/get-started"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-all"
                >
                  Open An Account <FaArrowRight className="ml-2" />
                </a>
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 border border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all"
                >
                  <FaPhoneAlt className="mr-2" /> Business Advisor
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Visit Branch</div>
                    <div className="text-white/70 text-sm">Multiple locations</div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Email</div>
                    <div className="text-white/70 text-sm">{email}</div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <FaPhoneAlt className="text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Call Center</div>
                    <div className="text-white/70 text-sm">{hotline}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating CTA Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Link 
          to="/contact"
          className="w-14 h-14 bg-gradient-to-br from-red-600 to-black rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
        >
          <FaBolt className="text-white text-xl" />
        </Link>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CurrentAccounts;