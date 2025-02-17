"use client";

import clsx from "clsx";

import type { TextFieldProps } from ".";

export default function TextField({
  className,
  value,
  isTextArea,
  placeholder,
}: TextFieldProps) {
  if (isTextArea) {
    return (
      <textarea
        placeholder={placeholder}
        className={clsx(
          "flex border border-primary dark:border-blacksecondary rounded bg-white dark:bg-transparent min-h-12 p-3 w-full bg-transparent outline-none text-sm resize-none dark:hover:border-white transition-colors duration-75",
          className,
        )}
      />
    );
  }

  return (
    <div
      className={clsx(
        "flex border border-primary dark:border-blacksecondary rounded bg-white dark:bg-transparent h-8 pl-3 w-fit dark:hover:border-white transition-colors duration-75",
        className,
      )}
    >
      {!isTextArea && (
        <input
          placeholder={placeholder}
          className="h-full w-full bg-transparent outline-none text-sm pr-3"
          type="search"
          value={value}
          onChange={() => {}}
        />
      )}
    </div>
  );
}
