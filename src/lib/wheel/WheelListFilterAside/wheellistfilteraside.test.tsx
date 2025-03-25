import { useTranslations } from "next-intl";

import { WheelBrand } from "@prisma/client";

import { cleanup, render, screen, within } from "@testing-library/react";

import { afterAll, beforeAll, describe, expect, it } from "vitest";

import WheelListFilterAside from ".";

describe("WheelListFilterAside", () => {
  const t = useTranslations("wheels");
  beforeAll(() => {
    render(<WheelListFilterAside searchParams={{}} />);
  });

  afterAll(() => {
    cleanup();
  });

  it("Renders the brand field fieldset its options", () => {
    const section = screen.getByRole("group", { name: /brand/i });
    const options = within(section).getAllByRole("listitem");
    expect(section).toBeInTheDocument();
    expect(options).toHaveLength(Object.entries(WheelBrand).length);
    for (const value of Object.values(WheelBrand)) {
      const labelText = t(`filter.brand.option.${value}`);
      const label = within(section).getByLabelText(labelText);
      expect(label).toBeInTheDocument();
    }
  });

  it("Renders the availability fieldset with its options", () => {
    const values = [
      "is_three_lug",
      "is_four_lug",
      "is_five_lug",
      "is_six_lug",
      "is_eight_lug",
      "is_ten_lug",
      "is_central_lug",
    ];
    const section = screen.getByRole("group", { name: /availability/i });
    const options = within(section).getAllByRole("listitem");
    expect(section).toBeInTheDocument();
    expect(options).toHaveLength(values.length);
    for (const value of values) {
      const labelText = t(`filter.${value}.option.true`);
      const label = within(section).getByLabelText(labelText);
      expect(label).toBeInTheDocument();
    }
  });

  it("Renders the delivery fieldset with its option", () => {
    const section = screen.getByRole("group", { name: /delivery/i });
    const option = within(section).getByRole("listitem");
    const optionLabel = within(section).getByLabelText(
      t("filter.delivery_available.option.true"),
    );
    expect(section).toBeInTheDocument();
    expect(option).toBeInTheDocument();
    expect(optionLabel).toBeInTheDocument();
  });

  it("Renders the on site pickup fieldset with its option", () => {
    const section = screen.getByRole("group", { name: /on site pickup/i });
    const option = within(section).getByRole("listitem");
    const optionLabel = within(section).getByLabelText(
      t("filter.free_on_site_pickup.option.true"),
    );
    expect(section).toBeInTheDocument();
    expect(option).toBeInTheDocument();
    expect(optionLabel).toBeInTheDocument();
  });
});
