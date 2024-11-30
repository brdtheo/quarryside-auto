import { IconSearch } from "@tabler/icons-react";

import clsx from "clsx";

import type { SearchFieldProps } from ".";

export default function SearchField({
  className,
  value,
  onChange,
}: SearchFieldProps) {
  return (
    <div
      className={clsx(
        "flex border border-brown rounded bg-white h-8 pl-3 w-fit",
        className,
      )}
    >
      <input
        placeholder="Search"
        className="h-full w-full bg-transparent outline-none text-sm"
        type="search"
        value={value}
        onChange={onChange}
      />
      <button className="flex justify-center items-center w-8 h-full">
        <IconSearch className="text-brown" size={16} />
      </button>
    </div>
  );
}
