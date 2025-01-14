import { Vehicle } from "@prisma/client";

export type VehicleListProps = {
  data: Vehicle[];
  itemRender: (item: Vehicle) => JSX.Element;
};
