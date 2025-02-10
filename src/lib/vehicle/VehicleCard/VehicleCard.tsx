import { useMemo } from "react";

import useTranslation from "next-translate/useTranslation";
// import Image from "next/image";
import Link from "next/link";

import { Prisma } from "@prisma/client";

import Button from "@/components/Button";
import Rating from "@/components/Rating";

import MediaSkeleton from "@/lib/media/MediaSkeleton";

import { getPrice } from "@/utils";

import type { VehicleCardProps } from ".";

export default function VehicleCard({
  slug,
  condition,
  // thumbnail_url,
  year,
  brand,
  model,
  price_cts,
  mileage,
}: VehicleCardProps) {
  const { t } = useTranslation("vehicles");

  const vehicleTitle = useMemo(
    () => `${year} ${brand} ${model}`,
    [brand, model, year],
  );

  const vehicleCondition = useMemo(
    () => t(`filter.condition.option.${condition}`),
    [condition],
  );

  const vehicleMileage = useMemo(
    () => t("details.mileage.value", { mileage }),
    [mileage],
  );

  const vehiclePrice = price_cts ? getPrice(price_cts) : "";

  return (
    <article className="h-52 w-full">
      <Link
        href={`/vehicles/${encodeURIComponent(slug)}`}
        className="border border-grey rounded h-52 flex w-full bg-white"
      >
        <div className="w-72 h-full rounded-tl rounded-bl flex items-center border-r border-r-grey">
          {/* <Image
            className="overflow-hidden"
            width={288}
            height={206}
            src={thumbnail_url ?? ""}
            alt="picture"
          /> */}
          <MediaSkeleton className="overflow-hidden" width={288} height={206} />
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
            <Rating score={new Prisma.Decimal(4.8)} />

            <Button
              className="rounded text-white px-3 py-1.5 text-sm hover:opacity-90"
              backgroundColor="brown"
            >
              {t("checkAvailability")}
            </Button>
          </div>
        </div>
      </Link>
    </article>
  );
}
