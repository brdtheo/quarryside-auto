import React from "react";

import nextIntl from "./next-intl";
import { NextIntlClientProvider } from "next-intl";

import { faker } from "@faker-js/faker";

import type { Preview } from "@storybook/react";

import "../src/app/globals.css";

// @ts-expect-error Mock BigInt serialization
BigInt.prototype.toJSON = function () {
  return this.toString();
};

/**
 * Instanciates a static seed for faker
 * to have predictable data in visual tests
 */
faker.seed(123);

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
    nextjs: {
      appDirectory: true,
    },
    nextIntl,
  },
  decorators: [
    (Story) => {
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
