import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: []
  },
  poweredByHeader: false,
  compress: true
};

export default nextConfig;
