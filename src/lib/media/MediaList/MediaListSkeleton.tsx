import MediaSkeleton from "@/lib/media/MediaSkeleton";

import "./constants";

export default function MediaListSkeleton() {
  return (
    <div className="flex flex-col gap-2 h-44 sm:h-80 md:h-96 lg:h-[450px]">
      <MediaSkeleton iconWidth={48} className="rounded" />
    </div>
  );
}
