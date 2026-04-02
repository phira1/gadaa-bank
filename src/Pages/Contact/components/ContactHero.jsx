import React from 'react';
import { Link } from 'react-router-dom';

const ContactHero = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black py-3 md:py-4">
      <div className="container mx-auto px-3 md:px-4">
        <nav className="flex items-center space-x-2 text-xs md:text-sm">
          <Link to="/" className="text-white/80 hover:text-white font-medium transition-colors duration-300">
            Home
          </Link>
          <span className="text-red-500">›</span>
          <span className="text-white font-semibold">Contact Us</span>
        </nav>
      </div>
    </div>
  );
};

export default ContactHero;