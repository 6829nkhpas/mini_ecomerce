/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3001/api/:path*",
      },
    ];
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/mini_ecomerce",
};

module.exports = nextConfig;
