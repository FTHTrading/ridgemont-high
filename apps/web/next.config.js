/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@ridgemont/ui",
    "@ridgemont/config",
    "@ridgemont/auth",
    "@ridgemont/db",
    "@ridgemont/types",
    "@ridgemont/personas",
  ],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
};

module.exports = nextConfig;
