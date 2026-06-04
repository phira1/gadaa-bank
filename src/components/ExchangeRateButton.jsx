import React, { useState, useEffect } from 'react';
import { FaExchangeAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { exchangeRateService } from '../services';
import { normalizeExchangeRateResponse } from '../services/exchangeRateParser';
import ExchangeRateTables from './ExchangeRateTables';

const ExchangeRateButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [exchangeRateData, setExchangeRateData] = useState({ title: '', rows: [], cashRows: [], weightedAverageRows: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);

        const response = await exchangeRateService.getLiveRates();

        setExchangeRateData(normalizeExchangeRateResponse(response));
      } catch (error) {
        console.error('Failed to fetch exchange rates:', error);

        setExchangeRateData({ title: '', rows: [], cashRows: [], weightedAverageRows: [] });
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
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
        className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-black text-white shadow-lg transition-all duration-300 hover:shadow-xl sm:h-auto sm:w-auto sm:gap-2 sm:rounded-full sm:px-3 sm:py-3 sm:scale-50 sm:origin-bottom-right"
      >
        <FaExchangeAlt className="text-lg transition-transform duration-300 group-hover:rotate-12" />
        <span className="hidden md:inline text-sm font-medium">
          Exchange Rates
        </span>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleModal}
              className="fixed inset-0 bg-black/50 z-50"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 20 }}
              className="fixed bottom-20 right-4 z-50 flex h-[34rem] w-[calc(100vw-2rem)] max-w-[24rem] flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:bottom-24 sm:w-[24rem] sm:max-w-[24rem]"
            >
              {/* Header */}
              <div className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-red-700 p-4 text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_35%)]" />
                <div className="relative flex items-start gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                    <FaExchangeAlt className="text-lg" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold leading-tight sm:text-lg">Exchange Rates</h3>
                    <p className="mt-1 text-sm text-white/70">Live market rates </p>
                  </div>
                  <button
                    onClick={toggleModal}
                    className="rounded-full p-2 text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_40%,#fff_100%)] px-3 py-4 sm:px-4 sm:py-4">
                {loading ? (
                  <div className="flex justify-center py-8">
                    <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
                  </div>
                ) : (
                  <ExchangeRateTables data={exchangeRateData} compact />
                )}
              </div>

              {/* Footer */}
              <div className="border-t border-slate-200 bg-white p-3 text-center">
                <a
                  href="https://nbe.gov.et/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-red-600 hover:underline"
                >
          
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