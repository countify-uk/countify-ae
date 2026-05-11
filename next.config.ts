import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.countify.ae",
      },
      {
        protocol: "https",
        hostname: "countify.ae",
      },
    ],
  },
};

export default nextConfig;
