// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/nextjs-vite";

import path, { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-vitest", "storybook-next-intl", "@storybook/addon-docs"],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  staticDirs: ["../public"],
  viteFinal: async (config) => {
    config.resolve ??= {};
    config.resolve.alias ??= {
      "@": path.resolve(__dirname, "../src"),
      /**
       * Using a workaround for this prisma issue
       * @see https://github.com/prisma/prisma/issues/12504#issuecomment-1827097530
       */
      //
      ".prisma/client/index-browser":
        "../node_modules/@prisma/client/index-browser.js",
    };
    return config;
  },
};
export default config;
