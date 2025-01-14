"use client";

import clsx from "clsx";

import type { SelectProps } from ".";

export default function Select({
  className,
  placeholder,
  value,
  options,
}: SelectProps) {
  return (
    <select
      defaultValue={value}
      onChange={() => {}}
      className={clsx(
        "w-fit h-8 text-sm outline-none px-2 bg-white text-brown border border-brown rounded",
        className,
      )}
    >
      {!!placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {(options ?? []).map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
