import Script from "next/script";

import { getWheelRichData } from "@/lib/wheel/utils";

import type { WheelRichDataProps } from ".";

export default function WheelRichData({
  brand,
  medias,
  name,
  price,
  slug,
}: WheelRichDataProps) {
  const thumbnail =
    (medias ?? []).find((media) => media.is_thumbnail)?.url ?? "";

  return (
    <Script
      data-testid="wheel-rich-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={getWheelRichData({
        brand,
        thumbnail,
        name,
        price,
        slug,
      })}
      id={slug}
    />
  );
}
