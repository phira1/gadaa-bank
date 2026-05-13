import React from 'react';
import CollectionManager from './components/CollectionManager';
import { partnerService } from '../../services';

const partnerFields = [
  { key: 'name', label: 'Name', placeholder: 'Partner name' },
  { key: 'website', label: 'Website', placeholder: 'https://partner.example.com' },
  { key: 'logo_path', label: 'Logo', type: 'file', accept: 'image/*', fullWidth: true },
  { key: 'description', label: 'Description', placeholder: 'Short partnership summary', type: 'textarea', rows: 4, fullWidth: true },
  { key: 'sort_order', label: 'Sort order', type: 'number', defaultValue: 0 },
  { key: 'is_active', label: 'Active', type: 'checkbox', checkboxLabel: 'Visible on the public site', defaultValue: true, fullWidth: true },
];

const AdminPartnersPage = () => (
  <CollectionManager
    title="Partners"
    description="Manage partner logos, websites, and descriptions displayed on the public site."
    service={partnerService}
    fields={partnerFields}
    statusField="is_active"
    itemTitle={(item) => item.name || 'Unnamed partner'}
    itemSubtitle={(item) => item.website || 'No website configured'}
    itemStatus={(item) => item.description || 'No description added yet.'}
    createLabel="Add partner"
    saveLabel="Save partner"
  />
);

export default AdminPartnersPage;