import { cleanup, renderHook } from "@testing-library/react-hooks/server";

import { afterEach, describe, expect, expectTypeOf, it } from "vitest";

import useQueryParamValues from "@/hooks/useQueryParamValues";

describe("useQueryParamValues", () => {
  afterEach(() => {
    cleanup();
  });

  it("Retrieves the value of a query param", () => {
    const {
      result: { current },
    } = renderHook(() => useQueryParamValues("a"));

    expectTypeOf(current).toBeArray();
    expect(current).toHaveLength(1);
  });

  it("Retrieves all values of a query param", () => {
    const {
      result: { current },
    } = renderHook(() => useQueryParamValues("b"));

    expectTypeOf(current).toBeArray();
    expect(current).toHaveLength(2);
  });

  it("Retrieves the count of all query param values", () => {
    const {
      result: { current },
    } = renderHook(() => useQueryParamValues("b", true));

    expectTypeOf(current).toEqualTypeOf<number>();
    expect(current).toBe(2);
  });
});
