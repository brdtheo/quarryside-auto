"use client";

import SearchField from "@/components/SearchField";
import Select from "@/components/Select";

import type { ListFilterHeaderProps } from ".";

export default function ListFilterHeader({
  textSearch,
  sortOptionList,
  resultCount = 0,
}: ListFilterHeaderProps) {
  return (
    <>
      <div className="flex justify-between pb-6">
        <SearchField value={textSearch} onChange={() => {}} />
        <Select
          options={sortOptionList}
          placeholder="Sort results"
          value=""
          onChange={() => {}}
        />
      </div>

      <p className="pb-3 pt-0 text-sm">{resultCount} result(s)</p>
    </>
  );
}
