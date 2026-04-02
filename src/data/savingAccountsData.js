// src/data/savingAccountsData.js
import { 
  FaPercentage, FaUsers, FaMobileAlt, FaLaptop, 
  FaUserCheck, FaBalanceScale, FaShieldAlt, 
  FaCoins, FaMapMarkerAlt, FaCheckCircle 
} from 'react-icons/fa';

export const stats = [
  { value: '50', label: 'Minimum Opening Balance', suffix: 'ETB', icon: FaCoins },
  { value: '24/7', label: 'Account Access', suffix: '', icon: FaMobileAlt },
  { value: '110+', label: 'Branch Network', suffix: '', icon: FaMapMarkerAlt },
  { value: '99.9%', label: 'Uptime', suffix: '', icon: FaCheckCircle }
];

export const features = [
  { icon: FaPercentage, title: 'Monthly Compounded Interest', description: 'Interest bearing compounded monthly for maximum growth' },
  { icon: FaUsers, title: 'Individual or Joint Accounts', description: 'Opened individually or jointly for flexible banking' },
  { icon: FaMobileAlt, title: 'Mobile Banking', description: 'Full account access through our mobile app' },
  { icon: FaLaptop, title: 'Internet Banking', description: '24/7 online banking from any device' },
];

export const eligibility = [
  { title: 'All Natural Persons', description: 'Individual adults and citizens', icon: FaUserCheck },
  { title: 'Legal Entities', description: 'Businesses and organizations', icon: FaBalanceScale },
  { title: 'Minors with Guardians', description: 'Children through parents or guardians', icon: FaUsers },
  { title: 'Special Needs', description: 'Interdicted persons through legal guardians', icon: FaShieldAlt }
];