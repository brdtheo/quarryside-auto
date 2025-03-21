"use client";

import { ChangeEvent, useCallback, useMemo, useState } from "react";

import Checkbox from "@/components/Checkbox";
import Chip from "@/components/Chip";
import SearchField from "@/components/SearchField";

import Fuse, { FuseResult } from "fuse.js";

import type {
  ListFilterAsideSectionOption,
  ListFilterAsideSectionProps,
} from ".";

export default function ListFilterAsideSection({
  title,
  options,
  isSearchable,
  selectedOptionCount,
}: ListFilterAsideSectionProps) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchResults, setSearchResults] = useState<
    FuseResult<ListFilterAsideSectionOption>[]
  >([]);

  const fuse = new Fuse(options, { keys: ["label"] });

  const getCheckboxId = useCallback(
    (label: string, index: number) =>
      [index, label].join(" ").toLowerCase().replace(/\s/g, "-"),
    [],
  );

  const handleSearchFieldChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target?.value ?? "";
      setSearchValue(value);
      const results = fuse.search(value);
      setSearchResults(results);
    },
    [options],
  );

  const handleResetSearchResults = useCallback(() => {
    setSearchValue("");
    setSearchResults([]);
  }, []);

  const optionList: ListFilterAsideSectionOption[] = useMemo(() => {
    if (searchResults.length > 0) {
      return (searchResults ?? []).map((result) => ({ ...result.item }));
    }
    return options ?? [];
  }, [searchResults, options]);

  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="inline-flex font-semibold text-md gap-1 dark:text-white">
        {title}
        {selectedOptionCount > 0 && (
          <Chip className="dark:text-white">{`${selectedOptionCount}`}</Chip>
        )}
      </legend>

      <ul className="py-2 flex flex-col">
        {isSearchable && (
          <SearchField value={searchValue} onChange={handleSearchFieldChange} />
        )}

        {!isSearchable &&
          (options ?? []).map((option, index) => (
            <li key={index}>
              <Checkbox
                key={option.value}
                id={getCheckboxId(option.label, index)}
                checked={option.isChecked}
                href={option.href}
                label={option.label}
              />
            </li>
          ))}

        {isSearchable && (
          <div className="mt-2 flex flex-col h-28 overflow-y-auto">
            {optionList.map((option, index) => (
              <li key={index}>
                <Checkbox
                  onClick={handleResetSearchResults}
                  key={option.value}
                  id={getCheckboxId(option.label, index)}
                  checked={option.isChecked}
                  label={option.label}
                  href={option.href}
                />
              </li>
            ))}
          </div>
        )}
      </ul>
    </fieldset>
  );
}
