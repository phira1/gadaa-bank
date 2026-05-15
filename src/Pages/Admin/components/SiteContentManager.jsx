import React, { useEffect, useState } from 'react';
import { FaPlus, FaSave, FaTrashAlt } from 'react-icons/fa';

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

const ObjectListEditor = ({
  title,
  description,
  items,
  fields,
  addLabel,
  emptyLabel,
  onChange,
  renderExtra,
  onSave,
  saveLabel = 'Save',
  saving = false,
  defaultOpen = false,
}) => {
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

            {typeof renderExtra === 'function' && renderExtra(item, index, updateItem)}

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

const StringListEditor = ({ title, description, items, addLabel, emptyLabel, onChange, onSave, saveLabel = 'Save', saving = false, defaultOpen = false }) => {
  const normalizedItems = asArray(items);

  const updateItem = (index, nextValue) => {
    onChange(normalizedItems.map((item, currentIndex) => (currentIndex === index ? nextValue : item)));
  };

  const addItem = () => {
    onChange([...normalizedItems, '']);
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

      <div className="mt-4 space-y-3">
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
          <div key={`${title}-${index}`} className="flex gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-3">
            <input
              value={item}
              onChange={(event) => updateItem(index, event.target.value)}
              className="min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100"
            />
            <button
              type="button"
              onClick={() => removeItem(index)}
              className="inline-flex items-center justify-center rounded-xl border border-red-200 px-3 py-2 text-red-700 hover:bg-red-50 transition-colors"
              aria-label={`Remove ${title} item`}
            >
              <FaTrashAlt />
            </button>
          </div>
        ))}
        {normalizedItems.length === 0 && <p className="text-sm text-slate-500">{emptyLabel}</p>}
      </div>
    </details>
  );
};

