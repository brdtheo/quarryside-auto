import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  output: "standalone",
  productionBrowserSourceMaps: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co", // TEMP
        port: "",
      },
      {
        protocol: "https",
        hostname: "d84dt5rvw1knk.cloudfront.net", // vehicles
        port: "",
      },
      {
        protocol: "https",
        hostname: "d2d6s0rtg9yjy3.cloudfront.net", // wheels
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

export default withSentryConfig(withNextIntl(nextConfig), {
  // For all available options, see:
  // https://www.npmjs.com/package/@sentry/webpack-plugin#options

  org: "brdtheo",

  project: "quarryside-auto",

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  tunnelRoute: "/monitoring",
});
