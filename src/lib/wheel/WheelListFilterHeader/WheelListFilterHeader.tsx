import useTranslation from "next-translate/useTranslation";

import ListFilterHeader from "@/components/ListFilterHeader";

import type { WheelListFilterHeaderProps } from ".";

export default function WheelListFilterHeader({
  textSearch,
  resultCount,
}: WheelListFilterHeaderProps) {
  const { t } = useTranslation("common");

  return (
    <ListFilterHeader
      textSearch={textSearch}
      sortOptionList={[
        { label: t("sortResults.option.priceAsc"), value: "price-asc" },
        { label: t("sortResults.option.priceDesc"), value: "price-desc" },
      ]}
      resultCount={resultCount}
    />
  );
}
