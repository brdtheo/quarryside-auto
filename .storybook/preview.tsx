import nextIntl from "./next-intl";

import type { Preview } from "@storybook/react";

import "../src/app/globals.css";

const preview: Preview = {
  //👇 Enables auto-generated documentation for all stories
  tags: ["autodocs"],
  parameters: {
    nextIntl,
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  initialGlobals: {
    locale: "en",
    locales: {
      en: "English",
      ru: "日本語",
    },
  },
};

export default preview;
