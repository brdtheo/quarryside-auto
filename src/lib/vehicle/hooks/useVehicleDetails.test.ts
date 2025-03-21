import { useTranslations } from "next-intl";

import { renderHook } from "@testing-library/react-hooks/server";

import { describe, expect, expectTypeOf, it } from "vitest";

import { vehicleFactory } from "@/lib/vehicle/factory";
import useVehicleDetails from "@/lib/vehicle/hooks/useVehicleDetails";
import { getMonthlyEstimatePrice } from "@/lib/vehicle/utils";

import { getPrice } from "@/utils";

import { NextIntlClientWrapper } from "@/setupTests";

describe("useVehicleDetails", () => {
  const t = useTranslations("vehicles");
  const vehicle = vehicleFactory();
  const {
    result: { current },
  } = renderHook(() => useVehicleDetails(vehicle), {
    wrapper: NextIntlClientWrapper,
  });
  const vehicleDetails = current;

  it("Returns an object with empty values if param is empty", () => {
    const {
      result: { current },
      // @ts-expect-error We simulate an unexpected behavior
    } = renderHook(() => useVehicleDetails(undefined), {
      wrapper: NextIntlClientWrapper,
    });
    const result = current;
    expect(result).toBeDefined();
    Object.entries(current).forEach((entry) => {
      const key = entry[0];
      const value = entry[1];
      expect(key).toBeTruthy();
      expect(value).toBe("");
    });
  });

  it("Returns the vehicle's body style", () => {
    expectTypeOf(vehicleDetails.bodyStyle).toEqualTypeOf<string>();
    expect(vehicleDetails.bodyStyle).toBeTruthy();
    expect(vehicleDetails.bodyStyle).toBe(
      t(`filter.body_style.option.${vehicle.body_style}`),
    );
  });

  it("Returns the vehicle's brand", () => {
    expectTypeOf(vehicleDetails.brand).toEqualTypeOf<string>();
    expect(vehicleDetails.brand).toBeTruthy();
    expect(vehicleDetails.brand).toBe(
      t(`filter.brand.option.${vehicle.brand}`),
    );
  });

  it("Returns the vehicle's condition", () => {
    expectTypeOf(vehicleDetails.condition).toEqualTypeOf<string>();
    expect(vehicleDetails.condition).toBeTruthy();
    expect(vehicleDetails.condition).toBe(
      t(`filter.condition.option.${vehicle.condition}`),
    );
  });

  it("Returns the vehicle's country", () => {
    expectTypeOf(vehicleDetails.country).toEqualTypeOf<string>();
    expect(vehicleDetails.country).toBeTruthy();
    expect(vehicleDetails.country).toBe(
      t(`filter.country.option.${vehicle.country}`),
    );
  });

  it("Returns the vehicle's drivetrain", () => {
    expectTypeOf(vehicleDetails.drivetrain).toEqualTypeOf<string>();
    expect(vehicleDetails.drivetrain).toBeTruthy();
    expect(vehicleDetails.drivetrain).toBe(
      t(`filter.drivetrain.option.${vehicle.drivetrain}`),
    );
  });

  it("Returns the vehicle's engine", () => {
    expectTypeOf(vehicleDetails.engine).toEqualTypeOf<string>();
    if (vehicle.engine_cylinder_count) {
      expect(vehicleDetails.engine).toBe(
        t("details.engine.value", {
          engineDisplacementVolumeLiters: Number(
            vehicle.engine_displacement_volume_liters,
          ),
          engineLayout: vehicle.engine_layout ?? "",
          engineCylinderCount: vehicle.engine_cylinder_count,
        }),
      );
    } else {
      expect(vehicleDetails.engine).toBe("");
    }
  });

  it("Returns the vehicle's link href", () => {
    expectTypeOf(vehicleDetails.href).toEqualTypeOf<string>();
    expect(vehicleDetails.href).toBeTruthy();
    expect(vehicleDetails.href).toBe(
      `/vehicles/${encodeURIComponent(vehicle.slug)}`,
    );
  });

  it("Returns the vehicle's mileage", () => {
    expectTypeOf(vehicleDetails.mileage).toEqualTypeOf<string>();
    expect(vehicleDetails.mileage).toBeTruthy();
    expect(vehicleDetails.mileage).toBe(
      t("details.mileage.value", {
        mileage: vehicle.mileage ?? "",
      }),
    );
  });

  it("Returns the vehicle's monthly estimate price", () => {
    expectTypeOf(vehicleDetails.monthlyEstimatePrice).toEqualTypeOf<string>();
    expect(vehicleDetails.monthlyEstimatePrice).toBeTruthy();
    expect(vehicleDetails.monthlyEstimatePrice).toBe(
      getMonthlyEstimatePrice(vehicle.price_cts),
    );
  });

  it("Returns the vehicle's power", () => {
    expectTypeOf(vehicleDetails.power).toEqualTypeOf<string>();
    expect(vehicleDetails.power).toBeTruthy();
    expect(vehicleDetails.power).toBe(
      t("details.power.value", {
        power: Number(vehicle.power_bhp),
      }),
    );
  });

  it("Returns the vehicle's price", () => {
    expectTypeOf(vehicleDetails.price).toEqualTypeOf<string>();
    expect(vehicleDetails.price).toBeTruthy();
    expect(vehicleDetails.price).toBe(getPrice(vehicle.price_cts));
  });

  it("Returns the vehicle's price without currency", () => {
    expectTypeOf(
      vehicleDetails.priceWithoutCurrency ?? "",
    ).toEqualTypeOf<string>();
    expect(vehicleDetails.priceWithoutCurrency).toBeTruthy();
    expect(vehicleDetails.priceWithoutCurrency).toBe(
      getPrice(vehicle.price_cts, { symbol: "" }),
    );
  });

  it("Returns the vehicle's title", () => {
    expectTypeOf(vehicleDetails.title).toEqualTypeOf<string>();
    expect(vehicleDetails.title).toBeTruthy();
    expect(vehicleDetails.title).toBe(
      [
        vehicle.year,
        t(`filter.brand.option.${vehicle.brand}`),
        vehicle.model,
      ].join(" "),
    );
  });

  it("Returns the vehicle's title without year", () => {
    expectTypeOf(vehicleDetails.titleWithoutYear).toEqualTypeOf<string>();
    expect(vehicleDetails.titleWithoutYear).toBeTruthy();
    expect(vehicleDetails.titleWithoutYear).toBe(
      [t(`filter.brand.option.${vehicle.brand}`), vehicle.model].join(" "),
    );
  });

  it("Returns the vehicle's top speed", () => {
    expectTypeOf(vehicleDetails.topSpeed).toEqualTypeOf<string>();
    expect(vehicleDetails.topSpeed).toBeTruthy();
    expect(vehicleDetails.topSpeed).toBe(
      t("details.topSpeed.value", {
        speed: vehicle.top_speed_mph ?? "",
      }),
    );
  });

  it("Returns the vehicle's transmission", () => {
    expectTypeOf(vehicleDetails.transmission).toEqualTypeOf<string>();
    expect(vehicleDetails.transmission).toBeTruthy();
    expect(vehicleDetails.transmission).toBe(
      t(`filter.transmission.option.${vehicle.transmission}`),
    );
  });

  it("Returns the vehicle's weight", () => {
    expectTypeOf(vehicleDetails.weight).toEqualTypeOf<string>();
    expect(vehicleDetails.weight).toBeTruthy();
    expect(vehicleDetails.weight).toBe(
      t("details.weight.value", {
        weight: Number(vehicle.weight_lbs),
      }),
    );
  });

  it("Returns the vehicle's 0 to 60 seconds", () => {
    expectTypeOf(vehicleDetails.zeroToSixtySeconds).toEqualTypeOf<string>();
    expect(vehicleDetails.zeroToSixtySeconds).toBeTruthy();
    expect(vehicleDetails.zeroToSixtySeconds).toBe(
      t("details.zeroToSixty.value", {
        seconds: Number(vehicle.zero_to_sixty_seconds),
      }),
    );
  });
});
