import {
  Prisma,
  VehicleBodyStyle,
  VehicleBrand,
  VehicleCondition,
  VehicleCountry,
  VehicleDrivetrain,
  VehicleFuelType,
  VehicleTransmission,
} from "@prisma/client";

import currency from "currency.js";

import { VEHICLE_LIST_PAGE_SIZE } from "@/lib/vehicle/constants";

import type { PageSearchParams } from "@/types";

/**
 * Returns the complete list of Prisma args to pass for Vehicle page
 * @param {PageSearchParams} searchParams
 * @param {boolean} isCountArgs
 * @returns {VehicleFindManyArgs}
 */
export function getVehicleFindManyArgs(
  searchParams: PageSearchParams,
  isCountArgs?: boolean,
): Prisma.VehicleFindManyArgs | Prisma.VehicleCountArgs {
  const pageParam = searchParams?.page
    ? parseInt(searchParams?.page as string)
    : 1;
  const conditionParam = searchParams?.condition
    ? (searchParams?.condition?.split(",") as VehicleCondition[])
    : null;
  const brandParam = searchParams?.brand
    ? (searchParams?.brand?.split(",") as VehicleBrand[])
    : null;
  const fuelTypeParam = searchParams?.fuel_type
    ? (searchParams?.fuel_type?.split(",") as VehicleFuelType[])
    : null;
  const engineCylinderCountParam = searchParams?.engine_cylinder_count
    ? searchParams?.engine_cylinder_count
        ?.split(",")
        .map((value) => parseInt(value, 10))
    : null;
  const transmissionParam = searchParams?.transmission
    ? (searchParams?.transmission?.split(",") as VehicleTransmission[])
    : null;
  const drivetrainParam = searchParams?.drivetrain
    ? (searchParams?.drivetrain?.split(",") as VehicleDrivetrain[])
    : null;
  const bodyStyleParam = searchParams?.body_style
    ? (searchParams?.body_style?.split(",") as VehicleBodyStyle[])
    : null;
  const countryParam = searchParams?.country
    ? (searchParams?.country?.split(",") as VehicleCountry[])
    : null;

  const prismaSkipParam = searchParams?.page
    ? VEHICLE_LIST_PAGE_SIZE * (pageParam - 1)
    : null;

  return {
    ...(!isCountArgs && {
      include: {
        medias: { where: { is_thumbnail: true } },
      },
      take: VEHICLE_LIST_PAGE_SIZE,
      ...(prismaSkipParam ? { skip: prismaSkipParam } : {}),
    }),
    ...((!!brandParam ||
      !!conditionParam ||
      !!engineCylinderCountParam ||
      !!fuelTypeParam ||
      !!drivetrainParam ||
      !!countryParam ||
      !!bodyStyleParam ||
      !!transmissionParam) && {
      where: {
        AND: [
          ...(brandParam ? [{ brand: { in: brandParam } }] : []),
          ...(conditionParam ? [{ condition: { in: conditionParam } }] : []),
          ...(engineCylinderCountParam
            ? [{ engine_cylinder_count: { in: engineCylinderCountParam } }]
            : []),
          ...(fuelTypeParam ? [{ fuel_type: { in: fuelTypeParam } }] : []),
          ...(transmissionParam
            ? [{ transmission: { in: transmissionParam } }]
            : []),
          ...(drivetrainParam ? [{ drivetrain: { in: drivetrainParam } }] : []),
          ...(bodyStyleParam ? [{ body_style: { in: bodyStyleParam } }] : []),
          ...(countryParam ? [{ country: { in: countryParam } }] : []),
        ],
      },
    }),
  };
}

/**
 * Get the monthly estimated price of a vehicle on 48 months
 * @param priceCts
 * @param options
 * @returns {string}
 */
export const getMonthlyEstimatePrice = (
  priceCts: bigint,
  options?: currency.Options,
) => {
  const currencyOptions = options ?? { precision: 0 };
  if (!priceCts) return "";
  const price = Number(priceCts) / 100;
  const monthlyPrice = price / 48;
  return currency(monthlyPrice, currencyOptions).format();
};
