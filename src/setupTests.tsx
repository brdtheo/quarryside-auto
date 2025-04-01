import { ReactNode } from "react";

import { NextIntlClientProvider } from "next-intl";

import { faker } from "@faker-js/faker";

import "@testing-library/jest-dom/vitest";

import { vi } from "vitest";

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
 * Mock Image component to render unoptimized version in tests
 */
vi.mock("next/image", () => {
  return {
    default: ({ src, alt }: { src: string; alt: string }) => {
      return <img src={src} alt={alt} />;
    },
  };
});

/**
 * Mock translations getter used in server components
 */
vi.mock("next-intl", async (importOriginal) => {
  const actual = await importOriginal<typeof import("next-intl")>();
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
    ...actual,
    useTranslations: (namespace: string) => {
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
vi.mock("next/navigation", async (importOriginal) => {
  const actual = await importOriginal<typeof import("next/navigation")>();
  return {
    ...actual,
    usePathname: () => {
      faker.seed(777);
      const randomSlugs = faker.helpers.multiple(
        () => encodeURIComponent(faker.internet.domainWord()),
        { count: 3 },
      );
      faker.seed();
      return randomSlugs.join("/");
    },
    useSearchParams: () => {
      faker.seed(777);
      const searchParams = new URLSearchParams({
        a: `${faker.string.numeric(5)}`,
        b: `${faker.string.numeric(5)},${faker.string.numeric(5)}`,
        c: `${faker.string.numeric(5)}`,
      });
      faker.seed();
      return searchParams;
    },
    useSelectedLayoutSegment: () => {
      faker.seed(777);
      const segment = faker.string.alpha({ casing: "lower", length: 15 });
      faker.seed();
      return segment;
    },
    useRouter: vi.fn(() => ({
      push: vi.fn(),
      replace: vi.fn(),
    })),
  };
});
