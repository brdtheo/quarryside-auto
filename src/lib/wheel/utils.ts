import { Prisma, WheelBrand } from "@prisma/client";

import { WHEEL_LIST_PAGE_SIZE } from "@/lib/wheel/constants";
import type { WheelRichDataParams } from "@/lib/wheel/types";

import type { PageSearchParams } from "@/types";

/**
 * Returns the complete list of Prisma args to pass for Wheel model
 * @param {PageSearchParams} searchParams
 * @param {boolean} isCountArgs
 * @returns {Prisma.WheelFindManyArgs}
 */
export function getWheelFindManyArgs(
  searchParams: PageSearchParams,
  isCountArgs?: boolean,
): Prisma.WheelFindManyArgs | Prisma.WheelCountArgs {
  const pageParam = searchParams?.page
    ? parseInt(searchParams?.page as string, 10)
    : 1;
  const brandParam =
    !!searchParams?.brand &&
    Object.values(WheelBrand).includes(searchParams?.brand as WheelBrand)
      ? (searchParams?.brand?.split(",") as WheelBrand[])
      : null;
  const deliveryAvailableParm =
    searchParams?.delivery_available === "true"
      ? searchParams?.delivery_available
      : null;
  const freeOnSitePickupParm =
    searchParams?.free_on_site_pickup === "true"
      ? searchParams?.free_on_site_pickup
      : null;
  const isThreeLugParam =
    searchParams?.is_three_lug === "true" ? searchParams?.is_three_lug : null;
  const isFourLugParam =
    searchParams?.is_four_lug === "true" ? searchParams?.is_four_lug : null;
  const isFiveLugParam =
    searchParams?.is_five_lug === "true" ? searchParams?.is_five_lug : null;
  const isSixLugParam =
    searchParams?.is_six_lug === "true" ? searchParams?.is_six_lug : null;
  const isEightLugParam =
    searchParams?.is_eight_lug === "true" ? searchParams?.is_eight_lug : null;
  const isTenLugParam =
    searchParams?.is_ten_lug === "true" ? searchParams?.is_ten_lug : null;
  const isCentralLugParam =
    searchParams?.is_central_lug === "true"
      ? searchParams?.is_central_lug
      : null;

  const prismaSkipParam = searchParams?.page
    ? WHEEL_LIST_PAGE_SIZE * (pageParam - 1)
    : null;

  if (isCountArgs) {
    const countArgs: Prisma.WheelCountArgs = {};
    return countArgs;
  }

  const args: Prisma.WheelFindManyArgs = {
    include: {
      medias: { where: { is_thumbnail: true } },
    },
    take: WHEEL_LIST_PAGE_SIZE,
    ...(prismaSkipParam ? { skip: prismaSkipParam } : {}),
    ...((!!brandParam ||
      !!deliveryAvailableParm ||
      !!freeOnSitePickupParm ||
      !!isThreeLugParam ||
      !!isFourLugParam ||
      !!isFiveLugParam ||
      !!isSixLugParam ||
      !!isEightLugParam ||
      !!isTenLugParam ||
      !!isCentralLugParam) && {
      where: {
        AND: [
          ...(brandParam ? [{ brand: { in: brandParam } }] : []),
          ...(deliveryAvailableParm ? [{ delivery_available: true }] : []),
          ...(freeOnSitePickupParm ? [{ free_on_site_pickup: true }] : []),
          ...(isThreeLugParam ? [{ is_three_lug: true }] : []),
          ...(isFourLugParam ? [{ is_four_lug: true }] : []),
          ...(isFiveLugParam ? [{ is_five_lug: true }] : []),
          ...(isSixLugParam ? [{ is_six_lug: true }] : []),
          ...(isEightLugParam ? [{ is_eight_lug: true }] : []),
          ...(isTenLugParam ? [{ is_ten_lug: true }] : []),
          ...(isCentralLugParam ? [{ is_central_lug: true }] : []),
        ],
      },
    }),
  };
  return args;
}

/**
 * Returns JSON-LD schema data for wheel details page
 */
export function getWheelRichData({
  brand,
  thumbnail,
  name,
  price,
  slug,
}: WheelRichDataParams) {
  return {
    __html: `{
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "${name}",
      "image": "${thumbnail}",
      "brand": {
        "@type": "Brand",
        "name": "${brand}"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": "https://quarryside-auto.com/wheels/${slug}",
        "priceCurrency": "USD",
        "price": "${price}"
      }
    }
  `,
  };
}
