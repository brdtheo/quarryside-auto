import { useTranslations } from "next-intl";

import DetailSection from "@/components/DetailSection";
import Table from "@/components/Table";

import useWheelDetails from "@/lib/wheel/hooks/useWheelDetails";

import { WheelSpecificationSectionProps } from ".";

export default function WheelSpecificationSection({
  wheel,
}: WheelSpecificationSectionProps) {
  const t = useTranslations("wheels");

  if (!wheel) {
    return;
  }

  const { brand } = useWheelDetails(wheel);

  return (
    <DetailSection title={t("details.specifications")}>
      <Table
        rows={[
          ...(wheel.brand === "NO_BRAND"
            ? []
            : [
                {
                  name: t("filter.brand.title"),
                  data: brand,
                },
              ]),
          {
            name: t("details.availableSizes.title"),
            data: wheel.sizes ?? "",
          },
          {
            name: t("details.availableTires.title"),
            data: wheel.tires ?? "",
          },
          {
            name: t("availability"),
            data: [
              ...(wheel.is_three_lug
                ? [t("filter.is_three_lug.option.true")]
                : []),
              ...(wheel.is_four_lug
                ? [t("filter.is_four_lug.option.true")]
                : []),
              ...(wheel.is_five_lug
                ? [t("filter.is_five_lug.option.true")]
                : []),
              ...(wheel.is_six_lug ? [t("filter.is_six_lug.option.true")] : []),
              ...(wheel.is_eight_lug
                ? [t("filter.is_eight_lug.option.true")]
                : []),
              ...(wheel.is_ten_lug ? [t("filter.is_ten_lug.option.true")] : []),
              ...(wheel.is_central_lug
                ? [t("filter.is_central_lug.option.true")]
                : []),
            ],
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
