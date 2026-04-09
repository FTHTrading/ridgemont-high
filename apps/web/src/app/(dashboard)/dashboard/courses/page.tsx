"use client";

import Link from "next/link";
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
  ArrowRight,
} from "lucide-react";

const tracks = [
  { slug: "ai-foundations", icon: Cpu, name: "AI Foundations", lessons: 12, level: "Beginner → Advanced", color: "from-ridgemont-electricBlue-500/20 to-ridgemont-electricBlue-500/5", border: "border-ridgemont-electricBlue-500/20", iconColor: "text-ridgemont-electricBlue-400", description: "Core concepts: what AI is, how models learn, neural networks, transformers, and the landscape of modern AI." },
  { slug: "prompt-engineering", icon: MessageCircle, name: "Prompt Engineering", lessons: 10, level: "Beginner → Advanced", color: "from-ridgemont-neonMagenta-500/20 to-ridgemont-neonMagenta-500/5", border: "border-ridgemont-neonMagenta-500/20", iconColor: "text-ridgemont-neonMagenta-400", description: "The science and craft of communicating with AI — from zero-shot to multi-turn, chain-of-thought, and autonomous agents." },
  { slug: "generative-ai", icon: Paintbrush, name: "Generative AI & Creativity", lessons: 8, level: "Beginner → Intermediate", color: "from-ridgemont-warmGold-500/20 to-ridgemont-warmGold-500/5", border: "border-ridgemont-warmGold-500/20", iconColor: "text-ridgemont-warmGold-400", description: "Image, audio, video, and text generation — from diffusion models to multimodal workflows." },
  { slug: "ai-coding", icon: Code2, name: "AI-Assisted Coding", lessons: 10, level: "Intermediate → Advanced", color: "from-ridgemont-arcadeGreen-500/20 to-ridgemont-arcadeGreen-500/5", border: "border-ridgemont-arcadeGreen-500/20", iconColor: "text-ridgemont-arcadeGreen-400", description: "Pair programming with AI — code generation, debugging, refactoring, and building full applications with copilots." },
  { slug: "ai-safety", icon: Shield, name: "AI Safety & Alignment", lessons: 6, level: "Intermediate", color: "from-red-500/20 to-red-500/5", border: "border-red-500/20", iconColor: "text-red-400", description: "Alignment, RLHF, red teaming, AI arms control, deepfakes, jailbreaks, and responsible disclosure." },
  { slug: "ai-ethics", icon: Scale, name: "AI Ethics & Society", lessons: 8, level: "Beginner → Intermediate", color: "from-ridgemont-vhsPurple-500/20 to-ridgemont-vhsPurple-500/5", border: "border-ridgemont-vhsPurple-500/20", iconColor: "text-ridgemont-vhsPurple-400", description: "Bias, fairness, labor, regulation — real policy analysis and debate practice on AI's societal impact." },
  { slug: "ai-industry", icon: Building2, name: "AI in Industry", lessons: 8, level: "Intermediate", color: "from-cyan-500/20 to-cyan-500/5", border: "border-cyan-500/20", iconColor: "text-cyan-400", description: "How AI transforms healthcare, finance, agriculture, defense, transportation, and creative industries." },
  { slug: "agents-autonomy", icon: Brain, name: "Agents & Autonomy", lessons: 10, level: "Advanced", color: "from-orange-500/20 to-orange-500/5", border: "border-orange-500/20", iconColor: "text-orange-400", description: "Agentic patterns — ReAct, tool use, planners, multi-agent systems, MCP, and real-world agent deployment." },
  { slug: "data-retrieval", icon: Database, name: "Data & Retrieval", lessons: 8, level: "Intermediate → Advanced", color: "from-emerald-500/20 to-emerald-500/5", border: "border-emerald-500/20", iconColor: "text-emerald-400", description: "Embeddings, vector search, chunking strategies, RAG architectures, hybrid retrieval, and reranking." },
];

export default function CoursesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-2xl font-bold text-white">
          Learning Tracks
        </h1>
        <p className="mt-1 text-sm text-ridgemont-cassetteGray-400">
          Nine structured tracks covering the full spectrum of AI literacy.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {tracks.map((track) => (
          <Link
            key={track.slug}
            href={`/dashboard/courses/${track.slug}`}
            className={`group rounded-xl border ${track.border} bg-gradient-to-br ${track.color} p-6 hover:scale-[1.01] hover:shadow-lg transition-all`}
          >
            <div className="flex items-start justify-between mb-4">
              <track.icon className={`h-8 w-8 ${track.iconColor}`} />
              <span className="rounded-md bg-ridgemont-offBlack-800/80 px-2.5 py-1 text-[10px] font-medium text-ridgemont-cassetteGray-300">
                {track.level}
              </span>
            </div>
            <h3 className="font-heading text-lg font-semibold text-white">
              {track.name}
            </h3>
            <p className="mt-2 text-sm text-ridgemont-cassetteGray-300 leading-relaxed line-clamp-2">
              {track.description}
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-ridgemont-cassetteGray-400">
                {track.lessons} lessons
              </span>
              <ArrowRight className="h-4 w-4 text-ridgemont-cassetteGray-500 group-hover:text-white transition-colors" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
