import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaShieldAlt, FaLock, FaUserSecret } from 'react-icons/fa';

const SecurityAwarenessPage = () => {
  const tips = [
    { icon: FaShieldAlt, title: "Use Strong Passwords", desc: "Create complex passwords with a mix of letters, numbers, and symbols. Never share them." },
    { icon: FaLock, title: "Enable Two‑Factor Authentication", desc: "Add an extra layer of security to your online banking account." },
    { icon: FaUserSecret, title: "Beware of Phishing", desc: "Never click on suspicious links or provide personal information via email or SMS." },
    { icon: FaShieldAlt, title: "Verify Website URL", desc: "Always check that you are on the official Gadaa Bank website before logging in." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-black to-gray-900 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-red-500">›</span>
            <Link to="/resources" className="text-white/80 hover:text-white">Resources</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Security Awareness</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 pt-20 md:pt-24">
        <Link to="/resources" className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 group">
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Resources
        </Link>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-600 to-black rounded-full mb-6 shadow-lg">
            <FaShieldAlt className="text-white text-4xl" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Security Awareness
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay safe online with these essential tips to protect your financial information.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {tips.map((tip, idx) => {
            const Icon = tip.icon;
            return (
              <div key={idx} className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="text-red-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{tip.title}</h3>
                    <p className="text-gray-600">{tip.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-red-50 to-white rounded-2xl p-8 mt-12 border border-red-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Report Suspicious Activity</h3>
          <p className="text-gray-700 mb-4">
            If you suspect any fraudulent activity, please contact our 24/7 hotline immediately:
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:641" className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition">
              Call 641
            </a>
            <a href="mailto:security@gadaabank.com.et" className="inline-flex items-center border border-red-600 text-red-600 px-6 py-3 rounded-xl font-bold hover:bg-red-50 transition">
              Email security@gadaabank.com.et
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityAwarenessPage;