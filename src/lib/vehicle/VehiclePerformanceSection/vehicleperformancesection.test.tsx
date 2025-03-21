import { cleanup, render, renderHook, screen } from "@testing-library/react";

import { afterEach, describe, expect, it } from "vitest";

import { vehicleFactory } from "@/lib/vehicle/factory";
import useVehicleDetails from "@/lib/vehicle/hooks/useVehicleDetails";

import { NextIntlClientWrapper } from "@/setupTests";

import VehiclePerformanceSection from ".";

describe("VehiclePerformanceSection", () => {
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
    const { container } = render(<VehiclePerformanceSection />, {
      wrapper: NextIntlClientWrapper,
    });
    expect(container).toBeEmptyDOMElement();
  });

  it("Renders a section with a heading of level 2", () => {
    render(<VehiclePerformanceSection vehicle={vehicle} />, {
      wrapper: NextIntlClientWrapper,
    });
    const section = document.querySelector("section");
    const heading = screen.getByRole("heading", {
      level: 2,
      name: /performance/i,
    });
    expect(section).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });

  it("Renders a table element", () => {
    render(<VehiclePerformanceSection vehicle={vehicle} />, {
      wrapper: NextIntlClientWrapper,
    });
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });

  it("Renders the vehicle power", () => {
    render(<VehiclePerformanceSection vehicle={vehicle} />, {
      wrapper: NextIntlClientWrapper,
    });
    const power = screen.getByText(vehicleDetails.power);
    expect(power).toBeInTheDocument();
  });

  it("Renders the vehicle 0 to 60 seconds", () => {
    render(<VehiclePerformanceSection vehicle={vehicle} />, {
      wrapper: NextIntlClientWrapper,
    });
    const zeroToSixtySeconds = screen.getByText(
      vehicleDetails.zeroToSixtySeconds,
    );
    expect(zeroToSixtySeconds).toBeInTheDocument();
  });

  it("Renders the vehicle top speed", () => {
    render(<VehiclePerformanceSection vehicle={vehicle} />, {
      wrapper: NextIntlClientWrapper,
    });
    const topSpeed = screen.getByText(vehicleDetails.topSpeed);
    expect(topSpeed).toBeInTheDocument();
  });
});
