// src/data/loanData.js
export const loanDefaults = {
  amount: 100000,
  rate: 12,
  termMonths: 12,
};

export const loanRanges = {
  amount: { min: 1000, max: 1000000, step: 1000 },
  rate: { min: 5, max: 30, step: 0.1 },
  termMonths: { min: 1, max: 120, step: 1 }, // months, max 10 years
};