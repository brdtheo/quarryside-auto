import { Review } from "@prisma/client";

export type RatingProps = {
  score: Review["rating"];
  size?: number;
};
