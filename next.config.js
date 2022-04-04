/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        // it can proxy calls to go api server
        source: '/go-api/:path*',
        destination: process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_API_SERVER_PROD : 'http://localhost:8080' + '/:path*',
      },
    ]
  },
};

module.exports = nextConfig;
