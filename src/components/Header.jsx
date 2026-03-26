import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaShareAlt, FaChevronDown, FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { socialLinks } from '../data/socialLinks';
import { navItems } from '../data/navigation';
import { searchableContent } from '../data/searchContent';

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim().length > 1) {
      const results = searchableContent.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results.slice(0, 8));
      setShowSuggestions(true);
      setSelectedResultIndex(-1);
    } else {
      setSearchResults([]);
      setShowSuggestions(false);
    }
  };

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

  const handleKeyDown = (e) => {
    if (!showSuggestions) return;
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedResultIndex(prev => prev < searchResults.length - 1 ? prev + 1 : prev);
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

  const getMobileBgColor = (label) => {
    switch (label) {
      case 'Facebook': return 'bg-blue-600 hover:bg-blue-700';
      case 'X': return 'bg-black hover:bg-gray-800';
      case 'LinkedIn': return 'bg-blue-700 hover:bg-blue-800';
      case 'Instagram': return 'bg-pink-600 hover:bg-pink-700';
      case 'YouTube': return 'bg-red-600 hover:bg-red-700';
      case 'Telegram': return 'bg-blue-500 hover:bg-blue-600';
      default: return 'bg-gray-500';
    }
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white shadow-md'
    }`}>
      <div className="container mx-auto px-4">
        {/* Mobile Search */}
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
          <RouterLink to="/" className="flex items-center cursor-pointer flex-shrink-0" onClick={closeAll}>
            <img src="/images/download2.jpg" alt="Gadaa Bank Logo" className="h-10 md:h-12 w-auto max-w-[180px] object-contain" />
          </RouterLink>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4 flex-1 justify-end">
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
              {showSuggestions && searchQuery.trim().length > 1 && searchResults.length === 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white shadow-xl rounded-lg py-4 px-4 border border-gray-200 z-50">
                  <div className="text-gray-600 text-center">
                    <div className="font-medium">No results found for "{searchQuery}"</div>
                    <div className="text-sm mt-1">Try different keywords</div>
                  </div>
                </div>
              )}
            </div>

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

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center space-x-3">
            <button onClick={toggleMobileSearch} className="text-gray-700 hover:text-red-600 p-2" aria-label="Search">
              <FaSearch size={18} />
            </button>
            <a
              href="https://ibs.gadaabank.com.et/internet-banking/login"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-3 py-1.5 rounded text-sm whitespace-nowrap text-xs md:text-sm inline-block"
            >
              Login
            </a>
            <button onClick={toggleMenu} className="text-gray-700 p-2" aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
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
            <div className="lg:hidden fixed inset-0 top-16 bg-black/30 z-40 animate-fadeIn" onClick={closeAll} />
            <div className="lg:hidden fixed top-16 left-0 right-0 bg-white z-50 overflow-y-auto max-h-[calc(100vh-4rem)] animate-slideInRight shadow-xl">
              <div className="container mx-auto px-4 py-4">
                <ul className="space-y-1">
                  {navItems.map((item) => (
                    <li key={item.id} className="border-b border-gray-100 last:border-b-0">
                      <div className="flex flex-col">
                        <div className="flex justify-between items-center py-3">
                          <RouterLink to={item.path} onClick={closeAll} className="text-gray-700 hover:text-red-600 font-medium text-base">
                            {item.label}
                          </RouterLink>
                          {item.hasDropdown && (
                            <button
                              onClick={() => toggleDropdown(item.id)}
                              className="p-2 text-gray-500 hover:text-red-600"
                              aria-label={`Toggle ${item.label} menu`}
                            >
                              <FaChevronDown className={`transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
                            </button>
                          )}
                        </div>
                        {item.hasDropdown && activeDropdown === item.id && (
                          <div className="ml-3 mb-3 space-y-1 animate-fadeInUp border-l-2 border-gray-200 pl-3">
                            {item.dropdownItems.map((dropdownItem, index) => (
                              <div key={index}>
                                {dropdownItem.subItems ? (
                                  <div className="space-y-2">
                                    <div className="font-medium text-gray-700 py-2">{dropdownItem.label}</div>
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
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center space-x-4">
                    {socialLinks.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${getMobileBgColor(social.label)} p-3 rounded-full transition duration-300`}
                      >
                        <social.icon className="text-white text-sm" size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes slideDown { from { opacity:0; transform:translateY(-10px); } to { opacity:1; transform:translateY(0); } }
        @keyframes slideInRight { from { opacity:0; transform:translateX(100%); } to { opacity:1; transform:translateX(0); } }
        @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
        @keyframes fadeInUp { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
        .animate-slideDown { animation: slideDown 0.3s ease-out; }
        .animate-slideInRight { animation: slideInRight 0.3s ease-out; }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-fadeInUp { animation: fadeInUp 0.3s ease-out; }
        @media (max-width: 640px) { .container { padding-left:1rem; padding-right:1rem; } body { overflow-x:hidden; } }
        @media (max-width: 768px) { button, a { min-height:44px; min-width:44px; } input, select, textarea { font-size:16px; } }
      `}</style>
    </header>
  );
};

export default Header;