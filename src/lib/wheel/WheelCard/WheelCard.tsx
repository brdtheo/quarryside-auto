import { getTranslations } from "next-intl/server";
import Image from "next/image";

import {
  IconBuildingStore,
  IconChevronRight,
  IconTruckDelivery,
} from "@tabler/icons-react";

import MediaSkeleton from "@/lib/media/MediaSkeleton";
import useWheelDetails from "@/lib/wheel/hooks/useWheelDetails";

import { Link } from "@/i18n/routing";

import type { WheelCardProps } from ".";

export default async function WheelCard({ wheel }: WheelCardProps) {
  const t = await getTranslations("wheels");

  const { title, price, href, brand } = await useWheelDetails(wheel);

  return (
    <article className="@container/wheelcard w-full @md/wheelcard:w-52">
      <Link
        href={href}
        className="border border-grey rounded flex w-full @md/wheelcard:w-52 bg-white dark:bg-blacksecondary dark:border-blacksecondary bg-clip-content overflow-hidden"
      >
        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex self-center h-48 @sm/wheelcard:h-60 relative">
            {!wheel.medias?.[0] && <MediaSkeleton className="w-full h-full" />}
            {!!wheel.medias?.[0] && (
              <Image
                src={wheel.medias[0].url}
                sizes="450px"
                alt={title}
                fill
                className="object-cover"
              />
            )}
          </div>

          <div className="flex flex-col gap-2 px-4 pt-2 pb-4">
            <span className="font-semibold text-xs text-grey-secondary leading-none">
              {brand}
            </span>
            <span className="font-medium text-lg leading-6 pb-1">
              {wheel.model}
            </span>
            {(wheel.delivery_available || wheel.free_on_site_pickup) && (
              <ul className="flex flex-col gap-1">
                {wheel.free_on_site_pickup && (
                  <li className="inline-flex items-start gap-1">
                    <IconBuildingStore stroke={1.6} size={18} />
                    <span className="font-medium text-xs">
                      {t("filter.free_on_site_pickup.option.true")}
                    </span>
                  </li>
                )}
                {wheel.delivery_available && (
                  <li className="inline-flex items-start gap-1">
                    <IconTruckDelivery stroke={1.6} size={18} />
                    <span className="font-medium text-xs">
                      {t("filter.delivery_available.option.true")}
                    </span>
                  </li>
                )}
              </ul>
            )}
            <div className="flex border border-yellow mt-1">
              <div className="bg-yellow flex flex-1 justify-center items-start px-1">
                <span className="text-red font-bold text-normal">$</span>
                <span className="text-red font-extrabold text-2xl">
                  {price}
                </span>
              </div>
              <div className="bg-white dark:bg-blacksecondary w-8 h-8 flex justify-center items-center">
                <IconChevronRight size={18} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
