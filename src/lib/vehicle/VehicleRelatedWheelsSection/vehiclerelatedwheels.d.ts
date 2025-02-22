import { Wheel } from "@prisma/client";

export type VehicleRelatedWheelsSectionProps = {
  wheels: { wheels: Wheel }[];
};
