import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../../styles/globals.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  // Await locale params to comply with the latest Next.js App Router conventions
  const { locale } = await params;

  let messages;
  try {
    // Dynamically import localized messages based on the current locale
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    // Trigger a 404 if the locale file does not exist
    notFound();
  }

  return (
    <html lang={locale}>
      <body className="bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors duration-300">
        {/* Provides locale-specific translations to all components */}
        <NextIntlClientProvider locale={locale} messages={messages}>
          {/* Global navigation bar */}
          <Navbar />

          {/* Main page content with consistent layout spacing */}
          <main className="pt-20 px-4 max-w-6xl mx-auto">{children}</main>

          {/* Global footer section */}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
