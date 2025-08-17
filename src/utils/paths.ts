/**
 * Utility function to handle asset paths for deployment
 */
export const getAssetPath = (path: string): string => {
  // Support optional base path (e.g., GitHub Pages project site)
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (!base) return path;
  // Avoid duplicating base or protocol URLs
  if (path.startsWith('http')) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
};

/**
 * Get the base path for the application
 */
export const getBasePath = (): string => {
  return process.env.NEXT_PUBLIC_BASE_PATH || '';
};
