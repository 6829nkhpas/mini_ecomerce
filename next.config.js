/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/mini_ecommerce",
  assetPrefix: "/mini_ecommerce/",
  trailingSlash: true,
  // Ensure static files are properly handled
  distDir: "out",
};

module.exports = nextConfig;
