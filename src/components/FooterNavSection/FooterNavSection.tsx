import Link from "next/link";

import type { FooterNavSectionProps } from ".";

export default function FooterNavSection({
  title,
  links,
}: FooterNavSectionProps) {
  return (
    <div className="text-white flex flex-col gap-4">
      <h5 className="font-semibold text-base">{title}</h5>
      <nav>
        <ul className="gap-2 flex flex-col">
          {(links ?? []).map((link, index) => (
            <li key={index} className="text-sm">
              <Link href={link.to} className="hover:underline">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
