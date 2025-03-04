import { IconX } from "@tabler/icons-react";

import IconButton from "@/components/IconButton";

import type { SideDrawerProps } from ".";

export default function SideDrawer({
  children,
  isOpen,
  onClose,
}: SideDrawerProps) {
  return (
    isOpen && (
      <div className="w-dvw h-dvh fixed top-0 left-0 z-30">
        <button
          role="button"
          className="bg-black/80 w-dvw h-dvh"
          onClick={onClose}
        />
        <div className="w-60 md:w-80 bg-background dark:bg-backgrounddark border-l border-l-divider dark:border-l-dividerdark fixed top-0 right-0 h-dvh px-4 py-6 gap-6 flex flex-col overflow-y-auto">
          <IconButton className="border border-divider" onClick={onClose}>
            <IconX size={20} stroke={2} />
          </IconButton>

          {children}
        </div>
      </div>
    )
  );
}
