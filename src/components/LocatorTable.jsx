// src/components/LocatorTable.jsx
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

const LocatorTable = ({ title, data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter data based on search term (city or address)
  const filteredData = useMemo(() => {
    if (!searchTerm) return data;
    return data.filter(item =>
      item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, data]);

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const startEntry = (currentPage - 1) * itemsPerPage + 1;
  const endEntry = Math.min(currentPage * itemsPerPage, filteredData.length);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-20 pb-8"  // Added top padding to clear fixed header
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            {title}
          </h1>

          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search by city or address..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full md:w-96 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          {/* Table wrapper with horizontal scroll */}
          <div className="overflow-x-auto -mx-4 px-4 bg-white rounded-lg shadow-md">
            <table className="min-w-[600px] md:min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    City
                  </th>
                  <th className="px-3 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Address
                  </th>
                  <th className="px-3 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Map Link
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-3 py-2 md:px-6 md:py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.city}
                    </td>
                    <td className="px-3 py-2 md:px-6 md:py-4 text-sm text-gray-700 break-words">
                      {item.address}
                    </td>
                    <td className="px-3 py-2 md:px-6 md:py-4 whitespace-nowrap text-sm">
                      <a
                        href={item.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-red-800 font-medium transition-colors"
                      >
                        Go To Map
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Info and Controls */}
          {filteredData.length > 0 && (
            <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-700">
                Showing {startEntry} to {endEntry} of {filteredData.length} entries
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 rounded border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-1 rounded border ${
                      currentPage === page
                        ? 'bg-red-600 text-white border-red-600'
                        : 'border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 rounded border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {filteredData.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No locations found.
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default LocatorTable;