import { useMemo } from "react";

import useTranslation from "next-translate/useTranslation";
// import Image from "next/image";
import Link from "next/link";

import {
  IconBuildingStore,
  IconChevronRight,
  IconTruckDelivery,
} from "@tabler/icons-react";

import currency from "currency.js";

import MediaSkeleton from "@/lib/media/MediaSkeleton";

import type { WheelCardProps } from ".";

export default function WheelCard({
  slug,
  // thumbnailUrl,
  brand,
  model,
  priceCts,
  isDeliveryAvailable,
  isOnsitePickupFree,
}: WheelCardProps) {
  const { t } = useTranslation("wheels");

  const wheelPrice = useMemo(
    () =>
      currency(Number(priceCts ?? 0), {
        fromCents: true,
        symbol: "",
      }).format(),
    [priceCts],
  );

  return (
    <article className="w-52">
      <Link
        href={`/wheels/${encodeURIComponent(slug)}`}
        className="border border-grey rounded flex w-52 bg-white dark:bg-blacksecondary dark:border-blacksecondary"
      >
        <div className="flex flex-col gap-2 px-5 py-4">
          {/* <Image
            className="overflow-hidden rounded"
            width={166}
            height={166}
            src={thumbnailUrl ?? ""}
            alt="wheel preview"
          /> */}
          <MediaSkeleton
            className="overflow-hidden rounded"
            width={166}
            height={166}
          />

          <span className="font-semibold text-xs text-grey-secondary leading-none">
            {t(`filter.brand.option.${brand}`)}
          </span>
          <span className="font-medium text-lg leading-6 pb-1">{model}</span>
          {(isDeliveryAvailable || isOnsitePickupFree) && (
            <ul className="flex flex-col gap-1">
              {isOnsitePickupFree && (
                <li className="inline-flex items-start gap-1">
                  <IconBuildingStore stroke={1.6} size={18} />
                  <span className="font-medium text-xs">
                    {t("filter.free_on_site_pickup.option.true")}
                  </span>
                </li>
              )}
              {isDeliveryAvailable && (
                <li className="inline-flex items-start gap-1">
                  <IconTruckDelivery stroke={1.6} size={18} />
                  <span className="font-medium text-xs">
                    {t("filter.delivery_available.option.true")}
                  </span>
                </li>
              )}
            </ul>
          )}
          {/* {!!average_rating && <Rating size={14} score={average_rating} />} */}
          <div className="flex border border-yellow mt-1">
            <div className="bg-yellow flex flex-1 justify-center items-start px-1">
              <span className="text-red font-bold text-normal">$</span>
              <span className="text-red font-extrabold text-2xl">
                {wheelPrice}
              </span>
            </div>
            <div className="bg-white dark:bg-blacksecondary w-8 h-8 flex justify-center items-center">
              <IconChevronRight size={18} />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
