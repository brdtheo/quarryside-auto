import { cleanup, render, renderHook, screen } from "@testing-library/react";

import { afterEach, describe, expect, it } from "vitest";

import { vehicleFactory } from "@/lib/vehicle/factory";
import useVehicleDetails from "@/lib/vehicle/hooks/useVehicleDetails";

import { NextIntlClientWrapper } from "@/setupTests";

import VehicleSpecificationSection from ".";

describe("VehicleSpecificationSection", () => {
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
    const { container } = render(<VehicleSpecificationSection />, {
      wrapper: NextIntlClientWrapper,
    });
    expect(container).toBeEmptyDOMElement();
  });

  it("Renders a section with a heading of level 2", () => {
    render(<VehicleSpecificationSection vehicle={vehicle} />, {
      wrapper: NextIntlClientWrapper,
    });
    const section = document.querySelector("section");
    const heading = screen.getByRole("heading", {
      level: 2,
      name: /specifications/i,
    });
    expect(section).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });

  it("Renders a table element", () => {
    render(<VehicleSpecificationSection vehicle={vehicle} />, {
      wrapper: NextIntlClientWrapper,
    });
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });

  it("Renders the vehicle body style", () => {
    render(<VehicleSpecificationSection vehicle={vehicle} />, {
      wrapper: NextIntlClientWrapper,
    });
    const bodyStyle = screen.getByText(vehicleDetails.bodyStyle);
    expect(bodyStyle).toBeInTheDocument();
  });

  it("Renders the vehicle country", () => {
    render(<VehicleSpecificationSection vehicle={vehicle} />, {
      wrapper: NextIntlClientWrapper,
    });
    const country = screen.getByText(vehicleDetails.country);
    expect(country).toBeInTheDocument();
  });

  it("Renders the vehicle brand", () => {
    render(<VehicleSpecificationSection vehicle={vehicle} />, {
      wrapper: NextIntlClientWrapper,
    });
    const brand = screen.getByText(vehicleDetails.brand);
    expect(brand).toBeInTheDocument();
  });

  it("Renders the vehicle year", () => {
    render(<VehicleSpecificationSection vehicle={vehicle} />, {
      wrapper: NextIntlClientWrapper,
    });
    const year = screen.getByText(`${vehicle.year}`);
    expect(year).toBeInTheDocument();
  });

  it("Renders the vehicle drivetrain", () => {
    render(<VehicleSpecificationSection vehicle={vehicle} />, {
      wrapper: NextIntlClientWrapper,
    });
    const drivetrain = screen.getByText(vehicleDetails.drivetrain);
    expect(drivetrain).toBeInTheDocument();
  });

  it("Renders the vehicle engine", () => {
    if (
      !vehicle.engine_displacement_volume_liters ||
      !vehicle.engine_layout ||
      !vehicle.engine_cylinder_count
    ) {
      return;
    }
    render(<VehicleSpecificationSection vehicle={vehicle} />, {
      wrapper: NextIntlClientWrapper,
    });
    const engine = screen.getByText(vehicleDetails.engine);
    expect(engine).toBeInTheDocument();
  });

  it("Renders the vehicle fuel type", () => {
    render(<VehicleSpecificationSection vehicle={vehicle} />, {
      wrapper: NextIntlClientWrapper,
    });
    const fuelType = screen.getByText(vehicleDetails.fuelType);
    expect(fuelType).toBeInTheDocument();
  });

  it("Renders the vehicle mileage", () => {
    render(<VehicleSpecificationSection vehicle={vehicle} />, {
      wrapper: NextIntlClientWrapper,
    });
    const mileage = screen.getByText(vehicleDetails.mileage);
    expect(mileage).toBeInTheDocument();
  });

  it("Renders the vehicle weight", () => {
    render(<VehicleSpecificationSection vehicle={vehicle} />, {
      wrapper: NextIntlClientWrapper,
    });
    const weight = screen.getByText(vehicleDetails.weight);
    expect(weight).toBeInTheDocument();
  });

  it("Renders the vehicle transmission", () => {
    render(<VehicleSpecificationSection vehicle={vehicle} />, {
      wrapper: NextIntlClientWrapper,
    });
    const transmission = screen.getByText(vehicleDetails.transmission);
    expect(transmission).toBeInTheDocument();
  });
});
