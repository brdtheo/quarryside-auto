import { Prisma, WheelBrand } from "@prisma/client";

import { WHEEL_LIST_PAGE_SIZE } from "@/lib/wheel/constants";

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
    ? parseInt(searchParams?.page as string)
    : 1;
  const brandParam = searchParams?.brand
    ? (searchParams?.brand?.split(",") as WheelBrand[])
    : null;
  const deliveryAvailableParm = searchParams?.delivery_available
    ? searchParams?.delivery_available
    : null;
  const freeOnSitePickupParm = searchParams?.free_on_site_pickup
    ? searchParams?.free_on_site_pickup
    : null;
  const isThreeLugParam = searchParams?.is_three_lug
    ? searchParams?.is_three_lug
    : null;
  const isFourLugParam = searchParams?.is_four_lug
    ? searchParams?.is_four_lug
    : null;
  const isFiveLugParam = searchParams?.is_five_lug
    ? searchParams?.is_five_lug
    : null;
  const isSixLugParam = searchParams?.is_six_lug
    ? searchParams?.is_six_lug
    : null;
  const isEightLugParam = searchParams?.is_eight_lug
    ? searchParams?.is_eight_lug
    : null;
  const isCentralLugParam = searchParams?.is_central_lug
    ? searchParams?.is_central_lug
    : null;

  const prismaSkipParam = searchParams?.page
    ? WHEEL_LIST_PAGE_SIZE * (pageParam - 1)
    : null;

  return {
    ...(!isCountArgs && { take: WHEEL_LIST_PAGE_SIZE }),
    ...(!isCountArgs && !!prismaSkipParam && { skip: prismaSkipParam }),
    ...((!!brandParam ||
      !!deliveryAvailableParm ||
      !!freeOnSitePickupParm ||
      !!isThreeLugParam ||
      !!isFourLugParam ||
      !!isFiveLugParam ||
      !!isSixLugParam ||
      !!isEightLugParam ||
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
          ...(isCentralLugParam ? [{ is_central_lug: true }] : []),
        ],
      },
    }),
  };
}
