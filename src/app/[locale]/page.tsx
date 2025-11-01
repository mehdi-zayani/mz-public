"use client";

import { useTranslations } from "next-intl";
import { useLocaleReRender } from "@/hooks/useLocaleReRender";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("Home");
  useLocaleReRender();

  return (
    <main className="flex flex-col items-center justify-center">
      {/* -------------------------------------------------------------
         Hero Section — Main landing hero with title and call-to-action
         ------------------------------------------------------------- */}
      <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6 py-20 sm:py-24">
        <h2 className="text-xs sm:text-sm md:text-base uppercase tracking-widest font-semibold mb-2 sm:mb-3 text-brand">
          {t("hero.subtitle")}
        </h2>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 leading-tight max-w-3xl">
          {t("hero.title")}
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mb-8 sm:mb-10">
          {t("hero.description")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            href="/the-lab"
            className="px-6 py-3 rounded-xl bg-brand text-white font-medium shadow hover:bg-brand-600 transition text-center"
          >
            {t("hero.primaryButton")}
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl border border-brand text-brand font-medium hover:bg-brand/10 dark:hover:bg-brand/20 transition text-center"
          >
            {t("hero.secondaryButton")}
          </Link>
        </div>
      </section>

      {/* -------------------------------------------------------------
         Summary Section — Short introduction and key focus points
         ------------------------------------------------------------- */}
      <section className="w-full border-t border-border bg-background py-20 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left — Text content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
            className="space-y-6 will-change-transform"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {t("summary.title")}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              {t("summary.paragraph1")}
            </p>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              {t("summary.paragraph2")}
            </p>
            <Link
              href="/about"
              className="inline-block mt-4 px-6 py-3 rounded-xl bg-brand text-white font-medium shadow hover:bg-brand-600 transition"
            >
              {t("summary.button")}
            </Link>
          </motion.div>

          {/* Right — Key focus areas */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0 },
            }}
            className="bg-muted/30 rounded-2xl shadow-sm p-8 space-y-6 border will-change-transform"
          >
            <h3 className="text-xl font-semibold mb-2">{t("focus.title")}</h3>
            <ul className="space-y-3 text-muted-foreground">
              {t.raw("focus.items").map((item: string, i: number) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* -------------------------------------------------------------
         Featured Projects Section — Highlighted repositories
         ------------------------------------------------------------- */}
      <section className="w-full border-t border-border bg-muted/20 py-20 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t("projects.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            {t("projects.description")}
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              key: "smartcalc",
              link: "https://github.com/mehdi-zayani/simple-js-calculator.git",
              color: "from-brand/20 to-brand/5",
            },
            {
              key: "chromaflow",
              link: "https://github.com/mehdi-zayani/chromaflow.git",
              color: "from-indigo-400/20 to-indigo-100/10",
            },
            {
              key: "deploymate",
              link: "https://github.com/mehdi-zayani/deploymate.git",
              color: "from-emerald-400/20 to-emerald-100/10",
            },
          ].map(({ key, link, color }) => (
            <div
              key={key}
              className="group rounded-2xl border bg-background hover:shadow-lg transition overflow-hidden"
            >
              <div className={`h-40 bg-gradient-to-br ${color}`} />
              <div className="p-6 text-left">
                <h3 className="font-semibold text-xl mb-2">
                  {t(`projects.items.${key}.title`)}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {t(`projects.items.${key}.description`)}
                </p>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand font-medium hover:underline"
                >
                  {t(`projects.items.${key}.button`)}
                </a>
              </div>
            </div>
          ))}

          {/* The Lab Project Card */}
          <div className="group rounded-2xl border bg-background hover:shadow-lg transition overflow-hidden sm:col-span-2 lg:col-span-3">
            <div className="h-40 bg-gradient-to-br from-orange-400/20 to-orange-100/10" />
            <div className="p-6 text-left">
              <h3 className="font-semibold text-xl mb-2">
                {t("projects.items.lab.title")}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {t("projects.items.lab.description")}
              </p>
              <Link
                href="/the-lab"
                className="text-brand font-medium hover:underline"
              >
                {t("projects.items.lab.button")}
              </Link>
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Link
            href="/the-lab"
            className="inline-block px-6 py-3 rounded-xl bg-brand text-white font-medium shadow hover:bg-brand-600 transition"
          >
            {t("projects.ctaButton")}
          </Link>
        </div>
      </section>

      {/* -------------------------------------------------------------
         Blog Section — Latest insights and publications
         ------------------------------------------------------------- */}
      <section className="w-full border-t border-border bg-background py-24 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t("blog.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            {t("blog.description")}
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {["post1", "post2", "post3"].map((post, i) => (
            <article
              key={post}
              className="group rounded-2xl border bg-muted/30 hover:bg-muted/50 transition overflow-hidden text-left"
            >
              <div
                className={`h-40 ${
                  i === 0
                    ? "bg-gradient-to-br from-brand/20 to-brand/5"
                    : i === 1
                    ? "bg-gradient-to-br from-indigo-400/20 to-indigo-100/10"
                    : "bg-gradient-to-br from-emerald-400/20 to-emerald-100/10"
                }`}
              />
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2 group-hover:text-brand transition">
                  {t(`blog.posts.${post}.title`)}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {t(`blog.posts.${post}.description`)}
                </p>
                <a href="#" className="text-brand font-medium hover:underline">
                  {t(`blog.posts.${post}.button`)}
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block px-6 py-3 rounded-xl bg-brand text-white font-medium shadow hover:bg-brand-600 transition"
          >
            {t("blog.ctaButton")}
          </Link>
        </div>
      </section>

      {/* -------------------------------------------------------------
         Tech Stack Section — Technologies and tools overview
         ------------------------------------------------------------- */}
      <section className="w-full border-t border-border bg-muted/20 py-24 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t("stack.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            {t("stack.description")}
          </p>
        </div>

        {/* Tech grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {t.raw("stack.items").map((tech: string) => (
            <div
              key={tech}
              className="flex flex-col items-center justify-center rounded-xl border bg-background p-5 hover:shadow-lg transition"
            >
              <span className="font-medium">{tech}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/about#skills"
            className="inline-block px-6 py-3 rounded-xl bg-brand text-white font-medium shadow hover:bg-brand-600 transition"
          >
            {t("stack.button")}
          </Link>
        </div>
      </section>

      {/* -------------------------------------------------------------
         Final CTA Section — Encourage users to get in touch
         ------------------------------------------------------------- */}
      <section className="w-full border-t border-border bg-background py-24 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg mb-8">
            {t("cta.description")}
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 rounded-xl bg-brand text-white font-medium shadow hover:bg-brand-600 transition"
          >
            {t("cta.button")}
          </Link>
        </div>
      </section>
    </main>
  );
}
