import { Vehicle, VehicleBrand, VehicleCondition } from "@prisma/client";

export type VehicleCardProps = {
  brand: VehicleBrand | null;
  condition: VehicleCondition | null;
  mileage: Vehicle["mileage"];
  model: Vehicle["model"];
  price_cts: Vehicle["price_cts"];
  thumbnail_url: Vehicle["thumbnail_url"];
  year: Vehicle["year"];
  average_rating?: number;
};
