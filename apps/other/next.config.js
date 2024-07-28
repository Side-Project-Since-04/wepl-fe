/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ['@wepl/ui'],
  eslint: {
    ignoreDuringBuilds: true,
  },
};
