import {
  Prisma,
  Vehicle,
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
import { VehicleRichDataParams } from "@/lib/vehicle/types";

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
    ? Number.parseInt(searchParams?.page as string, 10)
    : 1;

  const searchQueryParam = searchParams?.q
    ? decodeURIComponent(searchParams?.q)
    : undefined;

  const conditionParam =
    !!searchParams?.condition &&
    Object.values(VehicleCondition).includes(
      searchParams?.condition as VehicleCondition,
    )
      ? (searchParams?.condition?.split(",") as VehicleCondition[])
      : undefined;

  const brandParam =
    !!searchParams?.brand &&
    Object.values(VehicleBrand).includes(searchParams?.brand as VehicleBrand)
      ? (searchParams?.brand?.split(",") as VehicleBrand[])
      : undefined;

  const fuelTypeParam =
    !!searchParams?.fuel_type &&
    Object.values(VehicleFuelType).includes(
      searchParams?.fuel_type as VehicleFuelType,
    )
      ? (searchParams?.fuel_type?.split(",") as VehicleFuelType[])
      : undefined;

  const engineCylinderCountParamValues = searchParams?.engine_cylinder_count
    ? searchParams?.engine_cylinder_count
        .split(",")
        .map((value) => Number.parseInt(value, 10))
        .filter(
          (value) =>
            !!value && typeof value === "number" && !Number.isNaN(value),
        )
    : undefined;
  const engineCylinderCountParam =
    !!engineCylinderCountParamValues &&
    engineCylinderCountParamValues.length > 0
      ? engineCylinderCountParamValues
      : undefined;

  const transmissionParam =
    !!searchParams?.transmission &&
    Object.values(VehicleTransmission).includes(
      searchParams?.transmission as VehicleTransmission,
    )
      ? (searchParams?.transmission?.split(",") as VehicleTransmission[])
      : undefined;

  const drivetrainParam =
    !!searchParams?.drivetrain &&
    Object.values(VehicleDrivetrain).includes(
      searchParams?.drivetrain as VehicleDrivetrain,
    )
      ? (searchParams?.drivetrain?.split(",") as VehicleDrivetrain[])
      : undefined;

  const bodyStyleParam =
    !!searchParams?.body_style &&
    Object.values(VehicleBodyStyle).includes(
      searchParams?.body_style as VehicleBodyStyle,
    )
      ? (searchParams?.body_style?.split(",") as VehicleBodyStyle[])
      : undefined;

  const countryParam =
    !!searchParams?.country &&
    Object.values(VehicleCountry).includes(
      searchParams?.country as VehicleCountry,
    )
      ? (searchParams?.country?.split(",") as VehicleCountry[])
      : undefined;

  const prismaSkipParam = searchParams?.page
    ? VEHICLE_LIST_PAGE_SIZE * (pageParam - 1)
    : undefined;

  const args: Prisma.VehicleFindManyArgs = {
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
      !!transmissionParam ||
      !!searchQueryParam) && {
      where: {
        AND: [
          ...(searchQueryParam
            ? [
                {
                  model: {
                    contains: searchQueryParam,
                    mode: "insensitive" as Prisma.QueryMode,
                  },
                },
              ]
            : []),
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
  return args;
}

/**
 * Get the monthly estimated price of a vehicle on 48 months
 * @param priceCts
 * @param options
 * @returns {string}
 */
export const getMonthlyEstimatePrice = (
  priceCts: Vehicle["price_cts"],
  options?: currency.Options,
) => {
  const currencyOptions = options ?? { precision: 0 };
  if (!priceCts || typeof priceCts !== "bigint") return "";
  const price = Number(priceCts) / 100;
  const monthlyPrice = price / 48;
  return currency(monthlyPrice, currencyOptions).format();
};

/**
 * Returns JSON-LD schema data for vehicle details page
 */
export function getVehicleRichData({
  brand,
  thumbnail,
  description,
  name,
  price,
  slug,
}: VehicleRichDataParams) {
  return {
    __html: `{
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "${name}",
      "description": "${description}",
      "image": "${thumbnail}",
      "brand": {
        "@type": "Brand",
        "name": "${brand}"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": "https://quarryside-auto.com/vehicles/${slug}",
        "priceCurrency": "USD",
        "price": "${price}"
      }
    }
  `,
  };
}
