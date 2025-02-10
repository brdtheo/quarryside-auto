import { IconChevronRight } from "@tabler/icons-react";

import { Prisma, Wheel } from "@prisma/client";

import Advertising from "@/components/Advertising";
import Button from "@/components/Button";
import Container from "@/components/Container";
import DetailSection from "@/components/DetailSection";
import Table from "@/components/Table";
import TextField from "@/components/TextField";

import { prisma } from "@/lib/prisma";
import ReviewCard from "@/lib/review/ReviewCard";
import VehicleMediaList from "@/lib/vehicle/VehicleMediaList";
import WheelCard from "@/lib/wheel/WheelCard";
import WheelList from "@/lib/wheel/WheelList";

import { getPrice } from "@/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const slug = (await params)?.slug ?? "";

  const vehicle = await prisma.vehicle.findUnique({
    where: { slug: slug ?? "" },
  });

  const vehicleMediaList = vehicle?.id
    ? await prisma.media.findMany({
        where: { vehicle: vehicle.id },
      })
    : [];

  const vehicleWheels = vehicle?.id
    ? await prisma.vehicles_Wheels.findMany({
        where: { vehicle_id: vehicle.id },
        include: { wheels: true },
      })
    : [];

  const parsedVehicleWheels: Wheel[] =
    vehicleWheels.length > 0
      ? vehicleWheels.map((vehicleWheel) => ({ ...vehicleWheel.wheels }))
      : [];

  const vehicleTitle = [vehicle?.year, vehicle?.brand, vehicle?.model].join(
    " ",
  );

  const vehiclePrice = vehicle?.price_cts ? getPrice(vehicle.price_cts) : "";

  return (
    <Container className="m-auto gap-8 flex flex-col py-8">
      <ul className="inline-flex gap-2 items-center text-sm">
        <li>Used vehicles</li>
        <li>
          <IconChevronRight size={16} />
        </li>
        <li className="text-sm">{vehicleTitle}</li>
      </ul>

      <div className="flex gap-8">
        <div className="w-[785px] flex flex-col gap-16">
          <VehicleMediaList mediaList={vehicleMediaList} />

          <div className="flex flex-col gap-2">
            <h1>{vehicleTitle}</h1>
            <span className="font-bold text-2xl">{vehiclePrice}</span>
            <p className="text-sm">{vehicle?.description}</p>
          </div>

          <DetailSection title="Specifications">
            <Table
              rows={[
                { name: "Body style", data: vehicle?.body_style ?? "" },
                { name: "Country", data: vehicle?.country ?? "" },
                { name: "Brand", data: vehicle?.brand ?? "" },
                { name: "Year", data: vehicle?.year?.toString() ?? "" },
                { name: "Drivetrain", data: vehicle?.transmission ?? "" },
                {
                  name: "Engine",
                  data: `${vehicle?.engine_displacement_volume_liters}L ${vehicle?.engine_layout}${vehicle?.engine_cylinder_count}`,
                },
                {
                  name: "Power",
                  data: `${vehicle?.power_bhp ?? ""} bhp`,
                },
                { name: "Fuel type", data: vehicle?.fuel_type ?? "" },
                { name: "Mileage", data: `${vehicle?.mileage} miles` },
                { name: "Weight", data: `${vehicle?.weight_lbs} lbs` },
                {
                  name: "0 to 60",
                  data: `${vehicle?.zero_to_sixty_seconds}s`,
                },
                {
                  name: "Top speed",
                  data: `${vehicle?.top_speed_mph} mph`,
                },
                {
                  name: "Transmission",
                  data: vehicle?.transmission ?? "",
                },
              ]}
            />
          </DetailSection>

          <DetailSection title="Features">
            <Table
              rows={[
                { name: "Exterior", data: "Alloy wheels" },
                { name: "Safety", data: ["Back camera", "Stability control"] },
              ]}
            />
          </DetailSection>

          {(vehicleWheels ?? []).length > 0 && (
            <DetailSection title="Wheels">
              <WheelList
                className="auto-cols-min grid-flow-col"
                data={parsedVehicleWheels}
                itemRender={(wheel) => (
                  <li key={wheel.id}>
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

          <DetailSection title="Reviews">
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
          <form
            action="#"
            noValidate
            className="bg-background rounded py-8 px-4 flex flex-col gap-6"
          >
            <h2 className="font-semibold text-base">
              Interested? Your new vehicle awaits you
            </h2>

            <div className="grid grid-cols-2 gap-2">
              <TextField placeholder="First name" value="" />
              <TextField placeholder="Last name" value="" />
              <TextField placeholder="Email" value="" />
              <TextField placeholder="Phone" value="" />
              <TextField
                className="col-span-2 h-24"
                placeholder="Message"
                isTextArea
                value=""
              />
            </div>

            <div className="flex flex-col gap-2">
              <Button
                className="text-sm py-3 rounded hover:opacity-90"
                backgroundColor="brown"
                textColor="white"
              >
                Check availability
              </Button>
              <Button
                fontWeight="regular"
                className="text-center text-sm rounded border border-brown-secondary"
                variant="outlined"
                textColor="brown-secondary"
                backgroundColor="white"
              >
                Schedule test drive
              </Button>
            </div>
          </form>

          <Advertising className="m-4" ratioMode="horizontal" />
        </div>
      </div>
    </Container>
  );
}
