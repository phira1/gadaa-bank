import React from 'react';
import { Link } from 'react-router-dom';
import { FaFileAlt, FaBalanceScale, FaChartLine, FaCalendarAlt, FaNewspaper, FaEnvelope } from 'react-icons/fa';
import usePageMeta from '../../components/hooks/usePageMeta';

const InvestorsPage = () => {
  usePageMeta({
    title: 'Investors',
    description: 'Investor relations, reports, prospectus, shareholder events, and announcements for Gadaa Bank.',
    canonicalPath: '/investors',
  })

  const investorCards = [
    {
      title: "Prospectus",
      description: "Official prospectus documents for Gadaa Bank.",
      icon: FaFileAlt,
      link: "/investors/prospectus",
      color: "from-red-600 to-red-700"
    },
    {
      title: "Memorandum of Association",
      description: "The founding document of Gadaa Bank.",
      icon: FaBalanceScale,
      link: "/investors/moa",
      color: "from-red-700 to-black"
    },
    {
      title: "Financial Reports",
      description: "Annual and interim financial statements.",
      icon: FaChartLine,
      link: "/investors/financial-reports",
      color: "from-red-600 to-black"
    },
    {
      title: "Shareholder Events",
      description: "General assemblies and shareholder meetings.",
      icon: FaCalendarAlt,
      link: "/investors/shareholder-events",
      color: "from-black to-gray-900"
    },
    {
      title: "Press Releases",
      description: "Official announcements for investors.",
      icon: FaNewspaper,
      link: "/investors/press-releases",
      color: "from-red-600 to-black"
    },
    {
      title: "Investor Contact",
      description: "Get in touch with our Investor Relations team.",
      icon: FaEnvelope,
      link: "/investors/contact",
      color: "from-red-700 to-black"
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
            <span className="text-white font-semibold">Investors</span>
          </nav>
        </div>
      </div>

      {/* Main content – added top padding to avoid navbar overlap */}
      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Investor <span className="text-red-600">Relations</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gadaa Bank is committed to transparency and strong relationships with our shareholders.
            Access key documents, reports, and updates below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {investorCards.map((card, index) => (
            <Link
              key={index}
              to={card.link}
              className="group bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-r ${card.color} p-6 text-white`}>
                <card.icon className="text-4xl mb-4" />
                <h3 className="text-2xl font-bold">{card.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{card.description}</p>
                <span className="inline-flex items-center text-red-600 font-medium group-hover:underline">
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestorsPage;