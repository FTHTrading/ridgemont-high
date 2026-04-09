"use client";

import { motion } from "framer-motion";
import {
  Brain,
  MessageCircle,
  Paintbrush,
  Code2,
  Scale,
  Building2,
  Search,
  Wrench,
  Bot,
} from "lucide-react";

const tracks = [
  {
    icon: Brain,
    name: "AI Foundations",
    lessons: 9,
    instructor: "Mr. Miyagi & Spicoli",
    color: "text-ridgemont-electricBlue-400",
    bg: "bg-ridgemont-electricBlue-500/10",
    ring: "ring-ridgemont-electricBlue-500/20",
  },
  {
    icon: MessageCircle,
    name: "Prompt Engineering",
    lessons: 2,
    instructor: "Jeff Spicoli",
    color: "text-ridgemont-neonMagenta-400",
    bg: "bg-ridgemont-neonMagenta-500/10",
    ring: "ring-ridgemont-neonMagenta-500/20",
  },
  {
    icon: Paintbrush,
    name: "Creative AI",
    lessons: 11,
    instructor: "Spicoli, Claire & Lisa",
    color: "text-ridgemont-warmGold-400",
    bg: "bg-ridgemont-warmGold-500/10",
    ring: "ring-ridgemont-warmGold-500/20",
  },
  {
    icon: Bot,
    name: "Agent Frameworks",
    lessons: 4,
    instructor: "Dwayne Wayne & Cameron",
    color: "text-ridgemont-arcadeGreen-400",
    bg: "bg-ridgemont-arcadeGreen-500/10",
    ring: "ring-ridgemont-arcadeGreen-500/20",
  },
  {
    icon: Scale,
    name: "Ethics & Society",
    lessons: 7,
    instructor: "John Bender & Cameron",
    color: "text-ridgemont-vhsPurple-400",
    bg: "bg-ridgemont-vhsPurple-500/10",
    ring: "ring-ridgemont-vhsPurple-500/20",
  },
  {
    icon: Search,
    name: "RAG & Search",
    lessons: 5,
    instructor: "Brian Johnson",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    ring: "ring-indigo-500/20",
  },
  {
    icon: Wrench,
    name: "MCP & Tools",
    lessons: 2,
    instructor: "Dwayne Wayne",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    ring: "ring-cyan-500/20",
  },
  {
    icon: Building2,
    name: "AI & Business",
    lessons: 10,
    instructor: "Ferris Bueller & Zack",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    ring: "ring-orange-500/20",
  },
  {
    icon: Code2,
    name: "Deep Learning",
    lessons: 0,
    instructor: "Coming Soon",
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
            Structured from introductory to advanced. Each track is led by named
            instructors with hands-on labs and real projects.
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
                <p className="mt-0.5 text-xs text-ridgemont-cassetteGray-400">
                  {track.lessons > 0 ? `${track.lessons} lessons` : "Coming soon"}
                </p>
                <p className={`mt-1 text-[11px] ${track.color} font-medium`}>
                  {track.instructor}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
