import { Wheel } from "@prisma/client";

export type WheelListProps = {
  className?: string;
  data: Wheel[];
  itemRender: (item: Wheel) => JSX.Element;
};
