import { VehicleBrand, VehicleFuelType } from "@prisma/client";

import { faker } from "@faker-js/faker";

import { cleanup, render, screen } from "@testing-library/react";

import { afterEach, describe, expect, it } from "vitest";

import type { ListFilterAsideSectionProps } from "@/components/ListFilterAsideSection";

import { NextIntlClientWrapper } from "@/setupTests";

import ListFilterAside from ".";

const sections: ListFilterAsideSectionProps[] = faker.helpers.multiple(
  () => ({
    title: faker.lorem.word(),
    options: faker.helpers.multiple(
      () => ({
        label: faker.lorem.word(),
        value: faker.lorem.word().toUpperCase(),
        isChecked: faker.datatype.boolean(),
        href: faker.internet.url(),
      }),
      { count: 3 },
    ),
    isSearchable: faker.datatype.boolean(),
    selectedOptionCount: faker.number.int(10),
  }),
  { count: 3 },
);

describe("ListFilterAside", () => {
  afterEach(() => {
    cleanup();
  });

  it("Renders an aside and form element if props are empty", () => {
    render(<ListFilterAside sections={[]} searchParams={{}} nameSpace="" />, {
      wrapper: NextIntlClientWrapper,
    });
    const aside = screen.getByRole("complementary");
    const form = screen.getByRole("form");
    expect(aside).toBeInTheDocument();
    expect(form).toBeInTheDocument();
  });

  it("Renders 2 advertising elements", () => {
    render(<ListFilterAside sections={[]} searchParams={{}} nameSpace="" />, {
      wrapper: NextIntlClientWrapper,
    });
    const links = screen.getAllByRole("button", {
      name: "Follow advertisement link",
    });
    expect(links).toHaveLength(2);
    for (const link of links) {
      expect(link).toBeInTheDocument();
    }
  });

  it("Renders a chip element for each applied filter", () => {
    render(
      <ListFilterAside
        sections={[]}
        searchParams={{
          brand: VehicleBrand.ETK,
          fuel_type: VehicleFuelType.GASOLINE,
        }}
        nameSpace="vehicles"
      />,
      { wrapper: NextIntlClientWrapper },
    );
    const chips = screen.getAllByTestId("chip");
    expect(chips).toHaveLength(2);
  });

  it("Handles the chip rendering of filters with multiple values", () => {
    render(
      <ListFilterAside
        sections={[]}
        searchParams={{
          brand: `${VehicleBrand.ETK},${VehicleBrand.SOLIAD},${VehicleBrand.WENTWARD}`,
        }}
        nameSpace="vehicles"
      />,
      { wrapper: NextIntlClientWrapper },
    );
    const chips = screen.getAllByTestId("chip");
    expect(chips).toHaveLength(3);
  });

  it("Excludes correctly any blacklist elements for applied filters list", () => {
    render(
      <ListFilterAside
        sections={[]}
        searchParams={{
          page: "1",
        }}
        nameSpace="vehicles"
      />,
      { wrapper: NextIntlClientWrapper },
    );
    const chip = screen.queryByTestId("chip");
    expect(chip).not.toBeInTheDocument();
  });

  it("Renders a fieldset element for each section passed", () => {
    render(
      <ListFilterAside
        sections={sections}
        searchParams={{}}
        nameSpace="vehicles"
      />,
      { wrapper: NextIntlClientWrapper },
    );
    const fieldsetElements = screen.getAllByRole("group");
    expect(fieldsetElements).toHaveLength(3);
    for (const fieldset of fieldsetElements) {
      expect(fieldset).toBeInTheDocument();
    }
  });
});
