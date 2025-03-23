"use client";

import { useTranslations } from "next-intl";

import {
  IconAdjustmentsHorizontal,
  IconArrowsSort,
  IconSearch,
} from "@tabler/icons-react";

import IconButton from "@/components/IconButton";

import type { ListFilterHeaderProps } from ".";

export default function ListFilterHeader({
  resultCount = 0,
  activeFilterCount,
  handleOpenFilterDrawer,
}: ListFilterHeaderProps) {
  const t = useTranslations("common");

  return (
    <>
      <div className="flex md:hidden justify-between pb-6 gap-4">
        <IconButton
          isDisabled
          className="rounded border border-divider"
          onClick={() => {}}
        >
          {IconSearch}
        </IconButton>

        <div className="flex gap-1">
          <IconButton
            className="rounded border border-divider"
            onClick={handleOpenFilterDrawer}
            badgeCount={activeFilterCount}
          >
            {IconAdjustmentsHorizontal}
          </IconButton>
          <IconButton
            isDisabled
            className="rounded border border-divider"
            onClick={() => {}}
          >
            {IconArrowsSort}
          </IconButton>
        </div>
      </div>

      <p aria-label="result-count" className="pb-3 pt-0 text-sm">
        {t("resultCount", { count: resultCount })}
      </p>
    </>
  );
}
