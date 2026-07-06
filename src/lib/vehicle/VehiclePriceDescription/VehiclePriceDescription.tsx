import Beambucks from "@/components/Beambucks";

import useVehicleDetails from "@/lib/vehicle/hooks/useVehicleDetails";

import { VehiclePriceDescriptionProps } from ".";

export default function VehiclePriceDescription({
  vehicle,
}: VehiclePriceDescriptionProps) {
  const { price } = useVehicleDetails(vehicle);

  if (!vehicle) {
    return;
  }

  return (
    <div className="flex flex-col gap-2">
      <span aria-label="vehicle-price" className="font-bold text-2xl">
        <Beambucks className="mr-0.5" />
        {price}
      </span>
      <p className="text-sm">{vehicle.description}</p>
    </div>
  );
}
