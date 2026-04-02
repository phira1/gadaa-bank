import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaArrowLeft, FaGlobe, FaMoneyBillWave, FaExchangeAlt, FaChartLine, FaHandHoldingUsd, FaUsers, FaFileInvoice, FaUniversity, FaGraduationCap, FaPlane, FaShieldAlt } from 'react-icons/fa';

const DiasporaFcyProducts = () => {
  const refs = {
    hero: useRef(null),
    content: useRef(null),
    types: useRef(null),
    partners: useRef(null),
    cta: useRef(null)
  };

  const controls = {
    hero: useAnimation(),
    content: useAnimation(),
    types: useAnimation(),
    partners: useAnimation(),
    cta: useAnimation()
  };

  const inViews = {
    hero: useInView(refs.hero, { once: true, amount: 0.2 }),
    content: useInView(refs.content, { once: true, amount: 0.2 }),
    types: useInView(refs.types, { once: true, amount: 0.2 }),
    partners: useInView(refs.partners, { once: true, amount: 0.2 }),
    cta: useInView(refs.cta, { once: true, amount: 0.2 })
  };

  useEffect(() => {
    if (inViews.hero) controls.hero.start('visible');
    if (inViews.content) controls.content.start('visible');
    if (inViews.types) controls.types.start('visible');
    if (inViews.partners) controls.partners.start('visible');
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

  const accountTypes = [
    { title: 'Foreign Currency Saving Account', desc: 'Attractive interest rates, funds are non-repatriable. Available in ETB, USD, GBP & EURO.', icon: FaMoneyBillWave },
    { title: 'Fixed Time Deposit Account', desc: 'Higher returns for long-term deposits in foreign currency.', icon: FaChartLine },
    { title: 'Non-Resident Foreign Currency Accounts (NR-FCY)', desc: 'For non-residents to hold and transact in foreign currency.', icon: FaGlobe },
    { title: 'Non-Resident Transferable BIRR (NR-T BIRR)', desc: 'Transferable Birr accounts for non-residents.', icon: FaExchangeAlt },
    { title: 'Non-Resident Non-Transferable BIRR (NR-NT BIRR)', desc: 'Non-transferable Birr accounts for non-residents.', icon: FaShieldAlt },
    { title: 'Retention Accounts', desc: 'Retain export proceeds in foreign currency.', icon: FaHandHoldingUsd }
  ];

  const features = [
    { icon: FaUniversity, text: 'Interest rate: LIBOR + 4% (minimum saving deposit rate set by NBE, subject to revision)' },
    { icon: FaGraduationCap, text: 'Use for self, spouse and children education, medical and travel expenses abroad (upon presentation of valid documents)' },
    { icon: FaShieldAlt, text: 'Money cannot be transferred from this account abroad nor from local currency to foreign currency' }
  ];

  const partners = [
    { name: 'Dahabshiil', logo: '/images/Dahabshiil.png' },
    { name: 'Ria Money Transfer', logo: '/images/Ria Money Transfer.png' }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black py-3 md:py-4">
        <div className="container mx-auto px-3 md:px-4">
          <nav className="flex items-center space-x-2 text-xs md:text-sm">
            <Link to="/" className="text-white/80 hover:text-white font-medium transition-colors duration-300">Home</Link>
            <span className="text-red-500">›</span>
            <Link to="/services" className="text-white/80 hover:text-white font-medium transition-colors duration-300">Services</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Diaspora & FCY Products</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-4 py-6 md:py-8">
        <Link to="/services" className="inline-flex items-center text-red-600 hover:text-red-700 mb-6 md:mb-8 group text-sm md:text-base">
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Services
        </Link>

        <motion.div ref={refs.hero} initial="hidden" animate={controls.hero} variants={fadeUp} className="text-center mb-8 md:mb-12">
          <motion.div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-600 to-black rounded-full mb-4 md:mb-6 shadow-lg" whileHover={{ scale: 1.05 }}>
            <FaGlobe className="text-white text-3xl md:text-4xl" />
          </motion.div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            <span className="text-red-600">Diaspora</span> & FCY Products
          </h1>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            Allows you to make and receive payments in foreign currencies so you can take advantage of favorable exchange rates.
          </p>
        </motion.div>

        <motion.div ref={refs.content} initial="hidden" animate={controls.content} variants={fadeUp} className="mb-12 md:mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Foreign Currency <span className="text-red-600">Deposit Account</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                A Foreign Currency Deposit Account is a deposit account denominated in a currency other than Ethiopian Birr. 
                Foreign Currency Deposit Accounts allow clients to receive, send and transact funds in supported foreign currencies.
              </p>
              <ul className="space-y-2 mt-4">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <feature.icon className="text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature.text}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 text-sm italic mt-4">
                Eligible Entities: All eligible natural and legal persons not found in Mal Operation List by NBE.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-white rounded-2xl transform -rotate-3 scale-95"></div>
              <img
                src="/images/diaspora-placeholder.jpg"
                alt="Diaspora Banking"
                className="relative rounded-2xl shadow-lg w-full h-auto object-cover"
                onError={(e) => { e.target.src = 'https://placehold.co/600x400/ef4444/white?text=Diaspora+%26+FCY+Products'; }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div ref={refs.types} initial="hidden" animate={controls.types} variants={staggerChildren} className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">Types of Accounts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accountTypes.map((type, idx) => (
              <motion.div key={idx} variants={cardVariants} whileHover={{ y: -5 }} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:border-red-200 transition-all duration-300 group">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors duration-300">
                  <type.icon className="text-red-600 text-xl group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{type.title}</h3>
                <p className="text-gray-600 text-sm">{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div ref={refs.partners} initial="hidden" animate={controls.partners} variants={fadeUp} className="mb-12 md:mb-16">
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Global Partners</h2>
            <p className="text-gray-700 mb-6">
              Gadaa Bank has partnered with leading international operators to give you worldwide coverage and convenience.
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {partners.map((partner, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl shadow-md w-40 h-24 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = partner.name; }}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div ref={refs.cta} initial="hidden" animate={controls.cta} variants={fadeUp} className="bg-gradient-to-r from-red-600 to-black rounded-2xl p-6 md:p-8 text-center text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-3">Did you want to enjoy with this account?</h2>
          <p className="text-white/90 mb-6">Open an account today and start enjoying the benefits of foreign currency deposits.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-6 py-2 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition shadow-md">Contact Us</Link>
            <a href="https://ibs.gadaabank.com.et/alpha-onboarding/get-started" target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">Open an Account</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DiasporaFcyProducts;