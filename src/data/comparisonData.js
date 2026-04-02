// src/data/comparisonData.js

export const comparisonCategories = [
  { id: 'savings', label: 'Savings Accounts', icon: '🏦' },
  { id: 'loans', label: 'Personal Loans', icon: '💰' },
  { id: 'cards', label: 'Credit Cards', icon: '💳' }
];

// Sample savings accounts
export const savingsProducts = [
  {
    id: 'regular-savings',
    name: 'Regular Savings',
    interestRate: '7%',
    minBalance: '50 ETB',
    monthlyFee: 'Free',
    mobileApp: 'Yes',
    chequeBook: 'No',
    atmCard: 'Yes',
    overdraft: 'No'
  },
  {
    id: 'premium-savings',
    name: 'Premium Savings',
    interestRate: '8.5%',
    minBalance: '10,000 ETB',
    monthlyFee: '50 ETB',
    mobileApp: 'Yes',
    chequeBook: 'Yes',
    atmCard: 'Yes',
    overdraft: 'Yes (up to 50%)'
  },
  {
    id: 'youth-savings',
    name: 'Youth Savings',
    interestRate: '9%',
    minBalance: '10 ETB',
    monthlyFee: 'Free',
    mobileApp: 'Yes',
    chequeBook: 'No',
    atmCard: 'Yes',
    overdraft: 'No'
  }
];

// Sample personal loans
export const loanProducts = [
  {
    id: 'standard-loan',
    name: 'Standard Personal Loan',
    maxAmount: '500,000 ETB',
    interestRate: '12%',
    termMonths: '12–60',
    processingFee: '1%',
    earlyRepayment: 'Free',
    collateral: 'Not required'
  },
  {
    id: 'premium-loan',
    name: 'Premium Personal Loan',
    maxAmount: '1,000,000 ETB',
    interestRate: '10.5%',
    termMonths: '12–84',
    processingFee: '0.5%',
    earlyRepayment: 'Free',
    collateral: 'Optional'
  }
];

// Sample credit cards (optional)
export const cardProducts = [
  {
    id: 'classic-card',
    name: 'Classic Card',
    annualFee: 'Free',
    cashback: '0.5%',
    loungeAccess: 'No',
    interestRate: '18%',
    creditLimit: 'Up to 30,000 ETB'
  },
  {
    id: 'gold-card',
    name: 'Gold Card',
    annualFee: '500 ETB',
    cashback: '1%',
    loungeAccess: 'Yes (2 visits/year)',
    interestRate: '15%',
    creditLimit: 'Up to 100,000 ETB'
  }
];