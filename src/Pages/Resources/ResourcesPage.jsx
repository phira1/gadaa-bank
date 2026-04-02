import React from 'react';
import { Link } from 'react-router-dom';
import { FaNewspaper, FaBriefcase, FaFilePdf, FaShieldAlt } from 'react-icons/fa';

const ResourcesPage = () => {
  const resourcesItems = [
    {
      id: 'news',
      title: 'News',
      description: 'Stay updated with the latest announcements, events, and achievements from Gadaa Bank.',
      icon: FaNewspaper,
      link: '/resources/news',
      color: 'from-red-600 to-red-700',
      textColor: 'text-red-600'
    },
    {
      id: 'vacancy',
      title: 'Careers',
      description: 'Explore current job openings and join our team of dedicated professionals.',
      icon: FaBriefcase,
      link: '/resources/vacancy',
      color: 'from-red-700 to-black',
      textColor: 'text-gray-800'
    },
    {
      id: 'annual-reports',
      title: 'Annual Reports',
      description: 'Download our annual reports and learn about our performance and impact.',
      icon: FaFilePdf,
      link: '/resources/annual-report',
      color: 'from-red-600 to-black',
      textColor: 'text-red-600'
    },
    {
      id: 'security',
      title: 'Security Awareness',
      description: 'Stay safe online with tips to protect your financial information.',
      icon: FaShieldAlt,
      link: '/resources/security-awareness',
      color: 'from-red-600 to-black',
      textColor: 'text-red-600'
    },
    {
      id: 'nbe',
      title: 'NBE Requirements',
      description: 'Access National Bank of Ethiopia directives, circulars, and guidelines.',
      icon: FaFilePdf,
      link: '/resources/nbe-requirements',
      color: 'from-red-600 to-black',
      textColor: 'text-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-black to-gray-900 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Resources</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 pt-20 md:pt-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            <span className="text-red-600">Resources</span> & Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest news, career opportunities, annual reports, security tips, and regulatory documents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {resourcesItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                to={item.link}
                className="group bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-r ${item.color} p-8 text-white`}>
                  <Icon className="text-5xl mb-4" />
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <span className={`inline-flex items-center font-medium group-hover:underline ${item.textColor}`}>
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;