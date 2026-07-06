import MediaList from "@/lib/media/MediaList";
import useVehicleDetails from "@/lib/vehicle/hooks/useVehicleDetails";

import type { VehicleMediaListProps } from ".";

export default function VehicleMediaList({ vehicle }: VehicleMediaListProps) {
  const { titleWithoutYear } = useVehicleDetails(vehicle);

  if (!vehicle) {
    return;
  }

  return <MediaList mediaList={vehicle.medias} alt={titleWithoutYear} />;
}
