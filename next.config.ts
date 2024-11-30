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
};

export default nextConfig;
