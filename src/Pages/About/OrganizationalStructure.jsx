import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaUsers,
  FaSitemap,
  FaArrowRight
} from 'react-icons/fa';

const OrganizationalStructure = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [animated]);

  return (
    <div className="min-h-screen" ref={sectionRef}>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav>
            <ol className="flex items-center space-x-2 text-sm">
              <li><Link to="/" className="text-red-600 hover:text-red-700 font-medium">Home</Link></li>
              <li className="text-gray-400">›</li>
              <li><Link to="/about" className="text-red-600 hover:text-red-700 font-medium">About Us</Link></li>
              <li className="text-gray-400">›</li>
              <li className="text-gray-600 font-medium">Organizational Structure</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative py-12 overflow-hidden bg-gradient-to-r from-red-50 to-white">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto text-center ${
            animated ? 'animate-fadeInUp' : 'opacity-0'
          }`}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
              <FaSitemap className="text-red-600 text-3xl" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Organizational Structure</h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Transparent hierarchy showcasing our leadership, departments, and operational framework
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-black mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Organizational Chart Image */}
        <div className={`max-w-5xl mx-auto mb-12 ${
          animated ? 'animate-fadeInUp' : 'opacity-0'
        }`} style={animated ? { animationDelay: '100ms' } : {}}>
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Organizational Chart
            </h2>
            <div className="relative rounded-xl overflow-hidden border-2 border-gray-300">
              {/* Actual Organizational Chart Image */}
              <img 
                src="/images/organizational-chart.png" 
                alt="Gadaa Bank Organizational Structure Chart"
                className="w-full h-auto object-contain bg-gray-50"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1536' height='864' viewBox='0 0 1536 864'%3E%3Crect width='1536' height='864' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' text-anchor='middle' fill='%239ca3af'%3EGadaa Bank Organizational Chart%3C/text%3E%3C/svg%3E";
                }}
              />
              {/* Image Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium">
                  Gadaa Bank Organizational Structure Chart
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Structure Highlights */}
        <div className={`max-w-4xl mx-auto mb-12 ${
          animated ? 'animate-fadeInUp' : 'opacity-0'
        }`} style={animated ? { animationDelay: '200ms' } : {}}>
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Structure Highlights</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-red-600 mb-4">Key Features</h4>
                <ul className="space-y-3">
                  {[
                    'Clear reporting lines and accountability',
                    'Integrated compliance framework',
                    'Customer-centric department structure',
                    'Technology-driven operations',
                    'Community banking focus',
                    'Risk management integration'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-red-600 mb-4">Governance Principles</h4>
                <ul className="space-y-3">
                  {[
                    'Board oversight on all major decisions',
                    'Independent audit functions',
                    'Sharia compliance monitoring',
                    'Ethics and anti-corruption measures',
                    'Regular performance reviews',
                    'Stakeholder engagement protocols'
                  ].map((principle, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
                      {principle}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation CTA */}
        <div className={`text-center mt-8 ${
          animated ? 'animate-fadeInUp' : 'opacity-0'
        }`} style={animated ? { animationDelay: '300ms' } : {}}>
          <div className="bg-gradient-to-r from-red-600 to-black rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Explore Our Leadership</h3>
            <p className="mb-6 opacity-90">
              Learn more about our Board of Directors and Management Team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/about/company-teams"
                className="bg-white text-red-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition duration-300"
              >
                Board of Directors
              </Link>
              <Link 
                to="/about/management-team"
                className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition duration-300"
              >
                Management Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationalStructure;