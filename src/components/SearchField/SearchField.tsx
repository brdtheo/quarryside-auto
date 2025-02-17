import useTranslation from "next-translate/useTranslation";

import { IconSearch } from "@tabler/icons-react";

import clsx from "clsx";

import type { SearchFieldProps } from ".";

export default function SearchField({
  className,
  value,
  onChange,
}: SearchFieldProps) {
  const { t } = useTranslation("common");

  return (
    <div
      className={clsx(
        "flex border border-primary dark:border-blacksecondary dark:hover:border-white rounded bg-white dark:bg-transparent h-8 pl-3 w-fit transition-colors duration-75",
        className,
      )}
    >
      <input
        placeholder={t("search")}
        className="h-full w-full bg-transparent outline-none text-sm dark:text-white"
        type="search"
        value={value}
        onChange={onChange}
      />
      <button className="flex justify-center items-center w-8 h-full">
        <IconSearch className="text-primary dark:text-white" size={16} />
      </button>
    </div>
  );
}
