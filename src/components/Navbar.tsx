// Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { Menu, X, User } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

/**
 * Navbar component
 *
 * - Displays the main site navigation and language/theme controls.
 * - Automatically adapts links to the current locale (using `next-intl`).
 * - Responsive design: collapses into a mobile menu on smaller screens.
 *
 * Features:
 * - Localized route support: all links include the locale prefix (e.g., `/en/about`).
 * - Active link highlighting for the current page.
 * - Dark/light theme toggle.
 * - Language switcher integrated for seamless locale changes.
 * - Mobile-friendly navigation drawer with smooth toggle animation.
 */
export default function Navbar() {
  const t = useTranslations("Navbar");
  const [menuOpen, setMenuOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();

  // Define all main navigation links dynamically based on locale
  const links = [
    { href: "", label: t("home") },
    { href: "about", label: t("about") },
    { href: "the-lab", label: t("lab") },
    { href: "blog", label: t("blog") },
    { href: "contact", label: t("contact") },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-950/70 backdrop-blur-md z-50">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-4 py-3">
        {/* Brand / Logo */}
        <Link href={`/${locale}`} className="text-xl font-semibold tracking-tight">
          MZ<span className="text-blue-500">.</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={`/${locale}/${href}`}
              className={`hover:text-blue-500 transition-colors ${
                pathname === `/${locale}/${href}` ? "text-blue-500 font-medium" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right-side Controls (Theme, Language, Login, Menu) */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Login button (hidden on mobile) */}
          <Link
            href={`/${locale}/login`}
            className="hidden md:inline-flex p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            title={t("signin")}
          >
            <User size={18} />
          </Link>

          {/* Theme switcher (dark/light) */}
          <ThemeToggle />

          {/* Language switcher */}
          <LanguageSwitcher />

          {/* Mobile menu toggle button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-4 py-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={`/${locale}/${href}`}
              onClick={() => setMenuOpen(false)}
              className="block py-2 hover:text-blue-500 transition-colors"
            >
              {label}
            </Link>
          ))}
          {/* Login link displayed inside mobile menu */}
          <Link
            href={`/${locale}/login`}
            onClick={() => setMenuOpen(false)}
            className="mt-4 block py-2 hover:text-blue-500 transition-colors"
          >
            {t("signin")}
          </Link>
        </div>
      )}
    </nav>
  );
}
