import pluginNext from "@next/eslint-plugin-next";

import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  { plugins: { "@next/next": pluginNext } },
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      ...pluginNext.configs.recommended.rules, // importing the rules
    },
  },
];
