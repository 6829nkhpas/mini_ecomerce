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
  basePath: "/mini-ecommerce",
  assetPrefix: "/mini-ecommerce/",
  trailingSlash: true,
};

module.exports = nextConfig;
