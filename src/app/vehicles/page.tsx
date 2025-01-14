"use server";

import Container from "@/components/Container";
import ListFilterAside from "@/components/ListFilterAside";
import ListFilterHeader from "@/components/ListFilterHeader";
import Pagination from "@/components/Pagination";

import VehicleCard from "@/lib/vehicle/VehicleCard";
import VehicleList from "@/lib/vehicle/VehicleList";
import { vehicleSortOptionList } from "@/lib/vehicle/constants";
import { VEHICLE_LIST } from "@/lib/vehicle/data";
import type { Vehicle } from "@/lib/vehicle/types";

export default async function Page() {
  return (
    <Container className="m-auto gap-8 flex flex-col py-8">
      <h1 className="font-bold text-2xl">Used vehicles</h1>

      <div className="flex gap-8">
        <ListFilterAside />

        <div className="flex flex-1 flex-col">
          <ListFilterHeader
            textSearch="etk 800"
            appliedFilterList={[
              { name: "q", value: "etk 800" },
              { name: "condition", value: "Used" },
            ]}
            sortOptionList={vehicleSortOptionList}
          />
          <VehicleList
            data={VEHICLE_LIST}
            itemRender={(vehicle: Vehicle) => (
              <li key={vehicle.id}>
                <VehicleCard
                  condition={vehicle.condition}
                  thumbnail_url={vehicle.thumbnail_url}
                  year={vehicle.year}
                  brand={vehicle.brand}
                  model={vehicle.model}
                  price_cts={vehicle.price_cts}
                  miles={vehicle.miles}
                  average_rating={vehicle.average_rating}
                />
              </li>
            )}
          />
        </div>
      </div>

      <Pagination page={1} pageCount={5} onPageChange={() => {}} />
    </Container>
  );
}
