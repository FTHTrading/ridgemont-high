"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Bot,
  Plug,
  Search,
  Terminal,
  Film,
  Rocket,
} from "lucide-react";

const labs = [
  {
    icon: MessageSquare,
    name: "Prompt Lab",
    description:
      "Live prompt editor with templates, side-by-side comparison, persona switcher, and scoring rubrics.",
  },
  {
    icon: Bot,
    name: "Agent Lab",
    description:
      "Assemble agent workflows, choose planners and tools, inspect reasoning traces, and score outcomes.",
  },
  {
    icon: Plug,
    name: "MCP Lab",
    description:
      "Connect tools, simulate permissions, build workflows, and run test jobs with input/output inspection.",
  },
  {
    icon: Search,
    name: "RAG Lab",
    description:
      "Upload documents, visualize chunks and embeddings, test search strategies, and inspect citations.",
  },
  {
    icon: Terminal,
    name: "Code Lab",
    description:
      "Sandboxed editor with AI debugging coach, diff viewer, starter apps, and instructor critique.",
  },
  {
    icon: Film,
    name: "Media Analysis Lab",
    description:
      "Explore films and articles, analyze themes across eras, and connect culture to technology.",
  },
  {
    icon: Rocket,
    name: "Project Studio",
    description:
      "Full project canvas with milestones, mentor assignments, feedback loops, and shareable pages.",
  },
];

export function LabShowcase() {
  return (
    <section id="labs" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Real Labs. Real Building.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-ridgemont-cassetteGray-300">
            Seven interactive labs where you learn by doing — not just watching.
            Every lab has history, versioning, downloadable outputs, and instructor feedback.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {labs.map((lab, i) => (
            <motion.div
              key={lab.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group rounded-xl border border-ridgemont-cassetteGray-600 bg-ridgemont-offBlack-800/60 p-6 hover:border-ridgemont-electricBlue-500/40 hover:shadow-neon-blue transition-all"
            >
              <lab.icon className="h-8 w-8 text-ridgemont-electricBlue-400 mb-4 group-hover:text-ridgemont-electricBlue-300 transition-colors" />
              <h3 className="font-heading text-base font-semibold text-white">
                {lab.name}
              </h3>
              <p className="mt-2 text-sm text-ridgemont-cassetteGray-300 leading-relaxed">
                {lab.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
