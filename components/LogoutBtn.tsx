"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2, LogOut } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { logout } from "@/app/actions/userActions";

export default function LogoutBtn() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const logOut = async () => {
    setIsLoading(true);
    try {
      const { error, message } = await logout();

      if (error) {
        console.error("Logout failed:", error);
        return;
      }
      console.log("Logged out successfully:", message);
      router.refresh();
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          onClick={logOut}
          disabled={isLoading}
          className="w-full flex items-center justify-center py-2"
        >
          {isLoading ? (
            <>
              <Loader2 size={16} className="animate-spin" />
            </>
          ) : (
            <>
              <LogOut size={16} aria-label="logout" />
            </>
          )}
        </TooltipTrigger>
        <TooltipContent>
          <p>Logout</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
