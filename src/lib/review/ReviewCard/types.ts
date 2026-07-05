import { Review } from "@prisma/generated/browser";

export type ReviewCardProps = {
  title: Review["title"];
  rating: Review["rating"];
  description: Review["description"];
  date: string;
};
