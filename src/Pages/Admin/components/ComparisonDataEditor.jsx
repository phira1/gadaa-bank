import React from 'react';
import { FaArrowRight, FaExternalLinkAlt, FaPlus, FaSave, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const clone = (value) => JSON.parse(JSON.stringify(value ?? null));
const asArray = (value) => (Array.isArray(value) ? value : []);

const getDefaultObjectItem = (fields) => {
  const item = {};

  fields.forEach((field) => {
    if (field.type === 'checkbox') {
      item[field.key] = field.defaultValue ?? false;
    } else if (field.type === 'number') {
      item[field.key] = field.defaultValue ?? 0;
    } else {
      item[field.key] = field.defaultValue ?? '';
    }
  });

  return item;
};

const Field = ({ field, value, onChange }) => {
  const commonClassName = 'w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100';

  if (field.type === 'textarea') {
    return (
      <textarea
        value={value ?? ''}
        onChange={(event) => onChange(event.target.value)}
        rows={field.rows || 3}
        placeholder={field.placeholder}
        className={commonClassName}
      />
    );
  }

  if (field.type === 'checkbox') {
    return (
      <label className="inline-flex items-center gap-2 text-sm font-medium text-slate-700">
        <input
          type="checkbox"
          checked={Boolean(value)}
          onChange={(event) => onChange(event.target.checked)}
          className="h-4 w-4 rounded border-slate-300 text-red-600 focus:ring-red-100"
        />
        {field.checkboxLabel || field.label}
      </label>
    );
  }

  if (field.type === 'select') {
    return (
      <select
        value={value ?? ''}
        onChange={(event) => onChange(event.target.value)}
        className={commonClassName}
      >
        {(field.options || []).map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }

  return (
    <input
      type={field.type === 'number' ? 'number' : field.type === 'date' ? 'date' : field.type === 'datetime-local' ? 'datetime-local' : 'text'}
      value={value ?? ''}
      onChange={(event) => onChange(field.type === 'number' ? (event.target.value === '' ? '' : Number(event.target.value)) : event.target.value)}
      placeholder={field.placeholder}
      className={commonClassName}
    />
  );
};

const ObjectListEditor = ({ title, description, items, fields, addLabel, emptyLabel, onChange, onSave, saveLabel = 'Save', saving = false, defaultOpen = false }) => {
  const normalizedItems = asArray(items);

  const updateItem = (index, key, nextValue) => {
    const nextItems = normalizedItems.map((item, currentIndex) => (
      currentIndex === index ? { ...item, [key]: nextValue } : item
    ));

    onChange(nextItems);
  };

  const addItem = () => {
    onChange([...normalizedItems, getDefaultObjectItem(fields)]);
  };

  const removeItem = (index) => {
    onChange(normalizedItems.filter((_, currentIndex) => currentIndex !== index));
  };

  const handleSave = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (onSave) {
      await onSave();
    }
  };

  return (
    <details className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm" defaultOpen={defaultOpen}>
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          {description && <p className="text-sm text-slate-500">{description}</p>}
        </div>
        <div className="flex items-center gap-2">
          {onSave && (
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-red-600 hover:text-red-600 transition-colors"
            >
              <FaSave />
              {saving ? 'Saving...' : saveLabel}
            </button>
          )}
          <span className="text-slate-400">⌄</span>
        </div>
      </summary>

      <div className="mt-4 space-y-4">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={addItem}
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
          >
            <FaPlus />
            {addLabel}
          </button>
        </div>

        {normalizedItems.map((item, index) => (
          <div key={`${title}-${index}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="grid gap-3 md:grid-cols-2">
              {fields.map((field) => (
                <label key={field.key} className={field.fullWidth ? 'md:col-span-2 block' : 'block'}>
                  <span className="mb-2 block text-sm font-medium text-slate-700">{field.label}</span>
                  <Field
                    field={field}
                    value={item[field.key]}
                    onChange={(nextValue) => updateItem(index, field.key, nextValue)}
                  />
                </label>
              ))}
            </div>

            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={() => removeItem(index)}
                className="inline-flex items-center gap-2 rounded-full border border-red-200 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-50 transition-colors"
              >
                <FaTrashAlt />
                Remove
              </button>
            </div>
          </div>
        ))}

        {normalizedItems.length === 0 && <p className="text-sm text-slate-500">{emptyLabel}</p>}
      </div>
    </details>
  );
};

const normalizeComparisonData = (value) => {
  const data = clone(value) || {};

  return {
    comparisonCategories: asArray(data.comparisonCategories),
    savingsProducts: asArray(data.savingsProducts),
    currentProducts: asArray(data.currentProducts),
    fixedProducts: asArray(data.fixedProducts),
    fcyProducts: asArray(data.fcyProducts),
  };
};

const comparisonSummaryCards = (comparisonData) => ([
  { label: 'Comparison tabs', value: comparisonData.comparisonCategories.length, helper: 'Visible tabs on the public page' },
  { label: 'Savings rows', value: comparisonData.savingsProducts.length, helper: 'Savings account products' },
  { label: 'Current rows', value: comparisonData.currentProducts.length, helper: 'Current account products' },
  { label: 'Fixed rows', value: comparisonData.fixedProducts.length, helper: 'Time deposit products' },
  { label: 'FCY rows', value: comparisonData.fcyProducts.length, helper: 'Foreign currency products' },
  { label: 'Total rows', value: comparisonData.savingsProducts.length + comparisonData.currentProducts.length + comparisonData.fixedProducts.length + comparisonData.fcyProducts.length, helper: 'All comparison records combined' },
]);

const comparisonEditors = [
  {
    key: 'comparisonCategories',
    title: 'Comparison tabs',
    description: 'Control the tab labels and icons shown at the top of the public comparison page.',
    addLabel: 'Add category',
    emptyLabel: 'No comparison categories configured.',
    fields: [
      { key: 'id', label: 'ID', placeholder: 'savings' },
      { key: 'label', label: 'Label', placeholder: 'Savings Accounts' },
      { key: 'icon', label: 'Icon', placeholder: '🏦' },
    ],
  },
  {
    key: 'savingsProducts',
    title: 'Savings comparison',
    description: 'Rows shown under the savings tab.',
    addLabel: 'Add savings product',
    emptyLabel: 'No savings products configured.',
    fields: [
      { key: 'id', label: 'ID', placeholder: 'ordinary-saving-deposit' },
      { key: 'name', label: 'Name', placeholder: 'Ordinary Saving Deposits' },
      { key: 'productDescription', label: 'Product description', placeholder: 'Description...', type: 'textarea', rows: 3, fullWidth: true },
      { key: 'minBalance', label: 'Minimum balance', placeholder: 'Birr 50.00' },
      { key: 'eligibility', label: 'Eligibility', placeholder: 'Eligibility details...', type: 'textarea', rows: 3, fullWidth: true },
      { key: 'operation', label: 'Operation', placeholder: 'Operation details...', type: 'textarea', rows: 3, fullWidth: true },
      { key: 'documentation', label: 'Documentation', placeholder: 'Documentation details...', type: 'textarea', rows: 3, fullWidth: true },
      { key: 'interestRate', label: 'Interest rate', placeholder: 'Monthly compounded on minimum monthly balance' },
      { key: 'accessChannels', label: 'Access channels', placeholder: 'Channels...', type: 'textarea', rows: 3, fullWidth: true },
      { key: 'specialTerms', label: 'Special terms', placeholder: 'Special terms...', type: 'textarea', rows: 3, fullWidth: true },
    ],
  },
  {
    key: 'currentProducts',
    title: 'Current comparison',
    description: 'Rows shown under the current accounts tab.',
    addLabel: 'Add current product',
    emptyLabel: 'No current products configured.',
    fields: [
      { key: 'id', label: 'ID', placeholder: 'ordinary-current-account' },
      { key: 'name', label: 'Name', placeholder: 'Ordinary Current Account' },
      { key: 'productDescription', label: 'Product description', placeholder: 'Description...', type: 'textarea', rows: 3, fullWidth: true },
      { key: 'minBalance', label: 'Minimum balance', placeholder: 'Birr 500' },
      { key: 'openingRequirement', label: 'Opening requirement', placeholder: 'Opening requirements...', type: 'textarea', rows: 3, fullWidth: true },
      { key: 'accessChannels', label: 'Access channels', placeholder: 'Access details...', type: 'textarea', rows: 3, fullWidth: true },
      { key: 'debitRestriction', label: 'Debit restriction', placeholder: 'Debit restrictions...', type: 'textarea', rows: 3, fullWidth: true },
      { key: 'interestRate', label: 'Interest rate', placeholder: 'Non-interest bearing' },
    ],
  },
  {
    key: 'fixedProducts',
    title: 'Time deposit comparison',
    description: 'Rows shown under the fixed deposit tab.',
    addLabel: 'Add time deposit',
    emptyLabel: 'No time deposit products configured.',
    fields: [
      { key: 'id', label: 'ID', placeholder: 'ordinary-time-deposit' },
      { key: 'name', label: 'Name', placeholder: 'Ordinary Time Deposit' },
      { key: 'productDescription', label: 'Product description', placeholder: 'Description...', type: 'textarea', rows: 3, fullWidth: true },
      { key: 'minDeposit', label: 'Minimum deposit', placeholder: 'Birr 100,000' },
      { key: 'maturity', label: 'Maturity', placeholder: 'Maturity details...', type: 'textarea', rows: 3, fullWidth: true },
      { key: 'interestRate', label: 'Interest rate', placeholder: 'Negotiable' },
      { key: 'withdrawal', label: 'Withdrawal rule', placeholder: 'Withdrawal rules...', type: 'textarea', rows: 3, fullWidth: true },
      { key: 'interestPayment', label: 'Interest payment', placeholder: 'Interest payment details...', type: 'textarea', rows: 3, fullWidth: true },
    ],
  },
  {
    key: 'fcyProducts',
    title: 'Foreign currency comparison',
    description: 'Rows shown under the FCY tab.',
    addLabel: 'Add FCY product',
    emptyLabel: 'No FCY products configured.',
    fields: [
      { key: 'id', label: 'ID', placeholder: 'fcy-deposit-products' },
      { key: 'name', label: 'Name', placeholder: 'FCY Deposit Products' },
      { key: 'productDescription', label: 'Product description', placeholder: 'Description...', type: 'textarea', rows: 3, fullWidth: true },
      { key: 'currency', label: 'Currency', placeholder: 'USD, EUR, GBP' },
      { key: 'minDeposit', label: 'Minimum deposit', placeholder: 'As allowed by directive' },
      { key: 'interestRate', label: 'Interest rate', placeholder: 'Varies by product' },
      { key: 'sourceOfFunds', label: 'Source of funds', placeholder: 'Source details...', type: 'textarea', rows: 3, fullWidth: true },
      { key: 'accessChannels', label: 'Access channels', placeholder: 'Access details...', type: 'textarea', rows: 3, fullWidth: true },
    ],
  },
];

const ComparisonDataEditor = ({ comparisonData, onChange, onSave, saving = false }) => {
  const normalizedComparisonData = normalizeComparisonData(comparisonData);

  const updateComparisonSection = (key, nextItems) => {
    onChange({
      ...normalizedComparisonData,
      [key]: nextItems,
    });
  };

  const summaryCards = comparisonSummaryCards(normalizedComparisonData);

  return (
    <div className="space-y-6">
      <section className="grid gap-6 xl:grid-cols-[1.45fr_0.85fr]">
        <div className="rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-red-700 text-white p-8 shadow-xl shadow-slate-200/60">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-white/60 mb-3">Product comparison</p>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">Edit the public comparison tables</h1>
              <p className="max-w-2xl text-white/75 leading-relaxed">
                Keep the savings, current, fixed deposit, and foreign currency comparison tabs accurate from one dedicated admin page.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/tools/compare-products"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition-colors"
              >
                <FaExternalLinkAlt />
                Open public page
              </Link>
              <button
                type="button"
                onClick={onSave}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15 transition-colors disabled:opacity-60"
                disabled={saving}
              >
                <FaSave />
                {saving ? 'Saving...' : 'Save all changes'}
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {summaryCards.map((card) => (
              <div key={card.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.22em] text-white/55 mb-2">{card.label}</p>
                <p className="text-3xl font-bold text-white">{card.value}</p>
                <p className="mt-1 text-sm text-white/70">{card.helper}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-600">Editing guide</p>
            <h2 className="mt-2 text-xl font-bold text-slate-900">Manage comparison content cleanly</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Update the tabs first, then maintain each product list with consistent IDs so the public comparison page keeps working without manual fixes.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-xl bg-red-600/10 p-2 text-red-600">
                <FaArrowRight />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Public link</p>
                <p className="mt-1 text-sm text-slate-600">Preview the current comparison experience after saving.</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
            Saving from any panel updates the shared comparison payload used by the public comparison tool.
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <ObjectListEditor
          title={comparisonEditors[0].title}
          description={comparisonEditors[0].description}
          items={normalizedComparisonData[comparisonEditors[0].key]}
          addLabel={comparisonEditors[0].addLabel}
          emptyLabel={comparisonEditors[0].emptyLabel}
          fields={comparisonEditors[0].fields}
          onChange={(nextItems) => updateComparisonSection(comparisonEditors[0].key, nextItems)}
          onSave={onSave}
          saveLabel="Save comparison"
          saving={saving}
          defaultOpen
        />

        <div className="space-y-6">
          {comparisonEditors.slice(1, 3).map((editor, index) => (
            <ObjectListEditor
              key={editor.key}
              title={editor.title}
              description={editor.description}
              items={normalizedComparisonData[editor.key]}
              addLabel={editor.addLabel}
              emptyLabel={editor.emptyLabel}
              fields={editor.fields}
              onChange={(nextItems) => updateComparisonSection(editor.key, nextItems)}
              onSave={onSave}
              saveLabel="Save comparison"
              saving={saving}
              defaultOpen={index === 0}
            />
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        {comparisonEditors.slice(3).map((editor) => (
          <ObjectListEditor
            key={editor.key}
            title={editor.title}
            description={editor.description}
            items={normalizedComparisonData[editor.key]}
            addLabel={editor.addLabel}
            emptyLabel={editor.emptyLabel}
            fields={editor.fields}
            onChange={(nextItems) => updateComparisonSection(editor.key, nextItems)}
            onSave={onSave}
            saveLabel="Save comparison"
            saving={saving}
            defaultOpen
          />
        ))}
      </section>
    </div>
  );
};

export default ComparisonDataEditor;