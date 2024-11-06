"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({
  name,
  path,
}: {
  name: string;
  path: string;
}) {
  const pathname = usePathname();
  const isActive = path === pathname;
  return (
    <li
      className={`hover:text-foreground duration-300 ease-in-out ${
        isActive ? "text-accent" : "text-muted-foreground"
      } `}
    >
      <Link
        href={path}
        className={` block border-b py-6 w-full h-full duration-300 ease-in-out ${
          isActive ? "border-accent" : "border-transparent"
        }`}
      >
        {name}
      </Link>
    </li>
  );
}
