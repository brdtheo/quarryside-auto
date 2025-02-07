"use client";

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
  const { getUpdatedURLFromSearchParam, getSearchParamValueCount } =
    useURLSearchParams(searchParams);

  const vehicleListFilterSections: ListFilterAsideSectionProps[] = [
    {
      title: "Condition",
      options: Object.values(VehicleCondition).map((condition) => ({
        label: condition,
        value: condition,
        isChecked: (searchParams?.condition ?? "").includes(condition),
        href: getUpdatedURLFromSearchParam("condition", `${condition}`, true),
      })),
      isSearchable: false,
      selectedOptionCount: getSearchParamValueCount("condition"),
    },
    {
      title: "Brand",
      options: Object.values(VehicleBrand).map((brand) => ({
        label: brand,
        value: brand.toLowerCase(),
        isChecked: (searchParams?.brand ?? "").includes(brand),
        href: getUpdatedURLFromSearchParam("brand", `${brand}`, true),
      })),
      isSearchable: true,
      selectedOptionCount: getSearchParamValueCount("brand"),
    },
    {
      title: "Body Style",
      options: Object.values(VehicleBodyStyle).map((bodyStyle) => ({
        label: bodyStyle,
        value: bodyStyle.toLowerCase(),
        isChecked: (searchParams?.body_style ?? "").includes(bodyStyle),
        href: getUpdatedURLFromSearchParam("body_style", `${bodyStyle}`, true),
      })),
      isSearchable: true,
      selectedOptionCount: getSearchParamValueCount("body_style"),
    },
    {
      title: "Fuel Type",
      options: Object.values(VehicleFuelType).map((fuelType) => ({
        label: fuelType,
        value: fuelType.toLowerCase(),
        isChecked: (searchParams?.fuel_type ?? "").includes(fuelType),
        href: getUpdatedURLFromSearchParam("fuel_type", `${fuelType}`, true),
      })),
      isSearchable: false,
      selectedOptionCount: getSearchParamValueCount("fuel_type"),
    },
    {
      title: "Cylinders",
      options: [
        {
          label: "3 cylinders",
          value: "3",
          isChecked: (searchParams?.engine_cylinder_count ?? "").includes("3"),
          href: getUpdatedURLFromSearchParam(
            "engine_cylinder_count",
            "3",
            true,
          ),
        },
        {
          label: "4 cylinders",
          value: "4",
          isChecked: (searchParams?.engine_cylinder_count ?? "").includes("4"),
          href: getUpdatedURLFromSearchParam(
            "engine_cylinder_count",
            "4",
            true,
          ),
        },
        {
          label: "5 cylinders",
          value: "5",
          isChecked: (searchParams?.engine_cylinder_count ?? "").includes("5"),
          href: getUpdatedURLFromSearchParam(
            "engine_cylinder_count",
            "5",
            true,
          ),
        },
        {
          label: "6 cylinders",
          value: "6",
          isChecked: (searchParams?.engine_cylinder_count ?? "").includes("6"),
          href: getUpdatedURLFromSearchParam(
            "engine_cylinder_count",
            "6",
            true,
          ),
        },
        {
          label: "8 cylinders",
          value: "8",
          isChecked: (searchParams?.engine_cylinder_count ?? "").includes("8"),
          href: getUpdatedURLFromSearchParam(
            "engine_cylinder_count",
            "8",
            true,
          ),
        },
        {
          label: "10 cylinders",
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
      title: "Transmission",
      options: Object.values(VehicleTransmission).map((transmission) => ({
        label: transmission,
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
      title: "Drivetrain",
      options: Object.values(VehicleDrivetrain).map((drivetrain) => ({
        label: drivetrain,
        value: drivetrain.toLowerCase(),
        isChecked: (searchParams?.drivetrain ?? "").includes(drivetrain),
        href: getUpdatedURLFromSearchParam("drivetrain", `${drivetrain}`, true),
      })),
      isSearchable: true,
      selectedOptionCount: getSearchParamValueCount("drivetrain"),
    },
    {
      title: "Country",
      options: Object.values(VehicleCountry).map((country) => ({
        label: country,
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
      sections={vehicleListFilterSections}
      searchParams={searchParams}
    />
  );
}
