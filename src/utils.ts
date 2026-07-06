import { Prisma } from "@prisma/generated/browser";

import currency from "currency.js";

/**
 * Get the display price
 * @param priceCts
 * @param options
 * @returns {string}
 */
export const getPrice = (
  priceCts: bigint | null,
  options?: currency.Options,
) => {
  if (!priceCts) return "";
  const currencyOptions = options ?? { precision: 0 };
  return currency(Number(priceCts) / 100, currencyOptions).format();
};

/**
 * Returns the complete list of Prisma args to pass for Home page
 * @returns {VehicleFindManyArgs}
 */
export function getHomeFindManyArgs(): Prisma.VehicleFindManyArgs {
  return {
    where: {
      slug: {
        in: [
          "gavril-d-series-d15-v8-4wd",
          "gavril-roamer-v8-automatic",
          "soliad-lansdale-2-5-facelift",
        ],
      },
    },
    include: {
      medias: { where: { is_thumbnail: true } },
    },
  };
}

/**
 * Parse row data to handle array of strings
 * @param value The row data value
 * @returns {string | string[]}
 */
export function parseJsonData(value: unknown): string | string[] {
  if (Array.isArray(value)) {
    return value.map(String);
  }

  if (typeof value !== "string") {
    return "";
  }

  const input = value.trim();

  // handle PostgreSQL array {"a","b","c"}
  if (input.startsWith("{") && input.endsWith("}")) {
    const inner = input.slice(1, -1);

    if (!inner) {
      return [];
    }

    return inner
      .split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/)
      .map((item) => item.trim().replaceAll(/^"|"$/g, ""))
      .filter(Boolean);
  }

  return value;
}
