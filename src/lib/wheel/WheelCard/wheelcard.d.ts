import { Wheel, WheelBrand } from "@prisma/client";

export type WheelCardProps = {
  thumbnail_url: Wheel["thumbnail_url"];
  brand: WheelBrand | null;
  model: Wheel["model"];
  price_cts: Wheel["price_cts"];
  average_rating: number | null;
};
