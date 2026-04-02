export const loanDefaults = {
  amount: 100000,
  rate: 12,
  termMonths: 12,
};

export const loanRanges = {
  amount: { min: 0, max: 1000000000, step: 1000 },
  rate: { min: 0, max: 30, step: 0.1 },
  termMonths: { min: 1, max: 240, step: 1 },
};