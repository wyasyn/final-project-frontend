import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AvatarInfo } from "./Avatar";
import { ModeToggle } from "./ModeToggle";
import LogoutBtn from "./LogoutBtn";

export default function Menu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <AvatarInfo />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <ModeToggle />
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogoutBtn />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
