/**
 * Utility function to handle asset paths for deployment
 */
export const getAssetPath = (path: string): string => {
  // For root domain deployment, no basePath is needed
  return path;
};

/**
 * Get the base path for the application
 */
export const getBasePath = (): string => {
  // For root domain deployment, no basePath is needed
  return '';
};
