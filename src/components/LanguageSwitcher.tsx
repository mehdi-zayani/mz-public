// LanguageSwitcher.tsx
"use client";

import { Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

/**
 * LanguageSwitcher component
 *
 * - Toggles between English ("en") and French ("fr") locales.
 * - Uses `next-intl` for current locale detection.
 * - Dynamically updates the URL path to reflect the new locale.
 *
 * Props:
 * - `compact` (boolean): If true, renders a minimal icon-only button.
 *
 * Behavior:
 * - Detects the current locale and replaces the prefix in the current pathname.
 * - Uses Next.js router navigation to push the user to the translated route.
 * - Ensures smooth client-side locale switching without full page reload.
 */
export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  // Switch between "en" and "fr" while preserving the current path
  const toggleLocale = () => {
    const newLocale = locale === "en" ? "fr" : "en";
    const newPath = `/${newLocale}${pathname.replace(/^\/(en|fr)/, "")}`;
    router.push(newPath as string);
  };

  // Compact mode: display only a globe icon with tooltip
  if (compact) {
    return (
      <button
        onClick={toggleLocale}
        title={locale === "en" ? "Français" : "English"}
        className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
      >
        <Globe size={18} />
      </button>
    );
  }

  // Default mode: display icon and locale code
  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-2 px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition text-sm"
    >
      <Globe size={16} />
      <span className="uppercase font-medium">{locale}</span>
    </button>
  );
}
