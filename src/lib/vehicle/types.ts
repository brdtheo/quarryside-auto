import { Media, Vehicle } from "@prisma/generated/browser";

export type VehicleWithMedias = Vehicle & { medias: Media[] };

export type VehicleRichDataParams = {
  brand: string;
  thumbnail: string;
  description: string;
  name: string;
  price: string;
  slug: string;
};
