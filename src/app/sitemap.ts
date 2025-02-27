import type { MetadataRoute } from "next";

import { prisma } from "@/lib/prisma";

import { DOMAIN_URL } from "@/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const vehicles = await prisma.vehicle.findMany({ select: { slug: true } });
  const wheels = await prisma.wheel.findMany({ select: { slug: true } });

  const vehiclesMapped = vehicles.map((vehicle) => ({
    url: `${DOMAIN_URL}/vehicles/${vehicle.slug}`,
    alternates: {
      languages: {
        en: `${DOMAIN_URL}/en/vehicles/${vehicle.slug}`,
        ru: `${DOMAIN_URL}/ru/vehicles/${vehicle.slug}`,
      },
    },
    lastModified: new Date(),
    priority: 0.8,
  }));
  const wheelsMapped = wheels.map((wheel) => ({
    url: `${DOMAIN_URL}/wheels/${wheel.slug}`,
    alternates: {
      languages: {
        en: `${DOMAIN_URL}/en/wheels/${wheel.slug}`,
        ru: `${DOMAIN_URL}/ru/wheels/${wheel.slug}`,
      },
    },
    lastModified: new Date(),
    priority: 0.8,
  }));

  return [
    {
      url: DOMAIN_URL,
      lastModified: new Date(),
      priority: 1,
      alternates: {
        languages: {
          en: `${DOMAIN_URL}/en`,
          ru: `${DOMAIN_URL}/ru`,
        },
      },
    },
    {
      url: `${DOMAIN_URL}/vehicles`,
      lastModified: new Date(),
      priority: 1,
      alternates: {
        languages: {
          en: `${DOMAIN_URL}/en/vehicles`,
          ru: `${DOMAIN_URL}/ru/vehicles`,
        },
      },
    },
    {
      url: `${DOMAIN_URL}/wheels`,
      lastModified: new Date(),
      priority: 1,
      alternates: {
        languages: {
          en: `${DOMAIN_URL}/en/wheels`,
          ru: `${DOMAIN_URL}/ru/wheels`,
        },
      },
    },
    ...vehiclesMapped,
    ...wheelsMapped,
  ];
}
