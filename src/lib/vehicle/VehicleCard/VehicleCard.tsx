import { useMemo } from "react";

import useTranslation from "next-translate/useTranslation";
// import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";

import MediaSkeleton from "@/lib/media/MediaSkeleton";
import { getMonthlyEstimatePrice } from "@/lib/vehicle/utils";

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
  transmission,
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

  const vehicleTransmission = useMemo(
    () => t(`filter.transmission.option.${transmission}`),
    [mileage],
  );

  const vehiclePrice = useMemo(
    () => (price_cts ? getPrice(price_cts) : ""),
    [price_cts],
  );

  const vehicleMonthlyEstimatePrice = useMemo(
    () => (price_cts ? getMonthlyEstimatePrice(price_cts) : ""),
    [price_cts],
  );

  return (
    <article className="h-52 w-full">
      <Link
        href={`/vehicles/${encodeURIComponent(slug)}`}
        className="border border-grey dark:border-blacksecondary rounded h-52 flex w-full bg-white dark:bg-blacksecondary"
      >
        <div className="w-72 h-full rounded-tl rounded-bl flex items-center border-r border-r-grey dark:border-r-transparent">
          {/* <Image
            className="overflow-hidden"
            width={288}
            height={206}
            src={thumbnail_url ?? ""}
            alt="picture"
          /> */}
          <MediaSkeleton
            className="overflow-hidden rounded-l"
            width={288}
            height={206}
          />
        </div>
        <div className="flex flex-1 flex-col h-full px-3 py-4 gap-1">
          <div className="flex-1 text-left dark:text-white">
            <span className="font-light text-xs">{vehicleCondition}</span>
            <div className="flex flex-col">
              <h2 className="text-lg">{vehicleTitle}</h2>
              <span className="text-sm">{vehicleMileage}</span>
              <span className="text-sm">{vehicleTransmission}</span>
            </div>
          </div>

          <div className="flex justify-between items-end">
            <div className="flex flex-col">
              <span className="font-semibold text-xl">{vehiclePrice}</span>
              <div className="flex items-baseline">
                <span className="text-xs">{t("details.estimate")}</span>
                <span className="ml-1 font-semibold text-sm">
                  {vehicleMonthlyEstimatePrice}
                </span>
                <span className="text-xs">{t("details.perMonth")}</span>
              </div>
            </div>
            <Button rounded color="primary">
              {t("checkAvailability")}
            </Button>
          </div>
        </div>
      </Link>
    </article>
  );
}
