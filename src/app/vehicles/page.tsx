import { Vehicle } from "@prisma/client";

import Container from "@/components/Container";
import ListFilterAside from "@/components/ListFilterAside";
import ListFilterHeader from "@/components/ListFilterHeader";
import Pagination from "@/components/Pagination";

import { prisma } from "@/lib/prisma";
import VehicleCard from "@/lib/vehicle/VehicleCard";
import VehicleList from "@/lib/vehicle/VehicleList";
import { vehicleSortOptionList } from "@/lib/vehicle/constants";

export default async function Page() {
  const vehicles = await prisma.vehicle.findMany({ take: 15 });

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

      <Pagination page={1} pageCount={5} onPageChange={() => {}} />
    </Container>
  );
}
