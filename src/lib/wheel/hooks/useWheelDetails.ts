import { useTranslations } from "next-intl";

import { Wheel } from "@prisma/client";

import { getPrice } from "@/utils";

/** In some cases received wheel param has prisma relationship properties included */
interface WheelBase extends Wheel {
  [key: string]: unknown;
}

/**
 * Returns each wording relatedt to a vehicle value
 * @param {Wheel} wheel
 */
export default function useWheelDetails(wheel: WheelBase) {
  const t = useTranslations("wheels");

  if (!wheel) {
    return {
      brand: "",
      href: "",
      price: "",
      title: "",
    };
  }

  const href = `/wheels/${encodeURIComponent(wheel.slug)}`;

  const title = [
    ...(wheel.brand === "NO_BRAND"
      ? []
      : [t(`filter.brand.option.${wheel.brand}`)]),
    wheel.model,
  ].join(" ");

  const price = wheel.price_cts
    ? getPrice(wheel.price_cts, { symbol: "" })
    : "";

  const brand = t(`filter.brand.option.${wheel.brand}`);

  return {
    brand,
    href,
    price,
    title,
  };
}
