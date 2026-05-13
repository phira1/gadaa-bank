import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { comparisonCategories, currentProducts, fixedProducts, fcyProducts, savingsProducts } from '../../data/comparisonData';
import useSiteContent from '../../components/hooks/useSiteContent';

const fallbackComparisonData = {
  comparisonCategories,
  savingsProducts,
  currentProducts,
  fixedProducts,
  fcyProducts,
};

const categoryConfig = {
  savings: {
    title: 'Savings accounts',
    description: 'Compare savings products for adults, youth, women, staff, traders, and special-purpose deposits.',
    fields: [
      { key: 'productDescription', label: 'Product description' },
      { key: 'interestRate', label: 'Interest rate' },
      { key: 'minBalance', label: 'Minimum balance' },
      { key: 'eligibility', label: 'Eligibility' },
      { key: 'operation', label: 'Operation / access' },
      { key: 'documentation', label: 'Documents / notes' },
      { key: 'accessChannels', label: 'Access channels' },
      { key: 'specialTerms', label: 'Special terms' },
    ],
  },
  current: {
    title: 'Current accounts',
    description: 'Compare demand-deposit and ECX current accounts for business and transaction use.',
    fields: [
      { key: 'productDescription', label: 'Product description' },
      { key: 'minBalance', label: 'Minimum balance' },
      { key: 'interestRate', label: 'Interest rate' },
      { key: 'openingRequirement', label: 'Opening requirement' },
      { key: 'accessChannels', label: 'Access channels' },
      { key: 'debitRestriction', label: 'Debit restriction' },
    ],
  },
  fixed: {
    title: 'Time deposits',
    description: 'Compare fixed deposits by maturity, minimum amount, and interest payment method.',
    fields: [
      { key: 'productDescription', label: 'Product description' },
      { key: 'minDeposit', label: 'Minimum deposit' },
      { key: 'maturity', label: 'Maturity' },
      { key: 'interestRate', label: 'Interest rate' },
      { key: 'withdrawal', label: 'Withdrawal rule' },
      { key: 'interestPayment', label: 'Interest payment' },
    ],
  },
  fcy: {
    title: 'Foreign currency accounts',
    description: 'Compare FCY deposits, retention accounts, diaspora products, and FCY time deposits.',
    fields: [
      { key: 'productDescription', label: 'Product description' },
      { key: 'currency', label: 'Currency' },
      { key: 'minDeposit', label: 'Minimum deposit' },
      { key: 'interestRate', label: 'Interest rate' },
      { key: 'sourceOfFunds', label: 'Source of funds' },
      { key: 'accessChannels', label: 'Access / eligibility' },
    ],
  },
};

