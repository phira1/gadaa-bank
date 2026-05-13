import sitemap from '../data/sitemap.json';


export function findPages(query, maxResults = 5) {
  if (!query) return [];
  const q = String(query).toLowerCase();
  const tokens = q.split(/\W+/).filter(Boolean);

  const scored = sitemap
    .map((entry) => {
      const hay = (entry.title + ' ' + (entry.keywords || []).join(' ')).toLowerCase();
      let score = 0;

      // Exact keyword matches get a high boost
      (entry.keywords || []).forEach((kw) => {
        if (String(kw).toLowerCase() === q) score += 10;
      });

      // Exact title match gets a high boost
      if (entry.title && entry.title.toLowerCase() === q) score += 10;

      // Token substring matches
      tokens.forEach((t) => {
        if (hay.includes(t)) score += 2;
      });

      // Full-query substring match
      if (q.length > 3 && hay.includes(q)) score += 3;

      return { ...entry, score };
    })
    .filter((e) => e.score > 0)
    .sort((a, b) => b.score - a.score);

  // Prefer explicit base URL from Vite env for production builds, fall back to window origin in browser
  const envBase = typeof import.meta !== 'undefined' ? import.meta.env?.VITE_APP_BASE_URL : undefined;
  const windowBase = typeof window !== 'undefined' ? window.location.origin : '';
  const baseRaw = envBase || windowBase || '';
  const base = baseRaw ? String(baseRaw).replace(/\/$/, '') : '';

  return scored.slice(0, maxResults).map((e) => ({
    title: e.title,
    route: e.route,
    url: base ? base + e.route : e.route,
  }));
}

export default findPages;
