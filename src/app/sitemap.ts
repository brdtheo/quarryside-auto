import type { MetadataRoute } from "next";

import { prisma } from "@/lib/prisma";

import { DOMAIN_URL } from "@/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const vehicles = await prisma.vehicle.findMany({
    include: { medias: true },
  });
  const wheels = await prisma.wheel.findMany({ include: { medias: true } });

  const vehiclesMapped = vehicles.map((vehicle) => ({
    url: `${DOMAIN_URL}/en/vehicles/${vehicle.slug}`,
    alternates: {
      languages: {
        ru: `${DOMAIN_URL}/ru/vehicles/${vehicle.slug}`,
      },
    },
    lastModified: new Date(),
    images: (vehicle.medias ?? []).map((media) => media.url),
    priority: 1,
  }));
  const wheelsMapped = wheels.map((wheel) => ({
    url: `${DOMAIN_URL}/en/wheels/${wheel.slug}`,
    alternates: {
      languages: {
        ru: `${DOMAIN_URL}/ru/wheels/${wheel.slug}`,
      },
    },
    lastModified: new Date(),
    images: (wheel.medias ?? []).map((media) => media.url),
    priority: 1,
  }));

  return [
    {
      url: `${DOMAIN_URL}/en`,
      lastModified: new Date(),
      priority: 1,
      alternates: {
        languages: {
          ru: `${DOMAIN_URL}/ru`,
        },
      },
    },
    {
      url: `${DOMAIN_URL}/en/vehicles`,
      lastModified: new Date(),
      priority: 1,
      alternates: {
        languages: {
          ru: `${DOMAIN_URL}/ru/vehicles`,
        },
      },
    },
    {
      url: `${DOMAIN_URL}/en/wheels`,
      lastModified: new Date(),
      priority: 1,
      alternates: {
        languages: {
          ru: `${DOMAIN_URL}/ru/wheels`,
        },
      },
    },
    ...vehiclesMapped,
    ...wheelsMapped,
  ];
}
