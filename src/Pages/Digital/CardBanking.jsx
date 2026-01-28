import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaCheckCircle, 
  FaCreditCard,
  FaMoneyBill,
  FaUniversity,
  FaExchangeAlt,
  FaShieldAlt,
  FaClock,
  FaMobileAlt,
  FaGlobe,
  FaLock,
  FaSearch,
  FaHistory,
  FaMoneyCheckAlt
} from 'react-icons/fa';

const CardBanking = () => {
  const cardTypes = [
    { 
      name: 'G-Card', 
      description: 'Debit card for conventional banking users',
      features: ['24/7 cash withdrawals', 'Everyday transactions', 'Secure ATM access'],
      color: 'from-red-600 to-red-800'
    },
    { 
      name: 'G-Alrayyan Card', 
      description: 'Debit card for Interest Free banking users',
      features: ['Sharia-compliant', '24/7 cash withdrawals', 'Everyday transactions'],
      color: 'from-gray-900 to-black'
    },
  ];

  const atmServices = [
    { icon: FaMoneyBill, title: 'Cash Withdrawals', description: 'Withdraw cash 24/7 from our ATMs' },
    { icon: FaSearch, title: 'Balance Inquiry', description: 'Check account balances anytime' },
    { icon: FaHistory, title: 'Mini Statements', description: 'View recent transactions' },
    { icon: FaExchangeAlt, title: 'Fund Transfers', description: 'Transfer between accounts' },
    { icon: FaClock, title: '24/7 Availability', description: 'Access services any time' },
    { icon: FaLock, title: 'Secure Transactions', description: 'Protected by advanced security' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-black to-gray-900 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Card Banking</span>
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

        {/* Main Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-600 to-black rounded-full mb-6 shadow-lg animate-pulse">
            <FaCreditCard className="text-white text-4xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            <span className="text-red-600">Card</span> Banking
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Secure debit cards and ATM services for convenient banking
          </p>
        </div>

        {/* ATM Acquiring Services */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row items-center gap-10 mb-10">
            {/* Left Column - Image */}
            <div className="lg:w-2/5">
              <div className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-6 shadow-xl border border-red-100 hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden rounded-2xl group">
                  <img 
                    src="/images/gadaa-atm.jpg" 
                    alt="Gadaa Bank ATM Network" 
                    className="w-full h-auto rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                </div>
                <div className="mt-4 text-center">
                  <div className="inline-flex items-center text-red-600">
                    <FaUniversity className="mr-2" />
                    <span className="font-semibold">Our ATM Network</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:w-3/5">
              <div className="bg-gradient-to-r from-red-50 to-white rounded-3xl p-8 shadow-xl border border-red-100 hover:shadow-2xl transition-all duration-500">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  ATM <span className="text-red-600">Acquiring Services</span>
                </h2>
                <p className="text-gray-700 text-lg mb-6">
                  Customers can securely perform a host of essential banking services by 
                  accessing accounts using debit cards at our widespread network of onsite 
                  and offsite ATMs.
                </p>
                
                <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-red-300 transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaShieldAlt className="text-red-600 mr-3 animate-pulse" />
                    Secure 24/7 Banking Access
                  </h3>
                  <p className="text-gray-700">
                    With robust connectivity and security protocols, customers can safely 
                    use our bank's extensive ATM network for accessing accounts, cash 
                    withdrawals and other everyday non-branch banking transactions 24/7.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card Types */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our <span className="text-red-600">Debit Cards</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {cardTypes.map((card, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${card.color} rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500`}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mr-6 animate-spin-slow">
                    <FaCreditCard className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{card.name}</h3>
                    <p className="text-white/80">{card.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-4">Features:</h4>
                  <ul className="space-y-3">
                    {card.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center animate-fadeIn" style={{animationDelay: `${idx * 100}ms`}}>
                        <FaCheckCircle className="text-green-300 mr-3 animate-bounce" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-6 border-t border-white/20">
                  <div className="flex items-center">
                    <FaClock className="mr-3 animate-pulse" />
                    <span>24/7 access to banking services</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card Image Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-red-50 to-white rounded-3xl p-8 shadow-xl border border-red-100 hover:shadow-2xl transition-all duration-500">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="lg:w-1/2">
                <div className="text-center">
                  <div className="relative inline-block">
                    <img 
                      src="/images/Atmcardimage.jpg" 
                      alt="Gadaa Bank Debit Card" 
                      className="w-full max-w-md h-auto rounded-2xl shadow-lg mx-auto transform hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1634042359361-33d4a2f511d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-red-600 to-black rounded-full flex items-center justify-center shadow-xl animate-bounce">
                      <FaShieldAlt className="text-white" />
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="inline-flex items-center text-red-600">
                      <FaCreditCard className="mr-2 animate-pulse" />
                      <span className="font-semibold">Your Gadaa Debit Card</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Convenient & Secure Card Banking
                </h2>
                <div className="space-y-6">
                  {[
                    { icon: FaLock, title: 'Enhanced Security', description: 'All cards come with chip & PIN technology and 24/7 fraud monitoring.' },
                    { icon: FaGlobe, title: 'Wide Acceptance', description: 'Use your card at ATMs, POS terminals, and online merchants nationwide.' },
                    { icon: FaMobileAlt, title: 'Mobile Integration', description: 'Link your card with mobile banking for enhanced control and alerts.' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="text-red-600 text-xl" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors duration-300">{item.title}</h3>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ATM Services Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            ATM <span className="text-red-600">Services</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {atmServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:border-red-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-white rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <Icon className="text-red-600 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Exchange Rate Section */}
        <div className="mb-10">
          <div className="bg-gradient-to-r from-red-600 to-black rounded-2xl p-10 text-white shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 animate-pulse">
                <FaExchangeAlt className="text-white text-3xl" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Exchange Rate Services</h2>
              <p className="text-xl text-white/90 mb-8">
                Get competitive exchange rates when using your Gadaa debit card for 
                international transactions and foreign currency needs.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { value: 'Competitive', desc: 'Best market rates' },
                  { value: 'Transparent', desc: 'No hidden fees' },
                  { value: 'Real-time', desc: 'Live rate updates' }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-2xl font-bold mb-2 animate-pulse">{item.value}</div>
                    <p className="text-white/80">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-red-600 to-black rounded-2xl p-10 text-center text-white shadow-xl hover:shadow-2xl transition-all duration-500">
          <h2 className="text-3xl font-bold mb-4">Get Your Gadaa Debit Card</h2>
          <p className="text-xl text-white/90 mb-8">
            Experience convenient, secure card banking today
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 hover:scale-105 shadow-lg transition-all duration-300"
            >
              Apply for Card
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              Find Nearest ATM
            </Link>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CardBanking;