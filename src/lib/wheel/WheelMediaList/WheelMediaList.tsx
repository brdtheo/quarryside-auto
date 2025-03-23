import MediaList from "@/lib/media/MediaList";
import useWheelDetails from "@/lib/wheel/hooks/useWheelDetails";

import type { WheelMediaListProps } from ".";

export default function WheelMediaList({ wheel }: WheelMediaListProps) {
  if (!wheel?.medias || wheel?.medias.length === 0) {
    return null;
  }
  const { title } = useWheelDetails(wheel);
  return <MediaList mediaList={wheel.medias} alt={title} />;
}
