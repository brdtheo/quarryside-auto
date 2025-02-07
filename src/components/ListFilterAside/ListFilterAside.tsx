"use client";

import { useMemo } from "react";

import { IconX } from "@tabler/icons-react";

import Chip from "@/components/Chip";
import type {
  AppliedListFilter,
  ListFilterAsideProps,
} from "@/components/ListFilterAside";
import ListFilterAsideSection from "@/components/ListFilterAsideSection";

import useURLSearchParams from "@/hooks/useURLSearchParams";

export default function ListFilterAside({
  sections,
  searchParams,
}: ListFilterAsideProps) {
  const { getUpdatedURLFromSearchParam } = useURLSearchParams(searchParams);

  const appliedFilterList = useMemo(() => {
    return Object.entries<string>(searchParams).reduce<AppliedListFilter[]>(
      (prev, current) => {
        const paramName = current[0];
        const paramValues = current[1]?.split(",");

        if (paramName === "page") return prev;

        const paramItems = (paramValues ?? "").map((paramValue: string) => ({
          paramName,
          paramValue,
          deleteHref: getUpdatedURLFromSearchParam(paramName, paramValue, true),
        }));

        return [...prev, ...paramItems];
      },
      [],
    );
  }, [getUpdatedURLFromSearchParam, searchParams]);

  return (
    <aside className="w-60 flex flex-col gap-4">
      {(appliedFilterList ?? []).length > 0 && (
        <div className="pb-2 flex gap-2 flex-wrap">
          {(appliedFilterList ?? []).map((appliedFilter, index) => (
            <Chip
              key={index}
              iconHref={appliedFilter.deleteHref}
              rightIcon={<IconX size={16} className="text-white" />}
            >
              {appliedFilter.paramValue}
            </Chip>
          ))}
        </div>
      )}

      <form className="flex flex-col gap-4">
        {(sections ?? []).map((section, index) => (
          <ListFilterAsideSection
            key={index}
            title={section.title}
            options={section.options}
            isSearchable={section.isSearchable}
            selectedOptionCount={section.selectedOptionCount}
          />
        ))}
      </form>
    </aside>
  );
}
