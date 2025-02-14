import useTranslation from "next-translate/useTranslation";

import {
  IconBuildingStore,
  IconChevronRight,
  IconTruckDelivery,
} from "@tabler/icons-react";

import { Prisma } from "@prisma/client";

import NotFound from "@/app/not-found";

import Advertising from "@/components/Advertising";
import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import Container from "@/components/Container";
import DetailSection from "@/components/DetailSection";
import Select from "@/components/Select";
import Table from "@/components/Table";

import MediaList from "@/lib/media/MediaList";
import { prisma } from "@/lib/prisma";
import ReviewCard from "@/lib/review/ReviewCard";
import VehicleCard from "@/lib/vehicle/VehicleCard";
import VehicleList from "@/lib/vehicle/VehicleList";

import { getPrice } from "@/utils";

import type { DetailsPageProps } from "@/types";

export default async function Page({ params }: DetailsPageProps) {
  const { t } = useTranslation("wheels");

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

  const wheelTitle = [wheel?.brand, wheel?.model].join(" ");

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
    <Container className="m-auto gap-8 flex flex-col py-8">
      <ul className="inline-flex gap-2 items-center text-sm">
        <li>{t("title")}</li>
        <li>
          <IconChevronRight size={16} />
        </li>
        <li className="text-sm">{wheelTitle}</li>
      </ul>

      <div className="flex gap-4">
        <div className="w-[785px] flex flex-col gap-16">
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

          <DetailSection title={t("common:reviews")}>
            <ul className="flex flex-col gap-4">
              <li>
                <ReviewCard
                  date=""
                  title="I am satisfied"
                  rating={new Prisma.Decimal(4)}
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
              </li>
              <li>
                <ReviewCard
                  date=""
                  title="I am satisfied"
                  rating={new Prisma.Decimal(4)}
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
              </li>
              <li>
                <ReviewCard
                  date=""
                  title="I am satisfied"
                  rating={new Prisma.Decimal(4)}
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
              </li>
            </ul>
          </DetailSection>
        </div>

        <div className="flex flex-1 flex-col p-3 bg-white h-fit rounded">
          <div className="bg-background rounded py-8 px-4 flex flex-1 flex-col gap-6">
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
                    className="text-brown-secondary"
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
                    className="text-brown-secondary"
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

            <div className="flex flex-1 gap-2">
              <Select
                className="h-11"
                options={wheelQuantityOptionList}
                value="2"
              />
              <Button
                className="h-11 text-sm py-3 flex-1 rounded hover:opacity-90"
                backgroundColor="brown"
                textColor="white"
              >
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
