import type { SelectOption } from "@/components/Select";

type AppliedFilter = {
  name: string;
  value: string;
};

export type ListFilterHeaderProps = {
  textSearch: string;
  sortOptionList: SelectOption[];
  appliedFilterList: AppliedFilter[];
};
