import React, { useEffect, useState } from 'react';
import { FaSyncAlt } from 'react-icons/fa';
import { siteContentService } from '../../services';
import ComparisonDataEditor from './components/ComparisonDataEditor';

const emptyComparisonData = {
  comparisonCategories: [],
  savingsProducts: [],
  currentProducts: [],
  fixedProducts: [],
  fcyProducts: [],
};

const normalizeComparisonData = (value) => ({
  ...emptyComparisonData,
  ...(value || {}),
  comparisonCategories: Array.isArray(value?.comparisonCategories) ? value.comparisonCategories : [],
  savingsProducts: Array.isArray(value?.savingsProducts) ? value.savingsProducts : [],
  currentProducts: Array.isArray(value?.currentProducts) ? value.currentProducts : [],
  fixedProducts: Array.isArray(value?.fixedProducts) ? value.fixedProducts : [],
  fcyProducts: Array.isArray(value?.fcyProducts) ? value.fcyProducts : [],
});

const AdminProductComparisonPage = () => {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [comparisonData, setComparisonData] = useState(emptyComparisonData);

  const loadComparisonData = async () => {
    setRefreshing(true);
    setError('');

    try {
      const response = await siteContentService.getAll();
      const siteContent = response?.data ?? response ?? {};
      setComparisonData(normalizeComparisonData(siteContent?.comparison_data));
    } catch (loadError) {
      setError(loadError.message || 'Failed to load comparison settings.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadComparisonData();
  }, []);

  const saveComparisonData = async () => {
    setSaving(true);
    setError('');

    try {
      await siteContentService.update('comparison_data', comparisonData);
      await loadComparisonData();
    } catch (saveError) {
      setError(saveError.message || 'Failed to save comparison settings.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <div className="flex items-center gap-3 text-slate-600">
          <div className="h-5 w-5 rounded-full border-2 border-red-600 border-t-transparent animate-spin" />
          Loading comparison editor...
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="space-y-6">
        <div className="flex items-center justify-end">
          <button
            type="button"
            onClick={loadComparisonData}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-red-600 hover:text-red-600 transition-colors disabled:opacity-60"
            disabled={refreshing}
          >
            <FaSyncAlt className={refreshing ? 'animate-spin' : ''} />
            {refreshing ? 'Refreshing...' : 'Refresh data'}
          </button>
        </div>

        <ComparisonDataEditor
          comparisonData={comparisonData}
          onChange={setComparisonData}
          onSave={saveComparisonData}
          saving={saving}
        />
      </div>
    </div>
  );
};

export default AdminProductComparisonPage;