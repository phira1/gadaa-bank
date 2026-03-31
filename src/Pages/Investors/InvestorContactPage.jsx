import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import { investorContact } from '../../data/investorData';

const InvestorContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-black to-gray-900 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-red-500">›</span>
            <Link to="/investors" className="text-white/80 hover:text-white">Investors</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Contact Investor Relations</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Link to="/investors" className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 group">
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Investors
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Investor Relations</h1>
          <p className="text-gray-600">We're here to answer your questions and provide assistance.</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <h2 className="font-semibold text-gray-800">Contact Information</h2>
          </div>
          <div className="p-6 grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FaUser className="text-red-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Contact Person</h3>
                <p className="text-gray-600">{investorContact.contactPerson}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FaEnvelope className="text-red-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <a href={`mailto:${investorContact.email}`} className="text-red-600 hover:underline">
                  {investorContact.email}
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FaPhone className="text-red-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <a href={`tel:${investorContact.phone}`} className="text-gray-600 hover:text-red-600">
                  {investorContact.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FaMapMarkerAlt className="text-red-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Address</h3>
                <p className="text-gray-600">{investorContact.address}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-red-50 rounded-lg p-6 text-center mt-8">
          <p className="text-gray-700">
            For general inquiries, please visit our <Link to="/contact" className="text-red-600 font-medium underline">Contact Us</Link> page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvestorContactPage;