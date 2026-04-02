import React, { useState, useEffect, useRef } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { FaSearch, FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { navItems } from '../data/navigation';
import SearchBar from './Header/SearchBar';
import DesktopActions from './Header/DesktopActions';
import DesktopNav from './Header/DesktopNav';
import MobileMenu from './Header/MobileMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedResultIndex, setSelectedResultIndex] = useState(-1);
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

  const handleResultClick = (path) => {
    navigate(path);
    setSearchQuery('');
    setShowSuggestions(false);
    closeAll();
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

  // Shared search bar props
  const searchBarProps = {
    isMobileSearchOpen,
    toggleMobileSearch,
    searchQuery,
    setSearchQuery,
    searchResults,
    showSuggestions,
    setShowSuggestions,
    selectedResultIndex,
    setSelectedResultIndex,
    closeAll,
    handleSearchSubmit,
    handleKeyDown,
    handleResultClick,
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white shadow-md'
    }`}>
      <div className="container mx-auto px-4">
        {/* Mobile Search */}
        {isMobileSearchOpen && (
          <div className="lg:hidden py-3 animate-slideDown">
            <SearchBar {...searchBarProps} isMobile={true} />
          </div>
        )}

        {/* Main Header */}
        <div className="flex items-center justify-between py-3">
          <RouterLink to="/" className="flex items-center cursor-pointer flex-shrink-0" onClick={closeAll}>
            <img src="/images/download2.jpg" alt="Gadaa Bank Logo" className="h-10 md:h-12 w-auto max-w-[180px] object-contain" />
          </RouterLink>

          {/* Desktop Actions (includes search bar, login, socials) */}
          <DesktopActions searchBarComponent={<SearchBar {...searchBarProps} isMobile={false} />} />

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

        {/* Desktop Navigation Links */}
        <DesktopNav navItems={navItems} closeAll={closeAll} />

        {/* Mobile Menu */}
        <MobileMenu
          isMenuOpen={isMenuOpen}
          closeAll={closeAll}
          activeDropdown={activeDropdown}
          toggleDropdown={toggleDropdown}
          navItems={navItems}
        />
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