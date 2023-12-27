/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env: {
    mongodburl: "Your MongoDB connection String",
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
