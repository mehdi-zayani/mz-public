// i18n.ts
import { getRequestConfig } from "next-intl/server";

/**
 * Internationalization (i18n) configuration
 *
 * Purpose:
 * - Provides localized messages to the Next.js app using `next-intl`.
 * - Ensures the correct translation file is loaded based on the user's locale.
 *
 * How it works:
 * - The `getRequestConfig` function runs on the server during each request.
 * - It determines the active locale (defaulting to "en" if undefined).
 * - Then it dynamically imports the corresponding translation file from `/messages`.
 *
 * Notes:
 * - Make sure that a JSON file exists for each supported locale (e.g., `en.json`, `fr.json`).
 * - This setup allows static imports to be optimized by Next.js.
 */
export default getRequestConfig(async ({ locale }) => {
  const currentLocale = locale ?? "en";

  return {
    locale: currentLocale,
    messages: (await import(`../messages/${currentLocale}.json`)).default,
  };
});
