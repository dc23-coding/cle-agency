/**
 * Clean Route Restoration Plugin
 * Optional: Keeps internal route memory (no external iframe logic).
 */

export default function routeMemoryPlugin() {
  return {
    name: 'vite:route-memory',
    apply: 'serve',
    transformIndexHtml() {
      const script = `
        // Basic in-browser route memory (no iframe messaging)
        const STORAGE_KEY = 'app-saved-route';

        const saveRoute = () => {
          try {
            const current = location.pathname + location.search + location.hash;
            sessionStorage.setItem(STORAGE_KEY, current);
          } catch (err) {
            console.warn('Unable to save route:', err);
          }
        };

        const restoreRoute = () => {
          try {
            const saved = sessionStorage.getItem(STORAGE_KEY);
            if (saved && saved.startsWith('/') && location.pathname !== saved) {
              history.replaceState(null, '', saved);
            }
          } catch (err) {
            console.warn('Unable to restore route:', err);
          }
        };

        window.addEventListener('popstate', saveRoute);
        window.addEventListener('hashchange', saveRoute);
        window.addEventListener('load', restoreRoute);
      `;

      return [
        {
          tag: 'script',
          attrs: { type: 'module' },
          children: script,
          injectTo: 'head',
        },
      ];
    },
  };
}
