import React, { useEffect, useMemo, useState } from 'react';
import { FaEdit, FaPlus, FaSave, FaSyncAlt, FaTimes, FaTrashAlt } from 'react-icons/fa';
import { uploadService } from '../../../services';

const EMPTY_LIST_PARAMS = {};

const clone = (value) => JSON.parse(JSON.stringify(value ?? null));

const defaultValueForField = (field) => {
  if (field.defaultValue !== undefined) {
    return field.defaultValue;
  }

  if (field.type === 'checkbox') {
    return false;
  }

  if (field.type === 'number') {
    return '';
  }

  return '';
};

const buildInitialForm = (fields, item = null) => {
  const form = {};

  fields.forEach((field) => {
    const value = item?.[field.key];
    form[field.key] = value === undefined || value === null ? defaultValueForField(field) : value;
  });

  return form;
};

const Field = ({ field, value, onChange, editing, onFileUpload, uploading, uploadError }) => {
  const commonClassName = 'w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 disabled:bg-slate-100';

  if (field.type === 'file') {
    return (
      <div className="space-y-2">
        <div className="flex gap-2">
          <input
            type="file"
            accept={field.accept || '*'}
            onChange={(event) => onFileUpload(event, field.key)}
            disabled={uploading}
            className="flex-1 rounded-2xl border border-slate-300 px-4 py-3 text-sm disabled:bg-slate-100 disabled:text-slate-500 cursor-pointer"
          />
          <button
            type="button"
            onClick={() => onChange('')}
            className="px-4 py-3 rounded-2xl bg-slate-200 text-slate-700 hover:bg-slate-300 transition disabled:opacity-50"
            disabled={!value || uploading}
          >
            Clear
          </button>
        </div>
        {uploading && <p className="text-sm text-amber-600">Uploading...</p>}
        {uploadError && <p className="text-sm text-red-600">{uploadError}</p>}
        {value && (
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <p className="text-xs text-slate-600 mb-1">File:</p>
            <a href={value} target="_blank" rel="noopener noreferrer" className="text-sm text-red-600 hover:underline truncate block">
              {value.split('/').pop()}
            </a>
          </div>
        )}
      </div>
    );
  }

  if (field.type === 'textarea') {
    return (
      <textarea
        value={value ?? ''}
        onChange={(event) => onChange(event.target.value)}
        rows={field.rows || 4}
        placeholder={field.placeholder}
        disabled={editing && field.disabledOnEdit}
        className={commonClassName}
      />
    );
  }

  if (field.type === 'select') {
    return (
      <select
        value={value ?? ''}
        onChange={(event) => onChange(event.target.value)}
        disabled={editing && field.disabledOnEdit}
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

  if (field.type === 'checkbox') {
    return (
      <label className="inline-flex items-center gap-2 text-sm font-medium text-slate-700">
        <input
          type="checkbox"
          checked={Boolean(value)}
          onChange={(event) => onChange(event.target.checked)}
          disabled={editing && field.disabledOnEdit}
          className="h-4 w-4 rounded border-slate-300 text-red-600 focus:ring-red-100"
        />
        {field.checkboxLabel || field.label}
      </label>
    );
  }

  return (
    <input
      type={field.type === 'number' ? 'number' : 'text'}
      value={value ?? ''}
      onChange={(event) => onChange(field.type === 'number' ? (event.target.value === '' ? '' : Number(event.target.value)) : event.target.value)}
      placeholder={field.placeholder}
      disabled={editing && field.disabledOnEdit}
      className={commonClassName}
    />
  );
};

const CollectionManager = ({
  title,
  description,
  service,
  fields,
  itemTitle,
  itemSubtitle,
  itemStatus,
  statusField,
  statusLabel = 'Active',
  inactiveLabel = 'Inactive',
  createLabel = 'Add item',
  saveLabel = 'Save item',
  emptyLabel = 'No records found.',
  listParams = EMPTY_LIST_PARAMS,
  onBuildPayload = (form) => form,
}) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState('');
  const [activeItem, setActiveItem] = useState(null);
  const [editorOpen, setEditorOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');

  const loadItems = async () => {
    setRefreshing(true);
    setError('');

    try {
      const response = await service.getAll(listParams);
      const payload = response?.data ?? response ?? {};
      const data = Array.isArray(payload.data) ? payload.data : Array.isArray(payload) ? payload : [];
      setItems(data);
    } catch (loadError) {
      setError(loadError.message || `Failed to load ${title.toLowerCase()}.`);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const listParamsKey = JSON.stringify(listParams || EMPTY_LIST_PARAMS);

  useEffect(() => {
    loadItems();
  }, [listParamsKey]);

  const activeCount = useMemo(() => {
    if (!statusField) {
      return items.length;
    }

    return items.filter((item) => Boolean(item?.[statusField])).length;
  }, [items, statusField]);

  const openEditor = (item = null) => {
    setError('');
    setActiveItem(item);
    setEditorOpen(true);
    setFormData(buildInitialForm(fields, item));
  };

  const closeEditor = () => {
    setActiveItem(null);
    setEditorOpen(false);
    setFormData({});
    setSaving(false);
    setUploading(false);
    setUploadError('');
  };

  const handleFileUpload = async (event, fieldKey) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setUploadError('');

    try {
      const result = await uploadService.uploadFile(file);
      setFormData((current) => ({ ...current, [fieldKey]: result.url }));
    } catch (uploadErr) {
      setUploadError(uploadErr.message);
    } finally {
      setUploading(false);
      event.target.value = ''; // Reset file input
    }
  };

  const handleSave = async (event) => {
    event.preventDefault();
    setSaving(true);
    setError('');

    const payload = onBuildPayload(formData, activeItem);

    try {
      if (activeItem?.id) {
        await service.update(activeItem.id, payload);
      } else {
        await service.create(payload);
      }

      closeEditor();
      await loadItems();
    } catch (saveError) {
      setError(saveError.message || `Failed to save ${title.toLowerCase()}.`);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (item) => {
    if (!window.confirm(`Delete ${itemTitle(item)}?`)) {
      return;
    }

    try {
      await service.remove(item.id);
      await loadItems();
    } catch (deleteError) {
      setError(deleteError.message || `Failed to delete ${title.toLowerCase()}.`);
    }
  };

  if (loading) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <div className="flex items-center gap-3 text-slate-600">
          <div className="h-5 w-5 rounded-full border-2 border-red-600 border-t-transparent animate-spin" />
          Loading {title.toLowerCase()}...
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-red-700 text-white p-8 shadow-xl shadow-slate-200/60">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/60 mb-3">Management</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">{title}</h1>
            <p className="max-w-2xl text-white/75 leading-relaxed">{description}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => openEditor()}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100 transition-colors"
            >
              <FaPlus />
              {createLabel}
            </button>
            <button
              type="button"
              onClick={loadItems}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15 transition-colors"
              disabled={refreshing}
            >
              <FaSyncAlt className={refreshing ? 'animate-spin' : ''} />
              {refreshing ? 'Refreshing...' : 'Refresh'}
            </button>
          </div>
        </div>
      </section>

      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500 mb-2">Total records</p>
          <p className="text-3xl font-bold text-slate-900">{items.length}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500 mb-2">Active records</p>
          <p className="text-3xl font-bold text-emerald-600">{activeCount}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500 mb-2">Inactive records</p>
          <p className="text-3xl font-bold text-slate-700">{Math.max(items.length - activeCount, 0)}</p>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Records</h2>
            <p className="text-sm text-slate-500">Create, edit, toggle visibility, or remove items.</p>
          </div>
        </div>

        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.id} className="rounded-2xl border border-slate-200 p-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="min-w-0">
                <h3 className="font-semibold text-slate-900">{itemTitle(item)}</h3>
                {itemSubtitle && <p className="text-sm text-slate-500">{itemSubtitle(item)}</p>}
                {typeof itemStatus === 'function' && (
                  <p className="mt-2 text-sm text-slate-500">{itemStatus(item)}</p>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {statusField && (
                  <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${item?.[statusField] ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-slate-200 bg-slate-100 text-slate-600'}`}>
                    {item?.[statusField] ? statusLabel : inactiveLabel}
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => openEditor(item)}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700 hover:border-red-600 hover:text-red-600 transition-colors"
                >
                  <FaEdit />
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(item)}
                  className="inline-flex items-center gap-2 rounded-full border border-red-200 px-3 py-1 text-xs font-semibold text-red-700 hover:bg-red-50 transition-colors"
                >
                  <FaTrashAlt />
                  Delete
                </button>
              </div>
            </div>
          ))}

          {items.length === 0 && <p className="text-sm text-slate-500">{emptyLabel}</p>}
        </div>
      </section>

      {editorOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center px-4 py-6">
          <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[2rem] bg-white shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-6 py-5">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">{activeItem?.id ? `Edit ${title}` : `Add ${title}`}</h3>
                <p className="text-sm text-slate-500">Keep the form short and practical for administrators.</p>
              </div>
              <button
                type="button"
                onClick={closeEditor}
                className="rounded-full border border-slate-300 p-2 text-slate-600 hover:border-red-600 hover:text-red-600 transition-colors"
                aria-label="Close editor"
              >
                <FaTimes />
              </button>
            </div>

            <form onSubmit={handleSave} className="grid gap-4 p-6 md:grid-cols-2">
              {fields.map((field) => (
                <label key={field.key} className={field.fullWidth ? 'md:col-span-2 block' : 'block'}>
                  <span className="mb-2 block text-sm font-medium text-slate-700">{field.label}</span>
                  <Field
                    field={field}
                    value={formData[field.key]}
                    editing={Boolean(activeItem?.id)}
                    onChange={(nextValue) => setFormData((current) => ({ ...current, [field.key]: nextValue }))}
                    onFileUpload={handleFileUpload}
                    uploading={uploading}
                    uploadError={uploadError}
                  />
                </label>
              ))}

              <div className="md:col-span-2 flex flex-wrap gap-3 pt-2">
                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700 transition-colors disabled:opacity-60"
                >
                  <FaSave />
                  {saving ? 'Saving...' : saveLabel}
                </button>
                <button
                  type="button"
                  onClick={closeEditor}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:border-red-600 hover:text-red-600 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollectionManager;