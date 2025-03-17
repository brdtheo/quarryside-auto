import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import BenefitList from "@/components/BenefitList";
import ClientFeedbackList from "@/components/ClientFeedbackList";
import Container from "@/components/Container";
import HomeHero from "@/components/HomeHero";
import PopularModelsList from "@/components/PopularModelsList";

import BlogPostList from "@/lib/blog/BlogPostList/BlogPostList";
import { prisma } from "@/lib/prisma";
import { VehicleWithMedias } from "@/lib/vehicle/types";

import { getHomeFindManyArgs } from "@/utils";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("home");
  return {
    title: t("meta.title"),
    description: t("meta.description"),
    alternates: {
      canonical: "/en",
      languages: {
        ru: "/ru",
      },
    },
  };
}

export default async function Page() {
  const popularVehicles = await prisma.vehicle.findMany(getHomeFindManyArgs());
  return (
    <>
      <HomeHero />
      <Container className="m-auto flex flex-col gap-16 pt-6 pb-8 @container/homecontainer">
        <BenefitList />
        <PopularModelsList vehicles={popularVehicles as VehicleWithMedias[]} />
        <ClientFeedbackList />
        <BlogPostList />
      </Container>
    </>
  );
}
