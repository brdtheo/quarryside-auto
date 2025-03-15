import { Prisma } from "@prisma/client";

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
  const currencyOptions = options ?? { precision: 0 };
  if (!priceCts) return "";
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
