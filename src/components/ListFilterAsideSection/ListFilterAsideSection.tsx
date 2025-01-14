'use client'

import Checkbox from "@/components/Checkbox";
import SearchField from "@/components/SearchField";

import type { ListFilterAsideSectionProps } from "./listfilterasidesection";

export default function ListFilterAsideSection({
  title,
  options,
  isSearchable,
  onChange,
}: ListFilterAsideSectionProps) {
  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="font-semibold text-md">{title}</legend>

      <div className="py-2 flex flex-col gap-1">
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
              onChange={onChange}
              label={option.label}
            />
          ))}

        {isSearchable && (
          <div className="mt-2 flex flex-col gap-2 max-h-28 overflow-y-scroll">
            {(options ?? []).map((option, index) => (
              <Checkbox
                key={option.value}
                id={[index, option.label]
                  .join(" ")
                  .toLowerCase()
                  .replace(/\s/g, "-")}
                checked={option.isChecked}
                onChange={onChange}
                label={option.label}
              />
            ))}
          </div>
        )}
      </div>
    </fieldset>
  );
}
