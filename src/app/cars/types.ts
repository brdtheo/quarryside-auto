export enum CarCondition {
  USED = 1,
  JUNKYARD = 2,
}

export enum CarBrand {
  AUTOBELLO = "Autobello",
  BRUCKELL = "Bruckell",
  BURNSIDE = "Burnside",
  CHERRIER = "Cherrier",
  CIVETTA = "Civetta",
  ETK = "ETK",
  FPU = "FPU",
  GAVRIL = "Gavril",
  HIROSHI = "Hiroshi",
  IBISHU = "Ibishu",
  SP = "SP",
  SOLIAD = "Soliad",
  WENTWARD = "Wentward",
}

export type Car = {
  id: number;
  condition: CarCondition;
  thumbnail_url: string;
  year: number;
  brand: CarBrand;
  model: string;
  price_cts: number;
  miles: number;
  average_rating: number | null;
};
