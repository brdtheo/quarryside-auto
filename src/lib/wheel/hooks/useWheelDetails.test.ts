import { getTranslations } from "next-intl/server";

import { renderHook } from "@testing-library/react-hooks/server";

import { describe, expect, expectTypeOf, it } from "vitest";

import { wheelFactory } from "@/lib/wheel/factory";
import useWheelDetails from "@/lib/wheel/hooks/useWheelDetails";

import { getPrice } from "@/utils";

describe("useWheelDetails", async () => {
  const t = await getTranslations("wheels");
  const wheel = wheelFactory();
  const {
    result: { current },
  } = renderHook(async () => await useWheelDetails(wheel));
  const wheelDetails = await current;

  it("Returns an object with empty values if param is empty", async () => {
    const {
      result: { current },
      // @ts-expect-error We simulate an unexpected behavior
    } = renderHook(async () => await useWheelDetails(undefined));
    const result = await current;
    expect(result).toBeDefined();
    Object.entries(current).forEach((entry) => {
      const key = entry[0];
      const value = entry[1];
      expect(key).toBeTruthy();
      expect(value).toBe("");
    });
  });

  it("Returns the wheel's brand", () => {
    expectTypeOf(wheelDetails.brand).toEqualTypeOf<string>();
    expect(wheelDetails.brand).toBeTruthy();
    expect(wheelDetails.brand).toBe(t(`filter.brand.option.${wheel.brand}`));
  });

  it("Returns the wheel's link href", () => {
    expectTypeOf(wheelDetails.href).toEqualTypeOf<string>();
    expect(wheelDetails.href).toBeTruthy();
    expect(wheelDetails.href).toBe(`/wheels/${encodeURIComponent(wheel.slug)}`);
  });

  it("Returns the wheel's price", () => {
    expectTypeOf(wheelDetails.price).toEqualTypeOf<string>();
    expect(wheelDetails.price).toBeTruthy();
    expect(wheelDetails.price).toBe(getPrice(wheel.price_cts, { symbol: "" }));
  });

  it("Returns the wheel's title", () => {
    expectTypeOf(wheelDetails.title).toEqualTypeOf<string>();
    expect(wheelDetails.title).toBeTruthy();
    expect(wheelDetails.title).toBe(
      [
        ...(wheel.brand === "NO_BRAND"
          ? []
          : [t(`filter.brand.option.${wheel.brand}`)]),
        wheel.model,
      ].join(" "),
    );
  });
});
