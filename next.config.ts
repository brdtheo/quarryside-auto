import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
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
        hostname: "art.pixilart.com", // TEMP
        port: "",
      },
      {
        protocol: "https",
        hostname: "quarryside-auto-vehicle.s3.eu-west-3.amazonaws.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "quarryside-auto-wheel.s3.eu-west-3.amazonaws.com",
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

  // Automatically annotate React components to show their full name in breadcrumbs and session replay
  reactComponentAnnotation: {
    enabled: true,
  },

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  tunnelRoute: "/monitoring",

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: true,
});
