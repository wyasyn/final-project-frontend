import { Bell, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import images from "@/constants/images";
import LogoutBtn from "./LogoutBtn";
import getUser from "@/app/actions/userActions";
import { redirect } from "next/navigation";
import Link from "next/link";

export async function UserBtn() {
  const user = await getUser();
  if (!user) {
    redirect("/login");
  }
  const { username, first_name, last_name, email, image_url } = user;
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src={image_url || images.placeholder.src} alt={username} />
        <AvatarFallback>
          {first_name && first_name[0]}
          {last_name && last_name[0]}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="text-sm font-medium">
          {first_name} {last_name}
        </span>
        <span className="text-xs text-muted-foreground">{email}</span>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="p-4 ml-auto cursor-pointer">
            <Settings className="h-4 w-4" />
            <span className="sr-only">User menu</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              href="/dashboard/notifications"
              className="flex items-center gap-3"
            >
              {" "}
              <Bell className="mr-2 h-4 w-4" />
              <span>Notifications</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-3"
            >
              <Settings className="mr-2 h-4 w-4" />
              <span>Account Settings</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogoutBtn />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
