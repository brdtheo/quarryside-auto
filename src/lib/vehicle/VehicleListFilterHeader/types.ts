import type { ListFilterHeaderProps } from "@/components/ListFilterHeader";

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
