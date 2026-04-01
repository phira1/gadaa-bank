import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaHandshake, FaGlobe, FaBuilding } from 'react-icons/fa';
import { subsidiaries, correspondents, techPartners } from '../../data/partnersData';

const PartnersPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-black to-gray-900 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-red-500">›</span>
            <Link to="/about" className="text-white/80 hover:text-white">About Us</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Partners</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 pt-20 md:pt-24">
        <Link to="/about" className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 group">
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to About Us
        </Link>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-600 to-black rounded-full mb-6 shadow-lg">
            <FaHandshake className="text-white text-4xl" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Partners
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Collaborating with trusted partners to deliver exceptional service.
          </p>
        </div>

        {/* Subsidiaries */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FaBuilding className="mr-3 text-red-600" /> Subsidiaries
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {subsidiaries.map((s, idx) => (
              <a key={idx} href={s.link} target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <img src={s.logo} alt={s.name} className="max-w-full max-h-full" onError={(e) => e.target.style.display = 'none'} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{s.name}</h3>
                    <p className="text-gray-500 text-sm">Subsidiary of Gadaa Bank</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Correspondent Banks */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FaGlobe className="mr-3 text-red-600" /> Correspondent Banks
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {correspondents.map((c, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-800">{c.name}</h3>
                <p className="text-gray-500 text-sm">{c.country}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Partners */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FaHandshake className="mr-3 text-red-600" /> Technology Partners
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {techPartners.map((p, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 text-lg">{p.name}</h3>
                <p className="text-gray-600 text-sm">{p.service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;