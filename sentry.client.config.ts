// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://fc7b798657e81f67183e7c28127be29d@o1075246.ingest.us.sentry.io/4508891998846976",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  // Restrict error reporting to production environments
  enabled: ["production", "preview"].includes(
    process?.env?.NEXT_PUBLIC_VERCEL_ENV ?? "",
  ),

  integrations: [
    // Add browser profiling integration to the list of integrations
    Sentry.browserProfilingIntegration(),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // Set `tracePropagationTargets` to control for which URLs trace propagation should be enabled
  tracePropagationTargets: [/https:\/\/www.quarryside-auto.com\//],

  // Set profilesSampleRate to 1.0 to profile every transaction.
  // Since profilesSampleRate is relative to tracesSampleRate,
  // the final profiling rate can be computed as tracesSampleRate * profilesSampleRate
  // For example, a tracesSampleRate of 0.5 and profilesSampleRate of 0.5 would
  // result in 25% of transactions being profiled (0.5*0.5=0.25)
  profilesSampleRate: 1.0,
});
