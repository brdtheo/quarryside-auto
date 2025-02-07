import type { FooterNavSectionProps } from "@/components/FooterNavSection";

export const footerSections: FooterNavSectionProps[] = [
  {
    title: "Used vehicles",
    links: [
      { title: "Used Civetta cars", to: "/vehicles?brand=CIVETTA&condition=USED" },
      { title: "Used Ibishu cars", to: "/vehicles?brand=IBISHU&condition=USED" },
      { title: "Used Gavril cars", to: "/vehicles?brand=GAVRIL&condition=USED" },
      { title: "Used ETK cars", to: "/vehicles?brand=ETK&condition=USED" },
      { title: "Used Hiroshi cars", to: "/vehicles?brand=HIROSHI&condition=USED" },
    ],
  },
  {
    title: "Rims & tires",
    links: [
      { title: "Autobello wheels", to: "/wheels?brand=AUTOBELLO" },
      { title: "ETK wheels", to: "/wheels?brand=ETK" },
      { title: "Folk wheels", to: "/wheels?brand=FOLK" },
      { title: "Gavril wheels", to: "/wheels?brand=GAVRIL" },
      { title: "Ibishu wheels", to: "/wheels?brand=IBISHU" },
    ],
  },
  {
    title: "Careers",
    links: [
      { title: "Open positions", to: "#" },
      { title: "Internship program", to: "#" },
      { title: "Car jockey requirements", to: "#" },
    ],
  },
  {
    title: "Help center",
    links: [
      { title: "Q&As", to: "#" },
      { title: "Delivery", to: "#" },
      { title: "Contact", to: "#" },
    ],
  },
  {
    title: "About",
    links: [
      { title: "Our company", to: "#" },
      { title: "Where to find us", to: "#" },
    ],
  },
];
