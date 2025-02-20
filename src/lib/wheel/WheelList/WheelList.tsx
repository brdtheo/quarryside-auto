import clsx from "clsx";

import type { WheelListProps } from ".";

export default function WheelList({
  className,
  data,
  itemRender,
}: WheelListProps) {
  return (
    <ul className={clsx("flex-1 grid grid-cols-4 gap-4 @container/wheellist", className)}>
      {(data ?? []).map(itemRender)}
    </ul>
  );
}
