import type { Wheel } from "@/rims-tires/types";

export type WheelListProps = {
  data: Wheel[];
  itemRender: (item: Wheel) => JSX.Element;
};
