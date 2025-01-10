import { useMemo } from "react";

import Image from "next/image";
import Link from "next/link";

import currency from "currency.js";

import Button from "@/components/Button";
import Rating from "@/components/Rating";

import { Car, CarCondition } from "@/cars/types";
import { getCarSlug } from "@/cars/utils";

export default function CarCard({
  condition,
  thumbnail_url,
  year,
  brand,
  model,
  price_cts,
  miles,
  // average_rating,
}: Omit<Car, "id">) {
  const carSlug = useMemo(
    () => getCarSlug({ year: year.toString(), brand, model }),
    [brand, model, year],
  );

  const carTitle = useMemo(
    () => `${year} ${brand} ${model}`,
    [brand, model, year],
  );

  const carCondition = useMemo(() => {
    switch (condition) {
      case CarCondition.JUNKYARD:
        return "Junkyard";
      case CarCondition.USED:
        return "Used";
      default:
        return null;
    }
  }, [condition]);

  const carMileage = useMemo(() => `${miles} miles`, [miles]);

  const carPrice = useMemo(
    () => currency(price_cts, { fromCents: true }).format(),
    [price_cts],
  );

  return (
    <article>
      <Link
        href={`/cars/${encodeURIComponent(carSlug)}`}
        className="border border-grey rounded h-52 flex w-full bg-white"
      >
        <div className="w-72 h-full rounded-tl rounded-bl flex items-center border-r border-r-grey">
          <Image
            className="overflow-hidden"
            width={288}
            height={206}
            src={thumbnail_url}
            alt="picture"
          />
        </div>
        <div className="flex flex-1 flex-col h-full px-3 py-4 gap-1">
          <div className="flex-1 text-left">
            <span className="font-light text-xs">{carCondition}</span>
            <div className="flex flex-col">
              <h2 className="text-lg">{carTitle}</h2>
              <span className="text-xs">{carMileage}</span>
            </div>
            <span className="font-semibold text-lg">{carPrice}</span>
          </div>

          <div className="flex justify-between items-end">
            <Rating score={4} />

            <Button
              className="rounded text-white px-3 py-1.5 text-sm hover:opacity-90"
              backgroundColor="brown"
            >
              Check availability
            </Button>
          </div>
        </div>
      </Link>
    </article>
  );
}
