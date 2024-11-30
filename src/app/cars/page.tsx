"use client";

import Container from "@/components/Container";
import ListFilterAside from "@/components/ListFilterAside";
import ListFilterHeader from "@/components/ListFilterHeader";
import Pagination from "@/components/Pagination";

import CarCard from "@/cars/CarCard";
import CarList from "@/cars/CarList";
import type { Car } from "@/cars/types";

import { carSortOptionList } from "./constants";
import { CAR_LIST, CAR_LIST_FILTER_SECTION } from "./data";

export default function Page() {
  return (
    <Container className="m-auto gap-8 flex flex-col py-8">
      <h1 className="font-bold text-2xl">Used cars</h1>

      <div className="flex gap-8">
        <ListFilterAside sections={CAR_LIST_FILTER_SECTION} />

        <div className="flex flex-1 flex-col">
          <ListFilterHeader
            textSearch="etk 800"
            appliedFilterList={[
              { name: "q", value: "etk 800" },
              { name: "condition", value: "Used" },
            ]}
            sortOptionList={carSortOptionList}
          />
          <CarList
            data={CAR_LIST}
            itemRender={(car: Car) => (
              <li key={car.id}>
                <CarCard
                  condition={car.condition}
                  thumbnail_url={car.thumbnail_url}
                  year={car.year}
                  brand={car.brand}
                  model={car.model}
                  price_cts={car.price_cts}
                  miles={car.miles}
                  average_rating={car.average_rating}
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
