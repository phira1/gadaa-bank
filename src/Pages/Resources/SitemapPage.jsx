import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaHome, FaInfoCircle, FaBriefcase, FaMobileAlt, FaFileAlt, FaChartLine, FaHandshake, FaFilePdf, FaNewspaper } from 'react-icons/fa';

const SitemapPage = () => {
  const sections = [
    {
      title: "Home",
      icon: FaHome,
      links: [{ name: "Home", path: "/" }]
    },
    {
      title: "About Us",
      icon: FaInfoCircle,
      links: [
        { name: "Company History", path: "/about/company-history" },
        { name: "Organizational Structure", path: "/about/organizational-structure" },
        { name: "Board of Directors", path: "/about/company-teams" },
        { name: "Management Team", path: "/about/management-team" },
        { name: "Other Profiles", path: "/about/other-profiles" },
        { name: "Partners", path: "/about/partners" }
      ]
    },
    {
      title: "Services",
      icon: FaBriefcase,
      links: [
        { name: "Conventional Banking", path: "/services" },
        { name: "International Banking", path: "/services" },
        { name: "Interest Free Banking", path: "/services" },
        { name: "Corporate Banking", path: "/services" }
      ]
    },
    {
      title: "Digital Banking",
      icon: FaMobileAlt,
      links: [
        { name: "Mobile Banking", path: "/digital/mobile-banking" },
        { name: "Internet Banking", path: "/digital/internet-banking" },
        { name: "Card Banking", path: "/digital/card-banking" },
        { name: "ATM Services", path: "/digital/atm" },
        { name: "Merchant Services", path: "/digital/merchant" }
      ]
    },
    {
      title: "Resources",
      icon: FaFileAlt,
      links: [
        { name: "News", path: "/resources/news" },
        { name: "Careers", path: "/resources/vacancy" },
        { name: "Annual Reports", path: "/resources/annual-report" },
        { name: "Security Awareness", path: "/resources/security-awareness" },
        { name: "NBE Requirements", path: "/resources/nbe-requirements" },
        { name: "Sitemap", path: "/sitemap" }
      ]
    },
    {
      title: "Investors",
      icon: FaChartLine,
      links: [
        { name: "Prospectus", path: "/investors/prospectus" },
        { name: "Memorandum of Association", path: "/investors/moa" },
        { name: "Financial Reports", path: "/investors/financial-reports" },
        { name: "Shareholder Events", path: "/investors/shareholder-events" },
        { name: "Press Releases", path: "/investors/press-releases" },
        { name: "Investor Contact", path: "/investors/contact" }
      ]
    },
    {
      title: "Regulatory",
      icon: FaHandshake,
      links: [{ name: "NBE Requirements & Guidelines", path: "/resources/nbe-requirements" }]
    },
    {
      title: "Contact",
      icon: FaFilePdf,
      links: [
        { name: "Contact Us", path: "/contact" },
        { name: "Complaint Registration", path: "/contact/complaint" }
      ]
    },
    {
      title: "Tools",
      icon: FaNewspaper,
      links: [{ name: "Loan Calculator", path: "/tools/loan-calculator" }]
    },
    {
      title: "Terms & Policies",
      icon: FaFileAlt,
      links: [{ name: "Terms & Tariffs", path: "/terms" }]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-black to-gray-900 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Sitemap</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 pt-20 md:pt-24">
        <Link to="/" className="inline-flex items-center text-red-600 hover:text-red-700 mb-8 group">
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-600 to-black rounded-full mb-6 shadow-lg">
            <FaHome className="text-white text-4xl" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Find your way around our website with this complete list of pages.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <div key={idx} className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-200">
                  <Icon className="text-red-600 text-xl" />
                  <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link to={link.path} className="text-gray-600 hover:text-red-600 transition">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;