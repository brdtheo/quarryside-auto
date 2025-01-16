import currency from "currency.js";

/**
 * Get the display price
 * @param priceCts
 * @param options
 * @returns {string}
 */
export const getPrice = (priceCts: bigint, options?: currency.Options) => {
  const currencyOptions = options ?? { precision: 0 };
  if (!priceCts) return "";
  return currency(Number(priceCts) / 100, currencyOptions).format();
};
