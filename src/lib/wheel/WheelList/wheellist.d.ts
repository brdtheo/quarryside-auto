import { Wheel } from "@prisma/client";

export type WheelListProps = {
  data: Wheel[];
  itemRender: (item: Wheel) => JSX.Element;
};
