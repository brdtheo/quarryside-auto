import { Review } from "@prisma/generated/browser";

export type RatingProps = {
  score: Review["rating"];
  size?: number;
};
