import type { ListFilterHeaderProps } from "@/components/ListFilterHeader";

export type WheelListFilterHeaderProps = Omit<
  ListFilterHeaderProps,
  "sortOptionList" | "activeFilterCount" | "handleOpenFilterDrawer"
> & {
  className?: string;
  searchParams: PageSearchParams;
};
