import React, { useState, useEffect } from 'react';
import { FaSearch, FaShareAlt, FaChevronDown, FaBars, FaTwitter, FaFacebookF, FaLinkedinIn, FaTelegram } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle body overflow and prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
    setIsMobileSearchOpen(false);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileSearch = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const closeAll = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    setIsMobileSearchOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navItems = [
    { 
      id: 'home',
      label: 'Home', 
      path: '/',
      hasDropdown: false
    },
    { 
      id: 'about',
      label: 'About Us', 
      path: '/about',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Company History', path: '/about/company-history' },
        { label: 'Organizational Structure', path: '/about/organizational-structure' },
        { 
          label: 'Company Teams', 
          path: '/about/company-teams',
          subItems: [
            { label: 'Board of Directors', path: '/about/company-teams#board' },
            { label: 'Management Team', path: '/about/company-teams#management' }
          ]
        },
        { 
          label: 'Other Profiles', 
          path: '/about/other-profiles',
          subItems: [
            { label: 'Sharia Advisory Committee', path: '/about/other-profiles#sharia' },
            { label: 'Social Responsibility', path: '/about/other-profiles#responsibility' }
          ]
        }
      ]
    },
    { 
      id: 'services',
      label: 'Product & Service', 
      path: '/services',
      hasDropdown: true,
      dropdownItems: [
        { 
          label: 'Conventional Banking', 
          path: '/services',
          subItems: [
            { label: 'Saving Accounts', path: '/services/saving-accounts' },
            { label: 'Current Accounts', path: '/services/current-accounts' },
            { label: 'Time Deposit', path: '/services/time-deposit' },
            { label: 'Personal Loans', path: '/services/personal-loans' },
            { label: 'Business Loans', path: '/services/business-loans' },
            { label: 'Guarantee Facilities', path: '/services/guarantee-facilities' }
          ]
        },
        { 
          label: 'International Banking', 
          path: '/services',
          subItems: [
            { label: 'Forex Service', path: '/services/forex-service' },
            { label: 'Trade Finance', path: '/services/trade-finance' },
            { label: 'Money Transfer', path: '/services/money-transfer' }
          ]
        },
        { 
          label: 'Interest Free Banking', 
          path: '/services',
          subItems: [
            { label: 'Deposit product', path: '/services/deposit-product' },
            { label: 'Wadiah Saving', path: '/services/wadiah-saving' },
            { label: 'Amanah', path: '/services/amanah' },
            { label: 'Mudarabah Saving Accounts', path: '/services/mudarabah-saving-accounts' },
            { label: 'Financing & investment', path: '/services/financing-investment' },
            { label: 'Other Services', path: '/services/other-services' }
          ]
        },
        { 
          label: 'Corporate Banking Service', 
          path: '/services',
          subItems: [
            { label: 'Diaspora Account', path: '/services/diaspora-account' },
            { label: 'Diaspora Loan Facilities', path: '/services/diaspora-loan-facilities' },
            { label: 'NGO\'s, Institutions & Corporate Loan Packages', path: '/services/ngo-corporate-loan-packages' }
          ]
        },
        { label: 'Digital Banking', path: '/digital' }
      ]
    },
    { 
      id: 'digital',
      label: 'Digital', 
      path: '/digital',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Mobile Banking', path: '/digital/mobile-banking' },
        { label: 'Internet Banking', path: '/digital/internet-banking' },
        { label: 'Card Banking', path: '/digital/card-banking' },
        { label: 'ATM', path: '/digital/atm' },
        { label: 'Merchant', path: '/digital/merchant' }
      ]
    },
    { 
      id: 'resources',
      label: 'Resources', 
      path: '/resources',
      hasDropdown: true,
      dropdownItems: [
        { label: 'News', path: '/resources/news' },
        { label: 'Vacancy', path: '/resources/vacancy' },
        { label: 'Annual Report', path: '/resources/annual-report' }
      ]
    },
    { 
      id: 'investors',
      label: 'Investors Relation', 
      path: '/investors',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Prospectus', path: '/investors/prospectus' },
        { label: 'Financial Reports and Statements', path: '/investors/financial-reports' },
        { label: 'Shareholder events', path: '/investors/shareholder-events' },
        { label: 'Press Releases', path: '/investors/press-releases' },
        { label: 'Contact Information', path: '/investors/contact' }
      ]
    },
    { 
      id: 'terms',
      label: 'Term and Tariff', 
      path: '/terms',
      hasDropdown: false
    },
    { 
      id: 'contact',
      label: 'Contact Us', 
      path: '/contact',
      hasDropdown: false
    }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white shadow-md'
    }`}>
      <div className="container mx-auto px-4">
        {/* Top Bar - Mobile Search */}
        {isMobileSearchOpen && (
          <div className="lg:hidden py-3 animate-slideDown">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                autoFocus
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
              <button 
                onClick={toggleMobileSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-600"
              >
                <FaXmark size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Main Header */}
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <RouterLink 
            to="/"
            className="flex items-center cursor-pointer flex-shrink-0"
            onClick={closeAll}
          >
            <img 
              src="/images/download2.jpg" 
              alt="Gadaa Bank Logo" 
              className="h-10 md:h-12 w-auto max-w-[180px] object-contain"
            />
          </RouterLink>

          {/* Desktop Navigation and Actions */}
          <div className="hidden lg:flex items-center space-x-4 flex-1 justify-end">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-red-500 w-48 xl:w-56"
              />
            </div>
            
            <button className="bg-red-600 text-white px-5 py-2 rounded text-sm font-medium hover:bg-red-700 transition duration-300 whitespace-nowrap">
              Login
            </button>
            
            <div className="relative group">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-red-600 px-3 py-2 rounded text-sm font-medium border border-red-600 text-red-600 hover:bg-red-50 transition duration-300 whitespace-nowrap">
                <FaShareAlt />
                <span>Socials</span>
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border">
                <a href="#" className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 transition duration-200">
                  <FaTwitter className="text-blue-400" />
                  <span className="text-gray-700 text-sm">Twitter</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 transition duration-200">
                  <FaFacebookF className="text-blue-600" />
                  <span className="text-gray-700 text-sm">Facebook</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 transition duration-200">
                  <FaLinkedinIn className="text-blue-700" />
                  <span className="text-gray-700 text-sm">LinkedIn</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 transition duration-200">
                  <FaTelegram className="text-blue-500" />
                  <span className="text-gray-700 text-sm">Telegram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center space-x-3">
            <button 
              onClick={toggleMobileSearch}
              className="text-gray-700 hover:text-red-600 p-2"
              aria-label="Search"
            >
              <FaSearch size={18} />
            </button>
            
            <button className="bg-red-600 text-white px-3 py-1.5 rounded text-sm whitespace-nowrap text-xs md:text-sm">
              Login
            </button>
            
            <button 
              onClick={toggleMenu}
              className="text-gray-700 p-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <FaXmark size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block py-3">
          <ul className="flex flex-wrap justify-center gap-4 xl:gap-6">
            {navItems.map((item) => (
              <li key={item.id} className="relative group">
                <div className="flex items-center">
                  <RouterLink
                    to={item.path}
                    className="flex items-center space-x-1 text-gray-700 hover:text-red-600 py-2 cursor-pointer font-medium transition duration-300 relative text-sm xl:text-[15px] whitespace-nowrap"
                    onClick={closeAll}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <FaChevronDown className="text-xs ml-1 transition-transform duration-300 group-hover:rotate-180" />
                    )}
                  </RouterLink>
                </div>
                
                {item.hasDropdown && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 w-64 bg-white shadow-2xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border">
                    {item.dropdownItems.map((dropdownItem, index) => (
                      <div key={index}>
                        {dropdownItem.subItems ? (
                          <div className="relative group/sub">
                            <RouterLink
                              to={dropdownItem.path}
                              className="flex items-center justify-between px-6 py-3 text-gray-600 hover:text-red-600 hover:bg-gray-50 transition duration-200 cursor-pointer text-sm"
                            >
                              {dropdownItem.label}
                              <FaChevronDown className="text-xs" />
                            </RouterLink>
                            <div className="absolute left-full top-0 ml-1 w-56 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 border">
                              {dropdownItem.subItems.map((subItem, subIndex) => (
                                <RouterLink
                                  key={subIndex}
                                  to={subItem.path}
                                  className="block px-6 py-2.5 text-gray-600 hover:text-red-600 hover:bg-gray-50 transition duration-200 text-sm"
                                  onClick={closeAll}
                                >
                                  {subItem.label}
                                </RouterLink>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <RouterLink
                            to={dropdownItem.path}
                            className="block px-6 py-3 text-gray-600 hover:text-red-600 hover:bg-gray-50 transition duration-200 text-sm"
                            onClick={closeAll}
                          >
                            {dropdownItem.label}
                          </RouterLink>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="lg:hidden fixed inset-0 top-16 bg-black/30 z-40 animate-fadeIn"
              onClick={closeAll}
            />
            
            {/* Menu Panel */}
            <div className="lg:hidden fixed top-16 left-0 right-0 bg-white z-50 overflow-y-auto max-h-[calc(100vh-4rem)] animate-slideInRight shadow-xl">
              <div className="container mx-auto px-4 py-4">
                <ul className="space-y-1">
                  {navItems.map((item) => (
                    <li key={item.id} className="border-b border-gray-100 last:border-b-0">
                      <div className="flex flex-col">
                        <div className="flex justify-between items-center py-3">
                          <RouterLink 
                            to={item.path}
                            onClick={closeAll}
                            className="text-gray-700 hover:text-red-600 font-medium text-base"
                          >
                            {item.label}
                          </RouterLink>
                          
                          {item.hasDropdown && (
                            <button 
                              onClick={() => toggleDropdown(item.id)}
                              className="p-2 text-gray-500 hover:text-red-600"
                              aria-label={`Toggle ${item.label} menu`}
                            >
                              <FaChevronDown className={`transition-transform duration-300 ${
                                activeDropdown === item.id ? 'rotate-180' : ''
                              }`} />
                            </button>
                          )}
                        </div>
                        
                        {item.hasDropdown && activeDropdown === item.id && (
                          <div className="ml-3 mb-3 space-y-1 animate-fadeInUp border-l-2 border-gray-200 pl-3">
                            {item.dropdownItems.map((dropdownItem, index) => (
                              <div key={index}>
                                {dropdownItem.subItems ? (
                                  <div className="space-y-2">
                                    <div className="font-medium text-gray-700 py-2">
                                      {dropdownItem.label}
                                    </div>
                                    <div className="ml-3 space-y-1 border-l-2 border-gray-100 pl-3">
                                      {dropdownItem.subItems.map((subItem, subIndex) => (
                                        <RouterLink
                                          key={subIndex}
                                          to={subItem.path}
                                          onClick={closeAll}
                                          className="block py-2 text-gray-600 hover:text-red-600 text-sm"
                                        >
                                          {subItem.label}
                                        </RouterLink>
                                      ))}
                                    </div>
                                  </div>
                                ) : (
                                  <RouterLink
                                    to={dropdownItem.path}
                                    onClick={closeAll}
                                    className="block py-2 text-gray-600 hover:text-red-600 text-sm"
                                  >
                                    {dropdownItem.label}
                                  </RouterLink>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
                
                {/* Mobile Social Links */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center space-x-4">
                    <a href="#" className="p-3 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition duration-300">
                      <FaTwitter size={18} />
                    </a>
                    <a href="#" className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
                      <FaFacebookF size={18} />
                    </a>
                    <a href="#" className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition duration-300">
                      <FaLinkedinIn size={18} />
                    </a>
                    <a href="#" className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
                      <FaTelegram size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Add these animation styles to your global CSS or component CSS */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.3s ease-out;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out;
        }
        
        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          /* Prevent horizontal scrolling */
          body {
            overflow-x: hidden;
          }
        }
        
        /* Touch-friendly tap targets for mobile */
        @media (max-width: 768px) {
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
          
          input, select, textarea {
            font-size: 16px; /* Prevents iOS zoom on focus */
          }
        }
      `}</style>
    </header>
  );
};

export default Header;