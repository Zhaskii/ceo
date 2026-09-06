import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.arkshgroup.com",
      },
      {
        protocol: "https",
        hostname: "arkshgroup.com",
      },
      {
        protocol: "https",
        hostname: "minio-scossgkks8s88ksoo08wk08o.209.50.229.110.sslip.io",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
