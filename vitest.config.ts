import { defineConfig } from "vitest/config";

import react from "@vitejs/plugin-react";

import tsconfigPaths from "./node_modules/vite-tsconfig-paths/dist/index.js";

export default defineConfig({
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
  },
  plugins: [tsconfigPaths(), react()],
});
