const backendOrigin = (() => {
  const assetBase = import.meta.env.VITE_ASSET_URL || import.meta.env.VITE_API_URL?.replace(/\/api\/v1\/?$/, '');

  if (assetBase) {
    return assetBase.replace(/\/$/, '');
  }

  if (import.meta.env.DEV) {
    return 'http://localhost:8000';
  }

  throw new Error('VITE_ASSET_URL or VITE_API_URL is required for production builds.');
})();

export const getAssetUrl = (path) => {
  if (!path) {
    return '';
  }

  if (/^https?:\/\//i.test(path) || path.startsWith('//') || path.startsWith('data:')) {
    return path;
  }

  return `${backendOrigin}/storage/${String(path).replace(/^\/+/, '')}`;
};

export const getPublicAssetUrl = (path) => {
  if (!path) {
    return '';
  }

  if (/^https?:\/\//i.test(path) || path.startsWith('//') || path.startsWith('data:')) {
    return path;
  }

  return `${backendOrigin}/${String(path).replace(/^\/+/, '')}`;
};