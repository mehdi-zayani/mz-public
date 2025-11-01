"use client";

import { useTranslations } from "next-intl";
import { Mail, Linkedin, Github } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("Contact");

  return (
    <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
      {/* Partie gauche : formulaire */}
      <div>
        <h1 className="text-4xl font-bold mb-4">
          {t("title")}{" "}
          <span className="text-brand">{t("highlight")}</span>
        </h1>

        <p className="text-lg text-muted-foreground mb-8">
          {t("description")}
        </p>

        <form className="space-y-4">
          {/* Champ nom */}
          <div>
            <label className="block text-sm mb-1 font-medium">
              {t("form.name")}
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-2 
                         focus:ring-2 focus:ring-brand outline-none transition"
            />
          </div>

          {/* Champ email */}
          <div>
            <label className="block text-sm mb-1 font-medium">
              {t("form.email")}
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-2 
                         focus:ring-2 focus:ring-brand outline-none transition"
            />
          </div>

          {/* Champ message */}
          <div>
            <label className="block text-sm mb-1 font-medium">
              {t("form.message")}
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full rounded-lg border border-border bg-background px-4 py-2 
                         focus:ring-2 focus:ring-brand outline-none transition"
            />
          </div>

          {/* Bouton d’envoi */}
          <button
            type="submit"
            className="bg-brand text-white font-medium px-6 py-2 rounded-lg 
                       hover:opacity-90 transition"
          >
            {t("form.button")}
          </button>
        </form>
      </div>

      {/* Partie droite : liens de contact directs */}
      <div className="flex flex-col justify-center space-y-4">
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-brand" />
          <a
            href="mailto:contact@mehdizayani.com"
            className="hover:underline"
          >
            contact@mehdizayani.com
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Linkedin className="w-5 h-5 text-brand" />
          <a
            href="https://linkedin.com/in/mehdi-zayani-pro"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/mehdi-zayani-pro
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Github className="w-5 h-5 text-brand" />
          <a
            href="https://github.com/mehdizayani"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/mehdizayani
          </a>
        </div>
      </div>
    </section>
  );
}
