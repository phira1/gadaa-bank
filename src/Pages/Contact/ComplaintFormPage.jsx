import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaRegComment } from 'react-icons/fa';

const ComplaintFormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    accountNumber: '',
    subject: '',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Complaint submitted:', formData);
    // Later, send to backend API
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-black to-gray-900 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-red-500">›</span>
            <Link to="/contact" className="text-white/80 hover:text-white">Contact</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Complaint Registration</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Link to="/contact" className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 group">
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Contact
        </Link>

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-600 to-black rounded-full mb-6 shadow-lg">
              <FaRegComment className="text-white text-4xl" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complaint Registration
            </h1>
            <p className="text-gray-600">
              We value your feedback. Please fill out the form below to register your complaint or concern.
              Our customer service team will respond within 48 hours.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Account Number (optional)</label>
                  <input
                    type="text"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Description *</label>
                  <textarea
                    name="description"
                    rows="5"
                    required
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-black text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all"
                >
                  Submit Complaint
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-green-700 mb-2">Thank You!</h2>
              <p className="text-gray-700">Your complaint has been registered. We will contact you soon.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Submit Another
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComplaintFormPage;