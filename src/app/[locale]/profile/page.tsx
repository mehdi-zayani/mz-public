"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Award, Code, MapPin, Globe, Mail, GitBranch } from "lucide-react";

export default function ProfilePage() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push(`/${locale}/login`);
  }

  // --- Mock user data ---
  const user = {
    username: "Mehdi Zayani",
    title: "Full-Stack Developer",
    location: "Lille, France",
    website: "https://mehdi.dev",
    email: "mehdi@example.com",
    bio: "Passionate full-stack developer focused on building elegant, high-performance web applications. Constantly learning, creating, and improving design and code quality.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Framer Motion",
      "Git / GitHub",
      "Figma",
      "Docker",
      "REST / GraphQL",
    ],
    projects: [
      {
        name: "DeployMate",
        description:
          "A simplified continuous deployment SaaS platform for independent developers with integrated CI/CD and monitoring.",
        tech: ["Next.js", "Node.js", "MongoDB", "Tailwind"],
        link: "https://deploymate.dev",
      },
      {
        name: "Atlas Portfolio",
        description:
          "Interactive portfolio featuring i18n, dark mode, and smooth animations built with Next.js 14.",
        tech: ["Next.js", "TypeScript", "Framer Motion"],
        link: "https://atlas.mehdi.dev",
      },
    ],
    achievements: [
      {
        title: "React Pro Badge",
        icon: "⚛️",
        description:
          "Advanced knowledge of Hooks, Context API, and Next.js App Router.",
      },
      {
        title: "Top Learner 2024",
        icon: "🏆",
        description: "Recognized for consistency and excellence on OpenClassrooms.",
      },
      {
        title: "MongoDB Certified",
        icon: "🍃",
        description: "Official MongoDB back-end developer certification.",
      },
    ],
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-muted-500 animate-pulse">Loading...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-muted-100 dark:bg-neutral-950 flex justify-center py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-5xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-lg"
      >
        {/* Cover */}
        <div className="relative h-64">
          <img
            src="/profile-cover.jpg"
            alt="Profile cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute left-8 -bottom-20 flex items-center space-x-4">
            <div className="relative w-40 h-40 rounded-full border-4 border-white dark:border-neutral-900 overflow-hidden shadow-xl">
              <img
                src="/profile.png"
                alt="Profile avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Header info */}
        <div className="mt-24 px-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">{user.username}</h1>
            <p className="text-brand-600 dark:text-brand-400 font-medium">
              {user.title}
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" /> {user.location}
              </span>
              <span className="flex items-center gap-1">
                <Globe className="w-4 h-4" />{" "}
                <a
                  href={user.website}
                  className="hover:text-brand-600 hover:underline"
                >
                  {user.website}
                </a>
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-4 h-4" /> {user.email}
              </span>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="mt-6 md:mt-0 bg-red-600 hover:bg-red-700 text-white font-medium px-5 py-2 rounded-xl transition"
          >
            Logout
          </button>
        </div>

        {/* Bio */}
        <div className="px-8 mt-6 text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {user.bio}
        </div>

        {/* Achievements */}
        <div className="px-8 mt-10">
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-brand-600" /> Achievements and Badges
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {user.achievements.map((badge, idx) => (
              <div
                key={idx}
                className="p-4 bg-brand-50 dark:bg-brand-900/20 rounded-xl border border-brand-100 dark:border-brand-800 hover:shadow-md transition"
              >
                <p className="text-3xl mb-2">{badge.icon}</p>
                <h3 className="font-semibold">{badge.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {badge.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="px-8 mt-10">
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <Code className="w-5 h-5 text-brand-600" /> Technical Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {user.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-sm font-medium rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="px-8 mt-10 pb-12">
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <GitBranch className="w-5 h-5 text-brand-600" /> Recent Projects
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {user.projects.map((project, idx) => (
              <div
                key={idx}
                className="p-4 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg">{project.name}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  className="text-sm text-brand-600 hover:underline block mt-3"
                >
                  View project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
