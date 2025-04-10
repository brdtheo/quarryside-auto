import { useTranslations } from "next-intl";
import Image from "next/image";

import Button from "@/components/Button";

import MediaSkeleton from "@/lib/media/MediaSkeleton";
import useVehicleDetails from "@/lib/vehicle/hooks/useVehicleDetails";

import { Link } from "@/i18n/routing";

import type { VehicleCardProps } from ".";

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const t = useTranslations("vehicles");

  const thumbnail = (vehicle?.medias ?? []).find((media) => media.is_thumbnail);

  const {
    condition,
    href,
    mileage,
    monthlyEstimatePrice,
    price,
    title,
    titleWithoutYear,
    transmission,
  } = useVehicleDetails(vehicle);

  return (
    <article className="@container/vehiclecard w-full">
      <Link
        href={href}
        className="border border-divider dark:border-blacksecondary rounded flex flex-col @lg/vehiclecard:flex-row w-full bg-white dark:bg-blacksecondary bg-clip-content overflow-hidden"
      >
        <div className="w-full @lg/vehiclecard:w-[340px] flex self-center h-48 @sm/vehiclecard:h-64 @md/vehiclecard:h-56 relative">
          {!thumbnail && <MediaSkeleton className="w-full h-full" />}
          {!!thumbnail && (
            <Image
              src={thumbnail.url}
              sizes="340px"
              alt={titleWithoutYear}
              fill
              className="object-contain"
            />
          )}
        </div>
        <div className="flex flex-1 flex-col px-3 py-4 gap-2 @md/vehiclecard:gap-0 border-t border-t-divider @lg/vehiclecard:border-t-0 @lg/vehiclecard:border-l @lg/vehiclecard:border-l-divider dark:border-l-transparent">
          <div className="flex-1 text-left dark:text-white">
            <span className="font-light text-xs">{condition}</span>
            <div className="flex flex-col">
              <h2
                title={title}
                className="text-lg font-medium leading-6 my-1 line-clamp-2"
              >
                {title}
              </h2>
              <span className="text-sm">{mileage}</span>
              <span className="text-sm">{transmission}</span>
            </div>
          </div>

          <div className="flex flex-col @2xl/vehiclecard:flex-row justify-between @2xl/vehiclecard:items-end">
            <div className="flex flex-col">
              <span className="font-semibold text-xl">{price}</span>
              <div className="flex items-baseline">
                <span className="text-xs">{t("details.estimate")}</span>
                <span className="ml-1 font-semibold text-sm">
                  {monthlyEstimatePrice}
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
