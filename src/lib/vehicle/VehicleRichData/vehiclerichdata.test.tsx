import { cleanup, render, renderHook, screen } from "@testing-library/react";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { vehicleFactory } from "@/lib/vehicle/factory";
import useVehicleDetails from "@/lib/vehicle/hooks/useVehicleDetails";
import { VehicleWithMedias } from "@/lib/vehicle/types";

import { NextIntlClientWrapper } from "@/setupTests";

import VehicleRichData from ".";

describe("VehicleRichData", () => {
  const vehicle = vehicleFactory({ withMedia: true }) as VehicleWithMedias;
  const {
    result: { current },
  } = renderHook(() => useVehicleDetails(vehicle), {
    wrapper: NextIntlClientWrapper,
  });
  const vehicleDetails = current;

  beforeEach(() => {
    render(
      <VehicleRichData
        brand={vehicleDetails.brand}
        medias={vehicle.medias}
        name={vehicleDetails.titleWithoutYear}
        description={vehicle.description ?? ""}
        price={vehicleDetails.priceWithoutCurrency ?? ""}
        slug={vehicle.slug}
      />,
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("Renders a script element", () => {
    const script = screen.getByTestId("vehicle-rich-data");
    expect(script).toBeInTheDocument();
  });

  it("Inserts JSON-LD data into the script element", () => {
    const script = screen.getByTestId("vehicle-rich-data");
    const scriptData = JSON.parse(script.textContent ?? "");
    const thumbnail =
      (vehicle.medias ?? []).find((media) => media.is_thumbnail)?.url ?? "";
    expect(scriptData["@type"]).toBe("Product");
    expect(scriptData.name).toBe(vehicleDetails.titleWithoutYear);
    expect(scriptData.description).toBe(vehicle.description);
    expect(scriptData.image).toBe(thumbnail);
    expect(scriptData.brand).toMatchObject({
      "@type": "Brand",
      name: vehicleDetails.brand,
    });
    expect(scriptData.offers).toMatchObject({
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: `https://quarryside-auto.com/vehicles/${vehicle.slug}`,
      priceCurrency: "USD",
      price: vehicleDetails.priceWithoutCurrency,
    });
  });
});
