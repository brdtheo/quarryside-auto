"use client";

import { useCallback, useRef } from "react";

import { useTranslations } from "next-intl";

import { IconSearch } from "@tabler/icons-react";

import clsx from "clsx";

import type { SearchFieldProps } from ".";

export default function SearchField({
  className,
  value,
  isDisabled,
  onChange,
}: SearchFieldProps) {
  const t = useTranslations("common");

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFocusInput = useCallback(() => {
    if (inputRef && inputRef?.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div
      aria-disabled={isDisabled}
      className={clsx(
        "flex border border-gray-300 dark:border-blacksecondary dark:hover:border-white rounded h-8 pl-3 w-fit transition-colors duration-75",
        {
          "bg-white dark:bg-transparent": !isDisabled,
          "disabled:bg-red-500 disabled:opacity-40": isDisabled,
        },
        className,
      )}
    >
      <input
        ref={inputRef}
        disabled={isDisabled}
        placeholder={t("search")}
        className="h-full w-full bg-transparent outline-none text-sm dark:text-white"
        type="search"
        value={value}
        onChange={onChange}
      />
      <div
        onClick={handleFocusInput}
        role="button"
        className="w-8 h-8 flex justify-center items-center cursor-text"
      >
        <IconSearch className="text-gray-500 dark:text-white" size={14} />
      </div>
    </div>
  );
}
