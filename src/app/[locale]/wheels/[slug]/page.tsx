import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import NotFound from "@/app/[locale]/not-found";

import Advertising from "@/components/Advertising";
import Container from "@/components/Container";
import PageTitle from "@/components/PageTitle";

import MediaList from "@/lib/media/MediaList";
import { prisma } from "@/lib/prisma";
import WheelForm from "@/lib/wheel/WheelForm";
import WheelRelatedVehiclesSection from "@/lib/wheel/WheelRelatedVehiclesSection";
import WheelRichData from "@/lib/wheel/WheelRichData";
import WheelSpecificationSection from "@/lib/wheel/WheelSpecificationSection";
import useWheelDetails from "@/lib/wheel/hooks/useWheelDetails";

import { DOMAIN_URL } from "@/constants";

import type { DetailsPageProps } from "@/types";

export async function generateMetadata({
  params,
}: DetailsPageProps): Promise<Metadata> {
  const t = await getTranslations("wheels");
  const slug = (await params)?.slug ?? "";

  const wheel = await prisma.wheel.findUnique({
    where: { slug: slug ?? "" },
    include: { medias: { where: { is_thumbnail: true } } },
  });

  if (!wheel) {
    return {
      title: "Quarryside Auto",
    };
  }

  const { title } = await useWheelDetails(wheel);

  return {
    title: t("details.meta.title", { wheel: title }),
    description: t("details.meta.description", { wheel: title }),
    openGraph: {
      title: t("details.meta.title", { wheel: title }),
      description: t("details.meta.description", { wheel: title }),
      siteName: "Quarryside Auto",
      images: {
        url: wheel?.medias?.[0]?.url,
        alt: title,
        width: 1562,
        height: 878,
      },
    },
    twitter: {
      card: "summary_large_image",
      title: t("details.meta.title", { wheel: title }),
      description: t("details.meta.description", { wheel: title }),
      images: {
        url: wheel?.medias?.[0]?.url,
        alt: title,
        width: 1562,
        height: 878,
      },
    },
    alternates: {
      canonical: `${DOMAIN_URL}/wheels/${wheel.slug}`,
      languages: {
        "ru-RU": `${DOMAIN_URL}/ru/wheels/${wheel.slug}`,
      },
    },
  };
}

export default async function Page({ params }: DetailsPageProps) {
  const slug = (await params)?.slug ?? "";

  const wheel = await prisma.wheel.findUnique({
    where: { slug: slug ?? "" },
    include: {
      vehicles_wheels: {
        select: {
          vehicles: {
            include: {
              medias: { where: { is_thumbnail: true } },
            },
          },
        },
      },
      medias: true,
    },
  });

  if (!wheel) {
    return <NotFound />;
  }

  const { title, price, brand } = await useWheelDetails(wheel);

  return (
    <Container className="m-auto gap-8 flex flex-col pt-6 pb-8">
      <PageTitle>{title}</PageTitle>
      <div className="flex flex-col xl:flex-row gap-4">
        <div className="w-full xl:w-[785px] flex flex-col gap-16">
          <MediaList mediaList={wheel.medias} alt={title} />

          <WheelSpecificationSection wheel={wheel} />
          <WheelRelatedVehiclesSection vehicles={wheel.vehicles_wheels} />
        </div>

        <div className="flex flex-1 flex-col p-3 bg-white dark:bg-blacksecondary h-fit rounded @container/wheelform">
          <WheelForm
            price={price}
            isDeliveryAvailable={wheel.delivery_available}
            isFreeOnSitePickup={wheel.free_on_site_pickup}
          />
          <Advertising className="mt-4" ratioMode="horizontal" />
        </div>
      </div>

      <WheelRichData
        brand={brand}
        medias={wheel.medias}
        name={title}
        price={price}
        slug={slug}
      />
    </Container>
  );
}
