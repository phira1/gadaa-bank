import React from 'react';
import CollectionManager from './components/CollectionManager';
import { statService } from '../../services';

const statFields = [
  { key: 'key', label: 'Key', placeholder: 'banking-customers', disabledOnEdit: true },
  { key: 'label', label: 'Label', placeholder: 'Banking customers' },
  { key: 'value', label: 'Value', placeholder: '1.2M' },
  { key: 'suffix', label: 'Suffix', placeholder: '+' },
  { key: 'sort_order', label: 'Sort order', type: 'number', defaultValue: 0 },
];

const AdminStatsPage = () => (
  <CollectionManager
    title="Website Stats"
    description="Manage the counters and highlights shown across the public website."
    service={statService}
    fields={statFields}
    itemTitle={(item) => item.label || item.key || 'Untitled stat'}
    itemSubtitle={(item) => `Key: ${item.key || 'n/a'}`}
    itemStatus={(item) => `${item.value || '0'}${item.suffix || ''}`}
    createLabel="Add stat"
    saveLabel="Save stat"
    emptyLabel="No website stats configured."
    onBuildPayload={(form) => ({
      key: form.key,
      label: form.label,
      value: form.value,
      suffix: form.suffix,
      sort_order: form.sort_order,
    })}
  />
);

export default AdminStatsPage;