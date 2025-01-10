import { Car } from "@/cars/types";

import { Media } from "@/media/types";

export enum WheelBrand {
  ALDER = "Alder",
  ARNIDA = "Arnida",
  AUTOBELLO = "Autobello",
  BETA = "Beta",
  BRUCKELL = "Bruckell",
  CHERRIER = "Cherrier",
  CIVETTA = "Civetta",
  CLOCKWISE = "Clockwise",
  DREID = "Dreid",
  ETK = "ETK",
  FOLK = "Folk",
  GAVRIL = "Gavril",
  GP = "GP",
  GRIP_ALL = "Grip-All",
  HIROSHI = "Hiroshi",
  IBISHU = "Ibishu",
  LEGNO = "Legno",
  NO_BRAND = "No brand",
  OKUDAI = "Okudai",
  SOLIAD = "Soliad",
  SP = "SP",
  STX = "STX",
  TIMS = "TIMS",
  TRIAL = "Trial",
  WANGAN = "Wangan",
}

export type Wheel = {
  brand: WheelBrand;
  consuption: string;
  delivery_available: boolean;
  free_onsite_pickup: boolean;
  id: number;
  medias: Media[];
  model: string;
  price_cts: number;
  seasonality: string;
  sizes: string[];
  slug: string;
  thumbnail_url: string;
  tires: string[];
  vehicles: Car[];
  average_rating: number | null;
};
