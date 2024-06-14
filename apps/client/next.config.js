/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ['@wepl/ui'],
  rewrites: async () => {
    return [
      {
        source: '/wepl-api/:path*',
        destination: 'https://wepl-latest.onrender.com/:path*',
      },
    ];
  },
};
