import PageTitle from "@/components/PageTitle";

import useVehicleDetails from "@/lib/vehicle/hooks/useVehicleDetails";

import type { VehiclePageTitleProps } from ".";

export default function VehiclePageTitle({ vehicle }: VehiclePageTitleProps) {
  const { titleWithoutYear } = useVehicleDetails(vehicle);
  return <PageTitle>{titleWithoutYear}</PageTitle>;
}
