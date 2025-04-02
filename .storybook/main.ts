import type { StorybookConfig } from "@storybook/experimental-nextjs-vite";

import path from "node:path";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/experimental-addon-test",
    "storybook-next-intl",
  ],
  framework: {
    name: "@storybook/experimental-nextjs-vite",
    options: {},
  },
  staticDirs: ["../public"],
  viteFinal: async (config) => {
    config.resolve ??= {};
    config.resolve.alias ??= {
      "@": path.resolve(__dirname, "../src"),
    };
    return config;
  },
};
export default config;
