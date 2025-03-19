import { defineConfig } from "vitest/config";

import react from "@vitejs/plugin-react";

import tsconfigPaths from "./node_modules/vite-tsconfig-paths/dist/index.js";

export default defineConfig({
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
  },
  plugins: [tsconfigPaths(), react()],
});
