"use client";

import Container from "@/components/Container";
import ListFilterAside from "@/components/ListFilterAside";
import ListFilterHeader from "@/components/ListFilterHeader";
import Pagination from "@/components/Pagination";

import WheelCard from "@/rims-tires/WheelCard";
import { Wheel } from "@/rims-tires/types";

import WheelList from "./WheelList";
import { wheelSortOptionList } from "./constants";
import { WHEEL_LIST, WHEEL_LIST_FILTER_SECTION } from "./data";

export default function Page() {
  return (
    <Container className="m-auto gap-8 flex flex-col py-8">
      <h1 className="font-bold text-2xl">Rims & tires</h1>

      <div className="flex gap-8">
        <ListFilterAside sections={WHEEL_LIST_FILTER_SECTION} />

        <div className="flex flex-1 flex-col">
          <ListFilterHeader
            textSearch="type f"
            appliedFilterList={[
              { name: "q", value: "type f" },
              { name: "is_four_lug", value: "4 lug" },
              { name: "is_five_lug", value: "5 lug" },
            ]}
            sortOptionList={wheelSortOptionList}
          />

          <WheelList
            data={WHEEL_LIST}
            itemRender={(wheel: Wheel) => (
              <li key={wheel.id}>
                <WheelCard
                  thumbnail_url={wheel.thumbnail_url}
                  brand={wheel.brand}
                  model={wheel.model}
                  price_cts={wheel.price_cts}
                  average_rating={wheel.average_rating}
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
