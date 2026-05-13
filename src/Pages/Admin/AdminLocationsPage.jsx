import React, { useMemo, useState } from 'react';
import { branchService } from '../../services';
import CollectionManager from './components/CollectionManager';

const locationTypeOptions = [
  { label: 'Branch', value: 'branch' },
  { label: 'ATM', value: 'atm' },
  { label: 'Agent', value: 'agent' },
];

const locationFields = [
  { key: 'name', label: 'Name', placeholder: 'Location name' },
  { key: 'type', label: 'Type', type: 'select', options: locationTypeOptions, defaultValue: 'branch' },
  { key: 'region', label: 'Region', placeholder: 'Addis Ababa' },
  { key: 'address', label: 'Address', placeholder: 'Full street address', type: 'textarea', rows: 4, fullWidth: true },
  { key: 'phone', label: 'Phone', placeholder: '+251 ...' },
  { key: 'latitude', label: 'Latitude', type: 'number', placeholder: '8.9806' },
  { key: 'longitude', label: 'Longitude', type: 'number', placeholder: '38.7578' },
  { key: 'sort_order', label: 'Sort order', type: 'number', defaultValue: 0 },
  { key: 'is_active', label: 'Active', type: 'checkbox', checkboxLabel: 'Visible on the public site', defaultValue: true, fullWidth: true },
];

const locationFilters = [
  { label: 'All', value: '' },
  { label: 'Branches', value: 'branch' },
  { label: 'ATMs', value: 'atm' },
  { label: 'Agents', value: 'agent' },
];

const AdminLocationsPage = () => {
  const [locationType, setLocationType] = useState('');

  const listParams = useMemo(() => {
    const params = {};

    if (locationType) {
      params.type = locationType;
    }

    return params;
  }, [locationType]);

  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Location filters</h2>
            <p className="text-sm text-slate-500">Filter the list by location type before editing records.</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {locationFilters.map((filter) => {
              const isActive = locationType === filter.value;

              return (
                <button
                  key={filter.label}
                  type="button"
                  onClick={() => setLocationType(filter.value)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${isActive ? 'bg-slate-950 text-white' : 'border border-slate-300 bg-white text-slate-700 hover:border-red-600 hover:text-red-600'}`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <CollectionManager
        title="Branches, ATMs, and Agents"
        description="Manage all public locations from one screen. Use branches for offices, ATMs for cash access points, and agents for partner outlets."
        service={{
          getAll: (params = {}) => branchService.getAdminAll(params),
          create: (data) => branchService.create(data),
          update: (id, data) => branchService.update(id, data),
          remove: (id) => branchService.remove(id),
        }}
        listParams={listParams}
        fields={locationFields}
        statusField="is_active"
        itemTitle={(item) => item.name || 'Unnamed location'}
        itemSubtitle={(item) => `${item.type || 'branch'}${item.region ? ` • ${item.region}` : ''}`}
        itemStatus={(item) => item.address || 'No address added yet.'}
        createLabel="Add location"
        saveLabel="Save location"
        emptyLabel="No locations configured yet."
      />
    </div>
  );
};

export default AdminLocationsPage;