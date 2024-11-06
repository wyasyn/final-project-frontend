"use client"; // Error boundaries must be Client Components

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="grid min-h-dvh place-items-center">
      <div className="flex flex-col gap-4 items-center justify-center">
        <h2 className="font-serif text-3xl text-foreground font-bold">
          Something went wrong!
        </h2>
        <Button
          size="sm"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </Button>
      </div>
    </div>
  );
}
