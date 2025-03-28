"use client";

import { KeyboardEvent, useCallback, useRef } from "react";

import { useTranslations } from "next-intl";

import { IconSearch, IconX } from "@tabler/icons-react";

import clsx from "clsx";

import type { SearchFieldProps } from ".";

export default function SearchField({
  className,
  value,
  isDisabled,
  isClearable,
  onChange,
  onSearch,
  onClear,
  ...props
}: SearchFieldProps) {
  const t = useTranslations("common");

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFocusInput = useCallback(() => {
    if (inputRef && inputRef?.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      const pressedKey = event.key.toLowerCase();
      const currentValue = inputRef?.current?.value;
      if (
        pressedKey === "enter" &&
        !!inputRef &&
        !!inputRef?.current &&
        !!onSearch &&
        !!currentValue &&
        currentValue?.length >= 2
      ) {
        onSearch(currentValue);
      }
    },
    [],
  );

  const handleClear = useCallback(() => {
    onClear?.();
  }, []);

  return (
    <div
      role="search"
      aria-disabled={isDisabled}
      className={clsx(
        "flex border px-1 md:px-0 border-gray-300 dark:border-blacksecondary dark:hover:border-white rounded h-8 md:pr-3 w-fit transition-border duration-100 outline-2 outline-offset-1 outline-transparent focus-within:outline-primary dark:focus-within:outline-primarydark",
        {
          "bg-white dark:bg-transparent": !isDisabled,
          "disabled:bg-red-500 disabled:opacity-40": isDisabled,
        },
        className,
      )}
    >
      <div
        onClick={handleFocusInput}
        role="button"
        className="w-8 h-8 flex justify-center items-center cursor-text"
      >
        <IconSearch className="text-gray-500 dark:text-white" size={14} />
      </div>
      <input
        {...props}
        ref={inputRef}
        disabled={isDisabled}
        placeholder={t("search")}
        className="h-full w-full bg-transparent outline-hidden text-sm dark:text-white"
        type="search"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      {!!value && !!onClear && !!isClearable && (
        <button
          aria-label="clear"
          onClick={handleClear}
          role="button"
          type="button"
          className="w-8 h-8 flex justify-center items-center transition-colors duration-100 hover:bg-gray-300/20 rounded"
        >
          <IconX size={16} className="text-gray-500 dark:text-white" />
        </button>
      )}
    </div>
  );
}
