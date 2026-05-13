import DOMPurify from 'dompurify';

export const sanitizeHtml = (html) => {
  if (!html) {
    return '';
  }

  return DOMPurify.sanitize(html, {
    USE_PROFILES: { html: true },
  });
};