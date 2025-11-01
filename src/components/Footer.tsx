"use client";

import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

/**
 * Footer component
 *
 * - Multilingual footer supporting localized text through `next-intl`.
 * - Contains three columns:
 *   1. Branding and description.
 *   2. Navigation links.
 *   3. Contact and social links.
 *
 * Notes:
 * - Uses the current locale to dynamically build navigation URLs (e.g. `/en/about`, `/fr/about`).
 * - External links open securely in a new tab with `rel="noopener noreferrer"`.
 * - Styling follows the light/dark theme and responsive grid layout.
 */
export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale(); // Retrieve current language (e.g. "en" or "fr")

  return (
    <footer className="bg-neutral-100 dark:bg-neutral-950 text-neutral-700 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-800 py-12 mt-20">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1: Branding */}
        <div>
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
            Mehdi Zayani
          </h3>
          <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {t("description")}
          </p>
        </div>

        {/* Column 2: Navigation (localized links) */}
        <div>
          <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4 uppercase tracking-wider">
            {t("navigation.title")}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href={`/${locale}`}
                className="hover:text-primary transition-colors"
              >
                {t("navigation.home")}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/about`}
                className="hover:text-primary transition-colors"
              >
                {t("navigation.about")}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/the-lab`}
                className="hover:text-primary transition-colors"
              >
                {t("navigation.lab")}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/blog`}
                className="hover:text-primary transition-colors"
              >
                {t("navigation.blog")}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/contact`}
                className="hover:text-primary transition-colors"
              >
                {t("navigation.contact")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact & Social Links */}
        <div>
          <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4 uppercase tracking-wider">
            {t("connect.title")}
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a
                href="mailto:contact@mehdizayani.com"
                className="hover:text-primary transition-colors"
              >
                contact@mehdizayani.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin size={16} />
              <a
                href="https://linkedin.com/in/mehdi-zayani-pro"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Github size={16} />
              <a
                href="https://github.com/mehdizayani"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-neutral-200 dark:border-neutral-800 mt-12 pt-6 text-center text-xs text-neutral-500 dark:text-neutral-600">
        © {new Date().getFullYear()} Mehdi Zayani. {t("rights")}
      </div>
    </footer>
  );
}
