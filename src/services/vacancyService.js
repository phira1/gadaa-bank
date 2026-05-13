import { api } from './api';

export const vacancyService = {
  /** GET /vacancies — active vacancies by default */
  getAll: (params = {}) => api.get('vacancies', params),

  /** GET /vacancies/:id */
  getById: (id) => api.get(`vacancies/${id}`),

  /** POST /vacancies (admin) */
  create: (data) => api.post('vacancies', data),

  /** PUT /vacancies/:id (admin) */
  update: (id, data) => api.put(`vacancies/${id}`, data),

  /** DELETE /vacancies/:id (admin) */
  remove: (id) => api.delete(`vacancies/${id}`),
};
