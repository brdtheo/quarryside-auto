import { useTranslations } from "next-intl";

import EmptySearchResult from "@/components/EmptySearchResult";

import type { VehicleListProps } from "./vehiclelist";

export default function VehicleList({ data, itemRender }: VehicleListProps) {
  const t = useTranslations("vehicles");

  if (!data || (data ?? {}).length === 0) {
    return <EmptySearchResult title={t("noVehiclesFound")} />;
  }

  return (
    <ul className="flex-1 flex flex-col gap-4">
      {(data ?? []).map((element) => itemRender(element))}
    </ul>
  );
}
