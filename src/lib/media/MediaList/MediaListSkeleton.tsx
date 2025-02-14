import MediaSkeleton from "@/lib/media/MediaSkeleton";

import {
  MEDIA_PREVIEW_ITEM_HEIGHT,
  MEDIA_PREVIEW_ITEM_WIDTH,
  MEDIA_THUMBNAIL_HEIGHT,
  MEDIA_THUMBNAIL_WIDTH,
} from "./constants";

export default function MediaListSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      <MediaSkeleton
        iconWidth={48}
        className="rounded"
        width={MEDIA_THUMBNAIL_WIDTH}
        height={MEDIA_THUMBNAIL_HEIGHT}
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
