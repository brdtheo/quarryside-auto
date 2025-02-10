import useTranslation from "next-translate/useTranslation";

import ListFilterHeader from "@/components/ListFilterHeader";

import type { VehicleListFilterHeaderProps } from ".";

export default function VehicleListFilterHeader({
  textSearch,
  resultCount,
}: VehicleListFilterHeaderProps) {
  const { t } = useTranslation("common");

  return (
    <ListFilterHeader
      textSearch={textSearch}
      sortOptionList={[
        { label: t("sortResults.option.priceAsc"), value: "price-asc" },
        { label: t("sortResults.option.priceDesc"), value: "price-desc" },
        { label: t("sortResults.option.mileageAsc"), value: "miles-asc" },
        { label: t("sortResults.option.mileageDesc"), value: "miles-desc" },
        { label: t("sortResults.option.yearAsc"), value: "year-asc" },
        { label: t("sortResults.option.yearDesc"), value: "year-desc" },
      ]}
      resultCount={resultCount}
    />
  );
}
