/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  transpilePackages: [
    "@ridgemont/ui",
    "@ridgemont/config",
    "@ridgemont/auth",
    "@ridgemont/db",
    "@ridgemont/types",
    "@ridgemont/personas",
  ],
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
