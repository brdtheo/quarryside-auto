import { Review, Vehicle } from "@prisma/client";

export type VehicleWithReview = Vehicle & Pick<Review, "rating">;
