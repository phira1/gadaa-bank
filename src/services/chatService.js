import { api } from './api';

export const chatService = {
  send: (data) => api.post('chat', data),
};