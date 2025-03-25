import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Container from "@/components/Container";
import PageTitle from "@/components/PageTitle";
import Pagination from "@/components/Pagination";

import WheelCard from "@/lib/wheel/WheelCard";
import WheelList from "@/lib/wheel/WheelList";
import WheelListFilterAside from "@/lib/wheel/WheelListFilterAside";
import WheelListFilterHeader from "@/lib/wheel/WheelListFilterHeader";
import { WHEEL_LIST_PAGE_SIZE } from "@/lib/wheel/constants";

import { DOMAIN_URL, OPEN_GRAPH_IMAGE_URL } from "@/constants";

import { getWheelList, getWheelListCount } from "@data/wheel";

import type { PageProps } from "@/types";

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const t = await getTranslations("wheels");
  const params = await searchParams;
  const hasSearchParams = (Object.entries(params ?? {}) ?? []).length > 0;
  return {
    title: t("meta.title"),
    description: t("meta.description"),
    openGraph: {
      title: t("meta.title"),
      description: t("meta.description"),
      siteName: "Quarryside Auto",
      images: {
        url: OPEN_GRAPH_IMAGE_URL,
        alt: t("meta.title"),
        width: 1920,
        height: 1017,
      },
    },
    twitter: {
      title: t("meta.title"),
      description: t("meta.description"),
      images: {
        url: OPEN_GRAPH_IMAGE_URL,
        alt: t("meta.title"),
        width: 1920,
        height: 1017,
      },
    },
    alternates: {
      canonical: `${DOMAIN_URL}/wheels`,
      languages: {
        "ru-RU": `${DOMAIN_URL}/ru/wheels`,
      },
    },
    ...(hasSearchParams
      ? {
          robots: {
            index: false,
          },
        }
      : {}),
  };
}

export default async function Page({ searchParams }: PageProps) {
  const t = await getTranslations("wheels");

  const params = await searchParams;
  const page = params?.page ? parseInt(params?.page as string, 10) : 1;

  const wheels = await getWheelList(params);
  const wheelCount = await getWheelListCount(params);

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
            data={wheels}
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
