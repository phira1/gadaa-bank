import { api } from './api';

export const statService = {
  getAll: (params = {}) => api.get('stats', params),
  create: (data) => api.post('stats', data),
  update: (id, data) => api.put(`stats/${id}`, data),
  remove: (id) => api.delete(`stats/${id}`),
};
