import { useState, useEffect, useCallback } from 'react';

/**
 * Generic hook for fetching data from the API.
 *
 * @param {Function} fetchFn  – async function that returns data
 * @param {Array}    deps     – dependency array (like useEffect)
 * @returns {{ data, loading, error, refetch }}
 *
 * Usage:
 *   const { data, loading, error } = useApi(() => newsService.getAll(), []);
 */
const useApi = (fetchFn, deps = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const execute = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchFn();
      setData(result);
    } catch (err) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useEffect(() => {
    execute();
  }, [execute]);

  return { data, loading, error, refetch: execute };
};

export default useApi;
