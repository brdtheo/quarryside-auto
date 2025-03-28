import type { SelectOption } from "@/components/Select";

import { PageSearchParams } from "@/types";

export type ListFilterHeaderProps = {
  textSearch?: string;
  sortOptionList?: SelectOption[];
  resultCount: number;
  activeFilterCount: number;
  pageSearchParams: PageSearchParams;
  handleOpenFilterDrawer: () => void;
};
