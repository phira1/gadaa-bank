import React from 'react';
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
  FaTruck
} from 'react-icons/fa';

const OtherServices = () => {
  const services = [
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
            <span className="text-white font-semibold">Other Services</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-3 py-4 md:py-6">
        {/* Back Button */}
        <Link 
          to="/services"
          className="inline-flex items-center text-red-600 hover:text-red-700 mb-6 md:mb-8 text-sm"
        >
          <FaArrowLeft className="mr-1 md:mr-2" />
          <span className="text-xs md:text-sm">Back to Services</span>
        </Link>

        {/* Main Title */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-red-600 to-black rounded-full mb-4 md:mb-6 shadow-lg">
            <FaGlobe className="text-white text-2xl md:text-3xl lg:text-4xl" />
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-3 md:mb-4 px-2">
            <span className="text-red-600">Other IFB Services</span>
          </h1>
          <p className="text-sm md:text-base lg:text-xl text-gray-700 max-w-2xl mx-auto px-2">
            غدا الريان Gadaa Rayyan
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

        {/* Services Grid - 2x3 on Mobile */}
        <div className="mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center px-2">
            Our <span className="text-red-600">Services</span>
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-lg md:rounded-xl p-3 md:p-4 lg:p-6 shadow-md border border-gray-200 hover:border-red-300 hover:shadow-lg transition duration-300 h-full flex flex-col"
                >
                  <div className="flex flex-col h-full">
                    {/* Icon and Name Row */}
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
                    
                    {/* Details */}
                    <p className="text-gray-700 text-xs md:text-sm mb-3 md:mb-4 flex-grow">
                      {service.details}
                    </p>
                    
                    {/* Sharia-Compliant Label */}
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
  );
};

export default OtherServices;