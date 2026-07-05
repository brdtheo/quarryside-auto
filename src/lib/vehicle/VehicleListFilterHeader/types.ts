import type { ListFilterHeaderProps } from "@/components/ListFilterHeader";

import { PageSearchParams } from "@/types";

export type VehicleListFilterHeaderProps = Omit<
  ListFilterHeaderProps,
  | "sortOptionList"
  | "handleOpenFilterDrawer"
  | "activeFilterCount"
  | "pageSearchParams"
> & {
  className?: string;
  searchParams: PageSearchParams;
};
