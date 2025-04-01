import pluginNext from "@next/eslint-plugin-next";

import eslintReact from "@eslint-react/eslint-plugin";
import eslintPluginTestingLibrary from "eslint-plugin-testing-library";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...tseslint.configs.recommended,
  eslintPluginUnicorn.configs.recommended,
  eslintReact.configs.recommended,
  {
    files: [
      "src/app/*.{js,mjs,cjs,ts,jsx,tsx}",
      "src/components/*.{js,mjs,cjs,ts,jsx,tsx}",
      "src/hooks/*.{js,mjs,cjs,ts,jsx,tsx}",
      "src/lib/*.{js,mjs,cjs,ts,jsx,tsx}",
      "data/*.ts",
    ],
  },
  {
    rules: {
      "unicorn/better-regex": "warn",
      "unicorn/prevent-abbreviations": "off",
      "unicorn/filename-case": "off",
    },
  },
  {
    files: ["src/components/ThemeSwitcher/ThemeSwitcher.tsx"],
    rules: {
      "unicorn/no-useless-undefined": "off",
    },
  },
  {
    files: [
      "src/lib/wheel/WheelRichData/WheelRichData.tsx",
      "src/lib/vehicle/VehicleRichData/VehicleRichData.tsx",
    ],
    rules: {
      "@eslint-react/dom/no-dangerously-set-innerhtml": "off",
    },
  },
  {
    files: [
      "src/lib/media/factory.ts",
      "src/lib/vehicle/factory.ts",
      "src/lib/media/MediaList/MediaList.tsx",
      "src/lib/media/MediaList/medialist.test.tsx",
      "src/lib/media/MediaList/MediaList.stories.tsx",
    ],
    rules: {
      "unicorn/no-null": "off",
    },
  },
  {
    files: ["e2e/**"],
    rules: {
      "unicorn/no-await-expression-member": "off",
    },
  },
  {
    files: [".storybook/**"],
    rules: {
      "unicorn/prefer-module": "off",
    },
  },
  {
    ignores: [
      "src/setupTests.tsx",
      "src/middleware.ts",
      "src/types.ts",
      "src/i18n/request.ts",
    ],
  },
  { languageOptions: { globals: globals.browser } },
  { plugins: { "@next/next": pluginNext } },
  { plugins: { "testing-library": eslintPluginTestingLibrary } },
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      ...pluginNext.configs.recommended.rules, // importing the rules
    },
  },
  {
    rules: {
      "@eslint-react/hooks-extra/no-direct-set-state-in-use-effect": "off",
    },
  },
];
