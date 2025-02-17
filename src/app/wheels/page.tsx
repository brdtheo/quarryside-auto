import useTranslation from "next-translate/useTranslation";

import { Prisma, Wheel } from "@prisma/client";

import Container from "@/components/Container";
import Pagination from "@/components/Pagination";

import { prisma } from "@/lib/prisma";
import WheelCard from "@/lib/wheel/WheelCard";
import WheelList from "@/lib/wheel/WheelList";
import WheelListFilterAside from "@/lib/wheel/WheelListFilterAside";
import WheelListFilterHeader from "@/lib/wheel/WheelListFilterHeader";
import { WHEEL_LIST_PAGE_SIZE } from "@/lib/wheel/constants";
import { getWheelFindManyArgs } from "@/lib/wheel/utils";

import type { PageProps } from "@/types";

export default async function Page({ searchParams }: PageProps) {
  const { t } = useTranslation("wheels");

  const params = await searchParams;
  const page = params?.page ? parseInt(params?.page as string) : 1;

  const prismaFindManyArgs = getWheelFindManyArgs(params);
  const prismaFindManyCountArgs = getWheelFindManyArgs(params, true);

  const wheels = await prisma.wheel.findMany(
    prismaFindManyArgs as Prisma.WheelFindManyArgs,
  );
  const wheelCount =
    (await prisma.wheel.count(
      prismaFindManyCountArgs as Prisma.WheelCountArgs,
    )) ?? 0;

  return (
    <Container className="m-auto gap-8 flex flex-col py-8">
      <h1 className="font-bold text-2xl dark:text-white">{t("title")}</h1>
      <div className="flex gap-8">
        <WheelListFilterAside searchParams={params} />

        <div className="flex flex-1 flex-col">
          <WheelListFilterHeader resultCount={wheelCount} textSearch="" />

          <WheelList
            className="grid-cols-4"
            data={wheels}
            itemRender={(wheel: Wheel) => (
              <li key={wheel.id}>
                <WheelCard
                  slug={wheel.slug}
                  thumbnailUrl={wheel.thumbnail_url ?? ""}
                  brand={wheel.brand}
                  model={wheel.model}
                  priceCts={wheel.price_cts}
                  averageRating={null}
                  isDeliveryAvailable={wheel.delivery_available}
                  isOnsitePickupFree={wheel.free_on_site_pickup}
                />
              </li>
            )}
          />
        </div>
      </div>
      <Pagination
        searchParams={params}
        page={page}
        pageCount={Math.ceil(wheelCount / WHEEL_LIST_PAGE_SIZE) || 1}
      />
    </Container>
  );
}
