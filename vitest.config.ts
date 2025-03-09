import { defineConfig } from "vitest/config";

import react from "@vitejs/plugin-react";

import tsconfigPaths from "./node_modules/vite-tsconfig-paths/dist/index.js";

export default defineConfig({
  test: {
    environment: "happy-dom",
    coverage: {
      provider: "v8",
    },
  },
  plugins: [tsconfigPaths(), react()],
});
