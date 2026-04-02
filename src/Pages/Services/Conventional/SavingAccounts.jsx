import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, FaPiggyBank, FaGem, FaArrowRight, 
  FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaHandHoldingUsd, FaWallet,
  FaCheckCircle
} from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import { contactInfo } from '../../../data/contactData';
import { stats, features, eligibility } from '../../../data/savingAccountsData';

const SavingAccounts = () => {
  const [interestRate, setInterestRate] = useState(0);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });

  // Animate interest rate counter (stops exactly at 7%)
  useEffect(() => {
    if (isHeroInView) {
      let current = 0;
      const timer = setInterval(() => {
        if (current < 7) {
          current = Math.min(current + 0.1, 7);
          setInterestRate(parseFloat(current.toFixed(1)));
        } else {
          clearInterval(timer);
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [isHeroInView]);

  // Update branch count stat to 110+
  const updatedStats = stats.map(stat => 
    stat.label === 'Branch Network' ? { ...stat, value: '110+' } : stat
  );

  const hotline = contactInfo.find(info => info.title === 'Hotline')?.details || '641';
  const email = contactInfo.find(info => info.title === 'Email')?.details || 'info@gadaabank.com.et';

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-black to-gray-900 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-red-500">›</span>
            <Link to="/services" className="text-white/80 hover:text-white">Services</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Saving Accounts</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-8">
        {/* Back Button */}
        <Link to="/services" className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 group">
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to All Services
        </Link>

        {/* Hero Section with Image Zoom */}
        <div ref={heroRef} className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden rounded-2xl mb-12">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={isHeroInView ? { scale: 1 } : { scale: 1.1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src="/images/savingaccountbackground.jpg"
            alt="Saving Accounts"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.parentElement.style.background = 'linear-gradient(to bottom right, #dc2626, #000000)';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 md:p-12 text-white">
            <div className="flex items-center mb-4">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isHeroInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
                className="w-16 h-16 bg-gradient-to-br from-red-600/90 to-black/90 rounded-full flex items-center justify-center mr-4 backdrop-blur-sm border border-white/20"
              >
                <FaPiggyBank className="text-white text-2xl" />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-3xl md:text-4xl font-bold"
              >
                Saving Accounts
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-white/90 max-w-3xl"
            >
              Your gateway to smart savings with premium features and security
            </motion.p>
          </div>
        </div>

        {/* Main content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="max-w-6xl mx-auto"
        >
          {/* Intro + Interest Rate */}
          <motion.div variants={fadeUp} className="mb-12">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-2/3">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaGem className="text-red-600 mr-3" /> Smart Savings Solutions
                  </h2>
                  <p className="text-gray-700 mb-4">
                    We provide a wide range of Savings accounts with smart features. Open an account with us and enjoy premium banking!
                  </p>
                  <p className="text-gray-700">
                    Savings Accounts: It is a regular saving account which allows customers to deposit money, keep it safe, and withdraw funds while earning interest.
                  </p>
                </div>
                <div className="lg:w-1/3">
                  <div className="bg-gradient-to-br from-red-600 to-black rounded-2xl p-6 text-center shadow-xl">
                    <div className="text-5xl font-black text-white mb-2">{interestRate}%</div>
                    <div className="text-white/90 font-semibold">Interest Rate</div>
                    <div className="text-white/70 text-sm">Compounded Monthly</div>
                    <div className="mt-4 w-full bg-white/20 h-2 rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full" style={{ width: `${(interestRate / 7) * 100}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div variants={fadeUp} className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {updatedStats.map((stat, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 text-center shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="text-red-600 text-xl" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}{stat.suffix}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div variants={fadeUp} className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Features & Benefits</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="text-red-600 text-xl" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 truncate">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Eligible Entities */}
          <motion.div variants={fadeUp} className="mb-12">
            <div className="bg-gradient-to-r from-red-50 to-white rounded-xl p-8 shadow-lg border border-red-100">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Eligible Entities</h2>
              <p className="text-gray-600 text-center mb-8">
                We pride ourselves on cultivating lasting client relationships built on trust and mutual respect
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {eligibility.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 text-center border border-gray-200 hover:border-red-200 hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-3">
                      <item.icon className="text-red-600 text-xl" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm">{item.title}</h3>
                    <p className="text-gray-600 text-xs">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={scaleIn} className="bg-gradient-to-br from-red-600 via-red-700 to-black rounded-2xl p-8 text-center text-white shadow-xl">
            <div className="max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
                <FaHandHoldingUsd className="text-white text-3xl" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Ready to Start Saving?</h2>
              <p className="text-white/90 mb-8">Did you want to enjoy premium banking with smart savings features?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="https://ibs.gadaabank.com.et/alpha-onboarding/get-started"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-all"
                >
                  Open An Account Now <FaArrowRight className="ml-2" />
                </a>
                <a 
                  href="tel:+251641"
                  className="inline-flex items-center px-8 py-3 border border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all"
                >
                  <FaPhoneAlt className="mr-2" /> Speak with Advisor
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Visit Branch</div>
                    <div className="text-white/70 text-sm">110+ locations</div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Email Us</div>
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

      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Link 
          to="/contact"
          className="w-14 h-14 bg-gradient-to-br from-red-600 to-black rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
        >
          <FaWallet className="text-white text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default SavingAccounts;