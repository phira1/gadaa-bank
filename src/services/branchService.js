import { api } from './api';

export const branchService = {
  /** GET /branches — all active locations */
  getAll: (params = {}) => api.get('branches', params),

  /** GET /admin/branches — all locations for admin management */
  getAdminAll: (params = {}) => api.get('admin/branches', params),

  /** GET /branches?type=branch */
  getBranches: () => api.get('branches', { type: 'branch' }),

  /** GET /branches?type=atm */
  getATMs: () => api.get('branches', { type: 'atm' }),

  /** GET /branches?type=agent */
  getAgents: () => api.get('branches', { type: 'agent' }),

  /** POST /branches (admin) */
  create: (data) => api.post('branches', data),

  /** PUT /branches/:id (admin) */
  update: (id, data) => api.put(`branches/${id}`, data),

  /** DELETE /branches/:id (admin) */
  remove: (id) => api.delete(`branches/${id}`),
};
