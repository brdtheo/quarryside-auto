import { Vehicle } from "@prisma/client";

export type WheelRelatedVehiclesSectionProps = {
  vehicles: { vehicles: Vehicle }[];
};
