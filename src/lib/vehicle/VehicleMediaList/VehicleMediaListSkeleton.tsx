import MediaSkeleton from "@/lib/media/MediaSkeleton";

export default function VehicleMediaListSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      <MediaSkeleton
        iconWidth={48}
        className="rounded"
        width={785}
        height={442}
      />
      <ul className="flex flex-wrap gap-1">
        <li>
          <MediaSkeleton className="rounded" width={115} height={65} />
        </li>
        <li>
          <MediaSkeleton className="rounded" width={115} height={65} />
        </li>
        <li>
          <MediaSkeleton className="rounded" width={115} height={65} />
        </li>
        <li>
          <MediaSkeleton className="rounded" width={115} height={65} />
        </li>
        <li>
          <MediaSkeleton className="rounded" width={115} height={65} />
        </li>
      </ul>
    </div>
  );
}
