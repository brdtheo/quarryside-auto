import { Review } from "@prisma/generated/client";

export type RatingProps = {
  score: Review["rating"];
  size?: number;
};
