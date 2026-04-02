import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import {
  FaArrowLeft,
  FaMobileAlt,
  FaCamera,
  FaFileInvoiceDollar,
  FaHandsHelping,
  FaChartLine,
  FaLaptop,
  FaUsers,
  FaSeedling,
  FaHandshake,
  FaCoins,
  FaBuilding,
  FaUserTie,
  FaCalendarAlt
} from 'react-icons/fa';
import { FaXTwitter, FaTelegram, FaWhatsapp } from 'react-icons/fa6';

const CommunityPage = () => {
  const refs = {
    hero: useRef(null),
    content: useRef(null),
    products: useRef(null),
    benefits: useRef(null),
    cta: useRef(null)
  };

  const controls = {
    hero: useAnimation(),
    content: useAnimation(),
    products: useAnimation(),
    benefits: useAnimation(),
    cta: useAnimation()
  };

  const inViews = {
    hero: useInView(refs.hero, { once: true, amount: 0.2 }),
    content: useInView(refs.content, { once: true, amount: 0.2 }),
    products: useInView(refs.products, { once: true, amount: 0.2 }),
    benefits: useInView(refs.benefits, { once: true, amount: 0.2 }),
    cta: useInView(refs.cta, { once: true, amount: 0.2 })
  };

  useEffect(() => {
    if (inViews.hero) controls.hero.start('visible');
    if (inViews.content) controls.content.start('visible');
    if (inViews.products) controls.products.start('visible');
    if (inViews.benefits) controls.benefits.start('visible');
    if (inViews.cta) controls.cta.start('visible');
  }, [inViews, controls]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  const products = [
    { icon: FaMobileAlt, title: 'Mobile Banking', desc: 'Bank on the go' },
    { icon: FaCamera, title: 'Remote Deposit Capture', desc: 'Deposit checks from home' },
    { icon: FaFileInvoiceDollar, title: 'Electronic Bill Payments', desc: 'Pay bills online' },
    { icon: FaChartLine, title: 'Cash Management Services', desc: 'Optimize your cash flow' },
    { icon: FaLaptop, title: 'Online Loan Application', desc: 'Apply for loans digitally' },
    { icon: FaHandsHelping, title: 'Personal Finance Tools', desc: 'Manage your finances' },
    { icon: FaCoins, title: 'Online Loan Repayment', desc: 'Repay loans online' },
    { icon: FaBuilding, title: 'Online Loan Closing', desc: 'Close loans remotely' },
    { icon: FaUserTie, title: 'Interactive Teller Machine', desc: 'Video banking' },
    { icon: FaCalendarAlt, title: 'Online Loan Underwriting', desc: 'Fast loan decisions' }
  ];

  const benefits = [
    'Offers Better Rates and Lower Fees',
    'Greater Focus on Serving Small Businesses',
    'Commitment to Community Service and Giveback Programs',
    'Decision-Making Based on the Community’s Needs',
    'Focus on the needs of local families, businesses & farmers',
    'Officers generally accessible to customers on site',
    'Deep involvement in local community events',
    'Understanding the needs of small business owners',
    'Nimble decision-making on business loans (decisions made locally)'
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black py-3 md:py-4">
        <div className="container mx-auto px-3 md:px-4">
          <nav className="flex items-center space-x-2 text-xs md:text-sm">
            <Link to="/" className="text-white/80 hover:text-white font-medium transition-colors duration-300">
              Home
            </Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Community Banking</span>
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

        {/* Hero Section */}
        <motion.div
          ref={refs.hero}
          initial="hidden"
          animate={controls.hero}
          variants={fadeUp}
          className="text-center mb-8 md:mb-12"
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-600 to-black rounded-full mb-4 md:mb-6 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaHandsHelping className="text-white text-3xl md:text-4xl" />
          </motion.div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            <span className="text-red-600">Community</span> Banking
          </h1>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            A community bank is a depository or lending banking service that primarily serves businesses and individuals in a small geographic area. Community banking tends to emphasize personal relationships with customers in specific areas.
          </p>
        </motion.div>

        {/* Main Content Section */}
        <motion.div
          ref={refs.content}
          initial="hidden"
          animate={controls.content}
          variants={fadeUp}
          className="mb-12 md:mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Where You Save & Spend <span className="text-red-600">Impacts Your Community</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Community banking serves customers where branch networks are not available and often provide loans to local businesses and individuals who may not qualify based on the more standardized criteria for other lending products such as credit scores, income, and other quantitative data. This model of banking applies with a limited number of branches that primarily serve local businesses and individuals who live nearby.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Community banking tends to focus on traditional functions such as accepting deposits and providing business loans, mortgages, and credit lines. Despite their emphasis on local customers, some have created online banking functionality that allows them to serve a wider audience.
              </p>
              <div className="pt-2">
                <p className="text-red-600 font-semibold text-lg">It's Your Choice – Join Us</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-white rounded-2xl transform -rotate-3 scale-95"></div>
              <img
                src="/images/circuit_transparent_2.jpg"
                alt="Community Banking"
                className="relative rounded-2xl shadow-lg w-full h-auto object-cover"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/600x400/ef4444/white?text=Community+Banking';
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Products Section */}
        <motion.div
          ref={refs.products}
          initial="hidden"
          animate={controls.products}
          variants={staggerChildren}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
            Gadaa Bank Community Banking Includes:
          </h2>
          <p className="text-gray-600 text-center mb-8">(But Not Limited To)</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {products.map((product, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:border-red-200 hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-red-600 transition-colors duration-300">
                  <product.icon className="text-red-600 text-xl group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-gray-800 text-sm md:text-base">{product.title}</h3>
                <p className="text-gray-500 text-xs mt-1">{product.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          ref={refs.benefits}
          initial="hidden"
          animate={controls.benefits}
          variants={staggerChildren}
          className="mb-12 md:mb-16"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Benefits of <span className="text-red-600">Community Banking</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-red-50 transition duration-200"
                >
                  <FaHandshake className="text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          ref={refs.cta}
          initial="hidden"
          animate={controls.cta}
          variants={fadeUp}
          className="bg-gradient-to-r from-red-600 to-black rounded-2xl p-6 md:p-8 text-center text-white"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-3">Experience Community Banking with Gadaa Bank</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Join us today and be part of a bank that truly cares about your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-6 py-2 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition shadow-md"
            >
              Contact Us
            </Link>
            <a
              href="https://ibs.gadaabank.com.et/alpha-onboarding/get-started"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition"
            >
              Open an Account
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CommunityPage;