import { getTranslations } from "next-intl/server";

import DetailSection from "@/components/DetailSection";
import Table from "@/components/Table";

import useWheelDetails from "@/lib/wheel/hooks/useWheelDetails";

import { WheelSpecificationSectionProps } from ".";

export default async function WheelSpecificationSection({
  wheel,
}: WheelSpecificationSectionProps) {
  const t = await getTranslations("wheels");

  const { brand } = await useWheelDetails(wheel);

  return (
    <DetailSection title={t("details.specifications")}>
      <Table
        rows={[
          ...(wheel.brand !== "NO_BRAND"
            ? [
                {
                  name: t("filter.brand.title"),
                  data: brand,
                },
              ]
            : []),
          {
            name: t("details.availableSizes.title"),
            data: wheel.sizes ?? "",
          },
          {
            name: t("details.availableTires.title"),
            data: wheel.tires ?? "",
          },
          {
            name: t("details.consumption.title"),
            data: wheel.consumption ?? "",
          },
        ]}
      />
    </DetailSection>
  );
}
