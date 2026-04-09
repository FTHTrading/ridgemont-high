"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  MessageCircle,
  Paintbrush,
  Code2,
  Shield,
  Scale,
  Building2,
  Brain,
  Database,
} from "lucide-react";

const tracks = [
  {
    icon: Cpu,
    name: "AI Foundations",
    lessons: 12,
    color: "text-ridgemont-electricBlue-400",
    bg: "bg-ridgemont-electricBlue-500/10",
    ring: "ring-ridgemont-electricBlue-500/20",
  },
  {
    icon: MessageCircle,
    name: "Prompt Engineering",
    lessons: 10,
    color: "text-ridgemont-neonMagenta-400",
    bg: "bg-ridgemont-neonMagenta-500/10",
    ring: "ring-ridgemont-neonMagenta-500/20",
  },
  {
    icon: Paintbrush,
    name: "Generative AI & Creativity",
    lessons: 8,
    color: "text-ridgemont-warmGold-400",
    bg: "bg-ridgemont-warmGold-500/10",
    ring: "ring-ridgemont-warmGold-500/20",
  },
  {
    icon: Code2,
    name: "AI-Assisted Coding",
    lessons: 10,
    color: "text-ridgemont-arcadeGreen-400",
    bg: "bg-ridgemont-arcadeGreen-500/10",
    ring: "ring-ridgemont-arcadeGreen-500/20",
  },
  {
    icon: Shield,
    name: "AI Safety & Alignment",
    lessons: 6,
    color: "text-red-400",
    bg: "bg-red-500/10",
    ring: "ring-red-500/20",
  },
  {
    icon: Scale,
    name: "AI Ethics & Society",
    lessons: 8,
    color: "text-ridgemont-vhsPurple-400",
    bg: "bg-ridgemont-vhsPurple-500/10",
    ring: "ring-ridgemont-vhsPurple-500/20",
  },
  {
    icon: Building2,
    name: "AI in Industry",
    lessons: 8,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    ring: "ring-cyan-500/20",
  },
  {
    icon: Brain,
    name: "Agents & Autonomy",
    lessons: 10,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    ring: "ring-orange-500/20",
  },
  {
    icon: Database,
    name: "Data & Retrieval",
    lessons: 8,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    ring: "ring-emerald-500/20",
  },
];

export function CourseTracks() {
  return (
    <section id="courses" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Nine Learning Tracks.{" "}
            <span className="gradient-text">One Complete Education.</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-ridgemont-cassetteGray-300">
            Structured from introductory to advanced. Each track has its own set of lessons,
            quizzes, labs, and a culminating project.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track, i) => (
            <motion.div
              key={track.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className={`group flex items-start gap-4 rounded-xl border border-ridgemont-cassetteGray-700 bg-ridgemont-offBlack-800/60 p-5 ring-1 ${track.ring} hover:border-ridgemont-cassetteGray-500 transition-all`}
            >
              <div className={`shrink-0 rounded-lg ${track.bg} p-2.5`}>
                <track.icon className={`h-5 w-5 ${track.color}`} />
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold text-white">
                  {track.name}
                </h3>
                <p className="mt-1 text-xs text-ridgemont-cassetteGray-400">
                  {track.lessons} lessons
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
