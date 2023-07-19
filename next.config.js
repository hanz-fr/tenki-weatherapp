/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.weatherapi.com",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
      },
    ],
  },
  async rewrites () {
    return [
      {
        source: '/api/:path*',
        destination: 'http://api.weatherapi.com/:path*',
      },
      {
        source: '/api/:path*',
        destination: 'https://api.timezonedb.com/:path*',
      }
    ]
  }
};

module.exports = nextConfig;
