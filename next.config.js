/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  reactStrictMode: false,
  images: {
    unoptimized: true, // Disable default image optimization
  },

};

module.exports = nextConfig;
