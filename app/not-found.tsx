import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid min-h-dvh place-items-center">
      <div className="flex flex-col gap-4 items-center justify-center">
        <h2 className="font-serif text-3xl text-foreground font-bold">
          Not Found
        </h2>
        <p>Could not find requested resource</p>
        <Link
          href="/dashboard"
          className="px-3 py-1 text-center block border rounded-md"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
