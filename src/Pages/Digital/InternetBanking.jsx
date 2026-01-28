import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaCheckCircle, 
  FaLaptop,
  FaShieldAlt,
  FaExchangeAlt,
  FaCreditCard,
  FaFileInvoice,
  FaUsers,
  FaDownload,
  FaLock,
  FaGlobe,
  FaChartLine
} from 'react-icons/fa';

const InternetBanking = () => {
  const features = [
    { icon: FaChartLine, title: 'Real-time Balances', description: 'View account balances and transaction history' },
    { icon: FaExchangeAlt, title: 'Fund Transfers', description: 'Transfer between accounts or to other banks (P2P, interbank, RTGS)' },
    { icon: FaCreditCard, title: 'Wallet Payments', description: 'Make Telebirr transfers and other wallet payments' },
    { icon: FaFileInvoice, title: 'Bill Payments', description: 'Settle Ethiotelecom postpaid mobile and internet bills' },
    { icon: FaUsers, title: 'Business Solutions', description: 'Manage bulk payments, payroll, and supplier transfers' },
    { icon: FaDownload, title: 'Statements', description: 'Download account statements and payment confirmations' },
    { icon: FaLock, title: 'Secure Authorization', description: 'Authorize transactions with enhanced security protocols' },
    { icon: FaGlobe, title: '24/7 Access', description: 'Bank anytime, anywhere with web-based platform' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-black to-gray-900 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Internet Banking</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          to="/digital"
          className="inline-flex items-center text-red-600 hover:text-red-700 mb-8"
        >
          <FaArrowLeft className="mr-2" />
          Back to Digital Banking
        </Link>

        {/* Sign In/Register Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">
              <span className="text-red-600">Internet</span> Banking
            </h1>
            <p className="text-gray-700">Gadaa Bank › Internet Banking</p>
          </div>
          <div className="flex space-x-4">
            <button className="px-6 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition duration-300">
              Sign In
            </button>
            <button className="px-6 py-2 border-2 border-red-600 text-red-600 font-bold rounded-lg hover:bg-red-50 transition duration-300">
              Register
            </button>
          </div>
        </div>

        {/* Hero Section with Image */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Left Column - Content */}
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-r from-red-50 to-white rounded-3xl p-8 shadow-xl border border-red-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Bank Smarter with <span className="text-red-600">Gadaa Internet Banking</span>
                </h2>
                <p className="text-gray-700 text-lg mb-8">
                  Gadaa Internet Banking empowers both Retail and Corporate customers to manage 
                  their finances anytime, from anywhere—with no need to visit a branch. Our secure, 
                  web-based platform gives you full access to your accounts and a wide range of 
                  services to streamline your personal or business banking experience.
                </p>
                
                <div className="flex items-center text-red-600 mb-6">
                  <FaShieldAlt className="mr-3" />
                  <span className="font-semibold">Advanced Security & 24/7 Access</span>
                </div>

                <div className="bg-white rounded-2xl p-6 mb-8 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    With Gadaa Internet Banking, you can:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <span>View real-time account balances and transaction history</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <span>Transfer funds between your own accounts or to other banks (P2P, interbank, RTGS)</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <span>Make Telebirr transfers and other wallet payments</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <span>Settle Ethiotelecom postpaid mobile and internet bills</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <span>Manage bulk payments, payroll, and supplier transfers (for business users)</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <span>Download account statements and payment confirmations</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <span>Authorize transactions with enhanced security protocols</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-8 shadow-xl border border-red-100">
                <div className="relative">
                  <img 
                    src="/images/internet-banking.jpg" 
                    alt="Gadaa Internet Banking" 
                    className="w-full h-auto rounded-2xl shadow-lg"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-red-600 to-black rounded-2xl flex items-center justify-center shadow-xl">
                    <FaLaptop className="text-white text-3xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Internet Banking <span className="text-red-600">Features</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:border-red-300 hover:shadow-lg transition duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-white rounded-2xl flex items-center justify-center mb-4">
                      <Icon className="text-red-600 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tailored Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-red-600 to-black rounded-2xl p-10 text-white shadow-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Tailored for Every Customer</h2>
              <p className="text-xl text-white/90 mb-8">
                Whether you're an individual managing household expenses or a business 
                handling large-scale transactions, Gadaa Internet Banking is designed 
                to scale with your needs.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/10 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">For Individuals</h3>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-red-300 mr-2" />
                      <span>Personal account management</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-red-300 mr-2" />
                      <span>Bill payments and transfers</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-red-300 mr-2" />
                      <span>Family banking solutions</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/10 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">For Businesses</h3>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-red-300 mr-2" />
                      <span>Bulk payment processing</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-red-300 mr-2" />
                      <span>Payroll management</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-red-300 mr-2" />
                      <span>Supplier payments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="mb-10">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-100 to-white rounded-full mb-6">
              <FaShieldAlt className="text-red-600 text-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Secure. Efficient. Always Available.
            </h2>
            <p className="text-gray-700 text-xl mb-8 max-w-3xl mx-auto">
              Our platform uses advanced security technologies to protect your information 
              and give you peace of mind—so you can focus on what matters most.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center">
                <FaLock className="text-red-500 mr-2" />
                <span className="font-semibold">256-bit Encryption</span>
              </div>
              <div className="flex items-center">
                <FaShieldAlt className="text-red-500 mr-2" />
                <span className="font-semibold">Two-Factor Authentication</span>
              </div>
              <div className="flex items-center">
                <FaGlobe className="text-red-500 mr-2" />
                <span className="font-semibold">24/7 Monitoring</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-red-600 to-black rounded-2xl p-10 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Start Banking Online Today</h2>
          <p className="text-xl text-white/90 mb-8">
            Experience secure, convenient internet banking
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 shadow-lg transition duration-300">
              Register Now
            </button>
            <Link 
              to="/contact"
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternetBanking;