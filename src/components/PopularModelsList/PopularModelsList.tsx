import { getTranslations } from "next-intl/server";

import HomeSection from "@/components/HomeSection";

import VehicleCard from "@/lib/vehicle/VehicleCard";

import type { PopularModelsListProps } from ".";

export default async function PopularModelsList({
  vehicles,
}: PopularModelsListProps) {
  const t = await getTranslations("home");
  return (
    <HomeSection title={t("popularModels.title")}>
      <ul className="grid grid-cols-1 gap-4 @md/homecontainer:grid-cols-2 @3xl/homecontainer:grid-cols-3">
        {(vehicles ?? []).map((vehicle) => (
          <li key={vehicle.slug}>
            <VehicleCard vehicle={vehicle} />
          </li>
        ))}
      </ul>
    </HomeSection>
  );
}
