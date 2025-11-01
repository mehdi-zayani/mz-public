// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "@/lib/auth";

/**
 * Middleware to protect routes that require authentication.
 * Redirects users to the login page if the JWT is missing or invalid.
 */
export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const pathname = req.nextUrl.pathname;

  // Restrict access to profile routes
  if (pathname.includes("/profile")) {
    if (!token || !verifyToken(token)) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

/**
 * Applies middleware only to protected paths.
 */
export const config = {
  matcher: ["/profile"],
};
  