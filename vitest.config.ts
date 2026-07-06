import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
    alias: {
      "@": path.resolve(dirname, "./src"),
      "@prisma/generated": path.resolve(dirname, "./prisma/generated"),
    },
  },
  optimizeDeps: {
    include: [
      "@faker-js/faker",
      "@tabler/icons-react",
      "clsx",
      "next-intl",
      "next/link",
      "react",
      "@storybook/test",
      // prevents first-run optimizer/reload issues
      "sb-original/default-loader",
      "sb-original/image-context",
    ],
  },
  plugins: [react()],
  test: {
    environment: "happy-dom",
    coverage: {
      provider: "v8",
      exclude: ["src/app", "prisma/index.ts", "src/lib/review", "locales"],
      include: ["src/components", "src/lib", "src/hooks", "src/utils.ts"],
    },
    setupFiles: "src/setupTests.tsx",
    server: {
      deps: {
        inline: ["next-intl"],
      },
    },
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/e2e/**",
      "**/.{idea,git,cache,output,temp}/**",
      "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*",
      "**/locales/**",
    ],
    projects: [
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
            storybookScript: "pnpm storybook --no-open",
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright(),
            instances: [{ browser: "chromium" }],
          },
        },
      },
    ],
  },
});
