// src/app/api/auth/register/route.ts
// Handles new user registration, account creation, and secure JWT authentication

import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import { connectToDatabase } from "@/lib/mongodb";
import { signToken, setAuthCookie } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    // Extract registration data from request body
    const { username, email, password } = await req.json();

    // Ensure database connection is established
    await connectToDatabase();

    // Check if a user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "Email already in use" }, { status: 400 });
    }

    // Securely hash the user's password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user document in MongoDB
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    // Generate a signed JWT token and store it in a secure HTTP-only cookie
    const token = signToken({
      id: user._id,
      email: user.email,
      role: user.role,
    });

    await setAuthCookie(token);

    // Return a success response with basic user information
    return NextResponse.json({
      message: "User registered successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    // Log and return a standardized server error response
    console.error("Register error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
