import React from 'react';
import { FaShareAlt } from 'react-icons/fa';
import { socialLinks } from '../../data/socialLinks';

const DesktopActions = ({ searchBarComponent }) => {
  const getIconColor = (label) => {
    switch (label) {
      case 'Facebook': return 'text-blue-600';
      case 'X': return 'text-black';
      case 'LinkedIn': return 'text-blue-700';
      case 'Instagram': return 'text-pink-600';
      case 'YouTube': return 'text-red-600';
      case 'Telegram': return 'text-blue-500';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="hidden lg:flex items-center space-x-4 flex-1 justify-end">
      {/* Search Bar (passed as prop) */}
      <div className="relative">{searchBarComponent}</div>

      <a
        href="https://ibs.gadaabank.com.et/internet-banking/login"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 text-white px-5 py-2 rounded text-sm font-medium hover:bg-red-700 transition duration-300 whitespace-nowrap inline-block"
      >
        Login
      </a>

      <div className="relative group">
        <button className="flex items-center space-x-2 text-gray-700 hover:text-red-600 px-3 py-2 rounded text-sm font-medium border border-red-600 text-red-600 hover:bg-red-50 transition duration-300 whitespace-nowrap">
          <FaShareAlt />
          <span>Socials</span>
        </button>
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 transition duration-200"
            >
              <social.icon className={getIconColor(social.label)} size={16} />
              <span className="text-gray-700 text-sm">{social.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesktopActions;