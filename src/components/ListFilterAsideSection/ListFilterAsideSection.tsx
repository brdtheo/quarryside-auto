"use client";

import Checkbox from "@/components/Checkbox";
import Chip from "@/components/Chip";
import SearchField from "@/components/SearchField";

import type { ListFilterAsideSectionProps } from "./listfilterasidesection";

export default function ListFilterAsideSection({
  title,
  options,
  isSearchable,
  selectedOptionCount,
}: ListFilterAsideSectionProps) {
  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="inline-flex font-semibold text-md gap-1">
        {title}
        {selectedOptionCount > 0 && <Chip>{`${selectedOptionCount}`}</Chip>}
      </legend>

      <div className="py-2 flex flex-col">
        {isSearchable && <SearchField value="" onChange={() => {}} />}

        {!isSearchable &&
          (options ?? []).map((option, index) => (
            <Checkbox
              key={option.value}
              id={[index, option.label]
                .join(" ")
                .toLowerCase()
                .replace(/\s/g, "-")}
              checked={option.isChecked}
              href={option.href}
              label={option.label}
            />
          ))}

        {isSearchable && (
          <div className="mt-2 flex flex-col max-h-28 overflow-y-scroll">
            {(options ?? []).map((option, index) => (
              <Checkbox
                key={option.value}
                id={[index, option.label]
                  .join(" ")
                  .toLowerCase()
                  .replace(/\s/g, "-")}
                checked={option.isChecked}
                label={option.label}
                href={option.href}
              />
            ))}
          </div>
        )}
      </div>
    </fieldset>
  );
}
