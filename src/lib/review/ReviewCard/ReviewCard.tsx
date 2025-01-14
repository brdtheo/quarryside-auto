import dayjs from "dayjs";

import Rating from "@/components/Rating";

import { Review } from "@/lib/review/types";

export default function ReviewCard({
  title,
  rating,
  description,
}: Review) {
  const date = dayjs("2019-01-25").format("DD/MM/YYYY");

  return (
    <article className="bg-white border border-grey rounded p-4 flex flex-col gap-3">
      <div className="flex justify-between">
        <span className="font-medium text-sm">{title}</span>
        <span className="text-sm">{date}</span>
      </div>
      <Rating size={14} score={rating} />
      <p className="text-sm">{description}</p>
    </article>
  );
}
