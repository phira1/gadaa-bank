import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaChevronDown,
  FaChevronRight,
  FaMoneyBillWave,
  FaBuilding,
  FaPercentage,
  FaCreditCard,
  FaHandshake,
  FaGlobe,
  FaSearch,
  FaFileInvoice,
  FaCalculator,
  FaDownload,
  FaRegClock,
  FaExchangeAlt
} from 'react-icons/fa';

const TermsPage = () => {
  const [activeSection, setActiveSection] = useState('digital');

  const sections = [
    { id: 'digital', name: 'Digital Banking Services Fee', icon: FaMoneyBillWave },
    { id: 'branch', name: 'Branch Banking Term and Tariff', icon: FaBuilding },
    { id: 'deposit', name: 'Interest Rate on Deposit Accounts', icon: FaPercentage },
    { id: 'credit', name: 'Credit Facility Prices and Fees', icon: FaCreditCard },
    { id: 'ifb', name: 'IFB', icon: FaHandshake },
    { id: 'ibd', name: 'IBD', icon: FaGlobe }
  ];

  const digitalFees = [
    { sn: '1', type: 'Fund transfer between own accounts', range: 'Any amount', fee: 'Free' },
    { sn: '2', type: 'Fund transfer to other Gadaa Bank accounts', range: '100 – 1,000', fee: '2 ETB' },
    { sn: '', type: '', range: '1,001 – 5,000', fee: '5 ETB' },
    { sn: '', type: '', range: '5,001 – 15,000', fee: '7 ETB' },
    { sn: '', type: '', range: 'above 15,001', fee: '10 ETB' },
    { sn: '3', type: 'Fund transfer to Telebirr Wallet and Agents', range: '100 – 500', fee: '3 ETB' },
    { sn: '', type: '', range: '501-1,500', fee: '5 ETB' },
    { sn: '', type: '', range: '1,501-5,000', fee: '7 ETB' },
    { sn: '', type: '', range: '5,001-10,000', fee: '10 ETB' },
    { sn: '', type: '', range: '10,001-100,000', fee: '20 ETB' },
    { sn: '', type: '', range: 'Above 100,000', fee: '50 ETB' },
    { sn: '4', type: 'Subscription', range: '', fee: '5 ETB' },
    { sn: '5', type: 'Full Statement', range: '', fee: '1 ETB' }
  ];

  const depositRates = [
    { account: 'Ordinary Demand Deposit Account', rate: '–' },
    { account: 'Special Current account (Interest Bearing current Account)', rate: 'Negotiable' },
    { account: 'Ordinary Saving account', rate: 'Minimum saving interest rate' },
    { account: 'Special Saving Deposit', rate: 'Negotiable for deposit greater than three million' },
    { account: 'Staff- saving account', rate: 'Minimum saving interest rate' },
    { account: 'Staff- Provident Fund', rate: 'Minimum saving interest rate' },
    { account: 'Provident Solution account', rate: 'Negotiation based' },
    { account: 'Farmers saving account', rate: 'Minimum saving interest rate plus 1.5 %' },
    { account: 'Dabbale, Game Kusa, Sabata & Yuba saving Accounts', rate: 'Minimum saving interest rate plus .5%' },
    { account: 'Dabbale Gammee, Siinqee and Gadamoji saving Accounts', rate: 'Minimum saving interest rate plus 1%' },
    { account: 'Furtu Saving Account', rate: 'Minimum saving interest rate Plus .25%' },
    { account: 'Fixed Time Deposit', rate: 'Negotiable' }
  ];

  const creditFacilities = [
    { type: 'Export Term Loans (Non-Working Capital)', tenure: 'Short Term', rate: 'Up to 11%' },
    { type: '', tenure: 'Medium Term', rate: 'Up to 14%' },
    { type: '', tenure: 'Long Term', rate: 'Up to 15%' },
    { type: 'Export Term Loans (Working Capital)', tenure: 'Short Term', rate: 'up to 13.95%' },
    { type: 'Regular Export OD', tenure: '', rate: 'Up to 13.95%' },
    { type: 'Domestic Trade and Services', tenure: 'Short Term', rate: 'Up to 18.5%' },
    { type: '', tenure: 'Medium Term', rate: 'Up to 19.5%' },
    { type: '', tenure: 'Long Term', rate: 'Up to 19.95%' },
    { type: 'Import Term Loan', tenure: 'Short Term', rate: 'Up to 18.50%' },
    { type: '', tenure: 'Medium Term', rate: 'Up to 19.75%' },
    { type: '', tenure: 'Long Term', rate: 'Up to 19.75%' },
    { type: 'Hotel and Tourism', tenure: 'Short Term', rate: 'Up to 18.00%' },
    { type: '', tenure: 'Medium Term', rate: 'Up to 19.00%' },
    { type: '', tenure: 'Long Term', rate: 'Up to 19.50%' },
    { type: 'Transport Services', tenure: 'Short Term', rate: 'Up to 18.50%' },
    { type: '', tenure: 'Medium Term', rate: 'Up to 19.75%' },
    { type: '', tenure: 'Long Term', rate: 'Up to 19.95%' },
    { type: 'Agricultural Loan including Floriculture and Horticulture', tenure: 'Short Term', rate: 'Up to 17.90%' },
    { type: '', tenure: 'Medium Term', rate: 'Up to 19.00%' },
    { type: '', tenure: 'Long Term', rate: 'Up to 19.25%' },
    { type: 'Manufacturing/Industry', tenure: 'Short Term', rate: 'Up to 18.00%' },
    { type: '', tenure: 'Medium Term', rate: 'Up to 19.00%' },
    { type: '', tenure: 'Long Term', rate: 'Up to 19.50%' },
    { type: 'Building Construction, Real Estate Development', tenure: 'Short Term', rate: 'Up to 18.50%' },
    { type: '', tenure: 'Medium Term', rate: 'Up to 19.75%' },
    { type: '', tenure: 'Long Term', rate: 'Up to 19.95%' }
  ];

  const collateralFees = [
    { property: 'Single Villa', unit: 'Per LHC', fee: '2,500.00 ETB' },
    { property: 'Communal Apartment/Condominium', unit: 'Per LHC', fee: '2,000.00 ETB' },
    { property: 'Multi-Storey Buildings G+1-G+3', unit: '', fee: '3,000.00 ETB' },
    { property: 'Multi-Storey Buildings G+4-G+6', unit: '', fee: '3,500.00 ETB' },
    { property: 'Multi-Storey Buildings G+7-G+10', unit: '', fee: '4,000.00 ETB' },
    { property: 'Multi-Storey Buildings More than G+10', unit: '', fee: '5,000.00 ETB' },
    { property: 'Multipurpose Hall (Factory, Store or Warehouse Buildings)', unit: 'Per LHC', fee: '3,000.00 ETB' },
    { property: 'Coffee processing site', unit: 'Per LHC', fee: '5,000.00 ETB' },
    { property: 'Fuel Stations', unit: 'Per tanker + building cost', fee: '3,500.00 ETB' },
    { property: 'Project Financing-Buildings (Real estate, mortgage, hotel, etc)', unit: '', fee: '5,000.00 ETB' },
    { property: 'Motor vehicles/Automobile, Trucks, etc.', unit: 'per vehicle', fee: '1,500.00 ETB' },
    { property: 'Industrial/Factory Machineries', unit: 'per plant', fee: '1,500.00 ETB' },
    { property: 'Construction Machinery and Equipment', unit: 'per machinery', fee: '1,500.00 ETB' },
    { property: 'Workshop Machinery', unit: 'per plant', fee: '1,500.00 ETB' },
    { property: 'Projects on progress (checking/evaluation)', unit: '', fee: '1,500.00 ETB' },
    { property: 'Staff housing loan', unit: '', fee: 'Free of Charge' },
    { property: 'Re-estimation of properties', unit: '', fee: '50% of Corresponding Estimation Fee' },
    { property: 'Revaluation to meet procedural requirement', unit: '', fee: '1,000.00 ETB' }
  ];

  const ifbProducts = [
    { product: 'Murabaha Financing - Agricultural Machinery and Working Capital', duration: '1 Yr', quarter: '10.5', semiAnnual: '11.5', annual: '13.5' },
    { product: '', duration: '2 Yrs', quarter: '18.5', semiAnnual: '20.5', annual: '24.5' },
    { product: '', duration: '3 Yrs', quarter: '29.5', semiAnnual: '29.9', annual: '33.4' },
    { product: '', duration: '4 Yrs', quarter: '38.5', semiAnnual: '40.5', annual: '44' },
    { product: 'Murabaha Financing - Manufacturing/Industry', duration: '1 Yr', quarter: '11', semiAnnual: '13', annual: '17' },
    { product: '', duration: '2 Yrs', quarter: '21', semiAnnual: '23', annual: '27' },
    { product: '', duration: '3 Yrs', quarter: '31', semiAnnual: '33', annual: '38' },
    { product: 'Murabaha Financing - Domestic Trade Service', duration: '1 Yr', quarter: '11', semiAnnual: '13', annual: '17' },
    { product: '', duration: '2 Yrs', quarter: '21', semiAnnual: '23', annual: '27' },
    { product: '', duration: '3 Yrs', quarter: '31', semiAnnual: '33', annual: '37' },
    { product: 'Pre Shipment Export (Qard Al Hassan)', duration: '90 days', quarter: 'Free', semiAnnual: '', annual: '' }
  ];

  const ibdFees = [
    { service: 'Import By LC Method - LC Opening Commission', import: '4%', servicePay: '', cash: '' },
    { service: 'Import By LC Method - SWIFT Charge (MT 700/MT707/MT740/MT799)', import: 'USD 100', servicePay: '', cash: '' },
    { service: 'Import By CAD Method - PO Approval Commission', import: '4%', servicePay: '', cash: '' },
    { service: 'Import By CAD Method - Swift Charge (MT202)', import: 'USD 100', servicePay: '', cash: '' },
    { service: 'Import By A/P (T.T) Method - Service Charge', import: '4%', servicePay: '', cash: '' },
    { service: 'Import By A/P (T.T) Method - SWIFT Charge (MT103)', import: 'USD 100', servicePay: '', cash: '' },
    { service: 'A/P (T.T) Method (Invisible Payment) - Service Charge', import: '', servicePay: '4%', cash: '' },
    { service: 'A/P (T.T) Method (Invisible Payment) - SWIFT Charge (MT103)', import: '', servicePay: 'USD 100', cash: '' },
    { service: 'Cash Sales FX Commission - Service Charge', import: '', servicePay: '', cash: '4%' },
    { service: 'Freight Charge', import: '', servicePay: '4%', cash: '' }
  ];

  const renderTable = () => {
    switch(activeSection) {
      case 'digital':
        return (
          <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-red-600 to-black text-white">
                  <th className="py-4 px-6 text-left font-bold">S.N</th>
                  <th className="py-4 px-6 text-left font-bold">Transaction Type</th>
                  <th className="py-4 px-6 text-left font-bold">Amount Range (ETB)</th>
                  <th className="py-4 px-6 text-left font-bold">Fee</th>
                </tr>
              </thead>
              <tbody>
                {digitalFees.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-red-50 transition-colors duration-300">
                    <td className="py-4 px-6 font-medium">{row.sn}</td>
                    <td className="py-4 px-6">{row.type}</td>
                    <td className="py-4 px-6">{row.range}</td>
                    <td className="py-4 px-6 font-semibold text-red-600">{row.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'deposit':
        return (
          <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-red-600 to-black text-white">
                  <th className="py-4 px-6 text-left font-bold">Deposit Account Type</th>
                  <th className="py-4 px-6 text-left font-bold">Annual Interest Rate</th>
                </tr>
              </thead>
              <tbody>
                {depositRates.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-red-50 transition-colors duration-300">
                    <td className="py-4 px-6 font-medium">{row.account}</td>
                    <td className="py-4 px-6 font-semibold text-red-600">{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'credit':
        return (
          <div className="space-y-8">
            {/* Credit Facilities Table */}
            <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gradient-to-r from-red-600 to-black text-white">
                    <th className="py-4 px-6 text-left font-bold">Type of Credit Facilities</th>
                    <th className="py-4 px-6 text-left font-bold">Loan Tenure</th>
                    <th className="py-4 px-6 text-left font-bold">Lending Interest Rates</th>
                  </tr>
                </thead>
                <tbody>
                  {creditFacilities.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-red-50 transition-colors duration-300">
                      <td className="py-4 px-6 font-medium">{row.type}</td>
                      <td className="py-4 px-6">{row.tenure}</td>
                      <td className="py-4 px-6 font-semibold text-red-600">{row.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Collateral Valuation Fees */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Collateral/Property Valuation Fees</h3>
              <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gradient-to-r from-red-600 to-black text-white">
                      <th className="py-4 px-6 text-left font-bold">Property Type</th>
                      <th className="py-4 px-6 text-left font-bold">Unit</th>
                      <th className="py-4 px-6 text-left font-bold">Charges in ETB</th>
                    </tr>
                  </thead>
                  <tbody>
                    {collateralFees.map((row, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-red-50 transition-colors duration-300">
                        <td className="py-4 px-6 font-medium">{row.property}</td>
                        <td className="py-4 px-6">{row.unit}</td>
                        <td className="py-4 px-6 font-semibold text-red-600">{row.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'ifb':
        return (
          <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-red-600 to-black text-white">
                  <th className="py-4 px-6 text-left font-bold">Financing product & Economic Sector</th>
                  <th className="py-4 px-6 text-left font-bold">Financing Duration</th>
                  <th className="py-4 px-6 text-left font-bold">Quarter (%)</th>
                  <th className="py-4 px-6 text-left font-bold">Semi Annual (%)</th>
                  <th className="py-4 px-6 text-left font-bold">Annual (%)</th>
                </tr>
              </thead>
              <tbody>
                {ifbProducts.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-red-50 transition-colors duration-300">
                    <td className="py-4 px-6 font-medium">{row.product}</td>
                    <td className="py-4 px-6">{row.duration}</td>
                    <td className="py-4 px-6 font-semibold text-red-600">{row.quarter}</td>
                    <td className="py-4 px-6 font-semibold text-red-600">{row.semiAnnual}</td>
                    <td className="py-4 px-6 font-semibold text-red-600">{row.annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'ibd':
        return (
          <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-red-600 to-black text-white">
                  <th className="py-4 px-6 text-left font-bold">Fees Charged for Fx Services</th>
                  <th className="py-4 px-6 text-left font-bold">Import Permits</th>
                  <th className="py-4 px-6 text-left font-bold">Service Payments</th>
                  <th className="py-4 px-6 text-left font-bold">Cash Sales</th>
                </tr>
              </thead>
              <tbody>
                {ibdFees.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-red-50 transition-colors duration-300">
                    <td className="py-4 px-6 font-medium">{row.service}</td>
                    <td className="py-4 px-6 font-semibold text-red-600">{row.import}</td>
                    <td className="py-4 px-6 font-semibold text-red-600">{row.servicePay}</td>
                    <td className="py-4 px-6 font-semibold text-red-600">{row.cash}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'branch':
        return (
          <div className="bg-gradient-to-r from-red-50 to-white rounded-2xl p-8 shadow-xl border border-red-100">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">REVISED BRANCH BANKING TERM AND TARIFF CATALOG</h3>
              <p className="text-gray-700">
                For detailed branch banking terms and tariffs, please visit your nearest Gadaa Bank branch 
                or contact our customer service department for personalized assistance.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaBuilding className="text-red-600 mr-3" />
                  Branch Services
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FaChevronRight className="text-red-500 mr-3" />
                    <span>Account opening and maintenance</span>
                  </li>
                  <li className="flex items-center">
                    <FaChevronRight className="text-red-500 mr-3" />
                    <span>Cash deposits and withdrawals</span>
                  </li>
                  <li className="flex items-center">
                    <FaChevronRight className="text-red-500 mr-3" />
                    <span>Check processing and clearing</span>
                  </li>
                  <li className="flex items-center">
                    <FaChevronRight className="text-red-500 mr-3" />
                    <span>Foreign currency exchange</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaCalculator className="text-red-600 mr-3" />
                  Fee Structure
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FaChevronRight className="text-red-500 mr-3" />
                    <span>Account maintenance fees</span>
                  </li>
                  <li className="flex items-center">
                    <FaChevronRight className="text-red-500 mr-3" />
                    <span>Transaction processing fees</span>
                  </li>
                  <li className="flex items-center">
                    <FaChevronRight className="text-red-500 mr-3" />
                    <span>Document processing charges</span>
                  </li>
                  <li className="flex items-center">
                    <FaChevronRight className="text-red-500 mr-3" />
                    <span>Special service requests</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Terms & Tariffs</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          to="/"
          className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 group"
        >
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Home
        </Link>

        {/* Main Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-600 to-black rounded-full mb-6 shadow-lg animate-pulse">
            <FaFileInvoice className="text-white text-4xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            <span className="text-red-600">Terms</span> & <span className="text-red-600">Tariffs</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive fee structure and terms for all Gadaa Bank services
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search terms or tariffs..." 
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-700">
                <FaRegClock className="mr-2 text-red-500" />
                <span className="font-medium">Effective: January 2025</span>
              </div>
              <button className="px-6 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition duration-300 flex items-center gap-2">
                <FaDownload />
                Download PDF
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 sticky top-8">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900">Categories</h3>
              </div>
              
              <div className="p-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center justify-between p-4 rounded-xl mb-2 transition-all duration-300 ${
                        activeSection === section.id 
                          ? 'bg-gradient-to-r from-red-600 to-black text-white shadow-lg' 
                          : 'text-gray-700 hover:bg-red-50 hover:text-red-600'
                      }`}
                    >
                      <div className="flex items-center">
                        <Icon className="mr-3" />
                        <span className="font-medium">{section.name}</span>
                      </div>
                      <FaChevronRight className={`transform transition-transform duration-300 ${
                        activeSection === section.id ? 'rotate-90' : ''
                      }`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-6 bg-gradient-to-r from-red-50 to-white rounded-2xl p-6 shadow-xl border border-red-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg hover:bg-white hover:shadow-md transition duration-300 flex items-center">
                  <FaExchangeAlt className="text-red-500 mr-3" />
                  <span>Exchange Rates</span>
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-white hover:shadow-md transition duration-300 flex items-center">
                  <FaCalculator className="text-red-500 mr-3" />
                  <span>Fee Calculator</span>
                </button>
                <Link 
                  to="/contact"
                  className="block w-full text-left p-3 rounded-lg hover:bg-white hover:shadow-md transition duration-300 flex items-center"
                >
                  <FaCreditCard className="text-red-500 mr-3" />
                  <span>Request Clarification</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content - Tables */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
              {/* Active Section Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {sections.find(s => s.id === activeSection)?.name}
                  </h2>
                  <div className="flex items-center text-gray-600">
                    <FaRegClock className="mr-2" />
                    <span>Last updated: December 2024</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300">
                    Print
                  </button>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300">
                    Share
                  </button>
                </div>
              </div>

              {/* Table Content */}
              <div className="mb-8">
                {renderTable()}
              </div>

              {/* Important Notes */}
              <div className="bg-gradient-to-r from-red-600 to-black rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Important Notes</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FaChevronDown className="text-red-300 mr-3 mt-1 flex-shrink-0" />
                    <span>All fees are subject to change without prior notice</span>
                  </li>
                  <li className="flex items-start">
                    <FaChevronDown className="text-red-300 mr-3 mt-1 flex-shrink-0" />
                    <span>Rates may vary based on customer relationship and transaction volume</span>
                  </li>
                  <li className="flex items-start">
                    <FaChevronDown className="text-red-300 mr-3 mt-1 flex-shrink-0" />
                    <span>Special rates available for corporate and premium customers</span>
                  </li>
                  <li className="flex items-start">
                    <FaChevronDown className="text-red-300 mr-3 mt-1 flex-shrink-0" />
                    <span>Taxes and government levies apply where applicable</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact for Clarification */}
            <div className="mt-8 bg-gradient-to-r from-red-50 to-white rounded-2xl p-8 shadow-xl border border-red-100">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Need Clarification?</h3>
                  <p className="text-gray-700">
                    Contact our customer service for detailed explanations of any terms or tariffs
                  </p>
                </div>
                <Link 
                  to="/contact"
                  className="px-8 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 hover:scale-105 transition-all duration-300"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;