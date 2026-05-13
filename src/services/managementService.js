import { api } from './api';

export const managementService = {
  getAll: (params = {}) => api.get('management', params),
  create: (data) => api.post('management', data),
  update: (id, data) => api.put(`management/${id}`, data),
  remove: (id) => api.delete(`management/${id}`),
};
