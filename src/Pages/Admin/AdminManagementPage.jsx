import React from 'react';
import CollectionManager from './components/CollectionManager';
import { managementService } from '../../services';

const managementFields = [
  { key: 'name', label: 'Name', placeholder: 'Full name' },
  { key: 'title', label: 'Title', placeholder: 'Chief Executive Officer' },
  { key: 'department', label: 'Department', placeholder: 'Executive Management' },
  { key: 'bio', label: 'Bio', placeholder: 'Leadership experience and responsibilities', type: 'textarea', rows: 4, fullWidth: true },
  { key: 'image_path', label: 'Image', type: 'file', accept: 'image/*', fullWidth: true },
  { key: 'sort_order', label: 'Sort order', type: 'number', defaultValue: 0 },
  { key: 'is_active', label: 'Active', type: 'checkbox', checkboxLabel: 'Visible on the public site', defaultValue: true, fullWidth: true },
];

const AdminManagementPage = () => (
  <CollectionManager
    title="Management Team"
    description="Manage the executives and leadership profiles shown on the website."
    service={managementService}
    fields={managementFields}
    statusField="is_active"
    itemTitle={(item) => item.name || 'Unnamed manager'}
    itemSubtitle={(item) => item.title || 'Management role'}
    itemStatus={(item) => item.department || 'No department assigned.'}
    createLabel="Add manager"
    saveLabel="Save manager"
  />
);

export default AdminManagementPage;