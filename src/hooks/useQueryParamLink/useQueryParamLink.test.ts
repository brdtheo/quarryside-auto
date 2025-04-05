import { usePathname, useSearchParams } from "next/navigation";

import { faker } from "@faker-js/faker";

import { renderHook } from "@testing-library/react-hooks/server";

import { describe, expect, it } from "vitest";

import useQueryParamLink from "@/hooks/useQueryParamLink";

describe("useQueryParamLink", () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const {
    result: { current },
  } = renderHook(() => useQueryParamLink(Object.fromEntries(searchParams)));
  const getQueryParamLink = current;

  it("Returns an URL with an updated search param value where param accepts a single value", () => {
    const paramValue = faker.string.alphanumeric({
      length: 4,
      casing: "lower",
    });
    const updatedURL = getQueryParamLink("a", paramValue);
    expect(updatedURL).toContain(pathname);
    expect(updatedURL).toContain(`a=${paramValue}`);
  });

  it("Returns an URL with an updated search param value where param accepts multiple values", () => {
    const initialParamValue = searchParams.get("c") ?? "";
    const additionalParamValue = faker.string.alphanumeric({
      length: 4,
      casing: "lower",
    });
    const updatedURL = getQueryParamLink("c", additionalParamValue, true);
    expect(updatedURL).toContain(pathname);
    expect(updatedURL).toContain(
      `c=${encodeURIComponent(initialParamValue + "," + additionalParamValue)}`,
    );
  });
});
