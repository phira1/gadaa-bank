import { api, setToken, clearToken } from './api';

export const authService = {
  /** POST /auth/login */
  login: async (email, password) => {
    const data = await api.post('auth/login', { email, password });
    if (data.token) setToken(data.token);
    return data;
  },

  /** PUT /auth/password */
  updateAdminPassword: async ({ currentPassword, password, passwordConfirmation }) =>
    api.put('auth/password', {
      current_password: currentPassword,
      password,
      password_confirmation: passwordConfirmation,
    }),

  /** POST /auth/logout */
  logout: async () => {
    await api.post('auth/logout');
    clearToken();
  },

  /** GET /auth/me */
  me: () => api.get('auth/me'),
};
