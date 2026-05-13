import { api } from './api';

export const complaintService = {
  /** POST /complaints — public form submission */
  submit: (data) => api.post('complaints', data),

  /** GET /complaints (admin) */
  getAll: (params = {}) => api.get('complaints', params),

  /** GET /complaints/:id (admin) */
  getById: (id) => api.get(`complaints/${id}`),

  /** PUT /complaints/:id (admin) — update status/notes */
  update: (id, data) => api.put(`complaints/${id}`, data),
};
