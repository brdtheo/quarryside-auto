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
