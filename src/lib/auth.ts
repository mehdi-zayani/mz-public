// lib/auth.ts
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const SECRET = process.env.JWT_SECRET || "dev-secret";

/**
 * Generates a signed JSON Web Token (JWT).
 * @param payload - Data to include in the token.
 * @returns A JWT string valid for 7 days.
 */
export function signToken(payload: object) {
  return jwt.sign(payload, SECRET, { expiresIn: "7d" });
}

/**
 * Verifies the validity of a JWT token.
 * @param token - Token to verify.
 * @returns The decoded token payload if valid, otherwise null.
 */
export function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
}

/**
 * Stores the JWT in a secure, HTTP-only cookie.
 * This ensures the token is not accessible via JavaScript on the client.
 * @param token - The JWT to store.
 */
export async function setAuthCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

/**
 * Deletes the authentication cookie to log out the user.
 */
export async function clearAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.delete("token");
}
