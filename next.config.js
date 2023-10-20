/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    OPEN_WEATHER_KEY: process.env.OPEN_WEATHER_KEY,
  },
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
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://api.weatherapi.com/:path*",
      },
      {
        source: "/api/:path*",
        destination: "https://api.timezonedb.com/:path*",
      },
      {
        source: "/api/:path*",
        destination: "https://api.openweathermap.org/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
