import { 
  FaBuilding, 
  FaGlobe, 
  FaBalanceScale, 
  FaUsers,
  FaShieldAlt,
  FaChartLine,
  FaRocket,
  FaHeart,
  FaAward,
  FaHandshake
} from 'react-icons/fa';

export const serviceCategories = [
  {
    id: 'conventional',
    title: 'Conventional Banking',
    icon: FaBuilding,
    color: 'text-red-600',
    bgColor: 'bg-white',
    borderColor: 'border-red-100',
    badgeBg: 'bg-red-50',
    badgeText: 'text-red-600',
    description: 'Time-tested financial solutions with modern convenience and reliability.',
    features: [
      { name: 'Saving Accounts', status: 'available', link: '/services/saving-accounts' },
      { name: 'Current Accounts', status: 'available', link: '/services/current-accounts' },
      { name: 'Time Deposit', status: 'available', link: '/services/time-deposit' },
      { name: 'Personal Loans', status: 'available', link: '/services/personal-loans' },
      { name: 'Business Loans', status: 'available', link: '/services/business-loans' },
      { name: 'Guarantee Facilities', status: 'available', link: '/services/guarantee-facilities' }
    ],
    stats: '50+ Products',
    badge: 'Traditional',
    delay: '100ms'
  },
  {
    id: 'international',
    title: 'International Banking',
    icon: FaGlobe,
    color: 'text-gray-900',
    bgColor: 'bg-white',
    borderColor: 'border-gray-100',
    badgeBg: 'bg-black',
    badgeText: 'text-white',
    description: 'Global financial gateway connecting Ethiopia to worldwide opportunities.',
    features: [
      { name: 'Forex Service', status: 'available', link: '/services/forex-service' },
      { name: 'Trade Finance', status: 'available', link: '/services/trade-finance' },
      { name: 'Money Transfer', status: 'available', link: '/services/money-transfer' }
    ],
    stats: 'Global Reach',
    badge: 'Premium',
    delay: '200ms'
  },
  {
    id: 'ifb',
    title: 'Interest Free Banking',
    icon: FaBalanceScale,
    color: 'text-red-600',
    bgColor: 'bg-white',
    borderColor: 'border-red-100',
    badgeBg: 'bg-red-50',
    badgeText: 'text-red-600',
    description: 'Ethical banking aligned with Islamic principles and your values.',
    features: [
      { name: 'Deposit product', status: 'available', link: '/services/deposit-product' },
      { name: 'Wadiah Saving', status: 'available', link: '/services/wadiah-saving' },
      { name: 'Amanah', status: 'available', link: '/services/amanah' },
      { name: 'Mudarabah Saving Accounts', status: 'available', link: '/services/mudarabah-saving-accounts' },
      { name: 'Financing & investment', status: 'available', link: '/services/financing-investment' },
      { name: 'Other Services', status: 'available', link: '/services/other-services#other-sharia' }
    ],
    stats: 'Sharia Compliant',
    badge: 'Ethical',
    delay: '300ms'
  },
  {
    id: 'corporate',
    title: 'Corporate Banking Service',
    icon: FaUsers,
    color: 'text-gray-900',
    bgColor: 'bg-white',
    borderColor: 'border-gray-100',
    badgeBg: 'bg-black',
    badgeText: 'text-white',
    description: 'Tailored financial solutions for businesses, institutions, and corporate clients.',
    features: [
      { name: 'Diaspora Account', status: 'available', link: '/services/diaspora-account' },
      { name: 'Diaspora Loan Facilities', status: 'available', link: '/services/diaspora-loan-facilities' },
      { name: 'NGO\'s, Institutions & Corporate Loan Packages', status: 'available', link: '/services/ngo-corporate-loan-packages' }
    ],
    stats: 'B2B Focus',
    badge: 'Corporate',
    delay: '400ms'
  }
];

export const benefits = [
  {
    icon: FaShieldAlt,
    title: 'Bank-Level Security',
    description: 'Military-grade encryption and fraud protection',
    color: 'text-red-600',
    bg: 'bg-red-50'
  },
  {
    icon: FaChartLine,
    title: 'Competitive Edge',
    description: 'Best-in-market rates and terms',
    color: 'text-gray-900',
    bg: 'bg-gray-50'
  },
  {
    icon: FaUsers,
    title: 'Personalized Service',
    description: 'Dedicated relationship managers',
    color: 'text-red-600',
    bg: 'bg-red-50'
  },
  {
    icon: FaRocket,
    title: 'Digital Innovation',
    description: 'Cutting-edge banking technology',
    color: 'text-gray-900',
    bg: 'bg-gray-50'
  },
  {
    icon: FaHeart,
    title: 'Community Focus',
    description: 'Supporting local economic growth',
    color: 'text-red-600',
    bg: 'bg-red-50'
  },
  {
    icon: FaAward,
    title: 'Award Winning',
    description: 'Recognized excellence in banking',
    color: 'text-gray-900',
    bg: 'bg-gray-50'
  }
];

export const imageSections = [
  {
    id: 1,
    title: 'Digital Banking',
    subtitle: '',
    description: 'Comprehensive digital solutions for modern banking',
    image: '/images/gadaa-digital2.jpg',
    link: '/digital'
  },
  {
    id: 2,
    title: 'Personal Banking',
    subtitle: '',
    description: 'Accounts, loans and investment options',
    image: '/images/service pageimage2.jpg',
    link: '/services/saving-accounts'
  },
  {
    id: 3,
    title: 'Business Solutions',
    subtitle: '',
    description: 'Corporate banking and financial services',
    image: '/images/business-samson.jpg',
    link: '/services/business-loans'
  }
];