import { Media, Wheel } from "@prisma/client";

export type WheelRichDataProps = {
  brand: string;
  medias: Media[];
  name: string;
  price: string
  slug: Wheel["slug"];
};
