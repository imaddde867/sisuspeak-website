/**
 * Utility function to handle asset paths for GitHub Pages deployment
 */
export const getAssetPath = (path: string): string => {
  const basePath = process.env.NODE_ENV === 'production' ? '/sisuspeak-website' : '';
  return `${basePath}${path}`;
};

/**
 * Get the base path for the application
 */
export const getBasePath = (): string => {
  return process.env.NODE_ENV === 'production' ? '/sisuspeak-website' : '';
};
