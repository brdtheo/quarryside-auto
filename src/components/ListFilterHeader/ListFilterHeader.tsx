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
          <IconSearch size={16} stroke={2} />
        </IconButton>

        <div className="flex gap-1">
          <IconButton
            className="rounded border border-divider"
            onClick={handleOpenFilterDrawer}
            badgeCount={activeFilterCount}
          >
            <IconAdjustmentsHorizontal size={16} stroke={1.5} />
          </IconButton>
          <IconButton
            isDisabled
            className="rounded border border-divider"
            onClick={() => {}}
          >
            <IconArrowsSort size={16} stroke={1.5} />
          </IconButton>
        </div>
      </div>

      <p className="pb-3 pt-0 text-sm">
        {t("resultCount", { count: resultCount })}
      </p>
    </>
  );
}
