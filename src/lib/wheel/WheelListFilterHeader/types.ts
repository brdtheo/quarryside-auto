import type { ListFilterHeaderProps } from "@/components/ListFilterHeader";

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
