"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2, LogOut } from "lucide-react";

import { logout } from "@/app/actions/userActions";
import { Button } from "./ui/button";

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
    <Button
      variant="ghost"
      onClick={logOut}
      disabled={isLoading}
      className="w-full justify-start flex items-center gap-3 px-1 py-1"
    >
      {isLoading ? (
        <>
          <Loader2 size={16} className="animate-spin" />
        </>
      ) : (
        <>
          <LogOut size={16} className="mr-2 h-4 w-4" aria-label="logout" />{" "}
          Logout
        </>
      )}
    </Button>
  );
}
