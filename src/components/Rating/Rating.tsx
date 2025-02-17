"use client";

import { useMemo } from "react";

import { IconStar } from "@tabler/icons-react";

import clsx from "clsx";

import type { RatingProps } from ".";

export default function Rating({ score, size }: RatingProps) {
  const parsedScore = useMemo(() => Number(score ?? 0), [score]);

  const theme = localStorage.getItem("theme");
  const isLightTheme = theme === "light";

  return (
    <div className="flex gap-2 items-center h-fit">
      <span className="text-sm dark:text-white">{parsedScore}</span>
      <div className="inline-flex">
        <IconStar
          className={clsx({
            "fill-[#F19123]": parsedScore >= 1,
            "fill-transparent": parsedScore < 1 && !isLightTheme,
            "fill-white": parsedScore < 1 && !isLightTheme,
          })}
          width={size ?? 16}
          height={size ?? 16}
          color="#F19123"
          stroke={2}
        />
        <IconStar
          width={size ?? 16}
          height={size ?? 16}
          className={clsx({
            "fill-[#F19123]": parsedScore >= 2,
            "fill-transparent": parsedScore < 2 && !isLightTheme,
            "fill-white": parsedScore < 2 && !isLightTheme,
          })}
          color="#F19123"
          stroke={2}
        />
        <IconStar
          width={size ?? 16}
          height={size ?? 16}
          className={clsx({
            "fill-[#F19123]": parsedScore >= 3,
            "fill-transparent": parsedScore < 3 && !isLightTheme,
            "fill-white": parsedScore < 3 && !isLightTheme,
          })}
          color="#F19123"
          stroke={2}
        />
        <IconStar
          width={size ?? 16}
          height={size ?? 16}
          className={clsx({
            "fill-[#F19123]": parsedScore >= 4,
            "fill-transparent": parsedScore < 4 && !isLightTheme,
            "fill-white": parsedScore < 4 && !isLightTheme,
          })}
          color="#F19123"
          stroke={2}
        />
        <IconStar
          width={size ?? 16}
          height={size ?? 16}
          className={clsx({
            "fill-[#F19123]": parsedScore === 5,
            "fill-transparent": parsedScore !== 5 && !isLightTheme,
            "fill-white": parsedScore !== 5 && !isLightTheme,
          })}
          color="#F19123"
          stroke={2}
        />
      </div>
    </div>
  );
}
