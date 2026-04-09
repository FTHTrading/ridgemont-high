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
    command: "prompt.run()",
    description:
      "Live prompt editor with templates, comparison, persona switcher, and scoring rubrics.",
    status: "● ONLINE",
    statusColor: "text-ridgemont-arcadeGreen-400",
  },
  {
    icon: Bot,
    name: "Agent Lab",
    command: "agent.build()",
    description:
      "Assemble agent workflows, choose planners and tools, inspect reasoning traces.",
    status: "● ONLINE",
    statusColor: "text-ridgemont-arcadeGreen-400",
  },
  {
    icon: Plug,
    name: "MCP Lab",
    command: "mcp.connect()",
    description:
      "Connect tools, simulate permissions, build workflows, run test jobs.",
    status: "● ONLINE",
    statusColor: "text-ridgemont-arcadeGreen-400",
  },
  {
    icon: Search,
    name: "RAG Lab",
    command: "rag.retrieve()",
    description:
      "Upload documents, visualize chunks and embeddings, test search, inspect citations.",
    status: "● ONLINE",
    statusColor: "text-ridgemont-arcadeGreen-400",
  },
  {
    icon: Terminal,
    name: "Code Lab",
    command: "code.execute()",
    description:
      "Sandboxed editor with AI debugging coach, diff viewer, and instructor critique.",
    status: "● ONLINE",
    statusColor: "text-ridgemont-arcadeGreen-400",
  },
  {
    icon: Film,
    name: "Media Lab",
    command: "media.analyze()",
    description:
      "Explore historical media, analyze themes across eras, connect culture to tech.",
    status: "● ONLINE",
    statusColor: "text-ridgemont-arcadeGreen-400",
  },
  {
    icon: Rocket,
    name: "Project Studio",
    command: "project.ship()",
    description:
      "Full project canvas with milestones, mentor feedback, and shareable portfolio pages.",
    status: "● ONLINE",
    statusColor: "text-ridgemont-arcadeGreen-400",
  },
];

export function LabShowcase() {
  return (
    <section id="labs" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 rounded-md bg-ridgemont-electricBlue-500/10 px-3 py-1 text-xs font-medium text-ridgemont-electricBlue-400 ring-1 ring-inset ring-ridgemont-electricBlue-500/20 mb-4">
            <Terminal className="h-3 w-3" /> Hands-On
          </span>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-5xl">
            Real Labs. <span className="gradient-text">Real Building.</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-ridgemont-cassetteGray-300">
            Seven interactive labs where you learn by doing — not just watching.
            Every lab has history, versioning, and instructor feedback.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {labs.map((lab, i) => (
            <motion.div
              key={lab.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group terminal-card overflow-hidden hover:border-ridgemont-electricBlue-500/40 hover:shadow-[0_0_30px_rgba(0,191,255,0.1)] transition-all duration-300"
            >
              {/* Terminal header */}
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500/80" />
                <div className="terminal-dot bg-yellow-500/80" />
                <div className="terminal-dot bg-green-500/80" />
                <span className="ml-auto text-[10px] text-ridgemont-cassetteGray-500">
                  {lab.command}
                </span>
              </div>

              {/* Terminal body */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <lab.icon className="h-7 w-7 text-ridgemont-electricBlue-400 group-hover:text-ridgemont-electricBlue-300 transition-colors" />
                  <span className={`text-[10px] font-mono ${lab.statusColor}`}>
                    {lab.status}
                  </span>
                </div>
                <h3 className="font-heading text-base font-semibold text-white">
                  {lab.name}
                </h3>
                <p className="mt-2 text-sm text-ridgemont-cassetteGray-400 leading-relaxed font-sans">
                  {lab.description}
                </p>

                {/* Fake terminal prompt */}
                <div className="mt-4 flex items-center gap-1.5 text-[11px] font-mono">
                  <span className="text-ridgemont-arcadeGreen-500">$</span>
                  <span className="text-ridgemont-cassetteGray-500">
                    Enter lab
                  </span>
                  <span className="typing-cursor" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
