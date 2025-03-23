import Script from "next/script";

import useWheelDetails from "@/lib/wheel/hooks/useWheelDetails";
import { getWheelRichData } from "@/lib/wheel/utils";

import type { WheelRichDataProps } from ".";

export default function WheelRichData({ wheel }: WheelRichDataProps) {
  const thumbnail =
    (wheel.medias ?? []).find((media) => media.is_thumbnail)?.url ?? "";

  const { title, brand, price } = useWheelDetails(wheel);

  return (
    <Script
      data-testid="wheel-rich-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={getWheelRichData({
        brand,
        thumbnail,
        name: title,
        price,
        slug: wheel.slug,
      })}
      id={wheel.slug}
    />
  );
}
