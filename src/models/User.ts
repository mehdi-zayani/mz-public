// models/User.ts
import { Schema, model, models } from "mongoose";

/**
 * Defines the User schema for MongoDB.
 * Each user document contains authentication and role data.
 */
const userSchema = new Schema({
  username: { type: String, required: true, unique: true }, // Unique username for each user
  email: { type: String, required: true, unique: true }, // Unique email used for login
  password: { type: String, required: true }, // Hashed password
  role: { type: String, default: "user" }, // User role, defaults to "user"
  createdAt: { type: Date, default: Date.now }, // Timestamp of account creation
});

/**
 * Prevents model recompilation during hot reloads in development.
 */
const User = models.User || model("User", userSchema);

export default User;
