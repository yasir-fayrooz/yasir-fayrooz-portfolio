/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['preview.redd.it', 'external-preview.redd.it'],
  },
};

module.exports = nextConfig;