const TableListEditor = ({ title, description, items, columns, addLabel, emptyLabel, onChange, onSave, saveLabel = 'Save', saving = false, defaultOpen = false }) => {
  const normalizedItems = asArray(items);

  const updateItem = (index, key, nextValue) => {
    onChange(normalizedItems.map((item, currentIndex) => (
      currentIndex === index ? { ...item, [key]: nextValue } : item
    )));
  };

  const addItem = () => {
    const nextItem = {};
    columns.forEach((column) => {
      if (column.type === 'checkbox') {
        nextItem[column.key] = column.defaultValue ?? false;
      } else if (column.type === 'number') {
        nextItem[column.key] = column.defaultValue ?? 0;
      } else {
        nextItem[column.key] = column.defaultValue ?? '';
      }
    });
    onChange([...normalizedItems, nextItem]);
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

      <div className="mt-4 flex justify-end">
        <button
          type="button"
          onClick={addItem}
          className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
        >
          <FaPlus />
          {addLabel}
        </button>
      </div>

      <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200">
        <table className="min-w-full divide-y divide-slate-200 bg-white">
          <thead className="bg-slate-50">
            <tr>
              {columns.map((column) => (
                <th key={column.key} className={`px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 ${column.headerClassName || ''}`}>
                  {column.label}
                </th>
              ))}
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {normalizedItems.map((item, index) => (
              <tr key={`${title}-${index}`} className="align-top">
                {columns.map((column) => (
                  <td key={column.key} className={`px-4 py-3 ${column.cellClassName || ''}`}>
                    <Field
                      field={column}
                      value={item[column.key]}
                      onChange={(nextValue) => updateItem(index, column.key, nextValue)}
                    />
                  </td>
                ))}
                <td className="px-4 py-3">
                  <button
                    type="button"
                    onClick={() => removeItem(index)}
                    className="inline-flex items-center gap-2 rounded-full border border-red-200 px-3 py-2 text-sm font-semibold text-red-700 hover:bg-red-50 transition-colors"
                    aria-label={`Remove ${title} row`}
                  >
                    <FaTrashAlt />
                    Remove
                  </button>
                </td>
              </tr>
            ))}

            {normalizedItems.length === 0 && (
              <tr>
                <td colSpan={columns.length + 1} className="px-4 py-10 text-center text-sm text-slate-500">
                  {emptyLabel}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </details>
  );
};

const NavigationEditor = ({ items, onChange, onSave, saveLabel = 'Save', saving = false, defaultOpen = false }) => {
  const normalizedItems = asArray(items);

  const createNavItem = () => ({
    id: '',
    label: '',
    path: '',
    hasDropdown: false,
    dropdownItems: [],
  });

  const updateItem = (index, patch) => {
    onChange(normalizedItems.map((item, currentIndex) => (
      currentIndex === index ? { ...item, ...patch } : item
    )));
  };

  const updateDropdownItem = (itemIndex, dropdownIndex, patch) => {
    onChange(normalizedItems.map((item, currentIndex) => {
      if (currentIndex !== itemIndex) return item;

      const dropdownItems = asArray(item.dropdownItems).map((dropdownItem, currentDropdownIndex) => (
        currentDropdownIndex === dropdownIndex ? { ...dropdownItem, ...patch } : dropdownItem
      ));

      return { ...item, dropdownItems };
    }));
  };

  const addItem = () => {
    onChange([...normalizedItems, createNavItem()]);
  };

  const removeItem = (index) => {
    onChange(normalizedItems.filter((_, currentIndex) => currentIndex !== index));
  };

  const addDropdownItem = (itemIndex) => {
    onChange(normalizedItems.map((item, currentIndex) => {
      if (currentIndex !== itemIndex) return item;
      return {
        ...item,
        hasDropdown: true,
        dropdownItems: [...asArray(item.dropdownItems), { label: '', path: '' }],
      };
    }));
  };

  const removeDropdownItem = (itemIndex, dropdownIndex) => {
    onChange(normalizedItems.map((item, currentIndex) => {
      if (currentIndex !== itemIndex) return item;
      return {
        ...item,
        dropdownItems: asArray(item.dropdownItems).filter((_, currentDropdownIndex) => currentDropdownIndex !== dropdownIndex),
      };
    }));
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
          <h3 className="text-lg font-semibold text-slate-900">Navigation</h3>
          <p className="text-sm text-slate-500">Edit the header and mobile menu in a compact list. Open dropdowns only when needed.</p>
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
            Add menu item
          </button>
        </div>

        {normalizedItems.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-5 py-8 text-center">
            <p className="text-sm font-medium text-slate-900">No navigation items yet.</p>
            <p className="mt-1 text-sm text-slate-500">Add the Home, About, Services, and other menu items from here.</p>
          </div>
        )}

        {normalizedItems.map((item, index) => (
          <div key={`${item.id || item.label || 'nav'}-${index}`} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-base font-semibold text-slate-900">{item.label || 'Untitled menu item'}</p>
                <p className="text-sm text-slate-500">{item.path || 'No path set yet'}</p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 border border-slate-200">
                  {item.hasDropdown ? `${asArray(item.dropdownItems).length} dropdown links` : 'Top-level link'}
                </span>
                <button
                  type="button"
                  onClick={() => removeItem(index)}
                  className="inline-flex items-center gap-2 rounded-full border border-red-200 px-3 py-2 text-sm font-semibold text-red-700 hover:bg-red-50 transition-colors"
                >
                  <FaTrashAlt />
                  Remove
                </button>
              </div>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              <label>
                <span className="mb-2 block text-sm font-medium text-slate-700">ID</span>
                <input
                  value={item.id || ''}
                  onChange={(event) => updateItem(index, { id: event.target.value })}
                  placeholder="about"
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100"
                />
              </label>
              <label>
                <span className="mb-2 block text-sm font-medium text-slate-700">Label</span>
                <input
                  value={item.label || ''}
                  onChange={(event) => updateItem(index, { label: event.target.value })}
                  placeholder="About Us"
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100"
                />
              </label>
              <label>
                <span className="mb-2 block text-sm font-medium text-slate-700">Path</span>
                <input
                  value={item.path || ''}
                  onChange={(event) => updateItem(index, { path: event.target.value })}
                  placeholder="/about"
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100"
                />
              </label>
              <label className="flex items-end">
                <span className="sr-only">Has dropdown</span>
                <input
                  type="checkbox"
                  checked={Boolean(item.hasDropdown)}
                  onChange={(event) => updateItem(index, { hasDropdown: event.target.checked })}
                  className="h-4 w-4 rounded border-slate-300 text-red-600 focus:ring-red-100"
                />
                <span className="ml-2 text-sm font-medium text-slate-700">Has dropdown</span>
              </label>
            </div>

            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <h4 className="font-semibold text-slate-900">Dropdown links</h4>
                  <p className="text-sm text-slate-500">Use this only for menu groups like About Us, Services, and Resources.</p>
                </div>
                <button
                  type="button"
                  onClick={() => addDropdownItem(index)}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:border-red-600 hover:text-red-600 transition-colors"
                >
                  <FaPlus />
                  Add dropdown link
                </button>
              </div>

              {item.hasDropdown ? (
                <div className="mt-4 space-y-3">
                  {asArray(item.dropdownItems).length === 0 && (
                    <p className="text-sm text-slate-500">No dropdown links yet.</p>
                  )}

                  {asArray(item.dropdownItems).map((dropdownItem, dropdownIndex) => (
                    <div key={`${item.id || index}-${dropdownIndex}`} className="grid gap-3 md:grid-cols-[1fr_1fr_auto]">
                      <input
                        value={dropdownItem.label || ''}
                        onChange={(event) => updateDropdownItem(index, dropdownIndex, { label: event.target.value })}
                        placeholder="Menu label"
                        className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100"
                      />
                      <input
                        value={dropdownItem.path || ''}
                        onChange={(event) => updateDropdownItem(index, dropdownIndex, { path: event.target.value })}
                        placeholder="/about/company-history"
                        className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100"
                      />
                      <button
                        type="button"
                        onClick={() => removeDropdownItem(index, dropdownIndex)}
                        className="inline-flex items-center justify-center rounded-xl border border-red-200 px-3 py-2 text-red-700 hover:bg-red-50 transition-colors"
                        aria-label="Remove dropdown link"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-sm text-slate-500">Turn on dropdowns to manage sub-links for this item.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </details>
  );
};

const SiteContentManager = ({ siteContent, onSave }) => {
  const [drafts, setDrafts] = useState({});
  const [savingKey, setSavingKey] = useState('');

  useEffect(() => {
    setDrafts(clone(siteContent));
  }, [siteContent]);

  const updateDraft = (key, updater) => {
    setDrafts((current) => {
      const next = clone(current);
      const currentValue = clone(next[key]);
      next[key] = typeof updater === 'function' ? updater(currentValue) : updater;
      return next;
    });
  };

  const saveKey = async (key) => {
    setSavingKey(key);
    try {
      await onSave(key, drafts[key]);
    } finally {
      setSavingKey('');
    }
  };

  const navItems = asArray(drafts.nav_items);
  const socialLinks = asArray(drafts.social_links);
  const searchableContent = asArray(drafts.searchable_content);
  const serviceCategories = asArray(drafts.service_categories);
  const tariffsData = drafts.tariffs_data || {};

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Shared site content</h2>
            <p className="text-sm text-slate-500">Edit the data that powers the header, footer, search, services, tariffs, and tools.</p>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {[
            { label: 'Brand and navigation', value: `${navItems.length} links`, helper: 'Header and menu structure' },
            { label: 'Public identity', value: `${socialLinks.length} links`, helper: 'Footer and social profiles' },
            { label: 'Search content', value: `${searchableContent.length} items`, helper: 'Search suggestions and shortcuts' },
            { label: 'Service catalog', value: `${serviceCategories.length} cards`, helper: 'Services and feature groups' },
            { label: 'Pricing data', value: `${asArray(tariffsData.digitalFees).length} rows`, helper: 'Tariffs and branch fees' },
          ].map((card) => (
            <div key={card.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">{card.label}</p>
              <p className="text-lg font-semibold text-slate-900">{card.value}</p>
              <p className="mt-1 text-sm text-slate-500">{card.helper}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <ObjectListEditor
          title="Search content"
          description="Manage searchable items that appear in the site search bar and sitemap. Users will see these when searching for services, pages, and resources."
          items={searchableContent}
          addLabel="Add search item"
          emptyLabel="No search content configured."
          fields={[
            { key: 'title', label: 'Title', placeholder: 'Service name or page title', fullWidth: true },
            { key: 'path', label: 'URL path', placeholder: '/services/example' },
            { key: 'category', label: 'Category', placeholder: 'Services, Resources, About', fullWidth: true },
            { key: 'description', label: 'Description', placeholder: 'Brief description for search results', fullWidth: true, type: 'textarea', rows: 2 },
          ]}
          onChange={(nextItems) => updateDraft('searchable_content', nextItems)}
          onSave={() => saveKey('searchable_content')}
          saveLabel="Save search content"
          saving={savingKey === 'searchable_content'}
        />
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <ObjectListEditor
          title="Tariff groups"
          description="Edit the public tariffs content in a readable form."
          items={asArray(tariffsData.digitalFees)}
          addLabel="Add fee row"
          emptyLabel="No digital fees configured."
          fields={[
            { key: 'sn', label: 'S.N', placeholder: '1' },
            { key: 'type', label: 'Transaction type', placeholder: 'Fund transfer ...', fullWidth: true, type: 'textarea', rows: 2 },
            { key: 'range', label: 'Amount range', placeholder: '100 – 1,000' },
            { key: 'fee', label: 'Fee', placeholder: '2 ETB' },
          ]}
          onChange={(nextItems) => updateDraft('tariffs_data', (current) => ({ ...current, digitalFees: nextItems }))}
          onSave={() => saveKey('tariffs_data')}
          saveLabel="Save tariffs"
          saving={savingKey === 'tariffs_data'}
        />
      </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Branch tariff catalog</h3>
              <p className="text-sm text-slate-500">Branch summary and supporting fee lists.</p>
            </div>
            <button
              type="button"
              onClick={() => saveKey('tariffs_data')}
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
            >
              <FaSave />
              {savingKey === 'tariffs_data' ? 'Saving...' : 'Save'}
            </button>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <label className="block max-w-md">
              <span className="mb-2 block text-sm font-medium text-slate-700">Effective date</span>
              <input
                value={tariffsData.effectiveDate || ''}
                onChange={(event) => updateDraft('tariffs_data', (current) => ({
                  ...current,
                  effectiveDate: event.target.value,
                }))}
                placeholder="January 2025"
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100"
              />
            </label>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <label>
              <span className="mb-2 block text-sm font-medium text-slate-700">Title</span>
              <input
                value={tariffsData.branchInfo?.title || ''}
                onChange={(event) => updateDraft('tariffs_data', (current) => ({
                  ...current,
                  branchInfo: {
                    ...(current.branchInfo || {}),
                    title: event.target.value,
                  },
                }))}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100"
              />
            </label>
            <label className="md:col-span-2">
              <span className="mb-2 block text-sm font-medium text-slate-700">Description</span>
              <textarea
                value={tariffsData.branchInfo?.description || ''}
                onChange={(event) => updateDraft('tariffs_data', (current) => ({
                  ...current,
                  branchInfo: {
                    ...(current.branchInfo || {}),
                    description: event.target.value,
                  },
                }))}
                rows={3}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100"
              />
            </label>
          </div>

          <StringListEditor
            title="Branch services"
            description="Simple text rows shown in the branch tariff catalog."
            items={asArray(tariffsData.branchInfo?.services)}
            addLabel="Add service"
            emptyLabel="No branch services configured."
            defaultOpen={false}
            onChange={(nextItems) => updateDraft('tariffs_data', (current) => ({
              ...current,
              branchInfo: {
                ...(current.branchInfo || {}),
                services: nextItems,
              },
            }))}
            onSave={() => saveKey('tariffs_data')}
            saving={savingKey === 'tariffs_data'}
          />

          <StringListEditor
            title="Branch fees"
            description="Fee descriptions shown in the branch tariff catalog."
            items={asArray(tariffsData.branchInfo?.fees)}
            addLabel="Add fee"
            emptyLabel="No branch fees configured."
            defaultOpen={false}
            onChange={(nextItems) => updateDraft('tariffs_data', (current) => ({
              ...current,
              branchInfo: {
                ...(current.branchInfo || {}),
                fees: nextItems,
              },
            }))}
            onSave={() => saveKey('tariffs_data')}
            saving={savingKey === 'tariffs_data'}
          />
        </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <ObjectListEditor
          title="Deposit rates"
          description="Manage the deposit interest table."
          items={asArray(tariffsData.depositRates)}
          addLabel="Add rate row"
          emptyLabel="No deposit rates configured."
          defaultOpen={false}
          fields={[
            { key: 'account', label: 'Account', placeholder: 'Ordinary Saving account', fullWidth: true, type: 'textarea', rows: 2 },
            { key: 'rate', label: 'Rate', placeholder: 'Minimum saving interest rate' },
          ]}
          onChange={(nextItems) => updateDraft('tariffs_data', (current) => ({ ...current, depositRates: nextItems }))}
          onSave={() => saveKey('tariffs_data')}
          saving={savingKey === 'tariffs_data'}
        />

        <ObjectListEditor
          title="Credit facilities"
          description="Rows shown in the lending rate table."
          items={asArray(tariffsData.creditFacilities)}
          addLabel="Add credit row"
          emptyLabel="No credit facilities configured."
          defaultOpen={false}
          fields={[
            { key: 'type', label: 'Type', placeholder: 'Export Term Loans...', fullWidth: true, type: 'textarea', rows: 2 },
            { key: 'tenure', label: 'Tenure', placeholder: 'Short Term' },
            { key: 'rate', label: 'Rate', placeholder: 'Up to 11%' },
          ]}
          onChange={(nextItems) => updateDraft('tariffs_data', (current) => ({ ...current, creditFacilities: nextItems }))}
          onSave={() => saveKey('tariffs_data')}
          saving={savingKey === 'tariffs_data'}
        />
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <ObjectListEditor
          title="Collateral fees"
          description="Manage the collateral/property valuation fees."
          items={asArray(tariffsData.collateralFees)}
          addLabel="Add collateral row"
          emptyLabel="No collateral fees configured."
          defaultOpen={false}
          fields={[
            { key: 'property', label: 'Property', placeholder: 'Single Villa', fullWidth: true, type: 'textarea', rows: 2 },
            { key: 'unit', label: 'Unit', placeholder: 'Per LHC' },
            { key: 'fee', label: 'Fee', placeholder: '2,500.00 ETB' },
          ]}
          onChange={(nextItems) => updateDraft('tariffs_data', (current) => ({ ...current, collateralFees: nextItems }))}
          onSave={() => saveKey('tariffs_data')}
          saving={savingKey === 'tariffs_data'}
        />

        <ObjectListEditor
          title="IFB products"
          description="Manage Islamic banking pricing rows."
          items={asArray(tariffsData.ifbProducts)}
          addLabel="Add IFB row"
          emptyLabel="No IFB products configured."
          defaultOpen={false}
          fields={[
            { key: 'product', label: 'Product', placeholder: 'Murabaha Financing...', fullWidth: true, type: 'textarea', rows: 2 },
            { key: 'duration', label: 'Duration', placeholder: '1 Yr' },
            { key: 'quarter', label: 'Quarter', placeholder: '10.5' },
            { key: 'semiAnnual', label: 'Semi annual', placeholder: '11.5' },
            { key: 'annual', label: 'Annual', placeholder: '13.5' },
          ]}
          onChange={(nextItems) => updateDraft('tariffs_data', (current) => ({ ...current, ifbProducts: nextItems }))}
          onSave={() => saveKey('tariffs_data')}
          saving={savingKey === 'tariffs_data'}
        />
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <ObjectListEditor
          title="IBD fees"
          description="Manage foreign exchange service fees."
          items={asArray(tariffsData.ibdFees)}
          addLabel="Add IBD row"
          emptyLabel="No IBD fees configured."
          defaultOpen={false}
          fields={[
            { key: 'service', label: 'Service', placeholder: 'Import By LC Method - LC Opening Commission', fullWidth: true, type: 'textarea', rows: 2 },
            { key: 'import', label: 'Import', placeholder: '4%' },
            { key: 'servicePay', label: 'Service pay', placeholder: '4%' },
            { key: 'cash', label: 'Cash', placeholder: '4%' },
          ]}
          onChange={(nextItems) => updateDraft('tariffs_data', (current) => ({ ...current, ibdFees: nextItems }))}
          onSave={() => saveKey('tariffs_data')}
          saving={savingKey === 'tariffs_data'}
        />
      </section>
    </div>
  );
};

export default SiteContentManager;
