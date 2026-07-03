import { Media, Wheel } from "@prisma/generated/client";

export type WheelWithMedias = Wheel & { medias: Media[] };

export type WheelRichDataParams = {
  brand: string;
  thumbnail: string;
  name: string;
  price: string;
  slug: string;
};
