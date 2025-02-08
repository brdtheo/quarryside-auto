import { useMemo } from "react";

import { IconStar } from "@tabler/icons-react";

import type { RatingProps } from ".";

export default function Rating({ score, size }: RatingProps) {
  const parsedScore = useMemo(() => Number(score ?? 0), [score]);

  return (
    <div className="flex gap-2 items-center h-fit">
      <span className="text-sm">{parsedScore}</span>
      <div className="inline-flex">
        <IconStar
          width={size ?? 16}
          height={size ?? 16}
          fill={parsedScore >= 1 ? "#F19123" : "white"}
          color="#F19123"
          stroke={2}
        />
        <IconStar
          width={size ?? 16}
          height={size ?? 16}
          fill={parsedScore >= 2 ? "#F19123" : "white"}
          color="#F19123"
          stroke={2}
        />
        <IconStar
          width={size ?? 16}
          height={size ?? 16}
          fill={parsedScore >= 3 ? "#F19123" : "white"}
          color="#F19123"
          stroke={2}
        />
        <IconStar
          width={size ?? 16}
          height={size ?? 16}
          fill={parsedScore >= 4 ? "#F19123" : "white"}
          color="#F19123"
          stroke={2}
        />
        <IconStar
          width={size ?? 16}
          height={size ?? 16}
          fill={parsedScore === 5 ? "#F19123" : "white"}
          color="#F19123"
          stroke={2}
        />
      </div>
    </div>
  );
}
