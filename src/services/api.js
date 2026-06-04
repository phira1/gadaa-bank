/**
 * Gadaa Bank — Central API Client
 * All requests go through this module.
 */

const resolveBaseUrl = () => {
  const configuredUrl = import.meta.env.VITE_API_URL;

  if (configuredUrl) {
    return configuredUrl.replace(/\/$/, '');
  }

  if (import.meta.env.DEV) {
    return 'http://localhost:8000/api/v1';
  }

  if (typeof window !== 'undefined') {
    return `${window.location.origin}/api/v1`;
  }

  throw new Error('Unable to resolve the API base URL. Set VITE_API_URL for server-side rendering.');
};

const BASE_URL = resolveBaseUrl();

let authToken = null;
const inFlightGetRequests = new Map();

const getToken = () => authToken;

const buildUrl = (endpoint) => `${BASE_URL}/${String(endpoint).replace(/^\/+/, '')}`;

const buildHeaders = (extra = {}, includeJsonContentType = true) => ({
  ...(includeJsonContentType ? { 'Content-Type': 'application/json' } : {}),
  Accept: 'application/json',
  ...(getToken() ? { Authorization: `Bearer ${getToken()}` } : {}),
  ...extra,
});

const handleResponse = async (res) => {
  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: 'Unknown error' }));
    const validationError = err.errors ? Object.values(err.errors).flat().filter(Boolean).join(' ') : '';
    throw new Error(validationError || err.message || `HTTP ${res.status}`);
  }
  return res.json();
};

export const api = {
  get: (endpoint, params = {}) => {
    const url = new URL(buildUrl(endpoint));
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null && v !== '') url.searchParams.append(k, v);
    });

    const requestKey = `${url.toString()}|${authToken || ''}`;

    if (inFlightGetRequests.has(requestKey)) {
      return inFlightGetRequests.get(requestKey);
    }

    const request = fetch(url.toString(), { headers: buildHeaders() })
      .then(handleResponse)
      .finally(() => {
        inFlightGetRequests.delete(requestKey);
      });

    inFlightGetRequests.set(requestKey, request);
    return request;
  },

  post: (endpoint, data = {}) =>
    fetch(buildUrl(endpoint), {
      method: 'POST',
      headers: data instanceof FormData ? buildHeaders({}, false) : buildHeaders(),
      body: data instanceof FormData ? data : JSON.stringify(data),
    }).then(handleResponse),

  put: (endpoint, data = {}) =>
    fetch(buildUrl(endpoint), {
      method: 'PUT',
      headers: data instanceof FormData ? buildHeaders({}, false) : buildHeaders(),
      body: data instanceof FormData ? data : JSON.stringify(data),
    }).then(handleResponse),

  delete: (endpoint) =>
    fetch(buildUrl(endpoint), {
      method: 'DELETE',
      headers: buildHeaders(),
    }).then(handleResponse),
};

// Auth helpers
export const setToken = (token) => {
  authToken = token;
};

export const clearToken = () => {
  authToken = null;
};

export const isAuthenticated = () => !!getToken();
