import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalculator, FaChartLine, FaMoneyBillWave, FaPercent, FaCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { loanDefaults, loanRanges } from '../data/loanData';
import useSiteContent from './hooks/useSiteContent';

const fallbackConfig = {
  defaults: loanDefaults,
  ranges: loanRanges,
};

const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-ET', { style: 'currency', currency: 'ETB', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
};

const formatNumber = (value) => {
  return new Intl.NumberFormat('en-ET').format(value);
};

const LoanCalculator = () => {
  const { content } = useSiteContent();
  const calculatorConfig = content?.loan_calculator_config || fallbackConfig;
  const defaults = calculatorConfig.defaults || fallbackConfig.defaults;
  const ranges = fallbackConfig.ranges;

  const [loanAmount, setLoanAmount] = useState(defaults.amount);
  const [interestRate, setInterestRate] = useState(defaults.rate);
  const [loanTermMonths, setLoanTermMonths] = useState(defaults.termMonths);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 12;

  useEffect(() => {
    setLoanAmount(defaults.amount);
    setInterestRate(defaults.rate);
    setLoanTermMonths(defaults.termMonths);
  }, [defaults.amount, defaults.rate, defaults.termMonths]);

  // Calculate loan details
  const { monthlyPayment, totalPayment, totalInterest, amortizationRows } = useMemo(() => {
    if (loanAmount <= 0 || interestRate <= 0 || loanTermMonths <= 0) {
      return { monthlyPayment: 0, totalPayment: 0, totalInterest: 0, amortizationRows: [] };
    }
    const monthlyRate = interestRate / 100 / 12;
    if (monthlyRate === 0) {
      const monthly = loanAmount / loanTermMonths;
      const rows = [];
      let remaining = loanAmount;
      for (let i = 1; i <= loanTermMonths; i++) {
        const principal = monthly;
        remaining -= principal;
        rows.push({
          month: i,
          payment: monthly,
          principal,
          interest: 0,
          remaining: remaining > 0 ? remaining : 0,
        });
      }
      return {
        monthlyPayment: monthly,
        totalPayment: loanAmount,
        totalInterest: 0,
        amortizationRows: rows,
      };
    }
    const factor = Math.pow(1 + monthlyRate, loanTermMonths);
    const monthly = (loanAmount * monthlyRate * factor) / (factor - 1);
    const total = monthly * loanTermMonths;
    const totalInterestAmt = total - loanAmount;

    const rows = [];
    let remaining = loanAmount;
    for (let i = 1; i <= loanTermMonths; i++) {
      const interest = remaining * monthlyRate;
      const principal = monthly - interest;
      remaining -= principal;
      rows.push({
        month: i,
        payment: monthly,
        principal,
        interest,
        remaining: remaining > 0 ? remaining : 0,
      });
    }
    return {
      monthlyPayment: monthly,
      totalPayment: total,
      totalInterest: totalInterestAmt,
      amortizationRows: rows,
    };
  }, [loanAmount, interestRate, loanTermMonths]);

  const totalPages = Math.ceil(amortizationRows.length / rowsPerPage);
  const paginatedRows = amortizationRows.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(Math.min(totalPages, Math.max(1, newPage)));
  };

  const formattedMonthly = formatCurrency(monthlyPayment);
  const formattedTotal = formatCurrency(totalPayment);
  const formattedInterest = formatCurrency(totalInterest);

  // Slider handlers
  const handleAmountSlider = (e) => setLoanAmount(Number(e.target.value));
  const handleRateSlider = (e) => setInterestRate(Number(e.target.value));
  const handleTermSlider = (e) => setLoanTermMonths(Number(e.target.value));

  // Input handlers - allow empty string, otherwise parse number
  const handleAmountInput = (e) => {
    const val = e.target.value;
    if (val === '') {
      setLoanAmount(0);
    } else {
      const num = Number(val);
      if (!isNaN(num)) setLoanAmount(num);
    }
  };
  const handleRateInput = (e) => {
    const val = e.target.value;
    if (val === '') {
      setInterestRate(0);
    } else {
      const num = Number(val);
      if (!isNaN(num)) setInterestRate(num);
    }
  };
  const handleTermInput = (e) => {
    const val = e.target.value;
    if (val === '') {
      setLoanTermMonths(0);
    } else {
      const num = Number(val);
      if (!isNaN(num)) setLoanTermMonths(num);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-600 to-black rounded-full mb-4">
          <FaCalculator className="text-white text-2xl" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Loan Calculator</h2>
        <p className="text-gray-600 mt-2">Estimate your monthly payments and total cost</p>
      </div>

      {/* Input Sliders */}
      <div className="space-y-6 mb-8">
        {/* Loan Amount */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium text-gray-700 flex items-center">
              <FaMoneyBillWave className="mr-2 text-red-600" /> Loan Amount (ETB)
            </label>
            <span className="text-sm font-semibold text-gray-900">{formatNumber(loanAmount)}</span>
          </div>
          <input
            type="range"
            min={ranges.amount.min}
            max={ranges.amount.max}
            step={ranges.amount.step}
            value={Math.min(Math.max(loanAmount, ranges.amount.min), ranges.amount.max)}
            onChange={handleAmountSlider}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
          />
          <input
            type="number"
            value={loanAmount === 0 ? '' : loanAmount}
            onChange={handleAmountInput}
            className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-sm"
          />
        </div>

        {/* Interest Rate */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium text-gray-700 flex items-center">
              <FaPercent className="mr-2 text-red-600" /> Annual Interest Rate (%)
            </label>
            <span className="text-sm font-semibold text-gray-900">{interestRate.toFixed(1)}%</span>
          </div>
          <input
            type="range"
            min={ranges.rate.min}
            max={ranges.rate.max}
            step={ranges.rate.step}
            value={Math.min(Math.max(interestRate, ranges.rate.min), ranges.rate.max)}
            onChange={handleRateSlider}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
          />
          <input
            type="number"
            step="0.1"
            value={interestRate === 0 ? '' : interestRate}
            onChange={handleRateInput}
            className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-sm"
          />
        </div>

        {/* Loan Term */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium text-gray-700 flex items-center">
              <FaCalendarAlt className="mr-2 text-red-600" /> Loan Term (months)
            </label>
            <span className="text-sm font-semibold text-gray-900">
              {loanTermMonths} months ({Math.floor(loanTermMonths / 12)} years {loanTermMonths % 12} months)
            </span>
          </div>
          <input
            type="range"
            min={ranges.termMonths.min}
            max={ranges.termMonths.max}
            step={ranges.termMonths.step}
            value={Math.min(Math.max(loanTermMonths, ranges.termMonths.min), ranges.termMonths.max)}
            onChange={handleTermSlider}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
          />
          <input
            type="number"
            value={loanTermMonths === 0 ? '' : loanTermMonths}
            onChange={handleTermInput}
            className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-sm"
          />
        </div>
      </div>

      {/* Results Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gradient-to-br from-red-50 to-white p-4 rounded-xl text-center border border-red-100 shadow-sm">
          <div className="text-sm text-gray-600 mb-1">Monthly Payment</div>
          <div className="text-2xl font-bold text-red-600">{formattedMonthly}</div>
        </div>
        <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl text-center border border-gray-200 shadow-sm">
          <div className="text-sm text-gray-600 mb-1">Total Payment</div>
          <div className="text-2xl font-bold text-gray-900">{formattedTotal}</div>
        </div>
        <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl text-center border border-gray-200 shadow-sm">
          <div className="text-sm text-gray-600 mb-1">Total Interest</div>
          <div className="text-2xl font-bold text-gray-900">{formattedInterest}</div>
        </div>
      </div>

      {/* Amortization Table */}
      {amortizationRows.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <FaChartLine className="mr-2 text-red-600" /> Amortization Schedule
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left">Month</th>
                  <th className="px-4 py-2 text-right">Payment</th>
                  <th className="px-4 py-2 text-right">Principal</th>
                  <th className="px-4 py-2 text-right">Interest</th>
                  <th className="px-4 py-2 text-right">Remaining Balance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {paginatedRows.map((row) => (
                  <tr key={row.month} className="hover:bg-gray-50">
                    <td className="px-4 py-2 font-medium">{row.month}</td>
                    <td className="px-4 py-2 text-right">{formatCurrency(row.payment)}</td>
                    <td className="px-4 py-2 text-right">{formatCurrency(row.principal)}</td>
                    <td className="px-4 py-2 text-right">{formatCurrency(row.interest)}</td>
                    <td className="px-4 py-2 text-right">{formatCurrency(row.remaining)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
              >
                <FaChevronLeft className="inline mr-1" size={12} /> Previous
              </button>
              <span className="text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
              >
                Next <FaChevronRight className="inline ml-1" size={12} />
              </button>
            </div>
          )}
          <p className="text-xs text-gray-500 mt-2">
            *Showing {Math.min(rowsPerPage, amortizationRows.length)} rows per page. Amortization schedule for full term.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default LoanCalculator;