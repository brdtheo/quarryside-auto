import type { FooterNavSectionProps } from "@/components/FooterNavSection";

export const footerSections: FooterNavSectionProps[] = [
  {
    title: "Used vehicles",
    links: [
      { title: "Used Civetta cars", to: "/vehicles?brands=Civetta&condition=1" },
      { title: "Used Ibishu cars", to: "/vehicles?brands=Ibishu&condition=1" },
      { title: "Used Gavril cars", to: "/vehicles?brands=Gavril&condition=1" },
      { title: "Used ETK cars", to: "/vehicles?brands=ETK&condition=1" },
      { title: "Used Hiroshi cars", to: "/vehicles?brands=Hiroshi&condition=1" },
    ],
  },
  {
    title: "Rims & tires",
    links: [
      { title: "Autobello wheels", to: "/wheels?brands=Autobello" },
      { title: "ETK wheels", to: "/wheels?brands=ETK" },
      { title: "Folk wheels", to: "/wheels?brands=Folk" },
      { title: "Gavril wheels", to: "/wheels?brands=Gavril" },
      { title: "Ibishu wheels", to: "/wheels?brands=Ibishu" },
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
