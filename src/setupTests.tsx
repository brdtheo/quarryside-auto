import { ReactNode } from "react";

import { NextIntlClientProvider } from "next-intl";

import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

import { faker } from "@faker-js/faker";

import messages from "../messages/en";

/**
 * Create a wrapper for client component translations
 */
export const NextIntlClientWrapper = ({
  children,
}: {
  children: ReactNode;
}) => (
  <NextIntlClientProvider locale="en" messages={messages}>
    {children}
  </NextIntlClientProvider>
);

/**
 * Mock translations getter used in server components
 */
vi.mock("next-intl/server", async () => {
  /**
   * Returns the i18n translation from a given message object and path
   * @param messages Messages from the current namespace
   * @param key Path to i18n string
   * @returns {string}
   */
  const getTranslation = (messages: Record<string, unknown>, key: string) => {
    const splittedKey = key.split("."); // ['path','to','translation']
    // @ts-expect-error TODO bad typing definition
    return splittedKey.reduce((acc: Record<string, unknown>, part: string) => {
      return acc?.[part];
    }, messages);
  };
  /**
   * Replaces placeholders in the translation string with provided variables
   * @param string Translation string that possibly contains placeholders
   * @param variables Object containing variables
   * @returns {string}
   */
  const injectVariables = (
    string: string,
    variables: Record<string, string>,
  ) => {
    return string.replace(
      /\{(.*?)\}/g,
      (_, key) => variables[key.trim()] ?? `{${key.trim()}}`,
    );
  };
  return {
    getTranslations: (namespace: string) => {
      return (key: string, variables = {}) => {
        const string = getTranslation(
          messages[namespace as keyof typeof messages],
          key,
        );
        return string ? injectVariables(string, variables) : "";
      };
    },
  };
});

/**
 * Mock browser navigation utils/hooks for obvious reasons
 */
vi.mock("next/navigation", () => {
  return {
    usePathname: () => {
      faker.seed(777);
      const randomSlug = encodeURIComponent(faker.internet.domainWord());
      faker.seed();
      return `/en/${randomSlug}/${randomSlug}/${randomSlug}`;
    },
    useSearchParams: () => {
      faker.seed(777);
      const searchParams = new URLSearchParams({
        [faker.lorem.word()]: `${faker.string.alphanumeric()}`,
        [faker.lorem.word()]: `${faker.string.alphanumeric()}`,
        [faker.lorem.word()]: `${faker.string.alphanumeric()}`,
      });
      faker.seed();
      return searchParams;
    },
  };
});
