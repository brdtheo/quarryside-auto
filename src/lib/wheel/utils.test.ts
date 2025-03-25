import { WheelBrand } from "@prisma/client";

import { describe, expect, expectTypeOf, test } from "vitest";

import { WHEEL_LIST_PAGE_SIZE } from "@/lib/wheel/constants";
import { wheelFactory } from "@/lib/wheel/factory";
import { WheelWithMedias } from "@/lib/wheel/types";
import { getWheelFindManyArgs, getWheelRichData } from "@/lib/wheel/utils";

const EXPECTED_MINIMAL_ARGS = {
  include: {
    medias: { where: { is_thumbnail: true } },
  },
  take: WHEEL_LIST_PAGE_SIZE,
};

describe("Wheel - utils", () => {
  test("Retrieves default Prisma args", () => {
    const args = getWheelFindManyArgs({}, false);
    const randomParamsArgs = getWheelFindManyArgs({ a: "b", c: "d" }, false);
    expect(args).toStrictEqual(EXPECTED_MINIMAL_ARGS);
    expect(randomParamsArgs).toStrictEqual(EXPECTED_MINIMAL_ARGS);
  });

  test("Retrieves count Prisma args", () => {
    const args = getWheelFindManyArgs({}, true);
    const randomParamsArgs = getWheelFindManyArgs({ a: "b", c: "d" }, true);
    expect(args).toStrictEqual({});
    expect(randomParamsArgs).toStrictEqual({});
  });

  test("Retrieves pagination Prisma args", () => {
    const paginationArgs = getWheelFindManyArgs({ page: "2" }, false);
    const paginationWithCountArgs = getWheelFindManyArgs({ page: "3" });
    expect(paginationArgs).toStrictEqual({
      ...EXPECTED_MINIMAL_ARGS,
      skip: 20,
    });
    expect(paginationWithCountArgs).toStrictEqual({
      ...EXPECTED_MINIMAL_ARGS,
      skip: 40,
    });
  });

  test("Retrieves search params Prisma args", () => {
    const searchParamArgs = getWheelFindManyArgs(
      {
        is_ten_lug: "true",
        brand: WheelBrand.FOLK,
        delivery_available: "false",
      },
      false,
    );
    expect(searchParamArgs).toStrictEqual({
      ...EXPECTED_MINIMAL_ARGS,
      where: {
        AND: [{ brand: { in: [WheelBrand.FOLK] } }, { is_ten_lug: true }],
      },
    });
  });

  test("Retrieves Prisma args from incorrect params", () => {
    const mixedArgsAndParams = getWheelFindManyArgs({
      page: "?.,;'[]",
      is_three_lug: "false",
      brand: "hello-world",
      free_on_site_pickup: "1",
      delivery_available: "false",
      undefined: "undefined",
      7: "8",
    });
    expect(mixedArgsAndParams).toStrictEqual(EXPECTED_MINIMAL_ARGS);
  });

  test("Retrieves rich data", () => {
    const wheel = wheelFactory({ withMedia: true }) as WheelWithMedias;
    const richData = getWheelRichData({
      brand: wheel.brand ?? "",
      thumbnail: wheel.medias[0].url,
      name: wheel.model ?? "",
      price: `${wheel.price_cts}`,
      slug: wheel.slug,
    });
    const parsedRichData = JSON.parse(richData.__html);
    expectTypeOf(richData.__html).toEqualTypeOf<string>();
    expect(parsedRichData).toMatchObject({
      "@context": "https://schema.org/",
      "@type": "Product",
      name: wheel.model,
      image: wheel.medias[0].url,
      brand: {
        "@type": "Brand",
        name: wheel.brand,
      },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        url: `https://quarryside-auto.com/wheels/${wheel.slug}`,
        priceCurrency: "USD",
        price: `${wheel.price_cts}`,
      },
    });
  });
});
