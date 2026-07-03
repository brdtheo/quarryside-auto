export type NavSectionProps = {
  title: string;
  titleHref: string;
  links: NavSectionLink[];
};

export type NavSectionLink = {
  title: string;
  href: string;
  isTargetBlank?: boolean;
  onClick?: () => void;
};
