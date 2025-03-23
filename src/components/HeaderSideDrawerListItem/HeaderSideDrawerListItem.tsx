import { Link } from "@/i18n/routing";

import type { HeaderSideDrawerListItemProps } from ".";

export default function HeaderSideDrawerListItem({
  icon,
  href,
  children,
  onClick,
}: HeaderSideDrawerListItemProps) {
  const props = { icon };
  return (
    <li className="border-b border-b-divider last-of-type:border-b-transparent px-2 py-3">
      <Link onClick={onClick} className="flex items-center gap-3" href={href}>
        <props.icon />
        <h3 className="text-sm">{children}</h3>
      </Link>
    </li>
  );
}
