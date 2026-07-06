// .storybook/main.ts
import type { StorybookConfig } from "@storybook/nextjs-vite";

import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-vitest",
    "storybook-next-intl",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  staticDirs: ["../public"],
  viteFinal: async (viteConfig) => {
    viteConfig.resolve ??= {};
    const existingAliases = viteConfig.resolve.alias ?? {};
    viteConfig.resolve.alias = {
      ...(Array.isArray(existingAliases)
        ? Object.fromEntries(
            existingAliases.map(({ find, replacement }) => [find, replacement]),
          )
        : existingAliases),
      "@": path.resolve(__dirname, "../src"),
      "@prisma/generated": path.resolve(
        __dirname,
        "../prisma/generated/prisma",
      ),
    };
    return viteConfig;
  },
};
export default config;
