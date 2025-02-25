import { Wheel } from "@prisma/client";

export type WheelFormProps = {
  price: string;
  isDeliveryAvailable: Wheel["delivery_available"];
  isFreeOnSitePickup: Wheel["free_on_site_pickup"];
};
