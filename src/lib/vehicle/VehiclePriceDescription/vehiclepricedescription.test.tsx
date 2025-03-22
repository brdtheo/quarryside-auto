import { cleanup, render, renderHook, screen } from "@testing-library/react";

import { afterEach, describe, expect, it } from "vitest";

import { vehicleFactory } from "@/lib/vehicle/factory";
import useVehicleDetails from "@/lib/vehicle/hooks/useVehicleDetails";

import { NextIntlClientWrapper } from "@/setupTests";

import VehiclePriceDescription from ".";

describe("VehiclePriceDescription", () => {
  const vehicle = vehicleFactory();
  const {
    result: { current },
  } = renderHook(() => useVehicleDetails(vehicle), {
    wrapper: NextIntlClientWrapper,
  });
  const vehicleDetails = current;

  afterEach(() => {
    cleanup();
  });

  it("Does not renders anything if vehicle is not passed", () => {
    // @ts-expect-error We simulate an unexpected behavior
    const { container } = render(<VehiclePriceDescription />, {
      wrapper: NextIntlClientWrapper,
    });
    expect(container).toBeEmptyDOMElement();
  });

  it("Renders a span element containing the vehicle price", () => {
    render(<VehiclePriceDescription vehicle={vehicle} />, {
      wrapper: NextIntlClientWrapper,
    });
    const price = screen.getByLabelText("vehicle-price");
    expect(price).toBeInTheDocument();
    expect(price).toHaveTextContent(vehicleDetails.price);
  });

  it("Renders a paragraph containing the vehicle description", () => {
    render(<VehiclePriceDescription vehicle={vehicle} />, {
      wrapper: NextIntlClientWrapper,
    });
    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent(vehicle.description ?? "");
  });
});
