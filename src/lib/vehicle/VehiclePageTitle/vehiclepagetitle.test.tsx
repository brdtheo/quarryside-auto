import { cleanup, render, renderHook, screen } from "@testing-library/react";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { vehicleFactory } from "@/lib/vehicle/factory";
import useVehicleDetails from "@/lib/vehicle/hooks/useVehicleDetails";
import { VehicleWithMedias } from "@/lib/vehicle/types";

import { NextIntlClientWrapper } from "@/setupTests";

import VehiclePageTitle from ".";

describe("VehiclePageTitle", () => {
  const vehicle = vehicleFactory({ withMedia: true }) as VehicleWithMedias;
  const {
    result: { current },
  } = renderHook(() => useVehicleDetails(vehicle), {
    wrapper: NextIntlClientWrapper,
  });
  const vehicleDetails = current;

  beforeEach(() => {
    render(<VehiclePageTitle vehicle={vehicle} />, {
      wrapper: NextIntlClientWrapper,
    });
  });

  afterEach(() => {
    cleanup();
  });

  it("Renders a heading of level 1 with the correct text content", () => {
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(vehicleDetails.titleWithoutYear);
  });
});
