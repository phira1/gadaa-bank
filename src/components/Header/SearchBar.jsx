import React, { useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { searchableContent } from '../../data/searchContent';

const SearchBar = ({
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
  isMobile = false
}) => {
  const searchRef = useRef(null);

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

  return (
    <div className="relative" ref={searchRef}>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search for services, accounts, loans..."
          className={`w-full pl-10 pr-10 ${
            isMobile ? 'py-3 border border-gray-300 rounded-lg text-sm focus:ring-2' : 'py-2 border border-gray-300 rounded text-sm focus:ring-1'
          } focus:outline-none focus:ring-red-500`}
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus={isMobile}
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
        {isMobile && (
          <button
            type="button"
            onClick={toggleMobileSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-600"
          >
            <FaXmark size={18} />
          </button>
        )}
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
  );
};

export default SearchBar;