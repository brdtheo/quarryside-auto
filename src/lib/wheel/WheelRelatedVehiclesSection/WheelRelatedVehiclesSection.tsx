import { getTranslations } from "next-intl/server";

import DetailSection from "@/components/DetailSection";

import VehicleCard from "@/lib/vehicle/VehicleCard";
import VehicleList from "@/lib/vehicle/VehicleList";

import type { WheelRelatedVehiclesSectionProps } from ".";

export default async function WheelRelatedVehiclesSection({
  vehicles,
}: WheelRelatedVehiclesSectionProps) {
  const t = await getTranslations("wheels");

  const parsedVehicleWheels =
    (vehicles ?? []).length > 0
      ? (vehicles ?? []).map((vehicle) => ({
          ...vehicle.vehicles,
        }))
      : [];

  return (
    (parsedVehicleWheels ?? []).length > 0 && (
      <DetailSection title={t("availableOn")}>
        <VehicleList
          data={parsedVehicleWheels}
          itemRender={(vehicle) => (
            <li key={vehicle.id}>
              <VehicleCard vehicle={vehicle} />
            </li>
          )}
        />
      </DetailSection>
    )
  );
}
