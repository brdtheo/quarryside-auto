import { useMemo } from "react";

import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

import Button from "@/components/Button";

import MediaSkeleton from "@/lib/media/MediaSkeleton";
import { getMonthlyEstimatePrice } from "@/lib/vehicle/utils";

import { getPrice } from "@/utils";

import type { VehicleCardProps } from ".";

export default function VehicleCard({
  slug,
  condition,
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
    <article className="@container/vehiclecard w-full">
      <Link
        href={`/vehicles/${encodeURIComponent(slug)}`}
        className="border border-grey dark:border-blacksecondary rounded flex flex-col @lg/vehiclecard:flex-row w-full bg-white dark:bg-blacksecondary"
      >
        <div className="@lg/vehiclecard:w-[288px] @md/vehiclecard:h-[206px] w-full flex self-center h-64">
          <MediaSkeleton className="overflow-hidden w-full h-full" />
        </div>
        <div className="flex flex-1 flex-col px-3 py-4 gap-2 @md/vehiclecard:gap-0 border-l border-l-divider dark:border-l-transparent">
          <div className="flex-1 text-left dark:text-white">
            <span className="font-light text-xs">{vehicleCondition}</span>
            <div className="flex flex-col">
              <h2 className="text-lg font-medium leading-6 my-1 line-clamp-2">
                {vehicleTitle}
              </h2>
              <span className="text-sm">{vehicleMileage}</span>
              <span className="text-sm">{vehicleTransmission}</span>
            </div>
          </div>

          <div className="flex flex-col @2xl/vehiclecard:flex-row justify-between @2xl/vehiclecard:items-end">
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

            <Button
              className="mt-2 w-full @lg/vehiclecard:w-fit @2xl/vehiclecard:mt-0"
              rounded
              color="primary"
            >
              {t("checkAvailability")}
            </Button>
          </div>
        </div>
      </Link>
    </article>
  );
}
