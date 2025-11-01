import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import { connectToDatabase } from "@/lib/mongodb";
import { signToken, setAuthCookie } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    // Parse JSON body to extract user credentials
    const { email, password } = await req.json();

    // Ensure a connection to the MongoDB database
    await connectToDatabase();

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      // Return unauthorized if no user matches the provided email
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Compare provided password with the stored hashed password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      // Return unauthorized if the password is incorrect
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Generate a signed JWT token for authenticated user session
    const token = signToken({ id: user._id, email: user.email, role: user.role });

    // Store authentication token securely in HTTP-only cookie
    await setAuthCookie(token);

    // Return success response with basic user data (excluding sensitive fields)
    return NextResponse.json({
      message: "Login successful",
      user: { id: user._id, username: user.username, email: user.email, role: user.role },
    });
  } catch (error) {
    // Log and handle any unexpected runtime errors
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
