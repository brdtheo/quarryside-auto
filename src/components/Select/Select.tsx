"use client";

import clsx from "clsx";

import type { SelectProps } from ".";

export default function Select({
  className,
  placeholder,
  value,
  options,
  onChange,
}: SelectProps) {
  return (
    <select
      defaultValue={value}
      onChange={onChange}
      className={clsx(
        "w-fit text-sm outline-hidden px-2 bg-white text-primary border border-primary rounded dark:text-white dark:border-blacksecondary dark:bg-transparent",
        className,
      )}
    >
      {!!placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {(options ?? []).map((option) => (
        <option className="dark:text-black" key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
