"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import en from "@/messages/en.json";
import fr from "@/messages/fr.json";

interface AuthFormProps {
  mode: "login" | "register";
}

/**
 * AuthForm component
 *
 * Reusable authentication form that supports both "login" and "register" modes.
 * - Uses locale from the current pathname to select translation strings.
 * - Handles client-side form state and submits to the API endpoints:
 *   - POST /api/auth/login
 *   - POST /api/auth/register
 * - Includes basic client-side validation (terms acceptance for registration).
 * - Placeholder handlers are provided for OAuth buttons (Google / GitHub).
 *
 * Notes:
 * - This file intentionally does not modify business logic or API contracts.
 * - Keep translations in `@/messages/en.json` and `@/messages/fr.json`.
 */
export default function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1];
  const t = currentLocale === "fr" ? fr.auth : en.auth;

  // Local form state for username / email / password
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Loading indicator to prevent duplicate submissions
  const [loading, setLoading] = useState(false);

  // Terms acceptance checkbox state (for registration)
  const [agree, setAgree] = useState(false);

  /**
   * Form submit handler
   * - Prevents default submission behavior.
   * - Validates terms acceptance when registering.
   * - Sends a JSON payload to the appropriate API endpoint.
   * - Redirects to the localized profile page on success.
   * - Displays an alert on error (client-side handling only).
   */
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (mode === "register" && !agree) {
      alert(t.must_accept);
      return;
    }

    setLoading(true);

    const endpoint =
      mode === "login" ? "/api/auth/login" : "/api/auth/register";

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      router.push(`/${currentLocale}/profile`);
    } else {
      const data = await res.json();
      alert(data.error || "Something went wrong");
    }
  }

  /**
   * Convenience function to navigate between login and register pages
   * while preserving the current locale segment.
   */
  function redirectTo(opposite: "login" | "register") {
    router.push(`/${currentLocale}/${opposite}`);
  }

  return (
    <div className="w-full max-w-md bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-lg p-8">
      <h1 className="text-2xl font-bold text-center mb-6">
        {mode === "login" ? t.login_title : t.register_title}
      </h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username (registration only) */}
        {mode === "register" && (
          <div>
            <label className="block text-sm font-medium mb-1">
              {t.username}
            </label>
            <input
              type="text"
              placeholder={t.username_placeholder}
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            
              required
            />
          </div>
        )}

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">{t.email}</label>
          <input
            type="email"
            placeholder={t.email_placeholder}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border border-neutral-300 dark:border-neutral-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium mb-1">
            {t.password}
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full border border-neutral-300 dark:border-neutral-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
            required
          />
        </div>

        {/* Terms acceptance for registration mode */}
        {mode === "register" && (
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="accent-brand"
            />
            {t.accept_prefix}{" "}
            <a href="#" className="text-brand hover:underline">
              {t.terms}
            </a>
          </label>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brand text-white font-semibold rounded-lg py-2 hover:opacity-90 transition"
        >
          {loading ? t.loading : mode === "login" ? t.login_btn : t.register_btn}
        </button>
      </form>

      {/* Divider text */}
      <div className="my-6 text-center text-sm text-neutral-500">
        {t.or_continue}
      </div>

      {/* OAuth placeholders */}
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => alert("Google login coming soon")}
          className="flex-1 flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
        >
          <FcGoogle className="text-xl" /> Google
        </button>
        <button
          type="button"
          onClick={() => alert("GitHub login coming soon")}
          className="flex-1 flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
        >
          <FaGithub className="text-xl" /> GitHub
        </button>
      </div>

      {/* Footer links: navigation between auth modes */}
      <p className="text-center text-sm mt-6">
        {mode === "login" ? (
          <>
            {t.no_account}{" "}
            <button
              type="button"
              onClick={() => redirectTo("register")}
              className="text-brand font-medium hover:underline"
            >
              {t.signup}
            </button>
          </>
        ) : (
          <>
            {t.have_account}{" "}
            <button
              type="button"
              onClick={() => redirectTo("login")}
              className="text-brand font-medium hover:underline"
            >
              {t.signin}
            </button>
          </>
        )}
      </p>
    </div>
  );
}
