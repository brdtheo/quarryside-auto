import { getTranslations } from "next-intl/server";

import { IconBuildingStore, IconTruckDelivery } from "@tabler/icons-react";

import NotFound from "@/app/[locale]/not-found";

import Advertising from "@/components/Advertising";
import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import Container from "@/components/Container";
import DetailSection from "@/components/DetailSection";
import PageTitle from "@/components/PageTitle";
import Select from "@/components/Select";
import Table from "@/components/Table";

import MediaList from "@/lib/media/MediaList";
import { prisma } from "@/lib/prisma";
import VehicleCard from "@/lib/vehicle/VehicleCard";
import VehicleList from "@/lib/vehicle/VehicleList";

import { getPrice } from "@/utils";

import type { DetailsPageProps } from "@/types";

export default async function Page({ params }: DetailsPageProps) {
  const t = await getTranslations("wheels");

  const slug = (await params)?.slug ?? "";

  const wheel = await prisma.wheel.findUnique({
    where: { slug: slug ?? "" },
    include: {
      vehicles_wheels: {
        select: { vehicles: true },
      },
      medias: true,
    },
  });

  const parsedVehicleWheels =
    (wheel?.vehicles_wheels ?? []).length > 0
      ? (wheel?.vehicles_wheels ?? []).map((vehicleWheel) => ({
          ...vehicleWheel.vehicles,
        }))
      : [];

  const wheelTitle = [
    t(`filter.brand.option.${wheel?.brand}`),
    wheel?.model,
  ].join(" ");

  const wheelPrice = wheel?.price_cts
    ? getPrice(wheel.price_cts, { symbol: "" })
    : "";

  const wheelQuantityOptionList = [...new Array(10)].map((_, index) => ({
    label: `${index + 1}`,
    value: `${index + 1}`,
  }));

  if (!wheel) {
    return <NotFound />;
  }

  return (
    <Container className="m-auto gap-8 flex flex-col pt-6 pb-8">
      <PageTitle>{wheelTitle}</PageTitle>

      <div className="flex flex-col xl:flex-row gap-4">
        <div className="w-full xl:w-[785px] flex flex-col gap-16">
          <MediaList mediaList={wheel.medias} />

          <DetailSection title={t("details.specifications")}>
            <Table
              rows={[
                { name: t("filter.brand.title"), data: wheel?.brand ?? "" },
                {
                  name: t("details.availableSizes.title"),
                  data: wheel?.sizes ?? "",
                },
                {
                  name: t("details.availableTires.title"),
                  data: wheel?.tires ?? "",
                },
                {
                  name: t("details.consumption.title"),
                  data: wheel?.consumption ?? "",
                },
              ]}
            />
          </DetailSection>

          {(parsedVehicleWheels ?? []).length > 0 && (
            <DetailSection title={t("availableOn")}>
              <VehicleList
                data={parsedVehicleWheels}
                itemRender={(vehicle) => (
                  <li key={vehicle.id}>
                    <VehicleCard
                      transmission={vehicle.transmission}
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
            </DetailSection>
          )}
        </div>

        <div className="flex flex-1 flex-col p-3 bg-white dark:bg-blacksecondary h-fit rounded @container/wheelform">
          <div className="bg-background dark:bg-black rounded py-8 px-4 flex flex-1 flex-col gap-6">
            <div className="bg-yellow flex border border-yellow mt-1 w-fit rounded">
              <div className="flex flex-1 items-start px-1">
                <span className="text-red font-bold text-normal">$</span>
                <span className="text-red font-extrabold text-3xl">
                  {wheelPrice}
                </span>
              </div>
            </div>

            <ul className="flex flex-col gap-2">
              {wheel?.free_on_site_pickup && (
                <li className="inline-flex items-center gap-1">
                  <IconBuildingStore
                    className="text-primary dark:text-primarydark"
                    stroke={1.6}
                    size={18}
                  />
                  <span className="font-medium text-xs">
                    {t("filter.free_on_site_pickup.option.true")}
                  </span>
                </li>
              )}
              {wheel?.delivery_available && (
                <li className="inline-flex items-center gap-1">
                  <IconTruckDelivery
                    className="text-primary dark:text-primarydark"
                    stroke={1.6}
                    size={18}
                  />
                  <span className="font-medium text-xs">
                    {t("filter.delivery_available.option.true")}
                  </span>
                </li>
              )}
            </ul>

            <Checkbox
              id="assembly-without-appointment"
              label={t("assemblyWithoutAppointment")}
              checked={false}
              href="#"
            />

            <div className="flex flex-col flex-1 gap-2">
              <Select
                className="h-10"
                options={wheelQuantityOptionList}
                value="2"
              />
              <Button size="lg" className="w-full" color="primary" rounded>
                {t("addToCart")}
              </Button>
            </div>
          </div>

          <Advertising className="m-4" ratioMode="horizontal" />
        </div>
      </div>
    </Container>
  );
}
