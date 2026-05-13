import React from 'react';
import CollectionManager from './components/CollectionManager';
import { reportService } from '../../services';

const reportTypeOptions = [
  { label: 'Annual', value: 'annual' },
  { label: 'Financial', value: 'financial' },
  { label: 'NBE', value: 'nbe' },
  { label: 'Prospectus', value: 'prospectus' },
  { label: 'Press release', value: 'press_release' },
  { label: 'Shareholder event', value: 'shareholder_event' },
];

const reportFields = [
  { key: 'title', label: 'Title', placeholder: 'Annual report 2025' },
  { key: 'type', label: 'Type', type: 'select', options: reportTypeOptions, defaultValue: 'annual' },
  { key: 'year', label: 'Year', type: 'number', placeholder: '2025' },
  { key: 'event_date', label: 'Event date', type: 'date', placeholder: '2026-04-07' },
  { key: 'location', label: 'Location', placeholder: 'Addis Ababa, Ethiopia' },
  { key: 'description', label: 'Description', placeholder: 'Short summary for the report listing', type: 'textarea', rows: 4, fullWidth: true },
  { key: 'file_path', label: 'Document (PDF, DOC, etc.)', type: 'file', accept: '.pdf,.doc,.docx,.xlsx,.ppt,.pptx', fullWidth: true },
  { key: 'file_url', label: 'Document URL (alternative to upload)', placeholder: 'https://...' },
  { key: 'video_url', label: 'Video URL', placeholder: 'https://youtu.be/...' },
  { key: 'sort_order', label: 'Sort order', type: 'number', defaultValue: 0 },
  { key: 'is_published', label: 'Published', type: 'checkbox', checkboxLabel: 'Visible on the public site', defaultValue: true, fullWidth: true },
];

const AdminReportsPage = () => (
  <CollectionManager
    title="Reports"
    description="Manage annual reports, financial documents, NBE documents, and other downloadable content."
    service={reportService}
    fields={reportFields}
    statusField="is_published"
    itemTitle={(item) => item.title || 'Untitled report'}
    itemSubtitle={(item) => `${item.type || 'report'}${item.year ? ` • ${item.year}` : ''}`}
    itemStatus={(item) => item.description || 'No description added yet.'}
    createLabel="Add report"
    saveLabel="Save report"
  />
);

export default AdminReportsPage;