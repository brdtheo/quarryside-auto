import Chip from "@/components/Chip";
import SearchField from "@/components/SearchField";
import Select from "@/components/Select";

import type { ListFilterHeaderProps } from "./listfilterheader";

export default function ListFilterHeader({
  sortOptionList,
}: ListFilterHeaderProps) {
  return (
    <>
      <div className="flex justify-between pb-2">
        <SearchField value="etk 800" onChange={() => {}} />
        <Select
          options={sortOptionList}
          placeholder="Sort results"
          value=""
          onChange={() => {}}
        />
      </div>

      <div className="pb-8 flex gap-2">
        <Chip onClick={() => {}}>etk 800</Chip>
        <Chip onClick={() => {}}>used</Chip>
      </div>
    </>
  );
}
