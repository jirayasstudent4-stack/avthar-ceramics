import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,

  images: {
    unoptimized: true,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },

      {
        protocol: "https",
        hostname: "images.pexels.com",
      },

      {
        protocol: "https",
        hostname: "images.orientbell.com",
      },

      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",

        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },

          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },

          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;