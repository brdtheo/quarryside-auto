import { IconX } from "@tabler/icons-react";

import type { ChipProps } from ".";

export default function Chip({ children, onClick }: ChipProps) {
  return (
    <div className="inline-flex rounded bg-brown">
      <span className="text-white text-xs pl-2 py-1 font-medium">
        {children}
      </span>
      <div className="pl-1 pr-2 flex items-center">
        <button
          onClick={onClick}
          className="bg-brown hover:bg-brown-secondary rounded w-fit h-fit"
        >
          <IconX size={16} className="text-white" />
        </button>
      </div>
    </div>
  );
}
