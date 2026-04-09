"use client";

import { motion } from "framer-motion";
import { Newspaper, TrendingUp, History, Zap } from "lucide-react";

const features = [
  {
    icon: Newspaper,
    title: "Daily AI Briefings",
    description:
      "Curated headlines delivered each morning with student-friendly summaries and discussion prompts.",
  },
  {
    icon: TrendingUp,
    title: "Trend Analysis",
    description:
      "Track developments across AI, policy, and industry with interactive timelines and context cards.",
  },
  {
    icon: History,
    title: "Then vs Now",
    description:
      'Compare today\'s breakthroughs with their historical roots — "1956 Dartmouth Workshop → 2024 Foundation Models."',
  },
  {
    icon: Zap,
    title: "Instructor Reactions",
    description:
      "Every story includes reactions from your instructors — Spicoli explains it simply, Miyagi finds the principle, Bender questions who benefits.",
  },
];

export function CurrentEventsPreview() {
  return (
    <section className="py-24 sm:py-32 bg-ridgemont-offBlack-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-md bg-ridgemont-warmGold-900/30 px-3 py-1 text-xs font-medium text-ridgemont-warmGold-400 ring-1 ring-inset ring-ridgemont-warmGold-500/30 mb-6">
              <Newspaper className="h-3.5 w-3.5" /> Today in AI
            </span>
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              AI Doesn&apos;t Wait.
              <br />
              <span className="gradient-text">Neither Should Your Curriculum.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ridgemont-cassetteGray-300">
              Every day starts with a fresh briefing — real headlines, reputable sources,
              plain-language summaries, and discussion starters your instructors weave
              directly into lessons.
            </p>
            <p className="mt-4 text-sm text-ridgemont-cassetteGray-400">
              Sources: Reuters, AP, arXiv, official company blogs, policy databases.
              Every claim is cited. Every source is logged.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="rounded-lg border border-ridgemont-cassetteGray-700 bg-ridgemont-offBlack-800/80 p-5"
              >
                <feature.icon className="h-6 w-6 text-ridgemont-warmGold-400 mb-3" />
                <h3 className="text-sm font-semibold text-white">{feature.title}</h3>
                <p className="mt-1.5 text-xs text-ridgemont-cassetteGray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
