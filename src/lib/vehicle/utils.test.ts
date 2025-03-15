import {
  VehicleBodyStyle,
  VehicleBrand,
  VehicleCondition,
  VehicleCountry,
  VehicleDrivetrain,
  VehicleFuelType,
  VehicleTransmission,
} from "@prisma/client";

import { describe, expect, expectTypeOf, test } from "vitest";

import { VEHICLE_LIST_PAGE_SIZE } from "@/lib/vehicle/constants";
import { vehicleFactory } from "@/lib/vehicle/factory";
import { VehicleWithMedias } from "@/lib/vehicle/types";
import {
  getMonthlyEstimatePrice,
  getVehicleFindManyArgs,
  getVehicleRichData,
} from "@/lib/vehicle/utils";

const EXPECTED_MINIMAL_ARGS = {
  include: {
    medias: { where: { is_thumbnail: true } },
  },
  take: VEHICLE_LIST_PAGE_SIZE,
};

describe("Vehicle - utils", () => {
  test("Retrieves monthly estimate price", () => {
    const priceFromBoolean = getMonthlyEstimatePrice(BigInt(false), undefined);
    const priceFromString = getMonthlyEstimatePrice(BigInt("500"), undefined);
    const priceFromNumber = getMonthlyEstimatePrice(BigInt(500000), undefined);
    const priceWithOptions = getMonthlyEstimatePrice(BigInt(999999), {
      precision: 2,
      fromCents: true,
      symbol: "",
    });
    expect(priceFromBoolean).toEqual("");
    expect(priceFromString).toEqual("$0");
    expect(priceFromNumber).toEqual("$104");
    expect(priceWithOptions).toEqual("2.08");
  });

  test("Retrieves default Prisma args", () => {
    const args = getVehicleFindManyArgs({}, false);
    const randomParamsArgs = getVehicleFindManyArgs({ a: "b", c: "d" }, false);
    expect(args).toStrictEqual(EXPECTED_MINIMAL_ARGS);
    expect(randomParamsArgs).toStrictEqual(EXPECTED_MINIMAL_ARGS);
  });

  test("Retrieves count Prisma args", () => {
    const args = getVehicleFindManyArgs({}, true);
    const randomParamsArgs = getVehicleFindManyArgs({ a: "b", c: "d" }, true);
    expect(args).toStrictEqual({});
    expect(randomParamsArgs).toStrictEqual({});
  });

  test("Retrieves pagination Prisma args", () => {
    const paginationArgs = getVehicleFindManyArgs({ page: "2" }, false);
    const paginationWithCountArgs = getVehicleFindManyArgs(
      { page: "3" },
      undefined,
    );
    expect(paginationArgs).toStrictEqual({
      ...EXPECTED_MINIMAL_ARGS,
      skip: 15,
    });
    expect(paginationWithCountArgs).toStrictEqual({
      ...EXPECTED_MINIMAL_ARGS,
      skip: 30,
    });
  });

  test("Retrieves search params Prisma args", () => {
    const searchParamArgs = getVehicleFindManyArgs(
      {
        body_style: VehicleBodyStyle.COUPE,
        brand: VehicleBrand.GAVRIL,
        condition: VehicleCondition.USED,
        country: VehicleCountry.USA,
        drivetrain: VehicleDrivetrain.RWD,
        engine_cylinder_count: "6,8",
        fuel_type: VehicleFuelType.GASOLINE,
        transmission: VehicleTransmission.MANUAL,
      },
      false,
    );
    expect(searchParamArgs).toStrictEqual({
      ...EXPECTED_MINIMAL_ARGS,
      where: {
        AND: [
          { brand: { in: [VehicleBrand.GAVRIL] } },
          { condition: { in: [VehicleCondition.USED] } },
          { engine_cylinder_count: { in: [6, 8] } },
          { fuel_type: { in: [VehicleFuelType.GASOLINE] } },
          { transmission: { in: [VehicleTransmission.MANUAL] } },
          { drivetrain: { in: [VehicleDrivetrain.RWD] } },
          { body_style: { in: [VehicleBodyStyle.COUPE] } },
          { country: { in: [VehicleCountry.USA] } },
        ],
      },
    });
  });

  test("Retrieves Prisma args from incorrect params", () => {
    const searchParamArgs = getVehicleFindManyArgs(
      {
        page: "?.,;'[]",
        body_style: "helloworld" as VehicleBodyStyle,
        brand: "helloworld" as VehicleBrand,
        condition: "helloworld" as VehicleCondition,
        country: "helloworld" as VehicleCountry,
        drivetrain: "helloworld" as VehicleDrivetrain,
        engine_cylinder_count: "undefined,null,NaN,helloworld",
        fuel_type: "helloworld" as VehicleFuelType,
        transmission: "helloworld" as VehicleTransmission,
        undefined: "undefined",
        123: "456",
      },
      undefined,
    );
    expect(searchParamArgs).toStrictEqual(EXPECTED_MINIMAL_ARGS);
  });

  test("Retrieves rich data", () => {
    const vehicle = vehicleFactory({ withMedia: true }) as VehicleWithMedias;
    const richData = getVehicleRichData({
      brand: vehicle.brand ?? "",
      thumbnail: vehicle.medias[0].url,
      description: vehicle.description ?? "",
      name: vehicle.model,
      price: `${vehicle.price_cts}`,
      slug: vehicle.slug,
    });
    const parsedRichData = JSON.parse(richData.__html);
    expectTypeOf(richData.__html).toEqualTypeOf<string>();
    expect(parsedRichData).toMatchObject({
      "@context": "https://schema.org/",
      "@type": "Product",
      name: vehicle.model,
      description: vehicle.description,
      image: vehicle.medias[0].url,
      brand: {
        "@type": "Brand",
        name: vehicle.brand,
      },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        url: `https://quarryside-auto.com/en/vehicles/${vehicle.slug}`,
        priceCurrency: "USD",
        price: `${vehicle.price_cts}`,
      },
    });
  });
});
