import clsx from "clsx";

import MediaSkeleton from "@/lib/media/MediaSkeleton";

import {
  MEDIA_PREVIEW_ITEM_HEIGHT,
  MEDIA_PREVIEW_ITEM_WIDTH,
  MEDIA_THUMBNAIL_HEIGHT,
  MEDIA_THUMBNAIL_WIDTH,
} from "./constants";

export default function MediaListSkeleton() {
  return (
    <div className="flex flex-col gap-2 @container/medialistskeleton">
      <MediaSkeleton
        iconWidth={48}
        className={clsx(
          `rounded w-full h-96 md:w-[${MEDIA_THUMBNAIL_WIDTH}px] md:h-[${MEDIA_THUMBNAIL_HEIGHT}px]`,
        )}
      />
      <ul className="flex flex-wrap gap-1">
        <li>
          <MediaSkeleton
            className="rounded"
            width={MEDIA_PREVIEW_ITEM_WIDTH}
            height={MEDIA_PREVIEW_ITEM_HEIGHT}
          />
        </li>
        <li>
          <MediaSkeleton
            className="rounded"
            width={MEDIA_PREVIEW_ITEM_WIDTH}
            height={MEDIA_PREVIEW_ITEM_HEIGHT}
          />
        </li>
        <li>
          <MediaSkeleton
            className="rounded"
            width={MEDIA_PREVIEW_ITEM_WIDTH}
            height={MEDIA_PREVIEW_ITEM_HEIGHT}
          />
        </li>
        <li>
          <MediaSkeleton
            className="rounded"
            width={MEDIA_PREVIEW_ITEM_WIDTH}
            height={MEDIA_PREVIEW_ITEM_HEIGHT}
          />
        </li>
        <li>
          <MediaSkeleton
            className="rounded"
            width={MEDIA_PREVIEW_ITEM_WIDTH}
            height={MEDIA_PREVIEW_ITEM_HEIGHT}
          />
        </li>
      </ul>
    </div>
  );
}
