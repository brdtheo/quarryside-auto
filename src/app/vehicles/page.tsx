import useTranslation from "next-translate/useTranslation";

import { Prisma, Vehicle } from "@prisma/client";

import Container from "@/components/Container";
import Pagination from "@/components/Pagination";

import { prisma } from "@/lib/prisma";
import VehicleCard from "@/lib/vehicle/VehicleCard";
import VehicleList from "@/lib/vehicle/VehicleList";
import VehicleListFilterAside from "@/lib/vehicle/VehicleListFilterAside";
import VehicleListFilterHeader from "@/lib/vehicle/VehicleListFilterHeader";
import { VEHICLE_LIST_PAGE_SIZE } from "@/lib/vehicle/constants";
import { getVehicleFindManyArgs } from "@/lib/vehicle/utils";

import type { PageProps } from "@/types";

export default async function Page({ searchParams }: PageProps) {
  const { t } = useTranslation("vehicles");

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

  return (
    <Container className="m-auto gap-8 flex flex-col py-8">
      <h1 className="font-bold text-2xl">{t("title")}</h1>

      <div className="flex gap-8">
        <VehicleListFilterAside searchParams={params} />

        <div className="flex flex-1 flex-col">
          <VehicleListFilterHeader resultCount={vehiclesCount} textSearch="" />

          <VehicleList
            data={vehicles}
            itemRender={(vehicle: Vehicle) => (
              <li key={vehicle.id}>
                <VehicleCard
                  slug={vehicle.slug}
                  condition={vehicle.condition}
                  thumbnail_url={vehicle.thumbnail_url}
                  year={vehicle.year}
                  brand={vehicle.brand}
                  model={vehicle.model}
                  price_cts={vehicle.price_cts}
                  mileage={vehicle.mileage}
                />
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
