"use client";

import { useMemo } from "react";

import { useTranslations } from "next-intl";

import { IconX } from "@tabler/icons-react";

import clsx from "clsx";

import Advertising from "@/components/Advertising";
import Chip from "@/components/Chip";
import type {
  AppliedListFilter,
  ListFilterAsideProps,
} from "@/components/ListFilterAside";
import ListFilterAsideSection from "@/components/ListFilterAsideSection";

import useURLSearchParams from "@/hooks/useURLSearchParams";

import { APPLIED_FILTER_BLACKLIST } from "@/constants";

export default function ListFilterAside({
  className,
  sections,
  searchParams,
  nameSpace,
}: ListFilterAsideProps) {
  const t = useTranslations(nameSpace);

  const { getUpdatedURLFromSearchParam } = useURLSearchParams(searchParams);

  const appliedFilterList = useMemo<AppliedListFilter[]>(() => {
    const searchParamsEntries = Object.entries(searchParams);
    const appliedFilters: AppliedListFilter[] = [];

    for (const entry of searchParamsEntries) {
      const paramName = entry[0];
      const paramValues = (entry[1] ?? [])?.split(",");

      if (!APPLIED_FILTER_BLACKLIST.includes(paramName)) {
        const paramFilterList = (paramValues ?? "").map(
          (paramValue: string) => ({
            paramName,
            paramValue,
            deleteHref: getUpdatedURLFromSearchParam(
              paramName,
              paramValue,
              true,
            ),
          }),
        );
        appliedFilters.push(...paramFilterList);
      }
    }

    return appliedFilters;
  }, [getUpdatedURLFromSearchParam, searchParams]);

  return (
    <aside className={clsx("w-full md:w-60 flex flex-col gap-4", className)}>
      {(appliedFilterList ?? []).length > 0 && (
        <div className="pb-2 flex gap-2 flex-wrap">
          {(appliedFilterList ?? []).map((appliedFilter) => (
            <Chip
              key={appliedFilter.paramValue}
              iconHref={appliedFilter.deleteHref}
              endIcon={IconX}
            >
              {t(
                `filter.${appliedFilter.paramName}.option.${appliedFilter.paramValue}`,
              )}
            </Chip>
          ))}
        </div>
      )}

      <form role="form" className="flex flex-col gap-4">
        {(sections ?? []).map((section) => (
          <ListFilterAsideSection
            key={section.title}
            title={section.title}
            options={section.options}
            isSearchable={section.isSearchable}
            selectedOptionCount={section.selectedOptionCount}
          />
        ))}
      </form>

      <Advertising className="hidden md:block mx-auto" ratioMode="vertical" />
      <Advertising className="hidden md:block mx-auto" ratioMode="vertical" />
    </aside>
  );
}
