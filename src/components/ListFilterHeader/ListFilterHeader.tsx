"use client";

import useTranslation from "next-translate/useTranslation";

import SearchField from "@/components/SearchField";
import Select from "@/components/Select";

import type { ListFilterHeaderProps } from ".";

export default function ListFilterHeader({
  textSearch,
  sortOptionList,
  resultCount = 0,
}: ListFilterHeaderProps) {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="flex justify-between pb-6">
        <SearchField value={textSearch} onChange={() => {}} />
        <Select
          options={sortOptionList}
          placeholder={t("sortResults.title")}
          value=""
          onChange={() => {}}
        />
      </div>

      <p className="pb-3 pt-0 text-sm">
        {t("resultCount", { count: resultCount })}
      </p>
    </>
  );
}
