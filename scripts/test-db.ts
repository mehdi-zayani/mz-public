/**
 * -------------------------------------------------------------
 * Database Connection Test Script
 * -------------------------------------------------------------
 * This script validates the MongoDB connection using Mongoose.
 * It loads environment variables from `.env.local`, attempts
 * to connect to the database, and reports success or failure.
 * -------------------------------------------------------------
 */

import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

// Retrieve MongoDB connection string
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("❌ MONGODB_URI is not defined in environment variables");
}

(async () => {
  try {
    console.log("🔍 Loaded MONGODB_URI:", MONGODB_URI ? "✅ OK" : "❌ Missing");
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Test success — MongoDB connected via Mongoose");
    await mongoose.connection.close();
    console.log("🔌 Connection closed");
    process.exit(0);
  } catch (err) {
    console.error("❌ Connection failed:", err);
    process.exit(1);
  }
})();
