import React from 'react';
import CollectionManager from './components/CollectionManager';
import { boardService } from '../../services';

const boardFields = [
  { key: 'name', label: 'Name', placeholder: 'Full name' },
  { key: 'role', label: 'Role', placeholder: 'Board Chairperson' },
  { key: 'bio', label: 'Bio', placeholder: 'Short profile and governance background', type: 'textarea', rows: 4, fullWidth: true },
  { key: 'image_path', label: 'Image', type: 'file', accept: 'image/*', fullWidth: true },
  { key: 'sort_order', label: 'Sort order', type: 'number', defaultValue: 0 },
  { key: 'is_active', label: 'Active', type: 'checkbox', checkboxLabel: 'Visible on the public site', defaultValue: true, fullWidth: true },
];

const AdminBoardPage = () => (
  <CollectionManager
    title="Board of Directors"
    description="Manage board members, their public profiles, and display order."
    service={boardService}
    fields={boardFields}
    statusField="is_active"
    itemTitle={(item) => item.name || 'Unnamed board member'}
    itemSubtitle={(item) => item.role || 'Board role'}
    itemStatus={(item) => item.bio || 'No biography added yet.'}
    createLabel="Add board member"
    saveLabel="Save board member"
  />
);

export default AdminBoardPage;