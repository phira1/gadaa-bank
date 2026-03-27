import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaCheckCircle, 
  FaMobileAlt,
  FaExchangeAlt,
  FaWallet,
  FaCreditCard,
  FaWifi,
  FaBolt,
  FaShieldAlt,
  FaBell,
  FaQrcode
} from 'react-icons/fa';

const MobileBanking = () => {
  const features = [
    { icon: FaExchangeAlt, title: 'Fund Transfers', description: 'Transfer to own accounts, other Gadaa customers, or other banks (P2P)' },
    { icon: FaWallet, title: 'Mobile Wallets', description: 'Send money to Telebirr and other mobile wallets' },
    { icon: FaCreditCard, title: 'RTGS Transfers', description: 'Secure RTGS transfers to any bank in Ethiopia' },
    { icon: FaWifi, title: 'Real-time Balance', description: 'Check account balances and view mini statements' },
    { icon: FaBolt, title: 'Airtime & Bills', description: 'Top up airtime and pay utility bills effortlessly' },
    { icon: FaBell, title: 'Bill Payments', description: 'Pay Ethiotelecom postpaid mobile and internet bills' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-black to-gray-900 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
            <span className="text-red-500">›</span>
            <Link to="/digital" className="text-white/80 hover:text-white transition-colors">Digital Banking</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Mobile Banking</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Back Button */}
        <Link 
          to="/digital"
          className="inline-flex items-center text-red-600 hover:text-red-700 mb-6 md:mb-8 text-sm md:text-base group"
        >
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Digital Banking
        </Link>

        {/* Main Title */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-red-600 to-black rounded-full mb-4 md:mb-6 shadow-lg">
            <FaMobileAlt className="text-white text-3xl md:text-4xl" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-2 md:mb-4">
            <span className="text-red-600">Mobile</span> Banking
          </h1>
          <p className="text-base md:text-xl text-gray-700 max-w-2xl mx-auto px-2">
            Gadaa Bank Mobile Banking Products
          </p>
        </div>

        {/* Hero Section with Image */}
        <div className="mb-10 md:mb-12">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10">
            {/* Left Column - Image */}
            <div className="lg:w-2/5 w-full">
              <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-red-100">
                <div className="relative">
                  <img 
                    src="/images/slide3ussd.jpg" 
                    alt="Gadaa Mobile Banking" 
                    className="w-full h-auto rounded-xl md:rounded-2xl shadow-lg"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-red-600 to-black rounded-xl md:rounded-2xl flex items-center justify-center shadow-xl">
                    <FaQrcode className="text-white text-2xl md:text-3xl" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:w-3/5 w-full">
              <div className="bg-gradient-to-r from-red-50 to-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-red-100">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                  Experience Seamless Banking with the <span className="text-red-600">Gadaa Mobile App</span>
                </h2>
                <p className="text-gray-700 text-base md:text-lg mb-6 md:mb-8">
                  Our intuitive mobile banking app is now live—giving you full control of your finances, 
                  anytime, anywhere.
                </p>
                
                <div className="flex items-center text-red-600 mb-4 md:mb-6">
                  <FaShieldAlt className="mr-2 md:mr-3 text-lg md:text-xl" />
                  <span className="font-semibold text-sm md:text-base">Secure, Fast, and Reliable</span>
                </div>

                <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-200">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                    With Gadaa Digital Banking, you can:
                  </h3>
                  <ul className="space-y-2 md:space-y-3">
                    {[
                      'Instantly transfer funds between your own accounts, to other Gadaa Bank customers, or to accounts at other banks (P2P)',
                      'Send money to mobile wallets like Telebirr',
                      'Initiate secure RTGS transfers to any bank in Ethiopia',
                      'Check your account balances and view mini statements in real-time',
                      'Top up airtime and pay utility bills effortlessly'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm md:text-base">
                        <FaCheckCircle className="text-red-500 mr-2 md:mr-3 mt-1 flex-shrink-0 text-xs md:text-sm" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
            Mobile Banking <span className="text-red-600">Features</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-5 md:p-6 shadow-md border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex flex-col items-start">
                    <div className="flex items-center mb-3 md:mb-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-red-100 to-white rounded-xl md:rounded-2xl flex items-center justify-center mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-red-600 text-xl md:text-2xl" />
                      </div>
                      <h3 className="text-base md:text-xl font-bold text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bill Payments Section */}
        <div className="mb-10 md:mb-12">
          <div className="bg-gradient-to-r from-red-50 to-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-red-100">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-4">Bill Payments</h2>
            <p className="text-gray-700 text-sm md:text-base mb-4 md:mb-6">
              Avoid late fees and lines—pay your Ethiotelecom postpaid mobile and internet bills 
              directly through the app.
            </p>
            <div className="flex items-center">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-red-100 rounded-full flex items-center justify-center mr-3 md:mr-4">
                <FaBolt className="text-red-600 text-sm md:text-base" />
              </div>
              <span className="font-semibold text-gray-800 text-sm md:text-base">Instant payment processing</span>
            </div>
          </div>
        </div>

        {/* RTGS Section */}
        <div className="mb-10 md:mb-12">
          <div className="bg-gradient-to-r from-red-600 to-black rounded-xl md:rounded-2xl p-6 md:p-8 text-white shadow-xl">
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-6">RTGS Transfers Made Simple</h2>
            <p className="text-white/90 text-sm md:text-lg mb-4 md:mb-6">
              Remit funds to accounts at other banks across Ethiopia through our easy-to-use 
              RTGS feature—secure, fast, and reliable.
            </p>
            <div className="flex items-center">
              <FaShieldAlt className="text-red-300 mr-2 md:mr-3 text-base md:text-lg" />
              <span className="text-white/80 text-sm md:text-base">Bank-level security on all transactions</span>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="mb-8 md:mb-10">
          <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
              Banking at Your Fingertips
            </h2>
            <p className="text-gray-700 text-base md:text-xl mb-6 md:mb-8 px-2">
              No queues. No paperwork. Just convenient, secure banking from the palm of your hand.
            </p>
            <a 
              href="https://play.google.com/store/apps/details?id=com.gadaaDigital"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-red-600 hover:text-red-700 transition-colors"
            >
              <FaMobileAlt className="mr-2 md:mr-3 text-xl md:text-2xl" />
              <span className="text-base md:text-lg font-semibold">Download the Gadaa Mobile App Today</span>
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-red-600 to-black rounded-xl md:rounded-2xl p-8 md:p-10 text-center text-white shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Get Started with Mobile Banking</h2>
          <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8">
            Download our app and experience banking convenience
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a 
              href="https://play.google.com/store/apps/details?id=com.gadaaDigital"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 md:px-8 py-2.5 md:py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 shadow-lg transition-all duration-300 text-sm md:text-base"
            >
              Download App
            </a>
            <Link 
              to="/contact"
              className="px-6 md:px-8 py-2.5 md:py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300 text-sm md:text-base"
            >
              Get Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileBanking;