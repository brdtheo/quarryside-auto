import type { Vehicle } from "@/lib/vehicle/types";

export type VehicleListProps = {
  data: Vehicle[];
  itemRender: (item: Vehicle) => JSX.Element;
};
