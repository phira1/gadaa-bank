import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalculator, FaChartLine, FaSitemap } from 'react-icons/fa';

const ToolsPage = () => {
  const tools = [
    {
      title: 'Loan Calculator',
      description: 'Estimate your monthly payments, total interest, and amortization schedule.',
      icon: FaCalculator,
      link: '/tools/loan-calculator',
      color: 'from-red-600 to-red-700'
    },
    {
      title: 'Product Comparison',
      description: 'Compare savings accounts, loans, and credit cards side by side.',
      icon: FaChartLine,
      link: '/tools/compare-products',
      color: 'from-red-700 to-black'
    },
    {
      title: 'Sitemap',
      description: 'Find your way around our website with a complete list of pages.',
      icon: FaSitemap,
      link: '/sitemap',
      color: 'from-red-600 to-black'
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
            <Link to="/resources" className="text-white/80 hover:text-white">Resources</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Tools</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 pt-20 md:pt-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-600 to-black rounded-full mb-6 shadow-lg">
            <FaCalculator className="text-white text-4xl" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Financial Tools
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Use our free tools to plan your finances and make informed decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <Link
                key={index}
                to={tool.link}
                className="group bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-r ${tool.color} p-8 text-white`}>
                  <Icon className="text-5xl mb-4" />
                  <h3 className="text-2xl font-bold">{tool.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  <span className="inline-flex items-center text-red-600 font-medium group-hover:underline">
                    Launch Tool
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

export default ToolsPage;