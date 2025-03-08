import { defineConfig } from "vitest/config";

import tsconfigPaths from "./node_modules/vite-tsconfig-paths/dist/index.js";

export default defineConfig({
  test: {
    coverage: {
      provider: "v8",
    },
  },
  plugins: [tsconfigPaths()],
});
