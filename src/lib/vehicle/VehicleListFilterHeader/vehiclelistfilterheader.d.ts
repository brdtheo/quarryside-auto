import type { ListFilterHeaderProps } from "@/components/ListFilterHeader";

export type VehicleListFilterHeaderProps = Omit<
  ListFilterHeaderProps,
  "sortOptionList" | "handleOpenFilterDrawer" | "activeFilterCount"
> & {
  className?: string;
  searchParams: PageSearchParams;
};
