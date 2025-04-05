"use client";

import { useTranslations } from "next-intl";

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

import useQueryParamValues from "@/hooks/useQueryParamValues";
import useQueryParamLink from "@/hooks/useQueryParamLink";

import { PageSearchParams } from "@/types";

export default function VehicleListFilterAside({
  searchParams,
  className,
}: {
  className?: string;
  searchParams: PageSearchParams;
}) {
  const t = useTranslations("vehicles");

  const getQueryParamLink = useQueryParamLink(searchParams);

  const vehicleListFilterSections: ListFilterAsideSectionProps[] = [
    {
      title: t("filter.condition.title"),
      options: Object.values(VehicleCondition).map((condition) => ({
        label: t(`filter.condition.option.${condition}`),
        value: condition,
        isChecked: (searchParams?.condition ?? "").includes(condition),
        href: getQueryParamLink("condition", `${condition}`, true),
      })),
      isSearchable: false,
      selectedOptionCount: useQueryParamValues("condition", true),
    },
    {
      title: t("filter.brand.title"),
      options: Object.values(VehicleBrand).map((brand) => ({
        label: t(`filter.brand.option.${brand}`),
        value: brand.toLowerCase(),
        isChecked: (searchParams?.brand ?? "").includes(brand),
        href: getQueryParamLink("brand", `${brand}`, true),
      })),
      isSearchable: true,
      selectedOptionCount: useQueryParamValues("brand", true),
    },
    {
      title: t("filter.body_style.title"),
      options: Object.values(VehicleBodyStyle).map((bodyStyle) => ({
        label: t(`filter.body_style.option.${bodyStyle}`),
        value: bodyStyle.toLowerCase(),
        isChecked: (searchParams?.body_style ?? "").includes(bodyStyle),
        href: getQueryParamLink("body_style", `${bodyStyle}`, true),
      })),
      isSearchable: true,
      selectedOptionCount: useQueryParamValues("body_style", true),
    },
    {
      title: t("filter.fuel_type.title"),
      options: Object.values(VehicleFuelType).map((fuelType) => ({
        label: t(`filter.fuel_type.option.${fuelType}`),
        value: fuelType.toLowerCase(),
        isChecked: (searchParams?.fuel_type ?? "").includes(fuelType),
        href: getQueryParamLink("fuel_type", `${fuelType}`, true),
      })),
      isSearchable: false,
      selectedOptionCount: useQueryParamValues("fuel_type", true),
    },
    {
      title: t("filter.engine_cylinder_count.title"),
      options: [
        {
          label: t("filter.engine_cylinder_count.option.3"),
          value: "3",
          isChecked: (searchParams?.engine_cylinder_count ?? "").includes("3"),
          href: getQueryParamLink(
            "engine_cylinder_count",
            "3",
            true,
          ),
        },
        {
          label: t("filter.engine_cylinder_count.option.4"),
          value: "4",
          isChecked: (searchParams?.engine_cylinder_count ?? "").includes("4"),
          href: getQueryParamLink(
            "engine_cylinder_count",
            "4",
            true,
          ),
        },
        {
          label: t("filter.engine_cylinder_count.option.5"),
          value: "5",
          isChecked: (searchParams?.engine_cylinder_count ?? "").includes("5"),
          href: getQueryParamLink(
            "engine_cylinder_count",
            "5",
            true,
          ),
        },
        {
          label: t("filter.engine_cylinder_count.option.6"),
          value: "6",
          isChecked: (searchParams?.engine_cylinder_count ?? "").includes("6"),
          href: getQueryParamLink(
            "engine_cylinder_count",
            "6",
            true,
          ),
        },
        {
          label: t("filter.engine_cylinder_count.option.8"),
          value: "8",
          isChecked: (searchParams?.engine_cylinder_count ?? "").includes("8"),
          href: getQueryParamLink(
            "engine_cylinder_count",
            "8",
            true,
          ),
        },
        {
          label: t("filter.engine_cylinder_count.option.10"),
          value: "10",
          isChecked: (searchParams?.engine_cylinder_count ?? "").includes("10"),
          href: getQueryParamLink(
            "engine_cylinder_count",
            "10",
            true,
          ),
        },
      ],
      isSearchable: true,
      selectedOptionCount: useQueryParamValues("engine_cylinder_count", true),
    },
    {
      title: t("filter.transmission.title"),
      options: Object.values(VehicleTransmission).map((transmission) => ({
        label: t(`filter.transmission.option.${transmission}`),
        value: transmission.toLowerCase(),
        isChecked: (searchParams?.transmission ?? "").includes(transmission),
        href: getQueryParamLink(
          "transmission",
          `${transmission}`,
          true,
        ),
      })),
      isSearchable: true,
      selectedOptionCount: useQueryParamValues("transmission", true),
    },
    {
      title: t("filter.drivetrain.title"),
      options: Object.values(VehicleDrivetrain).map((drivetrain) => ({
        label: t(`filter.drivetrain.option.${drivetrain}`),
        value: drivetrain.toLowerCase(),
        isChecked: (searchParams?.drivetrain ?? "").includes(drivetrain),
        href: getQueryParamLink("drivetrain", `${drivetrain}`, true),
      })),
      isSearchable: true,
      selectedOptionCount: useQueryParamValues("drivetrain", true),
    },
    {
      title: t("filter.country.title"),
      options: Object.values(VehicleCountry).map((country) => ({
        label: t(`filter.country.option.${country}`),
        value: country.toLowerCase(),
        isChecked: (searchParams?.country ?? "").includes(country),
        href: getQueryParamLink("country", `${country}`, true),
      })),
      isSearchable: true,
      selectedOptionCount: useQueryParamValues("country", true),
    },
  ];

  return (
    <ListFilterAside
      className={className}
      nameSpace="vehicles"
      sections={vehicleListFilterSections}
      searchParams={searchParams}
    />
  );
}
