import { Media, Vehicle } from "@prisma/client";

export type VehicleRichDataProps = {
  brand: string;
  medias: Media[];
  name: string;
  description: string;
  price: string;
  slug: Vehicle["slug"];
};
