import Container from "@/components/Container";
import { footerSections } from "@/components/Footer/constants";
import FooterNavSection from "@/components/FooterNavSection";

export default function Footer() {
  return (
    <footer className="bg-brown text-white flex justify-center">
      <Container className="py-8 grid grid-flow-col auto-cols-auto">
        {(footerSections ?? []).map((section, index) => (
          <FooterNavSection
            key={index}
            title={section.title}
            links={section.links}
          />
        ))}
      </Container>
    </footer>
  );
}
