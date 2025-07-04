"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nextConfig = {
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
    basePath: process.env.NODE_ENV === 'production' ? '/sisuspeak-website' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/sisuspeak-website/' : '',
};
exports.default = nextConfig;
