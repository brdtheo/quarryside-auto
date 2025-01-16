import { Wheel, WheelBrand } from "@prisma/client";

export type WheelCardProps = {
  slug: Wheel["slug"];
  thumbnailUrl: Wheel["thumbnail_url"];
  brand: WheelBrand | null;
  model: Wheel["model"];
  priceCts: Wheel["price_cts"];
  isDeliveryAvailable: Wheel["delivery_available"];
  isOnsitePickupFree: Wheel["free_on_site_pickup"];
  averageRating: number | null;
};
