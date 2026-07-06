import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

import eslintPluginUnicorn from "eslint-plugin-unicorn";
import { defineConfig, globalIgnores } from "eslint/config";

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  eslintPluginUnicorn.configs.unopinionated,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "**/*.test.ts",
    "prisma/generated/**",
    ".storybook/**",
    "storybook-static/**",
    "coverage/**",
    "locales/**",
    "messages/**",
    "src/setupTests.tsx",
  ]),
  {
    settings: {
      // Fix for ESLint 10+: eslint-plugin-react uses context.getFilename() (legacy API)
      // which was removed in ESLint 10 flat config. Declaring the version explicitly
      // prevents the plugin from trying to auto-detect it and failing.
      react: { version: "19" },
    },
  },
]);

export default eslintConfig;
