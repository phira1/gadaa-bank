import { api } from './api';

export const newsService = {
  /** GET /news — paginated list */
  getAll: (params = {}) => api.get('news', params),

  /** GET /news/:id */
  getById: (id) => api.get(`news/${id}`),

  /** GET /news?featured=true */
  getFeatured: () => api.get('news', { featured: true }),

  /** POST /news (admin) */
  create: (data) => api.post('news', data),

  /** PUT /news/:id (admin) */
  update: (id, data) => api.put(`news/${id}`, data),

  /** DELETE /news/:id (admin) */
  remove: (id) => api.delete(`news/${id}`),
  /** POST /news/:id/increment-views */
  incrementViews: (id) => api.post(`news/${id}/increment-views`),
};
