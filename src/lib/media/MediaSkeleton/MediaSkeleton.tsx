import { IconPhoto } from "@tabler/icons-react";

import clsx from "clsx";

import type { MediaSkeletonProps } from "./mediaskeleton";

export default function MediaSkeleton({
  className,
  width,
  height,
  iconWidth,
}: MediaSkeletonProps) {
  return (
    <div
      className={clsx(
        "bg-gray-200 animate-pulse flex items-center justify-center w-full h-full",
        className,
      )}
      style={{ width, height }}
    >
      <IconPhoto className="text-gray-400" size={iconWidth ?? 24} stroke={1} />
    </div>
  );
}
