"use client";

import useTranslation from "next-translate/useTranslation";

import {
  VehicleBodyStyle,
  VehicleBrand,
  VehicleCondition,
  VehicleCountry,
  VehicleDrivetrain,
  VehicleFuelType,
  VehicleTransmission,
} from "@prisma/client";

import ListFilterAside from "@/components/ListFilterAside";
import { ListFilterAsideSectionProps } from "@/components/ListFilterAsideSection";

import useURLSearchParams from "@/hooks/useURLSearchParams";
import { PageSearchParams } from "@/types";

export default function VehicleListFilterAside({
  searchParams,
}: {
  searchParams: PageSearchParams;
}) {
  const { t } = useTranslation("vehicles");

  const { getUpdatedURLFromSearchParam, getSearchParamValueCount } =
    useURLSearchParams(searchParams);

  const vehicleListFilterSections: ListFilterAsideSectionProps[] = [
    {
      title: t("filter.condition.title"),
      options: Object.values(VehicleCondition).map((condition) => ({
        label: t(`filter.condition.option.${condition}`),
        value: condition,
        isChecked: (searchParams?.condition ?? "").includes(condition),
        href: getUpdatedURLFromSearchParam("condition", `${condition}`, true),
      })),
      isSearchable: false,
      selectedOptionCount: getSearchParamValueCount("condition"),
    },
    {
      title: t("filter.brand.title"),
      options: Object.values(VehicleBrand).map((brand) => ({
        label: t(`filter.brand.option.${brand}`),
        value: brand.toLowerCase(),
        isChecked: (searchParams?.brand ?? "").includes(brand),
        href: getUpdatedURLFromSearchParam("brand", `${brand}`, true),
      })),
      isSearchable: true,
      selectedOptionCount: getSearchParamValueCount("brand"),
    },
    {
      title: t("filter.body_style.title"),
      options: Object.values(VehicleBodyStyle).map((bodyStyle) => ({
        label: t(`filter.body_style.option.${bodyStyle}`),
        value: bodyStyle.toLowerCase(),
        isChecked: (searchParams?.body_style ?? "").includes(bodyStyle),
        href: getUpdatedURLFromSearchParam("body_style", `${bodyStyle}`, true),
      })),
      isSearchable: true,
      selectedOptionCount: getSearchParamValueCount("body_style"),
    },
    {
      title: t("filter.fuel_type.title"),
      options: Object.values(VehicleFuelType).map((fuelType) => ({
        label: t(`filter.fuel_type.option.${fuelType}`),
        value: fuelType.toLowerCase(),
        isChecked: (searchParams?.fuel_type ?? "").includes(fuelType),
        href: getUpdatedURLFromSearchParam("fuel_type", `${fuelType}`, true),
      })),
      isSearchable: false,
      selectedOptionCount: getSearchParamValueCount("fuel_type"),
    },
    {
      title: t("filter.engine_cylinder_count.title"),
      options: [
        {
          label: t("filter.engine_cylinder_count.option", { count: 3 }),
          value: "3",
          isChecked: (searchParams?.engine_cylinder_count ?? "").includes("3"),
          href: getUpdatedURLFromSearchParam(
            "engine_cylinder_count",
            "3",
            true,
          ),
        },
        {
          label: t("filter.engine_cylinder_count.option", { count: 4 }),
          value: "4",
          isChecked: (searchParams?.engine_cylinder_count ?? "").includes("4"),
          href: getUpdatedURLFromSearchParam(
            "engine_cylinder_count",
            "4",
            true,
          ),
        },
        {
          label: t("filter.engine_cylinder_count.option", { count: 5 }),
          value: "5",
          isChecked: (searchParams?.engine_cylinder_count ?? "").includes("5"),
          href: getUpdatedURLFromSearchParam(
            "engine_cylinder_count",
            "5",
            true,
          ),
        },
        {
          label: t("filter.engine_cylinder_count.option", { count: 6 }),
          value: "6",
          isChecked: (searchParams?.engine_cylinder_count ?? "").includes("6"),
          href: getUpdatedURLFromSearchParam(
            "engine_cylinder_count",
            "6",
            true,
          ),
        },
        {
          label: t("filter.engine_cylinder_count.option", { count: 8 }),
          value: "8",
          isChecked: (searchParams?.engine_cylinder_count ?? "").includes("8"),
          href: getUpdatedURLFromSearchParam(
            "engine_cylinder_count",
            "8",
            true,
          ),
        },
        {
          label: t("filter.engine_cylinder_count.option", { count: 10 }),
          value: "10",
          isChecked: (searchParams?.engine_cylinder_count ?? "").includes("10"),
          href: getUpdatedURLFromSearchParam(
            "engine_cylinder_count",
            "10",
            true,
          ),
        },
      ],
      isSearchable: true,
      selectedOptionCount: getSearchParamValueCount("engine_cylinder_count"),
    },
    {
      title: t("filter.transmission.title"),
      options: Object.values(VehicleTransmission).map((transmission) => ({
        label: t(`filter.transmission.option.${transmission}`),
        value: transmission.toLowerCase(),
        isChecked: (searchParams?.transmission ?? "").includes(transmission),
        href: getUpdatedURLFromSearchParam(
          "transmission",
          `${transmission}`,
          true,
        ),
      })),
      isSearchable: true,
      selectedOptionCount: getSearchParamValueCount("transmission"),
    },
    {
      title: t("filter.drivetrain.title"),
      options: Object.values(VehicleDrivetrain).map((drivetrain) => ({
        label: t(`filter.drivetrain.option.${drivetrain}`),
        value: drivetrain.toLowerCase(),
        isChecked: (searchParams?.drivetrain ?? "").includes(drivetrain),
        href: getUpdatedURLFromSearchParam("drivetrain", `${drivetrain}`, true),
      })),
      isSearchable: true,
      selectedOptionCount: getSearchParamValueCount("drivetrain"),
    },
    {
      title: t("filter.country.title"),
      options: Object.values(VehicleCountry).map((country) => ({
        label: t(`filter.country.option.${country}`),
        value: country.toLowerCase(),
        isChecked: (searchParams?.country ?? "").includes(country),
        href: getUpdatedURLFromSearchParam("country", `${country}`, true),
      })),
      isSearchable: true,
      selectedOptionCount: getSearchParamValueCount("country"),
    },
  ];

  return (
    <ListFilterAside
      nameSpace="vehicles"
      sections={vehicleListFilterSections}
      searchParams={searchParams}
    />
  );
}
