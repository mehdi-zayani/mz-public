// ThemeToggle.tsx
"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

/**
 * ThemeToggle component
 *
 * - Provides a light/dark mode toggle button.
 * - Saves the user's theme preference in `localStorage` for persistence.
 * - Automatically respects system preferences if no theme is stored.
 * - Updates the document’s root `classList` to switch Tailwind’s dark mode.
 *
 * Behavior:
 * - When toggled, adds or removes the `dark` class on `<html>`.
 * - Stores the current mode (`light` or `dark`) in localStorage.
 * - Uses an icon (Sun for light mode, Moon for dark mode) as visual feedback.
 */
export default function ThemeToggle() {
  // Initialize theme based on stored preference or system setting
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  // Sync dark mode class and storage whenever theme changes
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [dark]);

  // Toggle theme state between light and dark
  const toggleTheme = () => setDark((prev) => !prev);

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="p-2 rounded-md transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
