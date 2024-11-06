import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (
    token &&
    ["/login", "/sign-up"].some((path) =>
      request.nextUrl.pathname.startsWith(path)
    )
  ) {
    return Response.redirect(new URL("/dashboard", request.url));
  }

  if (
    !token &&
    !["/login", "/sign-up"].some((path) =>
      request.nextUrl.pathname.startsWith(path)
    )
  ) {
    return Response.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
