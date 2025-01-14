"use client";

import { useMemo } from "react";

import Image from "next/image";
import { useParams } from "next/navigation";

import {
  IconBuildingStore,
  IconChevronRight,
  IconFlame,
  IconTruckDelivery,
} from "@tabler/icons-react";

import currency from "currency.js";

import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import Container from "@/components/Container";
import DetailSection from "@/components/DetailSection";
import Select from "@/components/Select";
import Table from "@/components/Table";

import ReviewCard from "@/lib/review/ReviewCard";
import VehicleCard from "@/lib/vehicle/VehicleCard";
import { VEHICLE_LIST } from "@/lib/vehicle/data";
import { getVehicleTitle } from "@/lib/vehicle/utils";
import { WHEEL_LIST } from "@/lib/wheel/data";

import { Prisma } from "@prisma/client";

export default function Page() {
  const params = useParams<{ slug: string }>();
  const wheelTitle = getVehicleTitle(params?.slug ?? "");

  const vehicle = VEHICLE_LIST[0];
  const wheel = WHEEL_LIST[0];

  const wheelPrice = useMemo(
    () =>
      currency(Number(wheel.price_cts) ?? "", {
        fromCents: true,
        symbol: "",
      }).format(),
    [wheel.price_cts],
  );

  const wheelQuantityOptionList = useMemo(
    () =>
      [...new Array(10)].map((_, index) => ({
        label: `${index + 1}`,
        value: `${index + 1}`,
      })),
    [],
  );

  return (
    <Container className="m-auto gap-8 flex flex-col py-8">
      <ul className="inline-flex gap-2 items-center text-sm">
        <li>Rims & tires</li>
        <li>
          <IconChevronRight size={16} />
        </li>
        <li className="text-sm">{wheelTitle}</li>
      </ul>

      <div className="flex gap-4">
        <div className="w-[785px] flex flex-col gap-16">
          <Image
            className="overflow-hidden"
            width={275}
            height={275}
            src={wheel.thumbnail_url ?? ""}
            alt="media thumbnail"
          />

          <DetailSection title="Specifications">
            <Table
              rows={[
                { name: "Available sizes", data: "18x9" },
                { name: "Available tires", data: wheel.sizes },
                { name: "Seasonality", data: "Summer" },
                { name: "Consumption", data: "D" },
              ]}
            />
          </DetailSection>

          <DetailSection title="Available on">
            <VehicleCard
              condition={vehicle.condition}
              thumbnail_url={vehicle.thumbnail_url}
              year={vehicle.year}
              brand={vehicle.brand}
              model={vehicle.model}
              price_cts={vehicle.price_cts}
              mileage={vehicle.mileage}
              // average_rating={vehicle.average_rating}
            />
          </DetailSection>

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

        <div className="flex flex-1 p-3 bg-white h-fit rounded">
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
              <li className="inline-flex items-center gap-1">
                <IconBuildingStore
                  className="text-brown-secondary"
                  stroke={1.6}
                  size={18}
                />
                <span className="font-medium text-xs">Free on site pickup</span>
              </li>
              <li className="inline-flex items-center gap-1">
                <IconTruckDelivery
                  className="text-brown-secondary"
                  stroke={1.6}
                  size={18}
                />
                <span className="font-medium text-xs">
                  Available for delivery
                </span>
              </li>
              <li className="inline-flex items-center gap-1">
                <IconFlame
                  className="text-brown-secondary"
                  stroke={1.6}
                  size={18}
                />
                <span className="font-medium text-xs">21 sold this week</span>
              </li>
            </ul>

            <Checkbox
              id="assembly-without-appointment"
              label="Assembly without appointment"
              checked={false}
              onChange={() => {}}
            />

            <div className="flex flex-1 gap-2">
              <Select
                className="h-full"
                options={wheelQuantityOptionList}
                value="2"
                onChange={() => {}}
              />
              <Button
                className="text-sm py-3 flex-1 rounded hover:opacity-90"
                backgroundColor="brown"
                textColor="white"
              >
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
