import Script from "next/script";

import { getVehicleRichData } from "@/lib/vehicle/utils";

import type { VehicleRichDataProps } from ".";

export default function VehicleRichData({
  brand,
  medias,
  name,
  price,
  slug,
  description,
}: VehicleRichDataProps) {
  const thumbnail =
    (medias ?? []).find((media) => media.is_thumbnail)?.url ?? "";

  return (
    <Script
      data-testid="vehicle-rich-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={getVehicleRichData({
        brand,
        thumbnail,
        name,
        price,
        slug,
        description,
      })}
      id={slug}
    />
  );
}
