"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants/data";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle mobile menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[50vh]">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <nav className="mt-6">
            <ul className="space-y-4">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`block py-2 text-lg font-medium hover:text-foreground ${
                      pathname === item.path ? "text-accent" : ""
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
