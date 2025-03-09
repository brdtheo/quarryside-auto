import type { SelectOption } from "@/components/Select";

export type ListFilterHeaderProps = {
  textSearch?: string;
  sortOptionList?: SelectOption[];
  resultCount: number;
  activeFilterCount: number;
  handleOpenFilterDrawer: () => void;
};
