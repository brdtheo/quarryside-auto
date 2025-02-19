import Link from "next/link";

import type { NavSectionProps } from ".";

export default function NavSection({
  title,
  titleHref,
  links,
}: NavSectionProps) {
  return (
    <div className="text-white flex flex-col gap-4">
      <h5 className="font-semibold text-base">
        <Link href={titleHref}>{title}</Link>
      </h5>
      <nav>
        <ul className="gap-2 flex flex-col">
          {(links ?? []).map((link, index) => (
            <li key={index} className="text-sm">
              <Link
                onClick={link.onClick}
                href={link.href}
                className="hover:underline"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
