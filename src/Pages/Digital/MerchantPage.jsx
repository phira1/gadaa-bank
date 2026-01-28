import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaCheckCircle, 
  FaQrcode,
  FaStore,
  FaShoppingCart,
  FaHotel,
  FaMobileAlt,
  FaReceipt,
  FaShieldAlt,
  FaHistory
} from 'react-icons/fa';

const MerchantPage = () => {
  const merchantTypes = [
    { icon: FaStore, title: 'Local Stores', description: 'Small shops and retail outlets' },
    { icon: FaShoppingCart, title: 'Supermarkets', description: 'Large retail chains' },
    { icon: FaHotel, title: 'Hotels', description: 'Hospitality services' },
    { icon: FaReceipt, title: 'Service Providers', description: 'Various service businesses' },
  ];

  const benefits = [
    'Quick, convenient payments without cards',
    'Track expenses in bank transaction history',
    'Instant confirmation sent to customer\'s mobile number',
    'Secure QR code transactions',
    'No physical contact required',
    '24/7 payment processing'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-black to-gray-900 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Merchant Payment</span>
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

        {/* Main Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-600 to-black rounded-full mb-6 shadow-lg animate-pulse">
            <FaQrcode className="text-white text-4xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            <span className="text-red-600">QR Merchant</span> Payments
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Scan & Pay - The Future of Contactless Payments
          </p>
        </div>

        {/* Main Content with Image - Clean Layout */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-red-50 to-white rounded-3xl p-10 shadow-xl border border-red-100 hover:shadow-2xl transition-all duration-500">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              {/* Left Column - Content */}
              <div className="lg:w-1/2">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    <span className="text-red-600">PAY</span> with QR
                  </h2>
                  
                  <div className="mb-8">
                    <p className="text-gray-700 text-lg">
                      Our hassle-free scan and pay service enables customers to instantly 
                      pay at registered local stores, hotels, supermarkets, shops and 
                      service providers via QR codes using our mobile banking.
                    </p>
                  </div>

                  {/* Key Points */}
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <FaCheckCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Quick & Convenient</h3>
                        <p className="text-gray-600 text-sm">No cards needed, just scan and pay</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <FaCheckCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Track Everything</h3>
                        <p className="text-gray-600 text-sm">All transactions in your banking history</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <FaCheckCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Instant Confirmation</h3>
                        <p className="text-gray-600 text-sm">Payment confirmations sent to your mobile</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="lg:w-1/2">
                <div className="relative">
                  <img 
                    src="/images/qrmerchant.png" 
                    alt="QR Merchant Payment - Mobile Phone with QR Code" 
                    className="w-full h-auto rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-red-600 to-black rounded-2xl flex items-center justify-center shadow-xl animate-pulse">
                    <FaMobileAlt className="text-white text-3xl" />
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center text-red-600">
                    <FaShieldAlt className="mr-2" />
                    <span className="font-semibold">Secure Mobile Payments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Merchant Types */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Where You Can <span className="text-red-600">Pay with QR</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {merchantTypes.map((merchant, index) => {
              const Icon = merchant.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:border-red-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-white rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <Icon className="text-red-600 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">{merchant.title}</h3>
                    <p className="text-gray-600 text-sm">{merchant.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-red-600 to-black rounded-2xl p-10 text-white shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Benefits of <span className="text-red-300">QR Payments</span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-start">
                      <FaCheckCircle className="text-green-300 mr-3 mt-1 flex-shrink-0 animate-pulse" />
                      <span className="text-white/90">{benefit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-10">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              How QR Merchant Payments Work
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Open App', description: 'Launch Gadaa Mobile Banking' },
                { step: '2', title: 'Scan QR', description: 'Scan merchant QR code' },
                { step: '3', title: 'Enter Amount', description: 'Input payment amount' },
                { step: '4', title: 'Confirm', description: 'Authenticate & complete' }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-red-600 group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-red-600 to-black rounded-2xl p-10 text-center text-white shadow-xl hover:shadow-2xl transition-all duration-500">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Start Accepting QR Payments</h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of merchants using Gadaa QR payments
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="px-8 py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 hover:scale-105 shadow-lg transition-all duration-300">
                Register as Merchant
              </button>
              <Link 
                to="/contact"
                className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
            
            <div className="text-white/70 text-sm">
              <FaHistory className="inline mr-2" />
              Track all transactions in your banking history
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantPage;