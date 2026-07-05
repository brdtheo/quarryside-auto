import type { ListFilterHeaderProps } from "@/components/ListFilterHeader";

import { PageSearchParams } from "@/types";

export type WheelListFilterHeaderProps = Omit<
  ListFilterHeaderProps,
  | "sortOptionList"
  | "activeFilterCount"
  | "handleOpenFilterDrawer"
  | "pageSearchParams"
> & {
  className?: string;
  searchParams: PageSearchParams;
};
