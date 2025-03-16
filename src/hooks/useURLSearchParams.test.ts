import { usePathname, useSearchParams } from "next/navigation";

import { faker } from "@faker-js/faker";

import { renderHook } from "@testing-library/react-hooks/server";

import { describe, expect, expectTypeOf, it } from "vitest";

import useURLSearchParams from "@/hooks/useURLSearchParams";

describe("useURLSearchParams", async () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const {
    result: { current },
  } = renderHook(
    async () => await useURLSearchParams(Object.fromEntries(searchParams)),
  );
  const {
    getActiveFilterCount,
    getSearchParamValueCount,
    getUpdatedURLFromSearchParam,
  } = await current;

  it("Retrieves the total number of search params", () => {
    const activeFilterCount = getActiveFilterCount();
    expectTypeOf(activeFilterCount).toEqualTypeOf<number>();
    expect(activeFilterCount).toBe(3);
  });

  it("Retrieves the number of values associated with a search param", () => {
    const valueCountSingle = getSearchParamValueCount("a");
    const valueCountMulti = getSearchParamValueCount("b");
    expect(valueCountSingle).toBe(1);
    expect(valueCountMulti).toBe(2);
    expectTypeOf(valueCountSingle).toEqualTypeOf<number>();
    expectTypeOf(valueCountMulti).toEqualTypeOf<number>();
  });

  it("Returns an URL with an updated search param value where param accepts a single value", () => {
    const paramValue = faker.string.alphanumeric({
      length: 4,
      casing: "lower",
    });
    const updatedURL = getUpdatedURLFromSearchParam("a", paramValue);
    expect(updatedURL).toContain(pathname);
    expect(updatedURL).toContain(`a=${paramValue}`);
  });

  it("Returns an URL with an updated search param value where param accepts multiple values", () => {
    const initialParamValue = searchParams.get("c") ?? "";
    const additionalParamValue = faker.string.alphanumeric({
      length: 4,
      casing: "lower",
    });
    const updatedURL = getUpdatedURLFromSearchParam(
      "c",
      additionalParamValue,
      true,
    );
    expect(updatedURL).toContain(pathname);
    expect(updatedURL).toContain(
      `c=${encodeURIComponent(initialParamValue + "," + additionalParamValue)}`,
    );
  });
});
