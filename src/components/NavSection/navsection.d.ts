export type NavSectionProps = {
  title: string;
  titleHref: string;
  links: { title: string; href: string; onClick?: () => void }[];
};
