import Chip from "@/components/Chip";
import SearchField from "@/components/SearchField";
import Select from "@/components/Select";

import type { ListFilterHeaderProps } from "./listfilterheader";

export default function ListFilterHeader({
  textSearch,
  appliedFilterList,
  sortOptionList,
}: ListFilterHeaderProps) {
  return (
    <>
      <div className="flex justify-between pb-2">
        <SearchField value={textSearch} onChange={() => {}} />
        <Select
          options={sortOptionList}
          placeholder="Sort results"
          value=""
          onChange={() => {}}
        />
      </div>

      <div className="pb-8 flex gap-2">
        {(appliedFilterList ?? []).map((appliedFilter, index) => (
          <Chip key={index} onClick={() => {}}>
            {appliedFilter.value}
          </Chip>
        ))}
      </div>
    </>
  );
}
