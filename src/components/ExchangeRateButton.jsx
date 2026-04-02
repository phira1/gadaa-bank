import React, { useState, useEffect } from 'react';
import { FaExchangeAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ExchangeRateButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rates, setRates] = useState({
    USD: { buy: '58.50', sell: '59.20' },
    EUR: { buy: '63.80', sell: '64.50' },
    GBP: { buy: '74.20', sell: '75.00' }
  });
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('');

  // Optional: fetch real rates from an API
  useEffect(() => {
    // For now, using static data; you can replace with actual API call
    setLastUpdated(new Date().toLocaleDateString());
  }, []);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <>
      {/* Floating button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        onClick={toggleModal}
        className="fixed bottom-4 right-4 z-50 bg-gradient-to-r from-red-600 to-black text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
      >
        <FaExchangeAlt className="text-lg group-hover:rotate-12 transition-transform duration-300" />
        <span className="hidden md:inline text-sm font-medium">Exchange Rates</span>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleModal}
              className="fixed inset-0 bg-black/50 z-50"
            />

            {/* Modal content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 20 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-red-600 to-black p-4 text-white">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">Exchange Rates</h3>
                  <button onClick={toggleModal} className="text-white hover:text-gray-200">
                    ✕
                  </button>
                </div>
                <p className="text-sm text-white/80 mt-1">Commercial Bank Rates (ETB)</p>
              </div>

              {/* Content */}
              <div className="p-6">
                {loading ? (
                  <div className="text-center py-8">Loading...</div>
                ) : (
                  <div className="space-y-4">
                    {Object.entries(rates).map(([currency, { buy, sell }]) => (
                      <div key={currency} className="flex justify-between items-center border-b border-gray-100 pb-3">
                        <div className="font-bold text-gray-900 w-16">{currency}</div>
                        <div className="flex-1 text-center">
                          <span className="text-gray-600">Buy: </span>
                          <span className="font-semibold text-gray-900">{buy}</span>
                        </div>
                        <div className="flex-1 text-center">
                          <span className="text-gray-600">Sell: </span>
                          <span className="font-semibold text-gray-900">{sell}</span>
                        </div>
                      </div>
                    ))}
                    <div className="text-xs text-gray-500 text-center pt-2">
                      Last updated: {lastUpdated}
                    </div>
                    <p className="text-xs text-gray-400 text-center mt-2">
                      *Rates are indicative. Actual rates may vary.
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="bg-gray-50 p-3 text-center">
                <a
                  href="https://nbe.gov.et/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 text-sm hover:underline"
                >
                  View official rates from NBE
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExchangeRateButton;