import { getTranslations } from "next-intl/server";

import DetailSection from "@/components/DetailSection";

import WheelCard from "@/lib/wheel/WheelCard";
import WheelList from "@/lib/wheel/WheelList";

import { VehicleRelatedWheelsSectionProps } from ".";

export default async function VehicleRelatedWheelsSection({
  wheels,
}: VehicleRelatedWheelsSectionProps) {
  const t = await getTranslations("vehicles");

  const parsedVehicleWheels =
    (wheels ?? []).length > 0
      ? (wheels ?? []).map((vehicleWheel) => ({
          ...vehicleWheel.wheels,
        }))
      : [];

  return (
    (parsedVehicleWheels ?? []).length > 0 && (
      <DetailSection title={t("wheels")}>
        <WheelList
          className=""
          data={parsedVehicleWheels ?? []}
          itemRender={(wheel) => (
            <li
              className="col-span-4 @sm/wheellist:col-span-2 @3xl/wheellist:col-span-1"
              key={wheel.id}
            >
              <WheelCard
                slug={wheel.slug}
                thumbnailUrl={wheel.thumbnail_url}
                brand={wheel.brand}
                model={wheel.model}
                priceCts={wheel.price_cts}
                averageRating={3.5}
                isDeliveryAvailable={wheel.delivery_available}
                isOnsitePickupFree={wheel.free_on_site_pickup}
              />
            </li>
          )}
        />
      </DetailSection>
    )
  );
}
