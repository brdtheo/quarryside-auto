import { useTranslations } from "next-intl";

import DetailSection from "@/components/DetailSection";
import Table from "@/components/Table";

import useVehicleDetails from "@/lib/vehicle/hooks/useVehicleDetails";

import { VehicleSpecificationSectionProps } from ".";

export default function VehicleSpecificationSection({
  vehicle,
}: VehicleSpecificationSectionProps) {
  const t = useTranslations("vehicles");

  if (!vehicle) {
    return null;
  }

  const {
    bodyStyle,
    brand,
    country,
    drivetrain,
    engine,
    fuelType,
    mileage,
    transmission,
    weight,
  } = useVehicleDetails(vehicle);

  return (
    <DetailSection title={t("details.specifications")}>
      <Table
        rows={[
          ...(bodyStyle
            ? [
                {
                  name: t("filter.body_style.title"),
                  data: bodyStyle,
                },
              ]
            : []),
          ...(country
            ? [
                {
                  name: t("filter.country.title"),
                  data: country,
                },
              ]
            : []),
          ...(brand
            ? [
                {
                  name: t("filter.brand.title"),
                  data: brand,
                },
              ]
            : []),
          {
            name: t("details.year.title"),
            data: `${vehicle.year}`,
          },
          ...(drivetrain
            ? [
                {
                  name: t("filter.drivetrain.title"),
                  data: drivetrain,
                },
              ]
            : []),
          ...(engine
            ? [
                {
                  name: t("details.engine.title"),
                  data: engine,
                },
              ]
            : []),
          ...(fuelType
            ? [
                {
                  name: t("filter.fuel_type.title"),
                  data: fuelType,
                },
              ]
            : []),
          ...(mileage
            ? [
                {
                  name: t("details.mileage.title"),
                  data: mileage,
                },
              ]
            : []),
          ...(weight
            ? [
                {
                  name: t("details.weight.title"),
                  data: weight,
                },
              ]
            : []),
          ...(transmission
            ? [
                {
                  name: t("filter.transmission.title"),
                  data: transmission,
                },
              ]
            : []),
        ]}
      />
    </DetailSection>
  );
}
