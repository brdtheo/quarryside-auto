import { getTranslations } from "next-intl/server";

import {
  cleanup,
  render,
  renderHook,
  screen,
  within,
} from "@testing-library/react";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { vehicleFactory } from "@/lib/vehicle/factory";
import useVehicleDetails from "@/lib/vehicle/hooks/useVehicleDetails";
import { VehicleWithMedias } from "@/lib/vehicle/types";

import { NextIntlClientWrapper } from "@/setupTests";

import VehicleCard from ".";

describe("VehicleCard", async () => {
  const vehicle = vehicleFactory({ withMedia: true }) as VehicleWithMedias;
  const {
    result: { current },
  } = renderHook(async () => await useVehicleDetails(vehicle));
  const vehicleDetails = await current;

  beforeEach(async () => {
    render(
      await VehicleCard({
        vehicle,
      }),
      { wrapper: NextIntlClientWrapper },
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("Renders an article element", () => {
    const article = screen.getByRole("article");
    expect(article).toBeInTheDocument();
  });

  it("Renders a link with a valid href attribute", () => {
    const link = screen.getByRole("link");
    const linkHref = link.getAttribute("href");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href");
    expect(linkHref).toContain(`/vehicles/${encodeURIComponent(vehicle.slug)}`);
  });

  it("Renders an image element if a thumbnail is available", () => {
    const thumbnail = vehicle.medias.find((media) => media.is_thumbnail);
    if (!thumbnail) return;
    const image = screen.getByRole("img");
    const imageSrc = image.getAttribute("src");
    const imagAlt = image.getAttribute("alt");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
    expect(image).toHaveAttribute("alt");
    expect(imageSrc).toBeTruthy();
    expect(imagAlt).toBeTruthy();
  });

  it("Does not render an image element if no thumbnail available", () => {
    const thumbnail = vehicle.medias.find((media) => media.is_thumbnail);
    if (thumbnail) return;
    const image = screen.queryByRole("img");
    expect(image).not.toBeInTheDocument();
  });

  it("Renders the vehicle's condition", () => {
    const condition = screen.getByText(vehicleDetails.condition);
    expect(condition).toBeInTheDocument();
  });

  it("Renders a heading containing the vehicle's title", () => {
    const title = screen.getByRole("heading", {
      level: 2,
      name: vehicleDetails.title,
    });
    expect(title).toBeInTheDocument();
  });

  it("Renders the vehicle's mileage", () => {
    const mileage = screen.getByText(vehicleDetails.mileage);
    expect(mileage).toBeInTheDocument();
  });

  it("Renders the vehicle's transmission", () => {
    const transmission = screen.getByText(vehicleDetails.transmission);
    expect(transmission).toBeInTheDocument();
  });

  it("Renders the vehicle's monthly estimated price", () => {
    const monthlyEstimatePrice = screen.getByText(
      vehicleDetails.monthlyEstimatePrice,
    );
    expect(monthlyEstimatePrice).toBeInTheDocument();
  });

  it("Renders a Check Availability button", async () => {
    const t = await getTranslations("vehicles");
    const button = screen.getByRole("button");
    const buttonText = within(button).getByText(t("checkAvailability"));
    expect(button).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
  });
});
