import MediaList from "@/lib/media/MediaList";
import useWheelDetails from "@/lib/wheel/hooks/useWheelDetails";

import type { WheelMediaListProps } from ".";

export default function WheelMediaList({ wheel }: WheelMediaListProps) {
  if (!wheel) {
    return;
  }
  const { title } = useWheelDetails(wheel);
  return <MediaList mediaList={wheel.medias} alt={title} />;
}
