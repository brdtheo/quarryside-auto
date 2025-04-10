import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Container from "@/components/Container";
import PageTitle from "@/components/PageTitle";
import Pagination from "@/components/Pagination";

import VehicleCard from "@/lib/vehicle/VehicleCard";
import VehicleList from "@/lib/vehicle/VehicleList";
import VehicleListFilterAside from "@/lib/vehicle/VehicleListFilterAside";
import VehicleListFilterHeader from "@/lib/vehicle/VehicleListFilterHeader";
import { VEHICLE_LIST_PAGE_SIZE } from "@/lib/vehicle/constants";

import { DOMAIN_URL, OPEN_GRAPH_IMAGE_URL } from "@/constants";

import { getVehicleList, getVehicleListCount } from "@data/vehicle";

import type { PageProps } from "@/types";

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const t = await getTranslations("vehicles");
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
      canonical: `${DOMAIN_URL}/vehicles`,
      languages: {
        "ru-RU": `${DOMAIN_URL}/ru/vehicles`,
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
  const params = await searchParams;
  const page = params?.page ? Number.parseInt(params?.page as string, 10) : 1;

  const vehicles = await getVehicleList(params);
  const vehiclesCount = await getVehicleListCount(params);

  const t = await getTranslations("vehicles");

  return (
    <Container className="m-auto gap-4 md:gap-8 flex flex-col pt-6 pb-8">
      <PageTitle>{t("title")}</PageTitle>

      <div className="flex gap-8">
        <VehicleListFilterAside
          className="hidden md:flex"
          searchParams={params}
        />

        <div className="flex flex-1 flex-col">
          <VehicleListFilterHeader
            searchParams={params}
            resultCount={vehiclesCount}
            textSearch=""
          />

          <VehicleList
            data={vehicles}
            itemRender={(vehicle) => (
              <li key={vehicle.id}>
                <VehicleCard vehicle={vehicle} />
              </li>
            )}
          />
        </div>
      </div>

      <Pagination
        searchParams={params}
        page={page}
        pageCount={Math.ceil(vehiclesCount / VEHICLE_LIST_PAGE_SIZE) || 1}
      />
    </Container>
  );
}
