import { api, setToken, clearToken } from './api';

export const authService = {
  /** POST /auth/login */
  login: async (email, password) => {
    const data = await api.post('auth/login', { email, password });
    if (data.token) setToken(data.token);
    return data;
  },

  /** POST /auth/logout */
  logout: async () => {
    await api.post('auth/logout');
    clearToken();
  },

  /** GET /auth/me */
  me: () => api.get('auth/me'),
};
