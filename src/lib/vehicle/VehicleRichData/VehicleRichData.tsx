import Script from "next/script";

import useVehicleDetails from "@/lib/vehicle/hooks/useVehicleDetails";
import { getVehicleRichData } from "@/lib/vehicle/utils";

import type { VehicleRichDataProps } from ".";

export default function VehicleRichData({ vehicle }: VehicleRichDataProps) {
  const thumbnail =
    (vehicle.medias ?? []).find((media) => media.is_thumbnail)?.url ?? "";

  const { titleWithoutYear, priceWithoutCurrency, brand } =
    useVehicleDetails(vehicle);

  return (
    <Script
      data-testid="vehicle-rich-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={getVehicleRichData({
        brand,
        thumbnail,
        name: titleWithoutYear,
        price: priceWithoutCurrency ?? "",
        slug: vehicle.slug,
        description: vehicle.description ?? "",
      })}
      id={vehicle.slug}
    />
  );
}
