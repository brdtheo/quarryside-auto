import { IconPhoto } from "@tabler/icons-react";

import clsx from "clsx";

import type { MediaSkeletonProps } from ".";

export default function MediaSkeleton({
  className,
  width,
  height,
  iconWidth,
}: MediaSkeletonProps) {
  return (
    <div
      data-testid="media-skeleton"
      className={clsx(
        "bg-gray-200 dark:bg-gray-600 flex items-center justify-center w-full h-full",
        className,
      )}
      style={{ width, height }}
    >
      <IconPhoto
        className="text-gray-400 dark:text-white"
        size={iconWidth ?? 24}
        stroke={1}
      />
    </div>
  );
}
