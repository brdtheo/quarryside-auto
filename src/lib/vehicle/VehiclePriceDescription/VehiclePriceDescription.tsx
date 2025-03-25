import useVehicleDetails from "@/lib/vehicle/hooks/useVehicleDetails";

import { VehiclePriceDescriptionProps } from ".";

export default function VehiclePriceDescription({
  vehicle,
}: VehiclePriceDescriptionProps) {
  if (!vehicle) {
    return;
  }

  const { price } = useVehicleDetails(vehicle);

  return (
    <div className="flex flex-col gap-2">
      <span aria-label="vehicle-price" className="font-bold text-2xl">
        {price}
      </span>
      <p className="text-sm">{vehicle.description}</p>
    </div>
  );
}
