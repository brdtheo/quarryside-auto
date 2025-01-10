import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/cars",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "preview.redd.it",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.beamng.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.beamng-wheels.org",
        port: "",
      },
      {
        protocol: "https",
        hostname: "art.pixilart.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
