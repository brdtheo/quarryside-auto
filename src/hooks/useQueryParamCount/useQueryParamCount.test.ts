import { cleanup, renderHook } from "@testing-library/react-hooks/server";

import { afterEach, describe, expect, expectTypeOf, it } from "vitest";

import useQueryParamCount from "@/hooks/useQueryParamCount";

describe("useQueryParamCount", () => {
  const {
    result: { current },
  } = renderHook(() => useQueryParamCount());

  afterEach(() => {
    cleanup();
  });

  it("Retrieves the total number of search params", () => {
    expectTypeOf(current).toEqualTypeOf<number>();
    expect(current).toBe(3);
  });
});
