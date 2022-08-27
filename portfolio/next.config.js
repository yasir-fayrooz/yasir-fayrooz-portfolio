/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['preview.redd.it', 'external-preview.redd.it'],
  },
};

module.exports = nextConfig;
