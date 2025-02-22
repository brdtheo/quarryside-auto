import { getTranslations } from "next-intl/server";

import DetailSection from "@/components/DetailSection";
import Table from "@/components/Table";

import useVehicleDetails from "@/lib/vehicle/hooks/useVehicleDetails";

import { VehiclePerformanceSectionProps } from ".";

export default async function VehiclePerformanceSection({
  vehicle,
}: VehiclePerformanceSectionProps) {
  const t = await getTranslations("vehicles");

  const { power, zeroToSixtySeconds, topSpeed } =
    await useVehicleDetails(vehicle);

  return (
    (power || zeroToSixtySeconds || topSpeed) && (
      <DetailSection title={t("details.performance")}>
        <Table
          rows={[
            ...(power
              ? [
                  {
                    name: t("details.power.title"),
                    data: power,
                  },
                ]
              : []),
            ...(zeroToSixtySeconds
              ? [
                  {
                    name: t("details.zeroToSixty.title"),
                    data: zeroToSixtySeconds,
                  },
                ]
              : []),
            ...(topSpeed
              ? [
                  {
                    name: t("details.topSpeed.title"),
                    data: topSpeed,
                  },
                ]
              : []),
          ]}
        />
      </DetailSection>
    )
  );
}
