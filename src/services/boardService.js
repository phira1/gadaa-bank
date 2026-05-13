import { api } from './api';

export const boardService = {
  getAll: (params = {}) => api.get('board', params),
  create: (data) => api.post('board', data),
  update: (id, data) => api.put(`board/${id}`, data),
  remove: (id) => api.delete(`board/${id}`),
};
