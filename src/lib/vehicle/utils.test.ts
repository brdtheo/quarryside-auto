import {
  VehicleBodyStyle,
  VehicleBrand,
  VehicleCondition,
  VehicleCountry,
  VehicleDrivetrain,
  VehicleFuelType,
  VehicleTransmission,
} from "@prisma/generated/client";

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
    const priceFromBoolean = getMonthlyEstimatePrice(BigInt(false));
    const priceFromString = getMonthlyEstimatePrice(500n);
    const priceFromNumber = getMonthlyEstimatePrice(500_000n);
    const priceWithOptions = getMonthlyEstimatePrice(999_999n, {
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
    const arguments_ = getVehicleFindManyArgs({}, false);
    const randomParamsArguments = getVehicleFindManyArgs({ a: "b", c: "d" }, false);
    expect(arguments_).toStrictEqual(EXPECTED_MINIMAL_ARGS);
    expect(randomParamsArguments).toStrictEqual(EXPECTED_MINIMAL_ARGS);
  });

  test("Retrieves count Prisma args", () => {
    const arguments_ = getVehicleFindManyArgs({}, true);
    const randomParamsArguments = getVehicleFindManyArgs({ a: "b", c: "d" }, true);
    expect(arguments_).toStrictEqual({});
    expect(randomParamsArguments).toStrictEqual({});
  });

  test("Retrieves pagination Prisma args", () => {
    const paginationArguments = getVehicleFindManyArgs({ page: "2" }, false);
    const paginationWithCountArguments = getVehicleFindManyArgs({ page: "3" });
    expect(paginationArguments).toStrictEqual({
      ...EXPECTED_MINIMAL_ARGS,
      skip: 15,
    });
    expect(paginationWithCountArguments).toStrictEqual({
      ...EXPECTED_MINIMAL_ARGS,
      skip: 30,
    });
  });

  test("Retrieves search params Prisma args", () => {
    const searchParamArguments = getVehicleFindManyArgs(
      {
        q: "bastion",
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
    expect(searchParamArguments).toStrictEqual({
      ...EXPECTED_MINIMAL_ARGS,
      where: {
        AND: [
          {
            model: {
              contains: "bastion",
              mode: "insensitive",
            },
          },
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
    const searchParamArguments = getVehicleFindManyArgs({
      // @ts-expect-error We simulate an unexpected behavior
      q: undefined,
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
    });
    expect(searchParamArguments).toStrictEqual(EXPECTED_MINIMAL_ARGS);
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
        url: `https://quarryside-auto.com/vehicles/${vehicle.slug}`,
        priceCurrency: "USD",
        price: `${vehicle.price_cts}`,
      },
    });
  });
});
