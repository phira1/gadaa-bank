import { api } from './api';

export const shariaCommitteeService = {
  getAll: (params = {}) => api.get('sharia-committee', params),
  create: (data) => api.post('sharia-committee', data),
  update: (id, data) => api.put(`sharia-committee/${id}`, data),
  remove: (id) => api.delete(`sharia-committee/${id}`),
};