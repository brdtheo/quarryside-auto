import MediaList from "@/lib/media/MediaList";
import useWheelDetails from "@/lib/wheel/hooks/useWheelDetails";

import type { WheelMediaListProps } from ".";

export default function WheelMediaList({ wheel }: WheelMediaListProps) {
  const { title } = useWheelDetails(wheel);
  if (!wheel) {
    return;
  }
  return <MediaList mediaList={wheel.medias} alt={title} />;
}
