import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  // Define the routes that are publicly accessible without a token
  const publicRoutes = ["/", "/login", "/sign-up", "/forgot-password"];
  const isPublicRoute = publicRoutes.includes(request.nextUrl.pathname);

  // If there's a token and the user tries to access a public route, redirect to /dashboard
  if (token && isPublicRoute) {
    return Response.redirect(new URL("/dashboard", request.url));
  }

  // If there's no token and the user tries to access a protected route, redirect to /login
  if (!token && !isPublicRoute) {
    return Response.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
