import { useTranslations } from "next-intl";

import HomeSection from "@/components/HomeSection";

import VehicleCard from "@/lib/vehicle/VehicleCard";

import type { PopularModelsListProps } from ".";

export default function PopularModelsList({
  vehicles,
}: PopularModelsListProps) {
  const t = useTranslations("home");

  if (!vehicles || (vehicles ?? []).length === 0) {
    return null;
  }

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
