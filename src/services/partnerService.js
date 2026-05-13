import { api } from './api';

export const partnerService = {
  getAll: (params = {}) => api.get('partners', params),
  create: (data) => api.post('partners', data),
  update: (id, data) => api.put(`partners/${id}`, data),
  remove: (id) => api.delete(`partners/${id}`),
};
