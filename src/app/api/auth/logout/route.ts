// Logout endpoint: Handles user sign-out by clearing authentication cookies
import { NextResponse } from "next/server";
import { clearAuthCookie } from "@/lib/auth";

export async function POST() {
  // Clear the authentication token stored in cookies
  clearAuthCookie();

  // Return a success response to confirm logout
  return NextResponse.json({ message: "Logged out" });
}
