/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vk.com",
      },
    ],
  },
};

module.exports = nextConfig;
