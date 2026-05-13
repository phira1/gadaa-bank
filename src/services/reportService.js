import { api } from './api';

export const reportService = {
  /** GET /reports */
  getAll: (params = {}) => api.get('reports', params),

  /** GET /reports?type=annual */
  getAnnual: () => api.get('reports', { type: 'annual' }),

  /** GET /reports?type=financial */
  getFinancial: () => api.get('reports', { type: 'financial' }),

  /** GET /reports?type=nbe */
  getNBE: () => api.get('reports', { type: 'nbe' }),

  /** POST /reports (admin) */
  create: (data) => api.post('reports', data),

  /** PUT /reports/:id (admin) */
  update: (id, data) => api.put(`reports/${id}`, data),

  /** DELETE /reports/:id (admin) */
  remove: (id) => api.delete(`reports/${id}`),
};
