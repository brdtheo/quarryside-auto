import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/vehicles",
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
      {
        protocol: "https",
        hostname: "qa-vehicle.s3.eu-west-3.amazonaws.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "qa-wheel.s3.eu-west-3.amazonaws.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
