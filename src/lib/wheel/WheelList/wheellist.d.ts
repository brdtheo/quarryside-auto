import type { Wheel } from "@/lib/wheel/types";

export type WheelListProps = {
  data: Wheel[];
  itemRender: (item: Wheel) => JSX.Element;
};
