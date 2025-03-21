import { useTranslations } from "next-intl";

import {
  VehicleBodyStyle,
  VehicleBrand,
  VehicleCondition,
  VehicleCountry,
  VehicleDrivetrain,
  VehicleFuelType,
  VehicleTransmission,
} from "@prisma/client";

import { cleanup, render, screen, within } from "@testing-library/react";

import { afterAll, beforeAll, describe, expect, it } from "vitest";

import VehicleListFilterAside from ".";

describe("VehicleListFilterAside", () => {
  const t = useTranslations("vehicles");
  beforeAll(() => {
    render(<VehicleListFilterAside searchParams={{}} />);
  });

  afterAll(() => {
    cleanup();
  });

  it("Renders the condition fieldset with its options", () => {
    const section = screen.getByRole("group", { name: /condition/i });
    const options = within(section).getAllByRole("listitem");
    expect(section).toBeInTheDocument();
    expect(options).toHaveLength(Object.entries(VehicleCondition).length);
    Object.values(VehicleCondition).forEach((value) => {
      const labelText = t(`filter.condition.option.${value}`);
      const label = within(section).getByLabelText(labelText);
      expect(label).toBeInTheDocument();
    });
  });

  it("Renders the brand field fieldset its options", () => {
    const section = screen.getByRole("group", { name: /brand/i });
    const options = within(section).getAllByRole("listitem");
    expect(section).toBeInTheDocument();
    expect(options).toHaveLength(Object.entries(VehicleBrand).length);
    Object.values(VehicleBrand).forEach((value) => {
      const labelText = t(`filter.brand.option.${value}`);
      const label = within(section).getByLabelText(labelText);
      expect(label).toBeInTheDocument();
    });
  });

  it("Renders the body style fieldset with its options", () => {
    const section = screen.getByRole("group", { name: /body style/i });
    const options = within(section).getAllByRole("listitem");
    expect(section).toBeInTheDocument();
    expect(options).toHaveLength(Object.entries(VehicleBodyStyle).length);
    Object.values(VehicleBodyStyle).forEach((value) => {
      const labelText = t(`filter.body_style.option.${value}`);
      const label = within(section).getByLabelText(labelText);
      expect(label).toBeInTheDocument();
    });
  });

  it("Renders the fuel type fieldset with its options", () => {
    const section = screen.getByRole("group", { name: /fuel type/i });
    const options = within(section).getAllByRole("listitem");
    expect(section).toBeInTheDocument();
    expect(options).toHaveLength(Object.entries(VehicleFuelType).length);
    Object.values(VehicleFuelType).forEach((value) => {
      const labelText = t(`filter.fuel_type.option.${value}`);
      const label = within(section).getByLabelText(labelText);
      expect(label).toBeInTheDocument();
    });
  });

  it("Renders the cylinders fieldset with its options", () => {
    const values = [3, 4, 5, 6, 8, 10];
    const section = screen.getByRole("group", { name: /cylinders/i });
    const options = within(section).getAllByRole("listitem");
    expect(section).toBeInTheDocument();
    expect(options).toHaveLength(values.length);
    values.forEach((value) => {
      const labelText = t(`filter.engine_cylinder_count.option.${value}`);
      const label = within(section).getByLabelText(labelText);
      expect(label).toBeInTheDocument();
    });
  });

  it("Renders the transmission fieldset with its options", () => {
    const section = screen.getByRole("group", { name: /transmission/i });
    const options = within(section).getAllByRole("listitem");
    expect(section).toBeInTheDocument();
    expect(options).toHaveLength(Object.entries(VehicleTransmission).length);
    Object.values(VehicleTransmission).forEach((value) => {
      const labelText = t(`filter.transmission.option.${value}`);
      const label = within(section).getByLabelText(labelText);
      expect(label).toBeInTheDocument();
    });
  });

  it("Renders the drivetrain fieldset with its options", () => {
    const section = screen.getByRole("group", { name: /drivetrain/i });
    const options = within(section).getAllByRole("listitem");
    expect(section).toBeInTheDocument();
    expect(options).toHaveLength(Object.entries(VehicleDrivetrain).length);
    Object.values(VehicleDrivetrain).forEach((value) => {
      const labelText = t(`filter.drivetrain.option.${value}`);
      const label = within(section).getByLabelText(labelText);
      expect(label).toBeInTheDocument();
    });
  });

  it("Renders the country fieldset with its options", () => {
    const section = screen.getByRole("group", { name: /country/i });
    const options = within(section).getAllByRole("listitem");
    expect(section).toBeInTheDocument();
    expect(options).toHaveLength(Object.entries(VehicleCountry).length);
    Object.values(VehicleCountry).forEach((value) => {
      const labelText = t(`filter.country.option.${value}`);
      const label = within(section).getByLabelText(labelText);
      expect(label).toBeInTheDocument();
    });
  });
});
