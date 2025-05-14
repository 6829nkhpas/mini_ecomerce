/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/mini-ecommerce",
  assetPrefix: "/mini-ecommerce/",
  trailingSlash: true,
};

module.exports = nextConfig;
