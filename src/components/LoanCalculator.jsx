// src/components/LoanCalculator.jsx
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaCalculator, FaChartLine, FaMoneyBillWave, FaPercent, FaCalendarAlt } from 'react-icons/fa';
import { loanDefaults, loanRanges } from '../data/loanData';

const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-ET', { style: 'currency', currency: 'ETB', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
};

const formatNumber = (value) => {
  return new Intl.NumberFormat('en-ET').format(value);
};

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(loanDefaults.amount);
  const [interestRate, setInterestRate] = useState(loanDefaults.rate);
  const [loanTermMonths, setLoanTermMonths] = useState(loanDefaults.termMonths);

  // Calculate loan details
  const { monthlyPayment, totalPayment, totalInterest } = useMemo(() => {
    if (loanAmount <= 0 || interestRate <= 0 || loanTermMonths <= 0) {
      return { monthlyPayment: 0, totalPayment: 0, totalInterest: 0 };
    }
    const monthlyRate = interestRate / 100 / 12;
    if (monthlyRate === 0) {
      const monthly = loanAmount / loanTermMonths;
      return {
        monthlyPayment: monthly,
        totalPayment: loanAmount,
        totalInterest: 0,
      };
    }
    const factor = Math.pow(1 + monthlyRate, loanTermMonths);
    const monthly = (loanAmount * monthlyRate * factor) / (factor - 1);
    const total = monthly * loanTermMonths;
    return {
      monthlyPayment: monthly,
      totalPayment: total,
      totalInterest: total - loanAmount,
    };
  }, [loanAmount, interestRate, loanTermMonths]);

  // Format values
  const formattedMonthly = formatCurrency(monthlyPayment);
  const formattedTotal = formatCurrency(totalPayment);
  const formattedInterest = formatCurrency(totalInterest);

  // Slider handlers
  const handleAmountChange = (e) => setLoanAmount(Number(e.target.value));
  const handleRateChange = (e) => setInterestRate(Number(e.target.value));
  const handleTermChange = (e) => setLoanTermMonths(Number(e.target.value));

  // Input handlers with validation
  const handleAmountInput = (e) => {
    let val = Number(e.target.value);
    if (isNaN(val)) val = loanRanges.amount.min;
    val = Math.min(loanRanges.amount.max, Math.max(loanRanges.amount.min, val));
    setLoanAmount(val);
  };
  const handleRateInput = (e) => {
    let val = Number(e.target.value);
    if (isNaN(val)) val = loanRanges.rate.min;
    val = Math.min(loanRanges.rate.max, Math.max(loanRanges.rate.min, val));
    setInterestRate(val);
  };
  const handleTermInput = (e) => {
    let val = Number(e.target.value);
    if (isNaN(val)) val = loanRanges.termMonths.min;
    val = Math.min(loanRanges.termMonths.max, Math.max(loanRanges.termMonths.min, val));
    setLoanTermMonths(val);
  };

  // Simple amortization table (optional, shows first 12 months if term <= 12)
  const showAmortization = loanTermMonths <= 12 && loanTermMonths > 0;
  const amortizationRows = useMemo(() => {
    if (!showAmortization) return [];
    const rows = [];
    let remaining = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    for (let i = 1; i <= loanTermMonths; i++) {
      const interest = remaining * monthlyRate;
      const principal = monthlyPayment - interest;
      remaining -= principal;
      rows.push({
        month: i,
        payment: monthlyPayment,
        principal,
        interest,
        remaining: remaining > 0 ? remaining : 0,
      });
    }
    return rows;
  }, [loanAmount, interestRate, loanTermMonths, monthlyPayment, showAmortization]);

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
            min={loanRanges.amount.min}
            max={loanRanges.amount.max}
            step={loanRanges.amount.step}
            value={loanAmount}
            onChange={handleAmountChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
          />
          <input
            type="number"
            value={loanAmount}
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
            min={loanRanges.rate.min}
            max={loanRanges.rate.max}
            step={loanRanges.rate.step}
            value={interestRate}
            onChange={handleRateChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
          />
          <input
            type="number"
            step="0.1"
            value={interestRate}
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
            <span className="text-sm font-semibold text-gray-900">{loanTermMonths} months</span>
          </div>
          <input
            type="range"
            min={loanRanges.termMonths.min}
            max={loanRanges.termMonths.max}
            step={loanRanges.termMonths.step}
            value={loanTermMonths}
            onChange={handleTermChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
          />
          <input
            type="number"
            value={loanTermMonths}
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

      {/* Amortization Table (optional) */}
      {showAmortization && (
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
                {amortizationRows.map((row) => (
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
          <p className="text-xs text-gray-500 mt-2">*Shows full schedule for terms up to 12 months</p>
        </motion.div>
      )}

      {!showAmortization && loanTermMonths > 12 && (
        <p className="text-center text-sm text-gray-500 mt-4">
          Amortization table is available for loan terms up to 12 months.
        </p>
      )}
    </div>
  );
};

export default LoanCalculator;