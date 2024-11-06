import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants/data";
import NavItem from "./NavItem";
import MobileNavigation from "./mobile-nav";

import Menu from "./menu";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="container py-3 md:py-0 flex items-center justify-between">
        <MobileNavigation />
        <Link href="/dashboard">
          <div className="items-center text-foreground gap-3 flex">
            <Image
              src="/logo.png"
              width={32}
              height={32}
              aria-label="Finance logo"
              className="object-contain"
              alt="Logo"
            />
            <h1 className="text-lg font-serif">My Finance</h1>
          </div>
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <NavItem key={item.name} {...item} />
          ))}
        </ul>
        <Menu />
      </div>
    </header>
  );
}
