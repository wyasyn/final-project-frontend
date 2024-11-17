"use client";

import Link from "next/link";
import { SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { usePathname } from "next/navigation";

interface itemProps {
  name: string;
  icon: React.ReactElement;
  href: string;
}

export default function SidebarItem({ name, icon, href }: itemProps) {
  const pathname = usePathname();
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild isActive={pathname === href}>
        <Link href={href} className="flex items-center gap-3">
          {icon}
          <span>{name}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
