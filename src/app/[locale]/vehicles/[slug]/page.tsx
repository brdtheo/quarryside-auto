import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import NotFound from "@/app/[locale]/not-found";

import Advertising from "@/components/Advertising";
import Container from "@/components/Container";
import PageTitle from "@/components/PageTitle";

import MediaList from "@/lib/media/MediaList";
import { prisma } from "@/lib/prisma";
import VehicleForm from "@/lib/vehicle/VehicleForm";
import VehiclePerformanceSection from "@/lib/vehicle/VehiclePerformanceSection";
import VehicleRelatedWheelsSection from "@/lib/vehicle/VehicleRelatedWheelsSection";
import VehicleRichData from "@/lib/vehicle/VehicleRichData";
import VehicleSpecificationSection from "@/lib/vehicle/VehicleSpecificationSection";
import useVehicleDetails from "@/lib/vehicle/hooks/useVehicleDetails";

import type { DetailsPageProps } from "@/types";

export async function generateMetadata({
  params,
}: DetailsPageProps): Promise<Metadata> {
  const t = await getTranslations("vehicles");
  const slug = (await params)?.slug ?? "";

  const vehicle = await prisma.vehicle.findUnique({
    where: { slug: slug ?? "" },
    include: { medias: { where: { is_thumbnail: true } } },
  });

  if (!vehicle) {
    return {
      title: "Quarryside Auto",
    };
  }

  const { titleWithoutYear } = await useVehicleDetails(vehicle);

  return {
    title: t("details.meta.title", { vehicle: titleWithoutYear }),
    description: vehicle.description,
    openGraph: {
      title: t("details.meta.title", { vehicle: titleWithoutYear }),
      description: vehicle.description ?? undefined,
      siteName: "Quarryside Auto",
      images: {
        url: vehicle?.medias?.[0]?.url,
        alt: titleWithoutYear,
        width: 1562,
        height: 878,
      },
    },
    twitter: {
      card: "summary_large_image",
      title: t("details.meta.title", { vehicle: titleWithoutYear }),
      description: vehicle.description ?? undefined,
      images: {
        url: vehicle?.medias?.[0]?.url,
        alt: titleWithoutYear,
        width: 1562,
        height: 878,
      },
    },
  };
}

export default async function Page({ params }: DetailsPageProps) {
  const slug = (await params)?.slug ?? "";

  const vehicle = await prisma.vehicle.findUnique({
    where: { slug: slug ?? "" },
    include: {
      vehicles_wheels: {
        select: {
          wheels: {
            include: {
              medias: { where: { is_thumbnail: true } },
            },
          },
        },
      },
      medias: true,
    },
  });

  if (!vehicle) {
    return <NotFound />;
  }

  const { titleWithoutYear, price, priceWithoutCurrency, brand } =
    await useVehicleDetails(vehicle);

  return (
    <Container className="m-auto gap-8 flex flex-col pt-6 pb-8">
      <PageTitle>{titleWithoutYear}</PageTitle>
      <div className="flex flex-col xl:flex-row gap-8">
        <div className="w-full xl:w-[785px] flex flex-col gap-16 @container/detailsrightcolumn">
          <MediaList mediaList={vehicle.medias} alt={titleWithoutYear} />

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
          <Advertising className="mt-4" ratioMode="horizontal" />
        </div>
      </div>

      <VehicleRichData
        description={vehicle.description ?? ""}
        brand={brand}
        medias={vehicle.medias}
        name={titleWithoutYear}
        price={priceWithoutCurrency ?? ""}
        slug={slug}
      />
    </Container>
  );
}
