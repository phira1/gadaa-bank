import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaCheckCircle, 
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaSearch,
  FaBuilding,
  FaUserFriends,
  FaMoneyBillWave,
  FaCreditCard,
  FaShieldAlt
} from 'react-icons/fa';

const ATMPage = () => {
  const locatorTypes = [
    { 
      icon: FaMapMarkerAlt, 
      title: 'ATM Locator', 
      description: 'Find nearest ATMs',
      color: 'from-red-600 to-red-800'
    },
    { 
      icon: FaBuilding, 
      title: 'Branch Locator', 
      description: 'Locate Gadaa Bank branches',
      color: 'from-gray-900 to-black'
    },
    { 
      icon: FaUserFriends, 
      title: 'Agent Locator', 
      description: 'Find authorized agents',
      color: 'from-red-700 to-red-900'
    },
  ];

  const atmFeatures = [
    '24/7 cash withdrawals',
    'Balance inquiry',
    'Mini statements',
    'Fund transfers',
    'Secure PIN-based access',
    'Multi-currency support'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-black to-gray-900 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">ATM Services</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          to="/digital"
          className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 group"
        >
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Digital Banking
        </Link>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              <span className="text-red-600">ATM</span> Services
            </h1>
            <p className="text-2xl text-gray-700">New Generation's Bank !</p>
            <p className="text-xl text-red-600 font-bold mt-2">The Wish of Millions !</p>
          </div>

          {/* Hero Content with Image */}
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Left Column - Image */}
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-6 shadow-xl border border-red-100 hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden rounded-2xl group">
                  <img 
                    src="/images/gadaa-atmpng.png" 
                    alt="Gadaa Bank ATM" 
                    className="w-full h-auto rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-red-600 to-black rounded-2xl flex items-center justify-center shadow-xl animate-pulse">
                    <FaCreditCard className="text-white text-3xl" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-r from-red-50 to-white rounded-3xl p-8 shadow-xl border border-red-100 hover:shadow-2xl transition-all duration-500">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  ATM <span className="text-red-600">Acquiring Services</span>
                </h2>
                <p className="text-gray-700 text-lg mb-8">
                  Customers can securely perform a host of essential banking services by 
                  accessing accounts using debit cards at our widespread network of onsite 
                  and offsite ATMs.
                </p>
                
                <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-red-300 transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaShieldAlt className="text-red-600 mr-3 animate-pulse" />
                    Secure Banking Features
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {atmFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <FaCheckCircle className="text-red-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Locator Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Find Gadaa Bank <span className="text-red-600">Nearest to You</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {locatorTypes.map((locator, index) => {
              const Icon = locator.icon;
              return (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${locator.color} rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500`}
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6 animate-pulse">
                      <Icon className="text-white text-2xl" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{locator.title}</h3>
                    <p className="text-white/80 mb-6">{locator.description}</p>
                    <button className="px-6 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-semibold transition-all duration-300">
                      Find Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Help Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-red-600 to-black rounded-2xl p-10 text-white shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">How can we help you?</h2>
              <p className="text-xl text-white/90 mb-8">
                Contact us at Gadaa Bank Branch nearest to you or submit a business inquiry online.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-4">
                    <FaPhone className="text-white text-xl" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Call Us</h3>
                  <p className="text-white/70">+251-XXX-ATM-HELP</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-4">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <p className="text-white/70">atm@gadaabank.com</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-4">
                    <FaSearch className="text-white text-xl" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Online</h3>
                  <p className="text-white/70">Submit Inquiry</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-red-600 to-black rounded-2xl p-10 text-center text-white shadow-xl hover:shadow-2xl transition-all duration-500">
          <h2 className="text-3xl font-bold mb-4">Read More About Us</h2>
          <p className="text-xl text-white/90 mb-8">
            Discover how Gadaa Bank serves millions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/about"
              className="px-8 py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 hover:scale-105 shadow-lg transition-all duration-300"
            >
              Learn About Gadaa
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ATMPage;