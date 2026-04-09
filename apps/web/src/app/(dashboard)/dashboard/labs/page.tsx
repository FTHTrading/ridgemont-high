"use client";

import Link from "next/link";
import {
  MessageSquare,
  Bot,
  Plug,
  Search,
  Terminal,
  Film,
  Rocket,
  Clock,
  ArrowRight,
} from "lucide-react";

const labs = [
  {
    slug: "prompt",
    icon: MessageSquare,
    name: "Prompt Lab",
    description:
      "Live prompt editor with templates, side-by-side comparison, persona switcher, and scoring rubrics.",
    sessions: 12,
    color: "text-ridgemont-neonMagenta-400",
    bg: "bg-ridgemont-neonMagenta-500/10",
    border: "border-ridgemont-neonMagenta-500/20",
  },
  {
    slug: "agent",
    icon: Bot,
    name: "Agent Lab",
    description:
      "Assemble agent workflows — choose planners and tools, inspect reasoning traces, and score outcomes.",
    sessions: 5,
    color: "text-ridgemont-electricBlue-400",
    bg: "bg-ridgemont-electricBlue-500/10",
    border: "border-ridgemont-electricBlue-500/20",
  },
  {
    slug: "mcp",
    icon: Plug,
    name: "MCP Lab",
    description:
      "Connect tools, simulate permissions, build workflows, and run test jobs with input/output inspection.",
    sessions: 3,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
  {
    slug: "rag",
    icon: Search,
    name: "RAG Lab",
    description:
      "Upload documents, visualize chunks and embeddings, test search strategies, and inspect citations.",
    sessions: 8,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    slug: "code",
    icon: Terminal,
    name: "Code Lab",
    description:
      "Sandboxed editor with AI debugging coach, diff viewer, starter apps, and instructor critique.",
    sessions: 7,
    color: "text-ridgemont-arcadeGreen-400",
    bg: "bg-ridgemont-arcadeGreen-500/10",
    border: "border-ridgemont-arcadeGreen-500/20",
  },
  {
    slug: "media",
    icon: Film,
    name: "Media Analysis Lab",
    description:
      "Explore films and articles, analyze themes across eras, and connect culture to technology.",
    sessions: 2,
    color: "text-ridgemont-vhsPurple-400",
    bg: "bg-ridgemont-vhsPurple-500/10",
    border: "border-ridgemont-vhsPurple-500/20",
  },
  {
    slug: "project",
    icon: Rocket,
    name: "Project Studio",
    description:
      "Full project canvas with milestones, mentor assignments, feedback loops, and shareable pages.",
    sessions: 1,
    color: "text-ridgemont-warmGold-400",
    bg: "bg-ridgemont-warmGold-500/10",
    border: "border-ridgemont-warmGold-500/20",
  },
];

export default function LabsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-2xl font-bold text-white">
          Interactive Labs
        </h1>
        <p className="mt-1 text-sm text-ridgemont-cassetteGray-400">
          Seven hands-on labs with history, versioning, downloadable outputs, and mentor feedback.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {labs.map((lab) => (
          <Link
            key={lab.slug}
            href={`/dashboard/labs/${lab.slug}`}
            className={`group rounded-xl border ${lab.border} bg-ridgemont-offBlack-800/60 p-6 hover:shadow-lg transition-all`}
          >
            <div className={`inline-flex rounded-lg ${lab.bg} p-3 mb-4`}>
              <lab.icon className={`h-6 w-6 ${lab.color}`} />
            </div>
            <h3 className="font-heading text-lg font-semibold text-white">
              {lab.name}
            </h3>
            <p className="mt-2 text-sm text-ridgemont-cassetteGray-300 leading-relaxed">
              {lab.description}
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="flex items-center gap-1 text-xs text-ridgemont-cassetteGray-500">
                <Clock className="h-3 w-3" /> {lab.sessions} sessions
              </span>
              <span className="flex items-center gap-1 text-xs text-ridgemont-cassetteGray-400 group-hover:text-white transition-colors">
                Open <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
