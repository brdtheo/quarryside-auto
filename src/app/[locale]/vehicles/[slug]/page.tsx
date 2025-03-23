import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import NotFound from "@/app/[locale]/not-found";

import Advertising from "@/components/Advertising";
import Container from "@/components/Container";

import { prisma } from "@/lib/prisma";
import VehicleForm from "@/lib/vehicle/VehicleForm";
import VehicleMediaList from "@/lib/vehicle/VehicleMediaList";
import VehiclePageTitle from "@/lib/vehicle/VehiclePageTitle";
import VehiclePerformanceSection from "@/lib/vehicle/VehiclePerformanceSection";
import VehiclePriceDescription from "@/lib/vehicle/VehiclePriceDescription";
import VehicleRelatedWheelsSection from "@/lib/vehicle/VehicleRelatedWheelsSection";
import VehicleRichData from "@/lib/vehicle/VehicleRichData";
import VehicleSpecificationSection from "@/lib/vehicle/VehicleSpecificationSection";
import { VehicleWithMedias } from "@/lib/vehicle/types";

import { DOMAIN_URL } from "@/constants";

import type { DetailsPageProps } from "@/types";

export async function generateMetadata({
  params,
}: DetailsPageProps): Promise<Metadata> {
  const slug = (await params)?.slug ?? "";

  const t = await getTranslations("vehicles");

  const vehicle = (await prisma.vehicle.findUnique({
    where: { slug: slug ?? "" },
    include: { medias: { where: { is_thumbnail: true } } },
  })) as VehicleWithMedias;

  if (!vehicle) return {};

  const titleWithoutYear =
    vehicle.brand && vehicle.model
      ? [t(`filter.brand.option.${vehicle.brand}`), vehicle.model].join(" ")
      : "";

  const thumbnail =
    (vehicle.medias ?? []).find((media) => media.is_thumbnail)?.url ?? "";

  return {
    title: t("details.meta.title", { vehicle: titleWithoutYear }),
    description: t("details.meta.description", {
      description: vehicle.description ?? "",
    }),
    openGraph: {
      title: t("details.meta.title", { vehicle: titleWithoutYear }),
      description: t("details.meta.description", {
        description: vehicle.description ?? "",
      }),
      siteName: "Quarryside Auto",
      images: {
        url: thumbnail,
        alt: titleWithoutYear,
        width: 1562,
        height: 878,
      },
    },
    twitter: {
      card: "summary_large_image",
      title: t("details.meta.title", { vehicle: titleWithoutYear }),
      description: t("details.meta.description", {
        description: vehicle.description ?? "",
      }),
      images: {
        url: thumbnail,
        alt: titleWithoutYear,
        width: 1562,
        height: 878,
      },
    },
    alternates: {
      canonical: `${DOMAIN_URL}/vehicles/${vehicle.slug}`,
      languages: {
        "ru-RU": `${DOMAIN_URL}/ru/vehicles/${vehicle.slug}`,
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

  return (
    <Container className="m-auto gap-8 flex flex-col pt-6 pb-8">
      <VehiclePageTitle vehicle={vehicle} />

      <div className="flex flex-col xl:flex-row gap-8">
        <div className="w-full xl:w-[785px] flex flex-col gap-16 @container/detailsrightcolumn">
          <VehicleMediaList vehicle={vehicle} />

          <VehiclePriceDescription vehicle={vehicle} />
          <VehicleSpecificationSection vehicle={vehicle} />
          <VehiclePerformanceSection vehicle={vehicle} />
          <VehicleRelatedWheelsSection wheels={vehicle.vehicles_wheels} />
        </div>

        <div className="flex flex-1 flex-col p-3 bg-white dark:bg-blacksecondary h-fit rounded @container/vehicleform">
          <VehicleForm />
          <Advertising className="mt-4" ratioMode="horizontal" />
        </div>
      </div>

      <VehicleRichData vehicle={vehicle} />
    </Container>
  );
}
