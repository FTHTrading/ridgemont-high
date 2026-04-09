/**
 * Seed Content — Index
 *
 * Re-exports all seed data for database seeding scripts.
 */

export {
  AI_FOUNDATIONS_SEEDS,
  AI_FOUNDATIONS_TRACK,
  lesson01_whatIsAI,
  lesson02_howMachinesLearn,
  lesson03_neuralNetworks,
} from "./seeds/ai-foundations";

export {
  PROMPT_ENGINEERING_SEEDS,
  PROMPT_ENGINEERING_TRACK,
} from "./seeds/prompt-engineering";

export {
  ETHICS_SOCIETY_SEEDS,
  ETHICS_SOCIETY_TRACK,
} from "./seeds/ethics-society";

export type { SeedLesson } from "./seeds/ai-foundations";

// All tracks
export const ALL_TRACKS = [
  { slug: "ai-foundations", name: "AI Foundations", icon: "Brain", color: "from-fuchsia-500 to-purple-600", level: "Beginner", lessonCount: 12 },
  { slug: "prompt-engineering", name: "Prompt Engineering", icon: "MessageSquare", color: "from-cyan-500 to-blue-600", level: "Beginner", lessonCount: 10 },
  { slug: "ethics-society", name: "Ethics & Society", icon: "Scale", color: "from-amber-500 to-orange-600", level: "Beginner", lessonCount: 10 },
  { slug: "agent-frameworks", name: "Agent Frameworks", icon: "Bot", color: "from-emerald-500 to-teal-600", level: "Intermediate", lessonCount: 12 },
  { slug: "rag-search", name: "RAG & Search", icon: "Search", color: "from-blue-500 to-indigo-600", level: "Intermediate", lessonCount: 10 },
  { slug: "mcp-tools", name: "MCP & Tools", icon: "Wrench", color: "from-violet-500 to-purple-600", level: "Intermediate", lessonCount: 8 },
  { slug: "creative-ai", name: "Creative AI", icon: "Palette", color: "from-pink-500 to-rose-600", level: "Beginner", lessonCount: 10 },
  { slug: "deep-learning", name: "Deep Learning", icon: "Layers", color: "from-orange-500 to-red-600", level: "Advanced", lessonCount: 14 },
  { slug: "ai-business", name: "AI & Business", icon: "TrendingUp", color: "from-green-500 to-emerald-600", level: "Intermediate", lessonCount: 8 },
];
