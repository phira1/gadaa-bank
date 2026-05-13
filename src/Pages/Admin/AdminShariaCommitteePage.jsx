import React from 'react';
import CollectionManager from './components/CollectionManager';
import { shariaCommitteeService } from '../../services';

const shariaCommitteeFields = [
  { key: 'name', label: 'Name', placeholder: 'Full name' },
  { key: 'role', label: 'Role', placeholder: 'Chairperson' },
  { key: 'bio', label: 'Bio', placeholder: 'Short profile and Sharia governance background', type: 'textarea', rows: 4, fullWidth: true },
  { key: 'image_path', label: 'Image', type: 'file', accept: 'image/*', fullWidth: true },
  { key: 'sort_order', label: 'Sort order', type: 'number', defaultValue: 0 },
  { key: 'is_active', label: 'Active', type: 'checkbox', checkboxLabel: 'Visible on the public site', defaultValue: true, fullWidth: true },
];

const AdminShariaCommitteePage = () => (
  <CollectionManager
    title="Sharia Advisory Committee"
    description="Manage committee members, their roles, public profiles, and display order."
    service={shariaCommitteeService}
    fields={shariaCommitteeFields}
    statusField="is_active"
    itemTitle={(item) => item.name || 'Unnamed committee member'}
    itemSubtitle={(item) => item.role || 'Committee role'}
    itemStatus={(item) => item.bio || 'No biography added yet.'}
    createLabel="Add committee member"
    saveLabel="Save committee member"
  />
);

export default AdminShariaCommitteePage;