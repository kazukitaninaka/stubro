/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        // it can proxy calls to go api server
        source: '/go-api/:path*',
        destination: process.env.NODE_ENV === "production" ? 'https://stubro-server-qlz7utdsha-an.a.run.app' : 'http://localhost:8080' + '/:path*',
      },
    ]
  },
};

module.exports = nextConfig;
