import { api } from './api';

export const siteContentService = {
  getAll: () => api.get('site-content'),
  update: (key, payload) => api.put(`site-content/${encodeURIComponent(key)}`, { payload }),
};