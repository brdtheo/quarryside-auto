import Link from "next/link";

import { IconCheck } from "@tabler/icons-react";

import clsx from "clsx";

import type { CheckboxProps } from ".";

export default function Checkbox({
  id,
  checked,
  label,
  href,
  onClick,
}: CheckboxProps) {
  return (
    <Link
      className="flex gap-3 py-1.5 items-center select-none w-full"
      href={href}
      scroll={false}
      onClick={onClick}
    >
      <input
        id={id}
        className="hidden absolute"
        type="checkbox"
        role="checkbox"
        name={label}
        checked={checked}
        readOnly
      />
      <div
        className={clsx("w-4 h-4 rounded border flex items-center", {
          "bg-white border-primary dark:bg-blacksecondary dark:border-transparent":
            !checked,
          "bg-primary border-transparent dark:bg-primarydark": checked,
        })}
      >
        <IconCheck
          className={clsx({
            hidden: !checked,
            "text-white dark:text-black": checked,
          })}
          size={18}
        />
      </div>
      <label
        className="text-sm cursor-pointer leading-none dark:text-white"
        htmlFor={id}
      >
        {label}
      </label>
    </Link>
  );
}
