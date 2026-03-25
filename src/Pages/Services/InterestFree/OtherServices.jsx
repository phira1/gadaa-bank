import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaCheckCircle, 
  FaGlobe,
  FaFileContract,
  FaExchangeAlt,
  FaMoneyBillWave,
  FaShip,
  FaPlane,
  FaShieldAlt,
  FaTruck,
  FaQuran,
  FaHandshake,
  FaBalanceScale,
  FaChartLine,
  FaLaptop,
  FaLandmark
} from 'react-icons/fa';

const OtherServices = () => {
  const otherServicesRef = useRef(null);

  const scrollToOtherServices = () => {
    otherServicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // IFB main products (links to individual pages)
  const ifbMainServices = [
    { 
      name: 'Deposit Product', 
      path: '/services/deposit-product',
      icon: FaLandmark,
      description: 'Sharia-compliant deposit accounts with competitive returns.',
      details: 'Safe, profit-sharing deposits'
    },
    { 
      name: 'Wadiah Saving Account', 
      path: '/services/wadiah-saving',
      icon: FaHandshake,
      description: 'Safe custody savings with optional rewards.',
      details: 'Guaranteed safekeeping'
    },
    { 
      name: 'Amanah', 
      path: '/services/amanah',
      icon: FaBalanceScale,
      description: 'Trust-based financing solutions.',
      details: 'Asset-backed, ethical financing'
    },
    { 
      name: 'Mudarabah Saving Accounts', 
      path: '/services/mudarabah-saving-accounts',
      icon: FaChartLine,
      description: 'Profit-sharing investment accounts.',
      details: 'Shared risk, shared reward'
    },
    { 
      name: 'Financing & Investment', 
      path: '/services/financing-investment',
      icon: FaMoneyBillWave,
      description: 'Asset-based financing and investment opportunities.',
      details: 'Project funding, investment'
    },
  ];

  // Original "Other Services" content (trade finance, remittances, etc.)
  const otherServices = [
    { 
      name: 'Trade Finance', 
      description: 'Import and Export financing solutions',
      icon: FaShip,
      details: 'LC issuance, trade loans, export financing'
    },
    { 
      name: 'Letter of Guarantee', 
      description: 'Kafala guarantee services',
      icon: FaFileContract,
      details: 'Bid bonds, performance guarantees, advance payment'
    },
    { 
      name: 'Incoming Remittances', 
      description: 'International money transfers to Ethiopia',
      icon: FaPlane,
      details: 'SWIFT transfers, correspondent banking'
    },
    { 
      name: 'Outgoing Remittances', 
      description: 'Money transfers from Ethiopia',
      icon: FaGlobe,
      details: 'Foreign payments, overseas transfers'
    },
    { 
      name: 'Foreign Exchange', 
      description: 'Currency exchange services',
      icon: FaExchangeAlt,
      details: 'Major currencies, competitive rates'
    },
    { 
      name: 'Domestic Money Transfer', 
      description: 'Hawalah transfer services',
      icon: FaMoneyBillWave,
      details: 'Local transfers, agent network'
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-black to-gray-900 py-3">
        <div className="container mx-auto px-3">
          <nav className="flex items-center space-x-2 text-xs">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-red-500">›</span>
            <Link to="/services" className="text-white/80 hover:text-white">Services</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Interest Free Banking</span>
          </nav>
        </div>
      </div>

      {/* Hero Section with Islamic Background */}
      <div className="relative bg-gradient-to-br from-black to-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/depositproduct.jpg"
            alt="Interest Free Banking"
            className="w-full h-full object-cover opacity-30"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://images.unsplash.com/photo-1584551246679-73f4a67d5c9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-red-900/90"></div>
        </div>

        <div className="relative container mx-auto px-4 py-16 md:py-24 text-center text-white">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
            <FaQuran className="text-4xl text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Interest Free Banking
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-white/90">
            Sharia-compliant financial solutions based on Islamic principles of justice, transparency, and shared risk.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={scrollToOtherServices}
              className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300"
            >
              Explore Services
              <FaArrowLeft className="ml-2 rotate-180" />
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* IFB Main Products Grid */}
      <div className="container mx-auto px-3 py-8 md:py-12">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-600">Interest-Free Products</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Explore our comprehensive range of interest-free banking services, designed to meet your financial needs while adhering to Sharia principles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {ifbMainServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                to={service.path}
                className="group bg-white rounded-xl shadow-md border border-gray-100 p-4 md:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-red-300"
              >
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="p-2 md:p-3 bg-red-50 rounded-lg group-hover:bg-red-100 transition-colors">
                    <Icon className="text-xl md:text-2xl text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm mb-2">{service.description}</p>
                    <p className="text-red-600 text-xs md:text-sm font-medium">
                      {service.details}
                    </p>
                    <div className="mt-3 flex items-center text-red-600 font-medium text-xs md:text-sm">
                      Learn more
                      <FaArrowLeft className="ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Original Other Services Section */}
      <div ref={otherServicesRef} className="bg-gray-50 py-8 md:py-12">
        <div className="container mx-auto px-3">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Other <span className="text-red-600">Sharia-Compliant Services</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Additional offerings to support your trade and financial needs
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-gradient-to-r from-red-50 to-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg mb-8 md:mb-10 border border-red-100">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
              Comprehensive Banking Services
            </h2>
            <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4">
              Additional Sharia-compliant banking services to support your 
              international trade and financial transactions.
            </p>
            <div className="flex items-center text-red-600 text-xs md:text-sm">
              <FaShieldAlt className="mr-1 md:mr-2" />
              <span className="font-semibold">Islamic Banking Standards</span>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-8 md:mb-10 lg:mb-12">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
              {otherServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-lg md:rounded-xl p-3 md:p-4 lg:p-6 shadow-md border border-gray-200 hover:border-red-300 hover:shadow-lg transition duration-300 h-full flex flex-col"
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex items-start mb-3 md:mb-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-red-100 to-white rounded-xl md:rounded-2xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                          <Icon className="text-red-600 text-base md:text-lg lg:text-xl" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1">
                            {service.name}
                          </h3>
                          <p className="text-gray-600 text-xs md:text-sm">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700 text-xs md:text-sm mb-3 md:mb-4 flex-grow">
                        {service.details}
                      </p>
                      <div className="flex items-center text-red-600 text-xs md:text-sm mt-auto pt-2 md:pt-3 border-t border-gray-100">
                        <FaCheckCircle className="mr-1 md:mr-2" />
                        <span className="font-semibold">Sharia-Compliant</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Service Details */}
          <div className="bg-gradient-to-r from-red-600 to-black rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 text-white shadow-xl mb-8 md:mb-10">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6">Service Features</h2>
            
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">Trade Finance</h3>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-red-300 mr-2 md:mr-3 mt-0.5 text-xs md:text-sm" />
                    <span className="text-xs md:text-sm lg:text-base">Letters of Credit (LC) issuance</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-red-300 mr-2 md:mr-3 mt-0.5 text-xs md:text-sm" />
                    <span className="text-xs md:text-sm lg:text-base">Import financing facilities</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-red-300 mr-2 md:mr-3 mt-0.5 text-xs md:text-sm" />
                    <span className="text-xs md:text-sm lg:text-base">Export pre-shipment financing</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-red-300 mr-2 md:mr-3 mt-0.5 text-xs md:text-sm" />
                    <span className="text-xs md:text-sm lg:text-base">Trade documentation handling</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">Remittance Services</h3>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-red-300 mr-2 md:mr-3 mt-0.5 text-xs md:text-sm" />
                    <span className="text-xs md:text-sm lg:text-base">Inward remittance processing</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-red-300 mr-2 md:mr-3 mt-0.5 text-xs md:text-sm" />
                    <span className="text-xs md:text-sm lg:text-base">Outward payment processing</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-red-300 mr-2 md:mr-3 mt-0.5 text-xs md:text-sm" />
                    <span className="text-xs md:text-sm lg:text-base">Multiple currency options</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-red-300 mr-2 md:mr-3 mt-0.5 text-xs md:text-sm" />
                    <span className="text-xs md:text-sm lg:text-base">Quick transfer processing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Islamic Principles */}
          <div className="mb-8 md:mb-10">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Islamic Banking Compliance</h2>
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-md border border-gray-200">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4 text-red-600">Guiding Principles</h3>
                  <ul className="space-y-2 md:space-y-3">
                    <li className="flex items-center">
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-red-100 rounded-full flex items-center justify-center mr-2 md:mr-3 flex-shrink-0">
                        <span className="text-red-600 font-bold text-xs md:text-sm">✓</span>
                      </div>
                      <span className="text-xs md:text-sm lg:text-base">No interest (Riba) in transactions</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-red-100 rounded-full flex items-center justify-center mr-2 md:mr-3 flex-shrink-0">
                        <span className="text-red-600 font-bold text-xs md:text-sm">✓</span>
                      </div>
                      <span className="text-xs md:text-sm lg:text-base">Asset-backed financing only</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-red-100 rounded-full flex items-center justify-center mr-2 md:mr-3 flex-shrink-0">
                        <span className="text-red-600 font-bold text-xs md:text-sm">✓</span>
                      </div>
                      <span className="text-xs md:text-sm lg:text-base">Risk-sharing arrangements</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4 text-red-600">Benefits</h3>
                  <ul className="space-y-2 md:space-y-3">
                    <li className="flex items-center">
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-red-100 rounded-full flex items-center justify-center mr-2 md:mr-3 flex-shrink-0">
                        <span className="text-red-600 font-bold text-xs md:text-sm">✓</span>
                      </div>
                      <span className="text-xs md:text-sm lg:text-base">Ethical and transparent</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-red-100 rounded-full flex items-center justify-center mr-2 md:mr-3 flex-shrink-0">
                        <span className="text-red-600 font-bold text-xs md:text-sm">✓</span>
                      </div>
                      <span className="text-xs md:text-sm lg:text-base">Sharia Advisory oversight</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-red-100 rounded-full flex items-center justify-center mr-2 md:mr-3 flex-shrink-0">
                        <span className="text-red-600 font-bold text-xs md:text-sm">✓</span>
                      </div>
                      <span className="text-xs md:text-sm lg:text-base">Socially responsible banking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-red-600 to-black rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 text-center text-white shadow-xl">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">
              Access Our Services
            </h2>
            <p className="text-white/90 text-sm md:text-base lg:text-lg mb-4 md:mb-6 lg:mb-8">
              Professional banking solutions for your needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 lg:gap-4 justify-center">
              <Link 
                to="/contact"
                className="px-4 py-2 md:px-6 md:py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 shadow-lg transition duration-300 text-xs md:text-sm lg:text-base"
              >
                Enquire Now
              </Link>
              <Link 
                to="/contact"
                className="px-4 py-2 md:px-6 md:py-3 border border-white text-white font-bold rounded-lg hover:bg-white/10 transition duration-300 text-xs md:text-sm lg:text-base"
              >
                Visit Branch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherServices;