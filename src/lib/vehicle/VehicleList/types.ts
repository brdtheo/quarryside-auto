import { VehicleWithMedias } from "@/lib/vehicle/types";

export type VehicleListProps = {
  data: VehicleWithMedias[];
  itemRender: (item: VehicleWithMedias) => JSX.Element;
};
