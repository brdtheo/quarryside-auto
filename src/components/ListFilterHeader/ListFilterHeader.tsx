"use client";

import { ChangeEvent, useCallback, useEffect, useState } from "react";

import { useTranslations } from "next-intl";
import { redirect } from "next/navigation";

import { IconAdjustmentsHorizontal, IconArrowsSort } from "@tabler/icons-react";

import IconButton from "@/components/IconButton";
import SearchField from "@/components/SearchField";

import useQueryParamLink from "@/hooks/useQueryParamLink";

import type { ListFilterHeaderProps } from ".";

export default function ListFilterHeader({
  resultCount = 0,
  activeFilterCount,
  pageSearchParams,
  handleOpenFilterDrawer,
}: ListFilterHeaderProps) {
  const t = useTranslations("common");

  const getQueryParamLink = useQueryParamLink(pageSearchParams);

  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    if (pageSearchParams?.q) {
      setSearchText(pageSearchParams?.q);
    }
  }, []);

  const handleChangeSearchText = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const text = event?.target?.value;
      setSearchText(text);
    },
    [searchText, setSearchText],
  );

  const handleSearch = useCallback(
    (value: string) => {
      const url = getQueryParamLink("q", value);
      redirect(url);
    },
    [searchText, pageSearchParams],
  );

  const handleClear = useCallback(() => {
    setSearchText("");
    const url = getQueryParamLink("q", searchText);
    redirect(url);
  }, [searchText, pageSearchParams]);

  return (
    <>
      <div className="flex md:hidden justify-between pb-6 gap-4">
        <SearchField
          className="w-full h-full"
          value={searchText}
          onChange={handleChangeSearchText}
          onSearch={handleSearch}
          isClearable
          onClear={handleClear}
        />

        <div className="flex gap-1">
          <IconButton
            icon={IconAdjustmentsHorizontal}
            className="rounded border border-divider"
            onClick={handleOpenFilterDrawer}
            badgeCount={activeFilterCount}
          />
          <IconButton
            icon={IconArrowsSort}
            disabled
            className="rounded border border-divider"
            onClick={() => {}}
          />
        </div>
      </div>

      <div className="pb-8 hidden md:inline-flex justify-between">
        <SearchField
          className="w-full"
          value={searchText}
          onChange={handleChangeSearchText}
          onSearch={handleSearch}
          isClearable
          onClear={handleClear}
        />
      </div>

      <p aria-label="result-count" className="pb-3 pt-0 text-sm">
        {t("resultCount", { count: resultCount })}
      </p>
    </>
  );
}
