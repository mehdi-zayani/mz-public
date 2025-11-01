// lib/mongoodb.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in environment variables");
}

let isConnected = false;

/**
 * Connects to MongoDB using Mongoose.
 * Prevents multiple connections in development environments.
 */
export async function connectToDatabase() {
  if (isConnected) {
    console.log("MongoDB already connected");
    return mongoose.connection;
  }

  try {
    await mongoose.connect(MONGODB_URI);
    isConnected = true;
    console.log("MongoDB connected successfully");
    return mongoose.connection;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}
