import type { ListFilterHeaderProps } from "@/components/ListFilterHeader";

export type VehicleListFilterHeaderProps = Omit<
  ListFilterHeaderProps,
  "sortOptionList"
>;
