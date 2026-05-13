import { api } from './api';

export const contactService = {
  submit: (data) => api.post('contact', data),
  getAll: (params = {}) => api.get('contact', params),
  markRead: (id) => api.put(`contact/${id}/read`),
};