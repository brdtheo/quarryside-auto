"use client";

import { WheelBrand } from "@prisma/client";

import ListFilterAside from "@/components/ListFilterAside";
import { ListFilterAsideSectionProps } from "@/components/ListFilterAsideSection";

import useURLSearchParams from "@/hooks/useURLSearchParams";
import { PageSearchParams } from "@/types";

export default function WheelListFilterAside({
  searchParams,
}: {
  searchParams: PageSearchParams;
}) {
  const { getUpdatedURLFromSearchParam, getSearchParamValueCount } =
    useURLSearchParams(searchParams);

  const wheelListFilterSections: ListFilterAsideSectionProps[] = [
    {
      title: "Brand",
      options: Object.values(WheelBrand).map((brand) => ({
        label: brand,
        value: brand.toLowerCase(),
        isChecked: (searchParams?.brand ?? "").includes(brand),
        href: getUpdatedURLFromSearchParam("brand", `${brand}`, true),
      })),
      isSearchable: true,
      selectedOptionCount: getSearchParamValueCount("brand"),
    },
    {
      title: "Availability",
      options: [
        {
          label: "3 lugs",
          value: "is_three_lug",
          isChecked: (searchParams?.is_three_lug ?? "").includes("true"),
          href: getUpdatedURLFromSearchParam("is_three_lug", "true", true),
        },
        {
          label: "4 lugs",
          value: "is_four_lug",
          isChecked: (searchParams?.is_four_lug ?? "").includes("true"),
          href: getUpdatedURLFromSearchParam("is_four_lug", "true", true),
        },
        {
          label: "5 lugs",
          value: "is_five_lug",
          isChecked: (searchParams?.is_five_lug ?? "").includes("true"),
          href: getUpdatedURLFromSearchParam("is_five_lug", "true", true),
        },
        {
          label: "6 lugs",
          value: "is_six_lug",
          isChecked: (searchParams?.is_six_lug ?? "").includes("true"),
          href: getUpdatedURLFromSearchParam("is_six_lug", "true", true),
        },
        {
          label: "8 lugs",
          value: "is_eight_lug",
          isChecked: (searchParams?.is_eight_lug ?? "").includes("true"),
          href: getUpdatedURLFromSearchParam("is_eight_lug", "true", true),
        },
        {
          label: "Central lug",
          value: "is_central_lug",
          isChecked: (searchParams?.is_central_lug ?? "").includes("true"),
          href: getUpdatedURLFromSearchParam("is_central_lug", "true", true),
        },
      ],
      isSearchable: true,
      selectedOptionCount: 0,
    },
    {
      title: "Delivery",
      options: [
        {
          label: "Available for delivery",
          value: "true",
          isChecked: (searchParams?.delivery_available ?? "").includes("true"),
          href: getUpdatedURLFromSearchParam(
            "delivery_available",
            "true",
            true,
          ),
        },
      ],
      isSearchable: false,
      selectedOptionCount: getSearchParamValueCount("delivery_available"),
    },
    {
      title: "On site pickup",
      options: [
        {
          label: "Free on site pickup",
          value: "true",
          isChecked: (searchParams?.free_on_site_pickup ?? "").includes("true"),
          href: getUpdatedURLFromSearchParam(
            "free_on_site_pickup",
            "true",
            true,
          ),
        },
      ],
      isSearchable: false,
      selectedOptionCount: getSearchParamValueCount("free_on_site_pickup"),
    },
  ];

  return (
    <ListFilterAside
      sections={wheelListFilterSections}
      searchParams={searchParams}
    />
  );
}
