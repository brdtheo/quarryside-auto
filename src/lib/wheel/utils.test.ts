import { WheelBrand } from "@prisma/client";

import { expect, test } from "vitest";

import { WHEEL_LIST_PAGE_SIZE } from "@/lib/wheel/constants";
import { getWheelFindManyArgs } from "@/lib/wheel/utils";

const EXPECTED_MINIMAL_ARGS = {
  include: {
    medias: { where: { is_thumbnail: true } },
  },
  take: WHEEL_LIST_PAGE_SIZE,
};

test("prisma args - retrieves default args", () => {
  const args = getWheelFindManyArgs({}, false);
  const randomParamsArgs = getWheelFindManyArgs({ a: "b", c: "d" }, false);
  expect(args).toStrictEqual(EXPECTED_MINIMAL_ARGS);
  expect(randomParamsArgs).toStrictEqual(EXPECTED_MINIMAL_ARGS);
});

test("prisma args - retrieves count args", () => {
  const args = getWheelFindManyArgs({}, true);
  const randomParamsArgs = getWheelFindManyArgs({ a: "b", c: "d" }, true);
  expect(args).toStrictEqual({});
  expect(randomParamsArgs).toStrictEqual({});
});

test("prisma args - retrieves pagination args", () => {
  const paginationArgs = getWheelFindManyArgs({ page: "2" }, false);
  const paginationWithCountArgs = getWheelFindManyArgs(
    { page: "3" },
    undefined,
  );
  expect(paginationArgs).toStrictEqual({
    ...EXPECTED_MINIMAL_ARGS,
    skip: 20,
  });
  expect(paginationWithCountArgs).toStrictEqual({
    ...EXPECTED_MINIMAL_ARGS,
    skip: 40,
  });
});

test("prisma args - retrieves search params args", () => {
  const searchParamArgs = getWheelFindManyArgs(
    { is_ten_lug: "true", brand: WheelBrand.FOLK, delivery_available: "false" },
    false,
  );
  expect(searchParamArgs).toStrictEqual({
    ...EXPECTED_MINIMAL_ARGS,
    where: {
      AND: [{ brand: { in: [WheelBrand.FOLK] } }, { is_ten_lug: true }],
    },
  });
});

test("prisma args - retrieves args from incorrect params", () => {
  const mixedArgsAndParams = getWheelFindManyArgs(
    {
      page: "?.,;'[]",
      is_three_lug: "false",
      brand: "hello-world",
      free_on_site_pickup: "1",
      delivery_available: "false",
      undefined: "undefined",
      7: "8",
    },
    undefined,
  );
  expect(mixedArgsAndParams).toStrictEqual(EXPECTED_MINIMAL_ARGS);
});
