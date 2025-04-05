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

  it("Returns an URL with removed search param if the value passed is empty", () => {
    const updatedURL = getQueryParamLink("a", "");
    const searchParams = new URLSearchParams(updatedURL);
    expect(updatedURL).toContain(pathname);
    expect(searchParams.get("a")).toBeNull();
  });

  it("Returns an URL with a search param value removed if passed value already exists and multiple values are allowed", () => {
    faker.seed(777);
    const paramValue = `${faker.string.numeric(6)}`;
    faker.seed();
    const updatedURL = getQueryParamLink("b", paramValue, true);
    expect(updatedURL).toContain(pathname);
    expect(updatedURL).not.toContain(`b=${faker.string.numeric(6)}`);
  });
});
