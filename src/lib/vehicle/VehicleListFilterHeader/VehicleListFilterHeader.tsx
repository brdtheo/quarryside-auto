"use client";

import { useCallback, useState } from "react";

import { useTranslations } from "next-intl";

import ListFilterHeader from "@/components/ListFilterHeader";
import SideDrawer from "@/components/SideDrawer";

import VehicleListFilterAside from "@/lib/vehicle/VehicleListFilterAside";

import useURLSearchParams from "@/hooks/useURLSearchParams";

import type { VehicleListFilterHeaderProps } from ".";

export default function VehicleListFilterHeader({
  textSearch,
  resultCount,
  searchParams,
}: VehicleListFilterHeaderProps) {
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  const t = useTranslations("common");

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
        pageSearchParams={searchParams}
        activeFilterCount={activeFilterCount}
        handleOpenFilterDrawer={handleOpenFilterDrawer}
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

      <SideDrawer isOpen={isFilterDrawerOpen} onClose={handleCloseFilterDrawer}>
        <VehicleListFilterAside searchParams={searchParams} />
      </SideDrawer>
    </>
  );
}
