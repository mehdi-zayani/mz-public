// Protected route: Retrieves the authenticated user's profile data
import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";
import enMessages from "@/messages/en.json";
import frMessages from "@/messages/fr.json";
import type { JwtPayload } from "jsonwebtoken";

interface DecodedToken extends JwtPayload {
  id: string;
}

export async function GET(req: NextRequest) {
  try {
    // Establish a connection to MongoDB
    await connectToDatabase();

    // Extract the locale from the URL path (e.g., /fr/profile)
    const locale = req.nextUrl.pathname.split("/")[1] as "en" | "fr";
    const t = locale === "fr" ? frMessages : enMessages;

    // Retrieve the JWT token from cookies
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    // If no token is present, deny access
    if (!token) {
      return NextResponse.json({ error: t.auth.unauthorized }, { status: 401 });
    }

    // Verify the validity of the JWT token
    const decoded = verifyToken(token) as DecodedToken | null;
    if (!decoded?.id) {
      return NextResponse.json({ error: t.auth.invalidToken }, { status: 401 });
    }

    // Retrieve user data from the database while excluding sensitive fields
    const user = await User.findById(decoded.id).select(
      "username email bio skills createdAt"
    );

    // Return 404 if the user is not found
    if (!user) {
      return NextResponse.json({ error: t.auth.userNotFound }, { status: 404 });
    }

    // Return user data if authentication is valid
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    // Log and handle internal errors gracefully
    console.error("Error fetching user:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
