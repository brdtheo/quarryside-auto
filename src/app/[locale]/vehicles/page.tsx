import { getTranslations } from "next-intl/server";

import { Prisma } from "@prisma/client";

import Container from "@/components/Container";
import PageTitle from "@/components/PageTitle";
import Pagination from "@/components/Pagination";

import { prisma } from "@/lib/prisma";
import VehicleCard from "@/lib/vehicle/VehicleCard";
import VehicleList from "@/lib/vehicle/VehicleList";
import VehicleListFilterAside from "@/lib/vehicle/VehicleListFilterAside";
import VehicleListFilterHeader from "@/lib/vehicle/VehicleListFilterHeader";
import { VEHICLE_LIST_PAGE_SIZE } from "@/lib/vehicle/constants";
import { VehicleWithMedias } from "@/lib/vehicle/types";
import { getVehicleFindManyArgs } from "@/lib/vehicle/utils";

import type { PageProps } from "@/types";

export async function generateMetadata() {
  const t = await getTranslations("vehicles");
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const page = params?.page ? parseInt(params?.page as string) : 1;

  const prismaFindManyArgs = getVehicleFindManyArgs(params);
  const prismaFindManyCountArgs = getVehicleFindManyArgs(params, true);

  const vehicles = await prisma.vehicle.findMany(
    prismaFindManyArgs as Prisma.VehicleFindManyArgs,
  );
  const vehiclesCount =
    (await prisma.vehicle.count(
      prismaFindManyCountArgs as Prisma.VehicleCountArgs,
    )) ?? 0;

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
            data={vehicles as VehicleWithMedias[]}
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
