import MediaList from "@/lib/media/MediaList";
import useVehicleDetails from "@/lib/vehicle/hooks/useVehicleDetails";

import type { VehicleMediaListProps } from ".";

export default function VehicleMediaList({ vehicle }: VehicleMediaListProps) {
  if (!vehicle) {
    return;
  }
  const { titleWithoutYear } = useVehicleDetails(vehicle);
  return <MediaList mediaList={vehicle.medias} alt={titleWithoutYear} />;
}
