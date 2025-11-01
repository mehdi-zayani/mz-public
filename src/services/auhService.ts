// services/authService.ts

/**
 * Sends a login request to the backend with the provided credentials.
 * Returns the authenticated user data and JWT cookie on success.
 * Throws an error if authentication fails.
 */
export async function login(email: string, password: string) {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error("Login failed");

  return res.json();
}

/**
 * Sends a registration request to the backend.
 * Creates a new user, hashes the password, and returns the created user with a JWT cookie.
 * Throws an error if registration fails (e.g., duplicate email).
 */
export async function register(username: string, email: string, password: string) {
  const res = await fetch("/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });

  if (!res.ok) throw new Error("Registration failed");

  return res.json();
}

/**
 * Logs out the current user by clearing the JWT cookie on the server.
 */
export async function logout() {
  await fetch("/api/auth/logout", { method: "POST" });
}
