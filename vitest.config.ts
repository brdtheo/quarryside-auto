import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname =
  import.meta.dirname === undefined
    ? path.dirname(fileURLToPath(import.meta.url))
    : import.meta.dirname;

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  optimizeDeps: {
    include: [
      "@faker-js/faker",
      "@prisma/client",
      "@storybook/experimental-nextjs-vite",
      "@tabler/icons-react",
      "clsx",
      "next-intl",
      "next/link",
      "react",
      "@storybook/test",
    ],
  },
  test: {
    environment: "happy-dom",
    coverage: {
      provider: "v8",
      exclude: ["src/app", "src/lib/prisma.ts", "src/lib/review"],
      include: ["src/components", "src/lib", "src/hooks", "src/utils.ts"],
    },
    setupFiles: "src/setupTests.tsx",
    server: {
      deps: {
        // https://github.com/vercel/next.js/issues/77200
        inline: ["next-intl"],
      },
    },
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/e2e/**",
      "**/.{idea,git,cache,output,temp}/**",
      "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*",
    ],
    projects: [
      {
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright(),
            instances: [{ browser: "chromium" }],
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
    ],
  },
  plugins: [
    react(),
    // The plugin will run tests for the stories defined in your Storybook config
    // See options at: https://storybook.js.org/docs/writing-tests/test-addon#storybooktest
    storybookTest({ configDir: path.join(dirname, ".storybook") }),
  ],
});
