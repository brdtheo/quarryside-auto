import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co", // TEMP
        port: "",
      },
      {
        protocol: "https",
        hostname: "art.pixilart.com", // TEMP
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
      {
        protocol: "https",
        hostname: "qa-advertising.s3.eu-west-3.amazonaws.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "quarryside-auto-misc.s3.eu-west-3.amazonaws.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "quarryside-auto-post.s3.eu-west-3.amazonaws.com",
        port: "",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
