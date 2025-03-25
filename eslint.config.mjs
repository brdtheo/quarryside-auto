import pluginNext from "@next/eslint-plugin-next";

import eslintReact from "@eslint-react/eslint-plugin";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...tseslint.configs.recommended,
  eslintPluginUnicorn.configs.recommended,
  eslintReact.configs.recommended,
  {
    rules: {
      "unicorn/better-regex": "warn",
    },
  },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  { plugins: { "@next/next": pluginNext } },
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      ...pluginNext.configs.recommended.rules, // importing the rules
    },
  },
];
