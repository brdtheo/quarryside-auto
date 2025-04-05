"use client";

import { useTranslations } from "next-intl";

import { WheelBrand } from "@prisma/client";

import ListFilterAside from "@/components/ListFilterAside";
import { ListFilterAsideSectionProps } from "@/components/ListFilterAsideSection";

import useQueryParamValues from "@/hooks/useQueryParamValues";
import useURLSearchParams from "@/hooks/useURLSearchParams";

import { PageSearchParams } from "@/types";

export default function WheelListFilterAside({
  searchParams,
  className,
}: {
  searchParams: PageSearchParams;
  className?: string;
}) {
  const t = useTranslations("wheels");

  const { getUpdatedURLFromSearchParam } = useURLSearchParams(searchParams);

  const wheelListFilterSections: ListFilterAsideSectionProps[] = [
    {
      title: t("filter.brand.title"),
      options: Object.values(WheelBrand).map((brand) => ({
        label: t(`filter.brand.option.${brand}`),
        value: brand.toLowerCase(),
        isChecked: (searchParams?.brand ?? "").includes(brand),
        href: getUpdatedURLFromSearchParam("brand", `${brand}`, true),
      })),
      isSearchable: true,
      selectedOptionCount: useQueryParamValues("brand", true),
    },
    {
      title: t("availability"),
      options: [
        {
          label: t("filter.is_three_lug.option.true"),
          value: "is_three_lug",
          isChecked: (searchParams?.is_three_lug ?? "").includes("true"),
          href: getUpdatedURLFromSearchParam("is_three_lug", "true", true),
        },
        {
          label: t("filter.is_four_lug.option.true"),
          value: "is_four_lug",
          isChecked: (searchParams?.is_four_lug ?? "").includes("true"),
          href: getUpdatedURLFromSearchParam("is_four_lug", "true", true),
        },
        {
          label: t("filter.is_five_lug.option.true"),
          value: "is_five_lug",
          isChecked: (searchParams?.is_five_lug ?? "").includes("true"),
          href: getUpdatedURLFromSearchParam("is_five_lug", "true", true),
        },
        {
          label: t("filter.is_six_lug.option.true"),
          value: "is_six_lug",
          isChecked: (searchParams?.is_six_lug ?? "").includes("true"),
          href: getUpdatedURLFromSearchParam("is_six_lug", "true", true),
        },
        {
          label: t("filter.is_eight_lug.option.true"),
          value: "is_eight_lug",
          isChecked: (searchParams?.is_eight_lug ?? "").includes("true"),
          href: getUpdatedURLFromSearchParam("is_eight_lug", "true", true),
        },
        {
          label: t("filter.is_ten_lug.option.true"),
          value: "is_ten_lug",
          isChecked: (searchParams?.is_ten_lug ?? "").includes("true"),
          href: getUpdatedURLFromSearchParam("is_ten_lug", "true", true),
        },
        {
          label: t("filter.is_central_lug.option.true"),
          value: "is_central_lug",
          isChecked: (searchParams?.is_central_lug ?? "").includes("true"),
          href: getUpdatedURLFromSearchParam("is_central_lug", "true", true),
        },
      ],
      isSearchable: true,
      selectedOptionCount: 0,
    },
    {
      title: t("filter.delivery_available.title"),
      options: [
        {
          label: t("filter.delivery_available.option.true"),
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
      selectedOptionCount: useQueryParamValues("delivery_available", true),
    },
    {
      title: t("filter.free_on_site_pickup.title"),
      options: [
        {
          label: t("filter.free_on_site_pickup.option.true"),
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
      selectedOptionCount: useQueryParamValues("free_on_site_pickup", true),
    },
  ];

  return (
    <ListFilterAside
      className={className}
      nameSpace="wheels"
      sections={wheelListFilterSections}
      searchParams={searchParams}
    />
  );
}
