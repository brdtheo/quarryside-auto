import type { Car } from "@/cars/types";

export type CarListProps = {
  data: Car[];
  itemRender: (item: Car) => JSX.Element;
};
