import { useMemo } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  IconBuildingStore,
  IconChevronRight,
  IconTruckDelivery,
} from "@tabler/icons-react";

import currency from "currency.js";

import Rating from "@/components/Rating";

import type { WheelCardProps } from ".";

export default function WheelCard({
  thumbnail_url,
  brand,
  model,
  price_cts,
  average_rating,
}: WheelCardProps) {
  const wheelSlug = useMemo(
    () => [brand, model].join(" ").toLowerCase().replace(/\s/g, "-"),
    [brand, model],
  );

  const wheelPrice = useMemo(
    () => currency(price_cts, { fromCents: true, symbol: "" }).format(),
    [price_cts],
  );

  return (
    <article>
      <Link
        href={`/rims-tires/${encodeURIComponent(wheelSlug)}`}
        className="border border-grey rounded flex w-52 bg-white"
      >
        <div className="flex flex-col gap-2 px-8 py-4">
          <Image
            className="overflow-hidden"
            width={144}
            height={144}
            src={thumbnail_url}
            alt="wheel preview"
          />

          <span className="font-semibold text-xs text-grey-secondary leading-none">
            {brand}
          </span>
          <span className="font-medium text-lg leading-none pb-1">{model}</span>

          <ul className="flex flex-col gap-1">
            <li className="inline-flex items-start gap-1">
              <IconBuildingStore stroke={1.6} size={18} />
              <span className="font-medium text-xs">Free on site pickup</span>
            </li>
            <li className="inline-flex items-start gap-1">
              <IconTruckDelivery stroke={1.6} size={18} />
              <span className="font-medium text-xs">
                Available for delivery
              </span>
            </li>
          </ul>

          {!!average_rating && <Rating size={14} score={average_rating} />}

          <div className="bg-yellow flex border border-yellow mt-1">
            <div className="flex flex-1 items-start px-1">
              <span className="text-red font-bold text-normal">$</span>
              <span className="text-red font-extrabold text-2xl">
                {wheelPrice}
              </span>
            </div>
            <div className="bg-white w-8 h-8 flex justify-center items-center">
              <IconChevronRight size={18} />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
