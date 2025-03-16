import { defineConfig } from "vitest/config";

import react from "@vitejs/plugin-react";

import tsconfigPaths from "./node_modules/vite-tsconfig-paths/dist/index.js";

export default defineConfig({
  test: {
    environment: "happy-dom",
    coverage: {
      provider: "v8",
      exclude: [
        "src/lib/prisma.ts",
        "src/app/global-error.tsx",
        "src/app/robots.ts",
        "src/app/sitemap.ts",
        "src/lib/review",
      ],
      include: [
        "src/app",
        "src/components",
        "src/lib",
        "src/hooks",
        "src/utils.ts",
      ],
    },
    setupFiles: "src/setupTests.tsx",
  },
  plugins: [tsconfigPaths(), react()],
});
