import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaHandshake, FaGlobe, FaBuilding } from 'react-icons/fa';
import { partnerService } from '../../services';
import { getAssetUrl } from '../../utils/assetUrl';

const PartnersPage = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    partnerService.getAll()
      .then(res => setPartners(res.data?.data || res.data || (Array.isArray(res) ? res : [])))
      .catch(err => setError('Failed to load partners.'))
      .finally(() => setLoading(false));
  }, []);

  const getLogoPath = (path) => {
    if (!path) return `https://ui-avatars.com/api/?name=Partner&background=f3f4f6&color=374151&bold=true&size=400`;
    if (path.startsWith('http')) return path;
    return getAssetUrl(path);
  };

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

        {loading ? (
          <div className="flex justify-center items-center py-16">
            <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center py-16 text-red-600">{error}</div>
        ) : (
          <div className="mb-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.map((p) => (
                <a key={p.id} href={p.website || '#'} target={p.website ? "_blank" : "_self"} rel="noopener noreferrer" className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center p-2 flex-shrink-0">
                      <img src={getLogoPath(p.logo_path)} alt={p.name} className="max-w-full max-h-full object-contain" onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://ui-avatars.com/api/?name=${p.name.split(' ').join('+')}&background=f3f4f6&color=374151&bold=true&size=400`;
                      }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg leading-tight">{p.name}</h3>
                      {p.website && <span className="text-red-600 text-xs truncate max-w-[150px] inline-block">{p.website.replace(/^https?:\/\//, '')}</span>}
                    </div>
                  </div>
                  {p.description && (
                    <p className="text-gray-600 text-sm line-clamp-3">{p.description}</p>
                  )}
                </a>
              ))}
              
              {partners.length === 0 && (
                <div className="col-span-full text-center text-gray-500 py-8">
                  No partners available at the moment.
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PartnersPage;