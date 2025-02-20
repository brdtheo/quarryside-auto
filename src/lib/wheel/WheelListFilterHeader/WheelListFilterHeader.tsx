"use client";

import { useCallback, useState } from "react";

import useTranslation from "next-translate/useTranslation";

import ListFilterHeader from "@/components/ListFilterHeader";
import SideDrawer from "@/components/SideDrawer";

import WheelListFilterAside from "@/lib/wheel/WheelListFilterAside";

import useURLSearchParams from "@/hooks/useURLSearchParams";

import type { WheelListFilterHeaderProps } from ".";

export default function WheelListFilterHeader({
  textSearch,
  resultCount,
  searchParams,
}: WheelListFilterHeaderProps) {
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  const { t } = useTranslation("common");

  const handleOpenFilterDrawer = useCallback(() => {
    document.body.classList.toggle("overflow-hidden");
    setIsFilterDrawerOpen((state) => !state);
  }, []);

  const handleCloseFilterDrawer = useCallback(() => {
    document.body.classList.remove("overflow-hidden");
    setIsFilterDrawerOpen((state) => !state);
  }, []);

  const { getActiveFilterCount } = useURLSearchParams(searchParams);

  const activeFilterCount = getActiveFilterCount();

  return (
    <>
      <ListFilterHeader
        activeFilterCount={activeFilterCount}
        handleOpenFilterDrawer={handleOpenFilterDrawer}
        textSearch={textSearch}
        sortOptionList={[
          { label: t("sortResults.option.priceAsc"), value: "price-asc" },
          { label: t("sortResults.option.priceDesc"), value: "price-desc" },
        ]}
        resultCount={resultCount}
      />

      <SideDrawer isOpen={isFilterDrawerOpen} onClose={handleCloseFilterDrawer}>
        <WheelListFilterAside searchParams={searchParams} />
      </SideDrawer>
    </>
  );
}
