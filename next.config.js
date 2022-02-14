/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // basePath: 'https://www.peque.tech',
  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/framework/getting-started',
        permanent: false,
      },
      {
        source: '/docs/:project',
        destination: '/docs/:project/getting-started',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
