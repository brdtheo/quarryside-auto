import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { Prisma } from "@prisma/client";

import Container from "@/components/Container";
import PageTitle from "@/components/PageTitle";
import Pagination from "@/components/Pagination";

import { prisma } from "@/lib/prisma";
import WheelCard from "@/lib/wheel/WheelCard";
import WheelList from "@/lib/wheel/WheelList";
import WheelListFilterAside from "@/lib/wheel/WheelListFilterAside";
import WheelListFilterHeader from "@/lib/wheel/WheelListFilterHeader";
import { WHEEL_LIST_PAGE_SIZE } from "@/lib/wheel/constants";
import { WheelWithMedias } from "@/lib/wheel/types";
import { getWheelFindManyArgs } from "@/lib/wheel/utils";

import type { PageProps } from "@/types";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("wheels");
  return {
    title: t("meta.title"),
    description: t("meta.description"),
    openGraph: {
      title: t("meta.title"),
      description: t("meta.description"),
      siteName: "Quarryside Auto",
    },
    twitter: {
      title: t("meta.title"),
      description: t("meta.description"),
    },
  };
}

export default async function Page({ searchParams }: PageProps) {
  const t = await getTranslations("wheels");

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
    <Container className="m-auto gap-4 md:gap-8 flex flex-col pt-6 pb-8">
      <PageTitle>{t("title")}</PageTitle>

      <div className="flex gap-8">
        <WheelListFilterAside
          className="hidden md:flex"
          searchParams={params}
        />

        <div className="flex flex-1 flex-col">
          <WheelListFilterHeader
            searchParams={params}
            resultCount={wheelCount}
            textSearch=""
          />

          <WheelList
            data={wheels as WheelWithMedias[]}
            itemRender={(wheel) => (
              <li
                className="col-span-4 @md/wheellist:col-span-2 @2xl/wheellist:col-span-1"
                key={wheel.id}
              >
                <WheelCard wheel={wheel} />
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
