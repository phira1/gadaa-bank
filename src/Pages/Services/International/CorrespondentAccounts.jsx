import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaArrowLeft, FaBuilding } from 'react-icons/fa';

const CorrespondentAccounts = () => {
  const refs = {
    image: useRef(null),
    cta: useRef(null)
  };

  const controls = {
    image: useAnimation(),
    cta: useAnimation()
  };

  const inViews = {
    image: useInView(refs.image, { once: true, amount: 0.2 }),
    cta: useInView(refs.cta, { once: true, amount: 0.2 })
  };

  useEffect(() => {
    if (inViews.image) controls.image.start('visible');
    if (inViews.cta) controls.cta.start('visible');
  }, [inViews, controls]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

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
            <span className="text-white font-semibold">Correspondent Accounts</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-4 py-6 md:py-8">
        <Link to="/services" className="inline-flex items-center text-red-600 hover:text-red-700 mb-6 md:mb-8 group text-sm md:text-base">
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Services
        </Link>

        {/* Image Section */}
        <motion.div
          ref={refs.image}
          initial="hidden"
          animate={controls.image}
          variants={fadeUp}
          className="mb-12 md:mb-16"
        >
          <div className="text-center mb-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-600 to-black rounded-full mb-4 shadow-lg">
              <FaBuilding className="text-white text-2xl" />
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900">
              Correspondent Banks
            </h1>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/correspondent banks.png"
              alt="Correspondent Banks"
              className="max-w-full h-auto rounded-lg shadow-lg"
              onError={(e) => {
                e.target.src = 'https://placehold.co/800x600/ef4444/white?text=Correspondent+Banks';
              }}
            />
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
          <h2 className="text-xl md:text-2xl font-bold mb-3">Correspondent Banks</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Contact our International Banking team to explore how we can support your institution's global ambitions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-6 py-2 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition shadow-md">
              Contact Us
            </Link>
            <Link to="/services" className="px-6 py-2 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">
              Explore More Services
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CorrespondentAccounts;