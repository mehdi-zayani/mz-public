// useLocaleReRender.ts
"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Custom hook: useLocaleReRender
 *
 * Purpose:
 * - Forces a subtle re-render or visual refresh when the locale or route changes.
 * - This is useful for ensuring UI updates correctly after language switch (Next.js + next-intl).
 *
 * How it works:
 * - Listens for `pathname` changes using Next.js `usePathname()`.
 * - On change, it briefly adjusts the body’s opacity to trigger a repaint.
 * - Then dispatches a scroll event to ensure proper re-rendering of certain components.
 *
 * Notes:
 * - `requestAnimationFrame` ensures smooth execution after DOM updates.
 * - The 150ms timeout resets the opacity to normal for seamless visual feedback.
 */
export function useLocaleReRender() {
  const pathname = usePathname();

  useEffect(() => {
    requestAnimationFrame(() => {
      if (typeof window !== "undefined") {
        document.body.style.opacity = "0.9999";
        setTimeout(() => {
          document.body.style.opacity = "1";
          window.dispatchEvent(new Event("scroll"));
        }, 150);
      }
    });
  }, [pathname]);
}
