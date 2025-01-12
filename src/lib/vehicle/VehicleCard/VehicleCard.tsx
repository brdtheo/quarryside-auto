import { useMemo } from "react";

import Image from "next/image";
import Link from "next/link";

import currency from "currency.js";

import Button from "@/components/Button";
import Rating from "@/components/Rating";

import { getVehicleSlug } from "@/lib/vehicle/utils";

import { Vehicle, VehicleCondition } from "../types";

export default function VehicleCard({
  condition,
  thumbnail_url,
  year,
  brand,
  model,
  price_cts,
  miles,
  // average_rating,
}: Omit<Vehicle, "id">) {
  const vehicleSlug = useMemo(
    () => getVehicleSlug({ year: year.toString(), brand, model }),
    [brand, model, year],
  );

  const vehicleTitle = useMemo(
    () => `${year} ${brand} ${model}`,
    [brand, model, year],
  );

  const vehicleCondition = useMemo(() => {
    switch (condition) {
      case VehicleCondition.JUNKYARD:
        return "Junkyard";
      case VehicleCondition.USED:
        return "Used";
      default:
        return null;
    }
  }, [condition]);

  const vehicleMileage = useMemo(() => `${miles} miles`, [miles]);

  const vehiclePrice = useMemo(
    () => currency(price_cts, { fromCents: true }).format(),
    [price_cts],
  );

  return (
    <article>
      <Link
        href={`/vehicles/${encodeURIComponent(vehicleSlug)}`}
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
            <span className="font-light text-xs">{vehicleCondition}</span>
            <div className="flex flex-col">
              <h2 className="text-lg">{vehicleTitle}</h2>
              <span className="text-xs">{vehicleMileage}</span>
            </div>
            <span className="font-semibold text-lg">{vehiclePrice}</span>
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
