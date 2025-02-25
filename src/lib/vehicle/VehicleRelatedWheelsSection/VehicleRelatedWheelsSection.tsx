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
          data={parsedVehicleWheels ?? []}
          itemRender={(wheel) => (
            <li
              className="col-span-4 @sm/wheellist:col-span-2 @3xl/wheellist:col-span-1"
              key={wheel.id}
            >
              <WheelCard wheel={wheel} />
            </li>
          )}
        />
      </DetailSection>
    )
  );
}
