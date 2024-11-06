import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-dvh grid place-content-center">
      <Loader2 className="animate-spin" />
    </div>
  );
}
