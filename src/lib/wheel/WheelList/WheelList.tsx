import clsx from "clsx";

import type { WheelListProps } from ".";

export default function WheelList({
  className,
  data,
  itemRender,
}: WheelListProps) {
  return (
    <ul className={clsx("flex-1 grid gap-8", className)}>
      {(data ?? []).map(itemRender)}
    </ul>
  );
}
