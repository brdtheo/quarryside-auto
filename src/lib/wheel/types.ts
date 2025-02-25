import { Media, Wheel } from "@prisma/client";

export type WheelWithMedias = Wheel & { medias: Media[] };
