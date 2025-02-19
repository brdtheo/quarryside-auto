import Container from "@/components/Container";
import NavSection from "@/components/NavSection";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Footer() {
  return (
    <footer className="bg-primary dark:bg-black flex justify-center dark:border-t dark:border-t-dividerdark @container/footer">
      <Container className="py-8 ">
        <div className="grid grid-cols-1 gap-8 @sm/footer:grid-cols-2 @lg:grid-cols-3 @3xl:grid-cols-4 @4xl:grid-cols-5">
          <NavSection
            titleHref="/vehicles"
            title="Used vehicles"
            links={[
              {
                title: "Used Civetta cars",
                href: "/vehicles?brand=CIVETTA&condition=USED",
              },
              {
                title: "Used Ibishu cars",
                href: "/vehicles?brand=IBISHU&condition=USED",
              },
              {
                title: "Used Gavril cars",
                href: "/vehicles?brand=GAVRIL&condition=USED",
              },
              {
                title: "Used ETK cars",
                href: "/vehicles?brand=ETK&condition=USED",
              },
              {
                title: "Used Hiroshi cars",
                href: "/vehicles?brand=HIROSHI&condition=USED",
              },
            ]}
          />
          <NavSection
            titleHref="/wheels"
            title="Rims & tires"
            links={[
              {
                title: "Autobello wheels",
                href: "/wheels?brand=AUTOBELLO",
              },
              {
                title: "ETK wheels",
                href: "/wheels?brand=ETK",
              },
              {
                title: "Folk wheels",
                href: "/wheels?brand=FOLK",
              },
              {
                title: "Gavril wheels",
                href: "/wheels?brand=GAVRIL",
              },
              {
                title: "Ibishu wheels",
                href: "/wheels?brand=IBISHU",
              },
            ]}
          />
          <NavSection
            titleHref="#"
            title="Careers"
            links={[
              {
                title: "Open positions",
                href: "#",
              },
              {
                title: "Internship program",
                href: "#",
              },
              {
                title: "Car jockey requirements",
                href: "#",
              },
            ]}
          />
          <NavSection
            titleHref="#"
            title="Help center"
            links={[
              {
                title: "Q&As",
                href: "#",
              },
              {
                title: "Delivery",
                href: "#",
              },
              {
                title: "Contact",
                href: "#",
              },
            ]}
          />
          <NavSection
            titleHref="#"
            title="About"
            links={[
              {
                title: "Our company",
                href: "#",
              },
              {
                title: "Where to find us",
                href: "#",
              },
            ]}
          />
        </div>

        <div className="pt-8">
          <ThemeSwitcher />
        </div>
      </Container>
    </footer>
  );
}
