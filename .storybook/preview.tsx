import React from "react";

import nextIntl from "./next-intl";
import { NextIntlClientProvider } from "next-intl";

import { faker } from "@faker-js/faker";

import type { Preview } from "@storybook/react";

import "../src/app/globals.css";

const preview: Preview = {
  //👇 Enables auto-generated documentation for all stories
  tags: ["autodocs"],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /date$/i,
      },
    },
    nextIntl,
  },
  decorators: [
    (Story) => {
      /**
       * Instanciates a static seed for faker
       * to have predictable data in visual tests
       */
      faker.seed(123);
      return (
        <NextIntlClientProvider locale="en">
          <Story />
        </NextIntlClientProvider>
      );
    },
  ],
  initialGlobals: {
    locale: "en",
    locales: {
      en: "English",
      ru: "Russian",
    },
  },
};

export default preview;
