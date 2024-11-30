import type { FooterNavSectionProps } from "@/components/FooterNavSection";

export const footerSections: FooterNavSectionProps[] = [
  {
    title: "Used cars",
    links: [
      { title: "Used Civetta cars", to: "/cars?brands=Civetta&condition=1" },
      { title: "Used Ibishu cars", to: "/cars?brands=Ibishu&condition=1" },
      { title: "Used Gavril cars", to: "/cars?brands=Gavril&condition=1" },
      { title: "Used ETK cars", to: "/cars?brands=ETK&condition=1" },
      { title: "Used Hiroshi cars", to: "/cars?brands=Hiroshi&condition=1" },
    ],
  },
  {
    title: "Rims & tires",
    links: [
      { title: "Autobello rims", to: "/rims-tires?brands=Autobello" },
      { title: "ETK rims", to: "/rims-tires?brands=ETK" },
      { title: "Folk rims", to: "/rims-tires?brands=Folk" },
      { title: "Gavril rims", to: "/rims-tires?brands=Gavril" },
      { title: "Ibishu rims", to: "/rims-tires?brands=Ibishu" },
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
