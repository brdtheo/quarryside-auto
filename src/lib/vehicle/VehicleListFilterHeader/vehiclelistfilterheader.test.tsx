import { faker } from "@faker-js/faker";

import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { NextIntlClientWrapper } from "@/setupTests";

import VehicleListFilterHeader from ".";

const resultCount = faker.number.int({ min: 1, max: 1000 });

describe("VehicleListFilterHeader", () => {
  beforeEach(() => {
    render(
      <VehicleListFilterHeader
        resultCount={resultCount}
        textSearch=""
        searchParams={{}}
      />,
      { wrapper: NextIntlClientWrapper },
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("Renders a paragraph with the result count", () => {
    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent(`${resultCount} result(s)`);
  });
});
