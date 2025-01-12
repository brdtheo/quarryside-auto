import Image from "next/image";

import { IconShoppingCart } from "@tabler/icons-react";
import { IconUserCircle } from "@tabler/icons-react";

import Button from "@/components/Button";
import Container from "@/components/Container";

export default function Header() {
  return (
    <header className="bg-brown flex justify-center h-[72px]">
      <Container className="flex justify-between items-center">
        <Image
          src="/quarryside_logo.png"
          alt="Quarryside Auto Sales company logo"
          width="340"
          height="30"
          priority
        />

        <nav className="inline-flex gap-3">
          <Button
            fontSize="xs"
            className="rounded"
            backgroundColor="white"
            startIcon={<IconShoppingCart size={18} stroke={1.6} />}
          >
            My cart
          </Button>
          <Button
            fontSize="xs"
            className="rounded"
            backgroundColor="white"
            startIcon={<IconUserCircle size={18} stroke={1.6} />}
          >
            Account
          </Button>
        </nav>
      </Container>
    </header>
  );
}
