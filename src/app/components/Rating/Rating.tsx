import { IconStar } from "@tabler/icons-react";

import type { RatingProps } from ".";

export default function Rating({ score, size }: RatingProps) {
  return (
    <div className="flex gap-2 items-center h-fit">
      <span className="text-sm">{score}</span>
      <div className="inline-flex">
        <IconStar
          width={size ?? 16}
          height={size ?? 16}
          fill={score >= 1 ? "#F19123" : "white"}
          color="#F19123"
          stroke={2}
        />
        <IconStar
          width={size ?? 16}
          height={size ?? 16}
          fill={score >= 2 ? "#F19123" : "white"}
          color="#F19123"
          stroke={2}
        />
        <IconStar
          width={size ?? 16}
          height={size ?? 16}
          fill={score >= 3 ? "#F19123" : "white"}
          color="#F19123"
          stroke={2}
        />
        <IconStar
          width={size ?? 16}
          height={size ?? 16}
          fill={score >= 4 ? "#F19123" : "white"}
          color="#F19123"
          stroke={2}
        />
        <IconStar
          width={size ?? 16}
          height={size ?? 16}
          fill={score === 5 ? "#F19123" : "white"}
          color="#F19123"
          stroke={2}
        />
      </div>
    </div>
  );
}
