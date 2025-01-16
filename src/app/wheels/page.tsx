import { Wheel } from "@prisma/client";

import Container from "@/components/Container";
import ListFilterAside from "@/components/ListFilterAside";
import ListFilterHeader from "@/components/ListFilterHeader";
import Pagination from "@/components/Pagination";

import { prisma } from "@/lib/prisma";
import WheelCard from "@/lib/wheel/WheelCard";
import WheelList from "@/lib/wheel/WheelList";
import { wheelSortOptionList } from "@/lib/wheel/constants";

export default async function Page() {
  const wheels = await prisma.wheel.findMany({ take: 30 });

  return (
    <Container className="m-auto gap-8 flex flex-col py-8">
      <h1 className="font-bold text-2xl">Rims & tires</h1>

      <div className="flex gap-8">
        <ListFilterAside />

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
            className="auto-cols-min grid-flow-col"
            data={wheels}
            itemRender={(wheel: Wheel) => (
              <li key={wheel.id}>
                <WheelCard
                  slug={wheel.slug}
                  thumbnailUrl={wheel.thumbnail_url ?? ""}
                  brand={wheel.brand}
                  model={wheel.model}
                  priceCts={wheel.price_cts}
                  averageRating={null}
                  isDeliveryAvailable={wheel.delivery_available}
                  isOnsitePickupFree={wheel.free_on_site_pickup}
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
