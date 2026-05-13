import { useEffect } from 'react';

const DEFAULT_TITLE = 'Gadaa Bank';
const DEFAULT_DESCRIPTION = 'Gadaa Bank official corporate website.';

const setMetaTag = (selector, attribute, value) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    const [, attrName, attrValue] = selector.match(/\[(.+?)="(.+?)"\]/) || [];
    if (attrName && attrValue) {
      element.setAttribute(attrName, attrValue);
    }
    document.head.appendChild(element);
  }

  element.setAttribute(attribute, value);
};

const usePageMeta = ({ title, description, canonicalPath }) => {
  useEffect(() => {
    const resolvedTitle = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;
    document.title = resolvedTitle;

    if (description) {
      setMetaTag('meta[name="description"]', 'content', description);
    }

    if (canonicalPath) {
      let link = document.head.querySelector('link[rel="canonical"]');

      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }

      const origin = window.location.origin;
      link.setAttribute('href', `${origin}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`);
    }

    return () => {
      document.title = DEFAULT_TITLE;
      setMetaTag('meta[name="description"]', 'content', DEFAULT_DESCRIPTION);
    };
  }, [title, description, canonicalPath]);
};

export default usePageMeta;