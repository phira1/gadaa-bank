import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaShareAlt, FaChevronDown, FaBars, FaTwitter, FaFacebookF, FaLinkedinIn, FaTelegram } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedResultIndex, setSelectedResultIndex] = useState(-1);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Searchable content - Add all your pages and components here
  const searchableContent = [
    // Home & Main Pages
    { title: 'Home', path: '/', category: 'Home', description: 'Main landing page' },
    { title: 'About Us', path: '/about', category: 'About', description: 'Learn about Gadaa Bank' },
    { title: 'Company History', path: '/about/company-history', category: 'About', description: 'Our journey and milestones' },
    { title: 'Organizational Structure', path: '/about/organizational-structure', category: 'About', description: 'Bank organizational chart' },
    
    // Services
    { title: 'Products & Services', path: '/services', category: 'Services', description: 'All banking services' },
    { title: 'Saving Accounts', path: '/services/saving-accounts', category: 'Conventional Banking', description: 'Personal and business savings' },
    { title: 'Current Accounts', path: '/services/current-accounts', category: 'Conventional Banking', description: 'Daily transaction accounts' },
    { title: 'Time Deposit', path: '/services/time-deposit', category: 'Conventional Banking', description: 'Fixed deposit accounts' },
    { title: 'Personal Loans', path: '/services/personal-loans', category: 'Conventional Banking', description: 'Loan facilities for individuals' },
    { title: 'Business Loans', path: '/services/business-loans', category: 'Conventional Banking', description: 'Business financing solutions' },
    
    // International Banking
    { title: 'Forex Service', path: '/services/forex-service', category: 'International Banking', description: 'Foreign currency exchange' },
    { title: 'Trade Finance', path: '/services/trade-finance', category: 'International Banking', description: 'Import/export financing' },
    { title: 'Money Transfer', path: '/services/money-transfer', category: 'International Banking', description: 'Local and international transfers' },
    
    // Digital Banking
    { title: 'Digital Banking', path: '/digital', category: 'Digital', description: 'Online banking services' },
    { title: 'Mobile Banking', path: '/digital/mobile-banking', category: 'Digital', description: 'Banking on your mobile' },
    { title: 'Internet Banking', path: '/digital/internet-banking', category: 'Digital', description: 'Online banking portal' },
    { title: 'Card Banking', path: '/digital/card-banking', category: 'Digital', description: 'Debit and credit cards' },
    { title: 'ATM Services', path: '/digital/atm', category: 'Digital', description: 'ATM locations and services' },
    
    // Interest Free Banking
    { title: 'Interest Free Banking', path: '/services', category: 'Islamic Banking', description: 'Sharia-compliant banking' },
    { title: 'Wadiah Saving', path: '/services/wadiah-saving', category: 'Islamic Banking', description: 'Safe-keeping accounts' },
    { title: 'Mudarabah Saving', path: '/services/mudarabah-saving-accounts', category: 'Islamic Banking', description: 'Profit-sharing accounts' },
    
    // Resources
    { title: 'Resources', path: '/resources', category: 'Resources', description: 'Bank documents and news' },
    { title: 'News', path: '/resources/news', category: 'Resources', description: 'Latest bank news' },
    { title: 'Vacancy', path: '/resources/vacancy', category: 'Resources', description: 'Career opportunities' },
    { title: 'Annual Report', path: '/resources/annual-report', category: 'Resources', description: 'Financial reports' },
    
    // Investors
    { title: 'Investors Relation', path: '/investors', category: 'Investors', description: 'Investor information' },
    { title: 'Financial Reports', path: '/investors/financial-reports', category: 'Investors', description: 'Financial statements' },
    
    // Contact
    { title: 'Contact Us', path: '/contact', category: 'Contact', description: 'Get in touch with us' },
    { title: 'Terms and Tariff', path: '/terms', category: 'Legal', description: 'Terms and conditions' }
  ];

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

  // Handle click outside search
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle search input
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim().length > 1) {
      const results = searchableContent.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results.slice(0, 8)); // Limit to 8 results
      setShowSuggestions(true);
      setSelectedResultIndex(-1);
    } else {
      setSearchResults([]);
      setShowSuggestions(false);
    }
  };

  // Handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      if (selectedResultIndex >= 0 && searchResults[selectedResultIndex]) {
        navigate(searchResults[selectedResultIndex].path);
      } else if (searchResults.length > 0) {
        navigate(searchResults[0].path);
      }
      setSearchQuery('');
      setShowSuggestions(false);
      closeAll();
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!showSuggestions) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedResultIndex(prev => 
          prev < searchResults.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedResultIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        if (selectedResultIndex >= 0 && searchResults[selectedResultIndex]) {
          navigate(searchResults[selectedResultIndex].path);
          setSearchQuery('');
          setShowSuggestions(false);
          closeAll();
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        break;
    }
  };

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
    setShowSuggestions(false);
    document.body.style.overflow = 'auto';
  };

  const handleResultClick = (path) => {
    navigate(path);
    setSearchQuery('');
    setShowSuggestions(false);
    closeAll();
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
            <div className="relative" ref={searchRef}>
              <form onSubmit={handleSearchSubmit}>
                <input 
                  type="text" 
                  placeholder="Search for services, accounts, loans..." 
                  className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoFocus
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                <button 
                  type="button"
                  onClick={toggleMobileSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-600"
                >
                  <FaXmark size={18} />
                </button>
              </form>
              
              {/* Mobile Search Suggestions */}
              {showSuggestions && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white shadow-xl rounded-lg py-2 max-h-96 overflow-y-auto border border-gray-200 z-50">
                  {searchResults.map((result, index) => (
                    <button
                      key={index}
                      onClick={() => handleResultClick(result.path)}
                      className={`block w-full text-left px-4 py-3 hover:bg-red-50 transition duration-200 ${
                        selectedResultIndex === index ? 'bg-red-50 border-l-4 border-red-600' : 'border-l-4 border-transparent'
                      }`}
                    >
                      <div className="font-medium text-gray-900">{result.title}</div>
                      <div className="text-xs text-red-600 font-semibold mt-1">{result.category}</div>
                      <div className="text-xs text-gray-500 mt-1">{result.description}</div>
                    </button>
                  ))}
                </div>
              )}
              
              {/* No Results Message */}
              {showSuggestions && searchQuery.trim().length > 1 && searchResults.length === 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white shadow-xl rounded-lg py-4 px-4 border border-gray-200 z-50">
                  <div className="text-gray-600 text-center">
                    <div className="font-medium">No results found for "{searchQuery}"</div>
                    <div className="text-sm mt-1">Try different keywords</div>
                  </div>
                </div>
              )}
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
            {/* Desktop Search with Suggestions */}
            <div className="relative" ref={searchRef}>
              <form onSubmit={handleSearchSubmit}>
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                <input 
                  type="text" 
                  placeholder="Search for services, accounts, loans..." 
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-red-500 w-48 xl:w-56"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </form>
              
              {/* Desktop Search Suggestions */}
              {showSuggestions && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white shadow-xl rounded-lg py-2 max-h-96 overflow-y-auto border border-gray-200 z-50">
                  {searchResults.map((result, index) => (
                    <button
                      key={index}
                      onClick={() => handleResultClick(result.path)}
                      className={`block w-full text-left px-4 py-3 hover:bg-red-50 transition duration-200 ${
                        selectedResultIndex === index ? 'bg-red-50 border-l-4 border-red-600' : 'border-l-4 border-transparent'
                      }`}
                    >
                      <div className="font-medium text-gray-900">{result.title}</div>
                      <div className="text-xs text-red-600 font-semibold mt-1">{result.category}</div>
                      <div className="text-xs text-gray-500 mt-1">{result.description}</div>
                    </button>
                  ))}
                </div>
              )}
              
              {/* No Results Message */}
              {showSuggestions && searchQuery.trim().length > 1 && searchResults.length === 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white shadow-xl rounded-lg py-4 px-4 border border-gray-200 z-50">
                  <div className="text-gray-600 text-center">
                    <div className="font-medium">No results found for "{searchQuery}"</div>
                    <div className="text-sm mt-1">Try different keywords</div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Login Button - Desktop */}
            <a 
              href="https://ibs.gadaabank.com.et/internet-banking/login"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-5 py-2 rounded text-sm font-medium hover:bg-red-700 transition duration-300 whitespace-nowrap inline-block"
            >
              Login
            </a>
            
            {/* Social Links Dropdown - Desktop */}
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
            
            {/* Login Button - Mobile */}
            <a 
              href="https://ibs.gadaabank.com.et/internet-banking/login"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-3 py-1.5 rounded text-sm whitespace-nowrap text-xs md:text-sm inline-block"
            >
              Login
            </a>
            
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

      {/* Animation Styles */}
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
          
          body {
            overflow-x: hidden;
          }
        }
        
        @media (max-width: 768px) {
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
          
          input, select, textarea {
            font-size: 16px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;