import { getTranslations } from "next-intl/server";

import { Vehicle } from "@prisma/client";

import { getMonthlyEstimatePrice } from "@/lib/vehicle/utils";

import { getPrice } from "@/utils";

/** In some cases received vehicle param has prisma relationship properties included */
interface VehicleBase extends Vehicle {
  [key: string]: unknown;
}

/**
 * Returns each wording relatedt to a vehicle value
 * @param {Vehicle} vehicle
 */
export default async function useVehicleDetails(vehicle: VehicleBase) {
  const t = await getTranslations("vehicles");

  if (!vehicle) {
    return {
      bodyStyle: "",
      brand: "",
      condition: "",
      country: "",
      drivetrain: "",
      engine: "",
      fuelType: "",
      href: "",
      mileage: "",
      monthlyEstimatePrice: "",
      power: "",
      price: "",
      title: "",
      titleWithoutYear: "",
      topSpeed: "",
      transmission: "",
      weight: "",
      zeroToSixtySeconds: "",
    };
  }

  const title =
    vehicle.year && vehicle.brand && vehicle.model
      ? [
          vehicle.year,
          t(`filter.brand.option.${vehicle.brand}`),
          vehicle.model,
        ].join(" ")
      : "";

  const titleWithoutYear =
    vehicle.brand && vehicle.model
      ? [t(`filter.brand.option.${vehicle.brand}`), vehicle.model].join(" ")
      : "";

  const bodyStyle = vehicle.body_style
    ? t(`filter.body_style.option.${vehicle.body_style}`)
    : "";

  const brand = vehicle.brand ? t(`filter.brand.option.${vehicle.brand}`) : "";

  const condition = vehicle.condition
    ? t(`filter.condition.option.${vehicle.condition}`)
    : "";

  const country = vehicle.country
    ? t(`filter.country.option.${vehicle.country}`)
    : "";

  const drivetrain = vehicle.drivetrain
    ? t(`filter.drivetrain.option.${vehicle.drivetrain}`)
    : "";

  const href = `/vehicles/${encodeURIComponent(vehicle.slug ?? "")}`;

  const mileage = t("details.mileage.value", {
    mileage: vehicle.mileage,
  });

  const transmission = t(`filter.transmission.option.${vehicle.transmission}`);

  const price = vehicle.price_cts ? getPrice(vehicle.price_cts) : "";

  const power = vehicle.power_bhp
    ? t("details.power.value", {
        power: Number(vehicle.power_bhp),
      })
    : "";

  const engine =
    vehicle.engine_displacement_volume_liters &&
    vehicle.engine_layout &&
    vehicle.engine_cylinder_count
      ? t("details.engine.value", {
          engineDisplacementVolumeLiters: Number(
            vehicle.engine_displacement_volume_liters,
          ),
          engineLayout: vehicle.engine_layout,
          engineCylinderCount: vehicle.engine_cylinder_count,
        })
      : "";

  const monthlyEstimatePrice = vehicle.price_cts
    ? getMonthlyEstimatePrice(vehicle.price_cts)
    : "";

  const fuelType = vehicle.fuel_type
    ? t(`filter.fuel_type.option.${vehicle.fuel_type}`)
    : "";

  const topSpeed = vehicle.top_speed_mph
    ? t("details.topSpeed.value", {
        speed: vehicle.top_speed_mph,
      })
    : "";

  const weight = vehicle.weight_lbs
    ? t("details.weight.value", {
        weight: Number(vehicle.weight_lbs),
      })
    : "";

  const zeroToSixtySeconds = vehicle.zero_to_sixty_seconds
    ? t("details.zeroToSixty.value", {
        seconds: Number(vehicle.zero_to_sixty_seconds),
      })
    : "";

  return {
    bodyStyle,
    brand,
    condition,
    country,
    drivetrain,
    engine,
    fuelType,
    href,
    mileage,
    monthlyEstimatePrice,
    power,
    price,
    title,
    titleWithoutYear,
    topSpeed,
    transmission,
    weight,
    zeroToSixtySeconds,
  };
}
