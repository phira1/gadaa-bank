// src/Pages/Tools/LoanCalculatorPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LoanCalculator from '../../components/LoanCalculator';

const LoanCalculatorPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header / Breadcrumb */}
      <div className="bg-gradient-to-r from-black to-gray-900 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Loan Calculator</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <LoanCalculator />
        </motion.div>

        {/* Additional Info */}
        <div className="mt-10 text-center text-gray-600 text-sm">
          <p>
            This is an estimation tool. Actual loan terms may vary based on eligibility and bank policies.
            <br />
            Contact your nearest branch for personalized advice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculatorPage;