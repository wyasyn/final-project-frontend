import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";

import SidebarItem from "./sidebar-item";
import { menuItems } from "@/constants/data";
import { UserBtn } from "./user-btn";
import Image from "next/image";

export function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b px-4 py-2">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="text-lg font-bold font-serif">My Finance</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="mt-3">
          {menuItems.map((item) => (
            <SidebarItem key={item.name} {...item} />
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <UserBtn />
      </SidebarFooter>
    </Sidebar>
  );
}
