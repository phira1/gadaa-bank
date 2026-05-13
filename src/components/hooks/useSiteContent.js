import { useEffect, useState } from 'react';
import { siteContentService } from '../../services/siteContentService';

const useSiteContent = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadContent = async () => {
      try {
        const data = await siteContentService.getAll();
        if (isMounted) {
          setContent(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Failed to load site content.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadContent();

    return () => {
      isMounted = false;
    };
  }, []);

  return { content, loading, error };
};

export default useSiteContent;