const ProductComparisonPage = () => {
  const [activeCategory, setActiveCategory] = useState('savings');
  const [selectedProductIds, setSelectedProductIds] = useState([]);
  const { content } = useSiteContent();
  const contentComparisonData = content?.comparison_data;
  const comparisonData = contentComparisonData?.comparisonCategories?.length
    ? contentComparisonData
    : fallbackComparisonData;

  const getProducts = () => {
    switch (activeCategory) {
      case 'savings':
        return comparisonData.savingsProducts || [];
      case 'current':
        return comparisonData.currentProducts || [];
      case 'fixed':
        return comparisonData.fixedProducts || [];
      case 'fcy':
        return comparisonData.fcyProducts || [];
      default:
        return [];
    }
  };

  const products = getProducts();
  const config = categoryConfig[activeCategory] || categoryConfig.savings;
  const productsSignature = products.map((product) => product.id).join('|');

  useEffect(() => {
    const nextSelection = products.slice(0, Math.min(3, products.length)).map((product) => product.id);
    setSelectedProductIds((current) => {
      const currentSignature = current.join('|');
      const nextSignature = nextSelection.join('|');
      return currentSignature === nextSignature ? current : nextSelection;
    });
  }, [activeCategory, productsSignature]);

  const selectedProducts = selectedProductIds.length > 0
    ? products.filter((product) => selectedProductIds.includes(product.id))
    : products.slice(0, 3);

  const visibleProducts = selectedProducts.length > 0 ? selectedProducts : products.slice(0, 3);

  const toggleProduct = (productId) => {
    setSelectedProductIds((current) => {
      if (current.includes(productId)) {
        return current.filter((id) => id !== productId);
      }

      if (current.length >= 3) {
        return [...current.slice(1), productId];
      }

      return [...current, productId];
    });
  };

  const renderValue = (value) => {
    if (typeof value === 'boolean') {
      return value ? <FaCheckCircle className="text-emerald-500 text-lg" /> : <FaTimesCircle className="text-rose-500 text-lg" />;
    }

    const normalized = String(value).trim().toLowerCase();

    if (normalized === 'yes' || normalized.startsWith('yes ')) {
      return <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">{value}</span>;
    }

    if (normalized === 'no' || normalized.startsWith('no ')) {
      return <span className="inline-flex items-center rounded-full bg-rose-50 px-3 py-1 text-sm font-semibold text-rose-700">{value}</span>;
    }

    if (normalized.includes('free')) {
      return <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-700">{value}</span>;
    }

    return value;
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 md:pt-32">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {(comparisonData.comparisonCategories || []).map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'border border-slate-200 bg-white text-slate-700 hover:border-red-200 hover:text-red-700'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        <div className="grid gap-6">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">{config.title}</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">Choose the products to compare</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">{config.description}</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">Selection</p>
                <p className="mt-1">Tap a product card to add or remove it from the comparison set.</p>
              </div>
            </div>

            {products.length === 0 ? (
              <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center">
                <p className="text-slate-500">No products are configured for this category yet.</p>
              </div>
            ) : (
              <div className="mt-5 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => {
                  const isSelected = visibleProducts.some((selectedProduct) => selectedProduct.id === product.id);

                  return (
                    <label
                      key={product.id}
                      className={`flex cursor-pointer items-center gap-3 rounded-xl border px-3 py-2.5 transition-all duration-300 hover:shadow-sm ${
                        isSelected
                          ? 'border-red-300 bg-red-50 shadow-red-100'
                          : 'border-slate-200 bg-white hover:border-red-200'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleProduct(product.id)}
                        className="h-4 w-4 rounded border-slate-300 accent-red-600 focus:ring-red-100"
                      />
                      <span className="min-w-0 text-sm font-semibold leading-5 text-slate-900">{product.name}</span>
                    </label>
                  );
                })}
              </div>
            )}
          </section>
        </div>

        {visibleProducts.length > 0 && (
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-600">Comparison table</p>
                <h2 className="mt-2 text-xl font-bold text-slate-900">Feature-by-feature breakdown</h2>
              </div>
              <p className="text-xs text-slate-500">Showing {visibleProducts.length} selected product{visibleProducts.length === 1 ? '' : 's'}.</p>
            </div>

            <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="min-w-[760px] w-full bg-white">
                <thead>
                  <tr className="bg-gradient-to-r from-red-600 to-slate-950 text-white">
                    <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-[0.2em]">Feature</th>
                    {visibleProducts.map((product) => (
                      <th key={product.id} className="px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.2em]">{product.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {config.fields.map((field, index) => (
                    <tr key={field.key} className={`${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'} border-b border-slate-100`}>
                      <td className="px-5 py-3 text-xs font-medium text-slate-700">{field.label}</td>
                      {visibleProducts.map((product) => (
                        <td key={`${product.id}-${field.key}`} className="px-5 py-3 text-center text-xs text-slate-700">
                          {renderValue(product[field.key] ?? '—')}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        <div className="mt-8 rounded-3xl border border-red-100 bg-red-50 p-6 text-center text-sm leading-6 text-slate-700">
          The information shown here is for comparison only. Final pricing and eligibility can vary by account type, credit policy, and customer profile.
        </div>
      </div>
    </div>
  );
};

export default ProductComparisonPage;