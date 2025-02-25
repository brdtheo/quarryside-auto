import NotFound from "@/app/[locale]/not-found";

import Advertising from "@/components/Advertising";
import Container from "@/components/Container";
import PageTitle from "@/components/PageTitle";

import MediaList from "@/lib/media/MediaList";
import { prisma } from "@/lib/prisma";
import VehicleForm from "@/lib/vehicle/VehicleForm";
import VehiclePerformanceSection from "@/lib/vehicle/VehiclePerformanceSection";
import VehicleRelatedWheelsSection from "@/lib/vehicle/VehicleRelatedWheelsSection";
import VehicleSpecificationSection from "@/lib/vehicle/VehicleSpecificationSection";
import useVehicleDetails from "@/lib/vehicle/hooks/useVehicleDetails";

import type { DetailsPageProps } from "@/types";

export default async function Page({ params }: DetailsPageProps) {
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

  if (!vehicle) {
    return <NotFound />;
  }

  const { titleWithoutYear, price } = await useVehicleDetails(vehicle);

  return (
    <Container className="m-auto gap-8 flex flex-col pt-6 pb-8">
      <PageTitle>{titleWithoutYear}</PageTitle>
      <div className="flex flex-col xl:flex-row gap-8">
        <div className="w-full xl:w-[785px] flex flex-col gap-16">
          <MediaList mediaList={vehicle.medias} />

          <div className="flex flex-col gap-2">
            <span className="font-bold text-2xl">{price}</span>
            <p className="text-sm">{vehicle.description}</p>
          </div>
          <VehicleSpecificationSection vehicle={vehicle} />
          <VehiclePerformanceSection vehicle={vehicle} />
          <VehicleRelatedWheelsSection wheels={vehicle.vehicles_wheels} />
        </div>

        <div className="flex flex-1 flex-col p-3 bg-white dark:bg-blacksecondary h-fit rounded @container/vehicleform">
          <VehicleForm />
          <Advertising className="m-4 mx-auto" ratioMode="horizontal" />
        </div>
      </div>
    </Container>
  );
}
