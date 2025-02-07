"use client";

import Link from "next/link";

import { IconCheck } from "@tabler/icons-react";

import clsx from "clsx";

import type { CheckboxProps } from ".";

export default function Checkbox({ id, checked, label, href }: CheckboxProps) {
  return (
    <Link className="flex gap-3 items-center select-none w-fit" href={href}>
      <div className="relative">
        <input
          id={id}
          className="invisible absolute"
          type="checkbox"
          name={id}
          checked={checked}
          readOnly
        />
        <div
          className={clsx("w-4 h-4 rounded border flex items-center", {
            "bg-white border-brown": !checked,
            "bg-brown border-transparent": checked,
          })}
        >
          <IconCheck
            className={clsx({
              hidden: !checked,
              "text-white": checked,
            })}
            size={18}
          />
        </div>
      </div>
      <label className="text-sm cursor-pointer" htmlFor={id}>
        {label}
      </label>
    </Link>
  );
}
