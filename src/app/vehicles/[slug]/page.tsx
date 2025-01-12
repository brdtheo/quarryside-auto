"use client";

import { useMemo } from "react";

import { useParams } from "next/navigation";

import { IconChevronRight } from "@tabler/icons-react";

import currency from "currency.js";

import Button from "@/components/Button";
import Container from "@/components/Container";
import DetailSection from "@/components/DetailSection";
import Table from "@/components/Table";
import TextField from "@/components/TextField";

import ReviewCard from "@/lib/review/ReviewCard";
import VehicleMediaList from "@/lib/vehicle/VehicleMediaList";
import { VEHICLE_LIST, VEHICLE_MEDIA_LIST } from "@/lib/vehicle/data";
import { getVehicleTitle } from "@/lib/vehicle/utils";
import WheelCard from "@/lib/wheel/WheelCard";

export default function Page() {
  const params = useParams<{ slug: string }>();
  const vehicleTitle = getVehicleTitle(params?.slug ?? "");

  const vehicle = VEHICLE_LIST[0];

  const vehiclePrice = useMemo(
    () => currency(vehicle.price_cts, { fromCents: true }).format(),
    [vehicle.price_cts],
  );

  return (
    <Container className="m-auto gap-8 flex flex-col py-8">
      <ul className="inline-flex gap-2 items-center text-sm">
        <li>Used vehicles</li>
        <li>
          <IconChevronRight size={16} />
        </li>
        <li className="text-sm">{vehicleTitle}</li>
      </ul>

      <div className="flex gap-4">
        <div className="w-[785px] flex flex-col gap-16">
          <VehicleMediaList mediaList={VEHICLE_MEDIA_LIST} />

          <div className="flex flex-col gap-2">
            <h1>{vehicleTitle}</h1>
            <span className="font-bold text-2xl">{vehiclePrice}</span>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              magnam doloribus minima totam unde? Dicta nesciunt, soluta
              similique repudiandae perferendis error laudantium nostrum veniam
              ab corporis? Expedita cumque illo laudantium.
            </p>
          </div>

          <DetailSection title="Specifications">
            <Table
              rows={[
                { name: "Brand", data: "ETK" },
                { name: "Exterior color", data: "Beige" },
                { name: "Interior color", data: "Black" },
                { name: "Drivetrain", data: "Rear wheel drive" },
                { name: "Engine", data: "3.2L L6 DOHC" },
                { name: "Fuel type", data: "Gasoline" },
                { name: "Mileage", data: "14,245 miles" },
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

          <DetailSection title="Wheels">
            <WheelCard
              thumbnail_url="https://www.beamng-wheels.org/_next/image?url=https%3A%2F%2Fdiyponmokjdkfdsflogb.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fwheels%2Ffive-lug%2F18_9__etk_xsport_front_wheel.webp&w=256&q=75"
              brand="ETK"
              model="xSport"
              price_cts={24599}
              average_rating={3.5}
            />
          </DetailSection>

          <DetailSection title="Reviews">
            <ul className="flex flex-col gap-4">
              <li>
                <ReviewCard
                  date=""
                  title="I am satisfied"
                  rating={4}
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
              </li>
              <li>
                <ReviewCard
                  date=""
                  title="I am satisfied"
                  rating={4}
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
              </li>
              <li>
                <ReviewCard
                  date=""
                  title="I am satisfied"
                  rating={4}
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
              </li>
            </ul>
          </DetailSection>
        </div>

        <div className="flex flex-1 p-3 bg-white h-fit rounded">
          <div className="bg-background rounded py-8 px-4 flex flex-col gap-6">
            <h2 className="font-semibold text-base">
              Interested? Your new vehicle awaits you
            </h2>

            <div className="grid grid-cols-2 gap-2">
              <TextField
                placeholder="First name"
                value=""
                onChange={() => {}}
              />
              <TextField placeholder="Last name" value="" onChange={() => {}} />
              <TextField placeholder="Email" value="" onChange={() => {}} />
              <TextField placeholder="Phone" value="" onChange={() => {}} />
              <TextField
                className="col-span-2 h-24"
                placeholder="Message"
                isTextArea
                value=""
                onChange={() => {}}
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
          </div>
        </div>
      </div>
    </Container>
  );
}
