import { IconExternalLink } from "@tabler/icons-react";

import { Link } from "@/i18n/routing";

import type { NavSectionProps } from ".";

export default function NavSection({
  title,
  titleHref,
  links,
}: NavSectionProps) {
  return (
    <div className="text-white flex flex-col gap-4">
      <h3 className="font-semibold text-base">
        <Link href={titleHref}>{title}</Link>
      </h3>
      <nav>
        <ul className="gap-2 flex flex-col">
          {(links ?? []).map((link) => (
            <li key={link.title} className="text-sm">
              <Link
                target={link.isTargetBlank ? "_blank" : undefined}
                onClick={link.onClick}
                href={link.href}
                className="hover:underline flex items-center gap-1"
              >
                {link.title}
                {link.isTargetBlank && (
                  <IconExternalLink size={14} stroke={2} />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
