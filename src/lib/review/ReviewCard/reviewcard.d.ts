import { Review } from "@prisma/generated/client";

export type ReviewCardProps = {
  title: Review["title"];
  rating: Review["rating"];
  description: Review["description"];
  date: string;
};
