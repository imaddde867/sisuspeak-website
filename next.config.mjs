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
  basePath: '',
  assetPrefix: '',
};

export default nextConfig;
