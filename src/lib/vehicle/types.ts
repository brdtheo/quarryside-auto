import { Media, Review, Vehicle } from "@prisma/client";

export type VehicleWithReview = Vehicle & Pick<Review, "rating">;

export type VehicleWithMedias = Vehicle & { medias: Media[] };

export type VehicleRichDataParams = {
  brand: string;
  thumbnail: string;
  description: string;
  name: string;
  price: string;
  slug: string;
};
