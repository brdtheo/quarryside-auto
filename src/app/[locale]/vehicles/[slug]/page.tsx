import { getTranslations } from "next-intl/server";

import { IconChevronRight } from "@tabler/icons-react";

import NotFound from "@/app/[locale]/not-found";

import Advertising from "@/components/Advertising";
import Button from "@/components/Button";
import Container from "@/components/Container";
import DetailSection from "@/components/DetailSection";
import Table from "@/components/Table";
import TextField from "@/components/TextField";

import MediaList from "@/lib/media/MediaList";
import { prisma } from "@/lib/prisma";
import WheelCard from "@/lib/wheel/WheelCard";
import WheelList from "@/lib/wheel/WheelList";

import { getPrice } from "@/utils";

import type { DetailsPageProps } from "@/types";

export default async function Page({ params }: DetailsPageProps) {
  const t = await getTranslations("vehicles");

  const slug = (await params)?.slug ?? "";

  const vehicle = await prisma.vehicle.findUnique({
    where: { slug: slug ?? "" },
    include: {
      vehicles_wheels: {
        select: { wheels: true },
      },
      medias: true,
    },
  });

  const parsedVehicleWheels =
    (vehicle?.vehicles_wheels ?? []).length > 0
      ? (vehicle?.vehicles_wheels ?? []).map((vehicleWheel) => ({
          ...vehicleWheel.wheels,
        }))
      : [];

  const vehicleTitle = [vehicle?.year, vehicle?.brand, vehicle?.model].join(
    " ",
  );

  const vehiclePrice = vehicle?.price_cts ? getPrice(vehicle.price_cts) : "";

  if (!vehicle) {
    return <NotFound />;
  }

  return (
    <Container className="m-auto gap-8 flex flex-col py-8">
      <ul className="inline-flex gap-2 items-center text-sm">
        <li className="whitespace-nowrap">{"title"}</li>
        <li>
          <IconChevronRight size={16} />
        </li>
        <li className="text-sm line-clamp-1">{vehicleTitle}</li>
      </ul>

      <div className="flex flex-col xl:flex-row gap-8">
        <div className="w-full xl:w-[785px] flex flex-col gap-16">
          <MediaList mediaList={vehicle.medias} />

          <div className="flex flex-col gap-2">
            <h1>{vehicleTitle}</h1>
            <span className="font-bold text-2xl">{vehiclePrice}</span>
            <p className="text-sm">{vehicle?.description}</p>
          </div>

          <DetailSection title={t("details.specifications")}>
            <Table
              rows={[
                {
                  name: t("filter.body_style.title"),
                  data: t(`filter.body_style.option.${vehicle?.body_style}`),
                },
                {
                  name: t("filter.country.title"),
                  data: t(`filter.country.option.${vehicle?.country}`),
                },
                {
                  name: t("filter.brand.title"),
                  data: t(`filter.brand.option.${vehicle?.brand}`),
                },
                {
                  name: t("details.year.title"),
                  data: vehicle?.year?.toString() ?? "",
                },
                {
                  name: t("filter.drivetrain.title"),
                  data: t(`filter.drivetrain.option.${vehicle?.drivetrain}`),
                },
                ...(vehicle?.engine_displacement_volume_liters &&
                vehicle?.engine_layout &&
                vehicle?.engine_cylinder_count
                  ? [
                      {
                        name: t("details.engine.title"),
                        data: t("details.engine.value", {
                          engineDisplacementVolumeLiters: Number(
                            vehicle.engine_displacement_volume_liters,
                          ),
                          engineLayout: vehicle.engine_layout,
                          engineCylinderCount: vehicle.engine_cylinder_count,
                        }),
                      },
                    ]
                  : []),
                {
                  name: t("filter.fuel_type.title"),
                  data: t(
                    `filter.fuel_type.option.${vehicle?.fuel_type ?? ""}`,
                  ),
                },
                {
                  name: t("details.mileage.title"),
                  data: t("details.mileage.value", {
                    mileage: Number(vehicle?.mileage),
                  }),
                },
                {
                  name: t("details.weight.title"),
                  data: t("details.weight.value", {
                    weight: Number(vehicle?.weight_lbs),
                  }),
                },
                {
                  name: t("filter.transmission.title"),
                  data: t(
                    `filter.transmission.option.${vehicle?.transmission ?? ""}`,
                  ),
                },
              ]}
            />
          </DetailSection>

          {(vehicle?.power_bhp ||
            vehicle?.zero_to_sixty_seconds ||
            vehicle?.top_speed_mph) && (
            <DetailSection title={t("details.performance")}>
              <Table
                rows={[
                  ...(vehicle?.power_bhp
                    ? [
                        {
                          name: t("details.power.title"),
                          data: t("details.power.value", {
                            power: Number(vehicle.power_bhp),
                          }),
                        },
                      ]
                    : []),
                  ...(vehicle.zero_to_sixty_seconds
                    ? [
                        {
                          name: t("details.zeroToSixty.title"),
                          data: t("details.zeroToSixty.value", {
                            seconds: Number(vehicle?.zero_to_sixty_seconds),
                          }),
                        },
                      ]
                    : []),
                  ...(vehicle.top_speed_mph
                    ? [
                        {
                          name: t("details.topSpeed.title"),
                          data: t("details.topSpeed.value", {
                            speed: vehicle?.top_speed_mph,
                          }),
                        },
                      ]
                    : []),
                ]}
              />
            </DetailSection>
          )}

          {(parsedVehicleWheels ?? []).length > 0 && (
            <DetailSection title={t("wheels")}>
              <WheelList
                className=""
                data={parsedVehicleWheels ?? []}
                itemRender={(wheel) => (
                  <li
                    className="col-span-4 @sm/wheellist:col-span-2 @3xl/wheellist:col-span-1"
                    key={wheel.id}
                  >
                    <WheelCard
                      slug={wheel.slug}
                      thumbnailUrl={wheel.thumbnail_url}
                      brand={wheel.brand}
                      model={wheel.model}
                      priceCts={wheel.price_cts}
                      averageRating={3.5}
                      isDeliveryAvailable={wheel.delivery_available}
                      isOnsitePickupFree={wheel.free_on_site_pickup}
                    />
                  </li>
                )}
              />
            </DetailSection>
          )}
        </div>

        <div className="flex flex-1 flex-col p-3 bg-white dark:bg-blacksecondary h-fit rounded @container/vehicleform">
          <form
            action="#"
            noValidate
            className="bg-background dark:bg-black rounded py-8 px-4 flex flex-col gap-6"
          >
            <h2 className="font-semibold text-base">{"form.title"}</h2>

            <div className="grid grid-cols-2 gap-2">
              <TextField
                className="col-span-2 @md/vehicleform:col-span-1 w-full"
                placeholder={t("form.field.firstName")}
                value=""
              />
              <TextField
                className="col-span-2 @md/vehicleform:col-span-1 w-full"
                placeholder={t("form.field.lastName")}
                value=""
              />
              <TextField
                className="col-span-2 @md/vehicleform:col-span-1 w-full"
                placeholder={t("form.field.email")}
                value=""
              />
              <TextField
                className="col-span-2 @md/vehicleform:col-span-1 w-full"
                placeholder={t("form.field.phone")}
                value=""
              />
              <TextField
                className="col-span-2 h-24"
                placeholder={t("form.field.message")}
                isTextArea
                value=""
              />
            </div>

            <div className="flex flex-col gap-2">
              <Button color="primary" size="lg" rounded>
                {t("checkAvailability")}
              </Button>
              <Button color="secondary" rounded>
                {t("scheduleTestDrive")}
              </Button>
            </div>
          </form>

          <Advertising className="m-4 mx-auto" ratioMode="horizontal" />
        </div>
      </div>
    </Container>
  );
}
