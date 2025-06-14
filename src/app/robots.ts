import type { MetadataRoute } from "next";

import { DOMAIN_URL } from "@/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/*?*"],
    },
    sitemap: `${DOMAIN_URL}/sitemap.xml`,
  };
}
