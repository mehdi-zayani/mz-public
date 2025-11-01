"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import { Badge } from "@/components/ui/Badge";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export default function AboutPage() {
  const t = useTranslations("About");

  // Données dynamiques depuis les fichiers de traduction (en.json / fr.json)
  const timeline = t.raw("timeline");
  const skills = t.raw("skills");

  return (
    <main className="flex flex-col items-center justify-center py-20 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full space-y-12"
      >
        {/* En-tête principale */}
        <section className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold">
            {t("header.title")}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("header.description")}
          </p>
        </section>

        <Separator />

        {/* Cartes d’informations clés */}
        <section className="grid md:grid-cols-3 gap-6">
          <Card className="shadow-sm hover:shadow-md transition">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-1">
                {t("info.location.title")}
              </h3>
              <p className="text-muted-foreground">
                {t("info.location.value")}
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-md transition">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-1">
                {t("info.role.title")}
              </h3>
              <p className="text-muted-foreground">
                {t("info.role.value")}
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-md transition">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-1">
                {t("info.experience.title")}
              </h3>
              <p className="text-muted-foreground">
                {t("info.experience.value")}
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Section "Qui suis-je" */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">{t("whoami.title")}</h2>
          <p className="text-muted-foreground leading-relaxed">
            {t("whoami.description")}
          </p>
        </section>

        {/* Parcours (Timeline) */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">{t("journey.title")}</h2>
          <div className="relative border-l border-border pl-6">
            {timeline.map((item: TimelineItem, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-8 relative"
              >
                <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-primary" />
                <h3 className="text-lg font-semibold">{item.year}</h3>
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Compétences */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{t("skillsTitle")}</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill: string, index: number) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-3 py-1 text-sm"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </section>
      </motion.div>
    </main>
  );
}
