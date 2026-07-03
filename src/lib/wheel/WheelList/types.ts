import { WheelWithMedias } from "@/lib/wheel/types";

export type WheelListProps = {
  className?: string;
  data: WheelWithMedias[];
  itemRender: (item: WheelWithMedias) => JSX.Element;
};
