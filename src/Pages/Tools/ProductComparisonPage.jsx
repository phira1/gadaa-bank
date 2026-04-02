import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { comparisonCategories, savingsProducts, loanProducts, cardProducts } from '../../data/comparisonData';

const ProductComparisonPage = () => {
  const [activeCategory, setActiveCategory] = useState('savings');

  const getProducts = () => {
    switch (activeCategory) {
      case 'savings':
        return savingsProducts;
      case 'loans':
        return loanProducts;
      case 'cards':
        return cardProducts;
      default:
        return [];
    }
  };

  const products = getProducts();
  // Get all feature keys from the first product (assuming all products have same structure)
  const featureKeys = products.length > 0 ? Object.keys(products[0]).filter(key => key !== 'id' && key !== 'name') : [];

  const formatFeatureLabel = (key) => {
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
  };

  const renderValue = (value) => {
    if (typeof value === 'boolean') {
      return value ? <FaCheckCircle className="text-green-500 text-lg" /> : <FaTimesCircle className="text-red-500 text-lg" />;
    }
    return value;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-black to-gray-900 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-red-500">›</span>
            <Link to="/tools/loan-calculator" className="text-white/80 hover:text-white">Tools</Link>
            <span className="text-red-500">›</span>
            <span className="text-white font-semibold">Product Comparison</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 pt-20 md:pt-24">
        <Link to="/tools/loan-calculator" className="inline-flex items-center text-red-600 hover:text-red-700 mb-6 group">
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Tools
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Product Comparison
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Compare banking products side‑by‑side to find the one that best fits your needs.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {comparisonCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{cat.icon}</span> {cat.label}
            </button>
          ))}
        </div>

        {/* Comparison Table */}
        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No products available for this category yet.</p>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200">
            <table className="min-w-[800px] w-full bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-red-600 to-black text-white">
                  <th className="py-4 px-6 text-left font-bold">Feature</th>
                  {products.map(product => (
                    <th key={product.id} className="py-4 px-6 text-center font-bold">
                      {product.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureKeys.map((feature, idx) => (
                  <tr key={feature} className={`border-b border-gray-100 hover:bg-red-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="py-4 px-6 font-medium text-gray-800">{formatFeatureLabel(feature)}</td>
                    {products.map(product => (
                      <td key={product.id} className="py-4 px-6 text-center text-gray-700">
                        {renderValue(product[feature])}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="bg-red-50 rounded-2xl p-6 mt-8 text-center border border-red-100">
          <p className="text-gray-700 text-sm">
            The information shown is for illustrative purposes. Actual terms may vary based on your eligibility and the bank’s policies.
            <br />
            For personalised advice, please contact our customer service or visit a branch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductComparisonPage;