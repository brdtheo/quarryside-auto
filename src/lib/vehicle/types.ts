export enum VehicleCondition {
  USED = 1,
  JUNKYARD = 2,
}

export enum VehicleBrand {
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

export type Vehicle = {
  id: number;
  condition: VehicleCondition;
  thumbnail_url: string;
  year: number;
  brand: VehicleBrand;
  model: string;
  price_cts: number;
  miles: number;
  average_rating: number | null;
};
