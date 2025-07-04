/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
    unoptimized: true
  },
  poweredByHeader: false,
  compress: true,
  basePath: process.env.NODE_ENV === 'production' ? '/sisuspeak' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/sisuspeak/' : '',
};

export default nextConfig;t('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
    unoptimized: true
  },
  poweredByHeader: false,
  compress: true,
  basePath: process.env.NODE_ENV === 'production' ? '/sisuspeak' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/sisuspeak/' : '',
};

export default nextConfig;
