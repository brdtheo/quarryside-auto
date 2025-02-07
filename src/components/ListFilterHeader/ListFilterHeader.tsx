"use client";

import SearchField from "@/components/SearchField";
import Select from "@/components/Select";

import type { ListFilterHeaderProps } from ".";

export default function ListFilterHeader({
  textSearch,
  sortOptionList,
}: ListFilterHeaderProps) {
  return (
    <>
      <div className="flex justify-between pb-5">
        <SearchField value={textSearch} onChange={() => {}} />
        <Select
          options={sortOptionList}
          placeholder="Sort results"
          value=""
          onChange={() => {}}
        />
      </div>
    </>
  );
}
