/**
 * Current Events Engine — Ridgemont AI Academy
 *
 * Ingests AI/tech news, curates age-appropriate content, generates
 * Then vs Now comparisons, builds daily briefings, and tags topics
 * to course tracks and personas.
 */

// ── Source & Topic Types ──

export type SourceTier = "academic" | "industry" | "mainstream" | "community";
export type AgeRating = "all" | "13+" | "16+" | "adult";

export interface NewsSource {
  id: string;
  name: string;
  url: string;
  tier: SourceTier;
  tags: string[];
  enabled: boolean;
}

export interface RawArticle {
  sourceId: string;
  url: string;
  title: string;
  body: string;
  publishedAt: Date;
  authors: string[];
  imageUrl?: string;
}

export interface CuratedItem {
  id: string;
  sourceId: string;
  originalUrl: string;
  title: string;
  summary: string;
  aiSummary: string;
  topics: string[];
  relatedTracks: string[];
  relatedPersonas: string[];
  ageRating: AgeRating;
  citationText: string;
  publishedAt: Date;
  curatedAt: Date;
}

export interface ThenVsNowCard {
  id: string;
  topic: string;
  thenEra: string;
  thenDescription: string;
  thenYear: number;
  nowDescription: string;
  nowYear: number;
  connectionToAI: string;
  relatedItemId: string;
}

export interface DiscussionPrompt {
  id: string;
  question: string;
  context: string;
  relatedItemId: string;
  personaId?: string;
}

export interface DailyBriefing {
  id: string;
  date: string; // YYYY-MM-DD
  headline: string;
  items: CuratedItem[];
  thenVsNow: ThenVsNowCard[];
  discussionPrompts: DiscussionPrompt[];
  generatedAt: Date;
}

// ── Source Registry ──

const sourceRegistry: NewsSource[] = [
  {
    id: "arxiv",
    name: "arXiv CS.AI",
    url: "https://arxiv.org/list/cs.AI/recent",
    tier: "academic",
    tags: ["research", "papers", "ml"],
    enabled: true,
  },
  {
    id: "mit-tech-review",
    name: "MIT Technology Review",
    url: "https://www.technologyreview.com/topic/artificial-intelligence/",
    tier: "industry",
    tags: ["analysis", "trends"],
    enabled: true,
  },
  {
    id: "openai-blog",
    name: "OpenAI Blog",
    url: "https://openai.com/blog",
    tier: "industry",
    tags: ["product", "research"],
    enabled: true,
  },
  {
    id: "google-ai-blog",
    name: "Google AI Blog",
    url: "https://blog.google/technology/ai/",
    tier: "industry",
    tags: ["product", "research"],
    enabled: true,
  },
  {
    id: "hf-blog",
    name: "Hugging Face Blog",
    url: "https://huggingface.co/blog",
    tier: "community",
    tags: ["open-source", "models"],
    enabled: true,
  },
];

export function getSources(): NewsSource[] {
  return sourceRegistry.filter((s) => s.enabled);
}

export function getSourceById(id: string): NewsSource | undefined {
  return sourceRegistry.find((s) => s.id === id);
}

// ── Topic to Track Mapping ──

const TOPIC_TRACK_MAP: Record<string, string[]> = {
  "neural-networks": ["ai-foundations", "deep-learning"],
  "llm": ["ai-foundations", "prompt-engineering", "agent-frameworks"],
  "computer-vision": ["ai-foundations", "deep-learning"],
  "reinforcement-learning": ["ai-foundations", "agent-frameworks"],
  "ethics": ["ethics-society"],
  "bias": ["ethics-society"],
  "regulation": ["ethics-society"],
  "prompt-engineering": ["prompt-engineering"],
  "rag": ["rag-search"],
  "search": ["rag-search"],
  "embeddings": ["rag-search", "deep-learning"],
  "agents": ["agent-frameworks", "mcp-tools"],
  "tools": ["mcp-tools"],
  "coding": ["ai-coding"],
  "media": ["creative-ai"],
  "art": ["creative-ai"],
  "music": ["creative-ai"],
  "business": ["ai-business"],
  "startup": ["ai-business"],
};

export function mapTopicsToTracks(topics: string[]): string[] {
  const tracks = new Set<string>();
  for (const t of topics) {
    const mapped = TOPIC_TRACK_MAP[t];
    if (mapped) mapped.forEach((track) => tracks.add(track));
  }
  return Array.from(tracks);
}

// ── Topic to Persona Mapping ──

const TOPIC_PERSONA_MAP: Record<string, string[]> = {
  "neural-networks": ["professor-hartwell"],
  "llm": ["professor-hartwell", "cipher"],
  "ethics": ["coach-williams"],
  "bias": ["coach-williams"],
  "regulation": ["coach-williams"],
  "prompt-engineering": ["ms-chen"],
  "rag": ["mr-kowalski"],
  "agents": ["cipher", "dr-nakamura"],
  "tools": ["cipher"],
  "coding": ["cipher"],
  "media": ["ms-rivera"],
  "art": ["ms-rivera"],
  "business": ["mr-kowalski"],
  "computer-vision": ["dr-nakamura"],
};

export function mapTopicsToPersonas(topics: string[]): string[] {
  const personas = new Set<string>();
  for (const t of topics) {
    const mapped = TOPIC_PERSONA_MAP[t];
    if (mapped) mapped.forEach((p) => personas.add(p));
  }
  return Array.from(personas);
}

// ── Content Safety ──

const BLOCKED_KEYWORDS = [
  "weapon", "violence", "explicit", "nsfw", "exploit", "hack",
  "malware", "deepfake abuse", "surveillance abuse",
];

export function isContentSafe(text: string): boolean {
  const lower = text.toLowerCase();
  return !BLOCKED_KEYWORDS.some((kw) => lower.includes(kw));
}

export function assignAgeRating(text: string, topics: string[]): AgeRating {
  if (topics.includes("ethics") || topics.includes("bias") || topics.includes("regulation")) {
    return "13+";
  }
  return "all";
}

// ── Curation Pipeline ──

export async function curateArticle(
  raw: RawArticle,
  generateSummary: (text: string) => Promise<string>,
  extractTopics: (text: string) => Promise<string[]>
): Promise<CuratedItem | null> {
  if (!isContentSafe(raw.body)) return null;

  const [aiSummary, topics] = await Promise.all([
    generateSummary(raw.body),
    extractTopics(raw.body),
  ]);

  const relatedTracks = mapTopicsToTracks(topics);
  const relatedPersonas = mapTopicsToPersonas(topics);

  return {
    id: crypto.randomUUID(),
    sourceId: raw.sourceId,
    originalUrl: raw.url,
    title: raw.title,
    summary: raw.body.slice(0, 300) + "…",
    aiSummary,
    topics,
    relatedTracks,
    relatedPersonas,
    ageRating: assignAgeRating(raw.body, topics),
    citationText: `${raw.authors.join(", ")}. "${raw.title}." ${getSourceById(raw.sourceId)?.name ?? "Unknown"}, ${raw.publishedAt.toLocaleDateString()}.`,
    publishedAt: raw.publishedAt,
    curatedAt: new Date(),
  };
}

// ── Then vs Now Generator ──

export interface ThenVsNowContext {
  era: string;
  year: number;
  culturalReference: string;
}

const ERA_CONTEXTS: ThenVsNowContext[] = [
  { era: "1980s", year: 1984, culturalReference: "WarGames showed AI as a Cold War threat" },
  { era: "1980s", year: 1982, culturalReference: "Tron imagined life inside a computer" },
  { era: "1990s", year: 1999, culturalReference: "The Matrix asked what is real?" },
  { era: "1990s", year: 1995, culturalReference: "Windows 95 brought PCs to every home" },
  { era: "1990s", year: 1993, culturalReference: "Jurassic Park showed CGI could be photo-real" },
  { era: "1980s", year: 1989, culturalReference: "NES Power Glove hinted at gesture controls" },
  { era: "2000s", year: 2001, culturalReference: "A.I. Artificial Intelligence explored robot emotions" },
];

export function pickEraContext(topic: string): ThenVsNowContext {
  // Deterministic but varied — hash topic string to pick an era
  let hash = 0;
  for (let i = 0; i < topic.length; i++) {
    hash = ((hash << 5) - hash + topic.charCodeAt(i)) | 0;
  }
  return ERA_CONTEXTS[Math.abs(hash) % ERA_CONTEXTS.length];
}

export async function generateThenVsNow(
  item: CuratedItem,
  generateComparison: (topic: string, era: ThenVsNowContext) => Promise<{ thenDesc: string; nowDesc: string; connection: string }>
): Promise<ThenVsNowCard> {
  const ctx = pickEraContext(item.topics[0] ?? "ai");
  const { thenDesc, nowDesc, connection } = await generateComparison(item.topics[0] ?? "ai", ctx);

  return {
    id: crypto.randomUUID(),
    topic: item.topics[0] ?? "ai",
    thenEra: ctx.era,
    thenDescription: thenDesc,
    thenYear: ctx.year,
    nowDescription: nowDesc,
    nowYear: new Date().getFullYear(),
    connectionToAI: connection,
    relatedItemId: item.id,
  };
}

// ── Daily Briefing Composer ──

export async function composeDailyBriefing(
  date: string,
  items: CuratedItem[],
  thenVsNow: ThenVsNowCard[],
  generatePrompts: (items: CuratedItem[]) => Promise<DiscussionPrompt[]>
): Promise<DailyBriefing> {
  const prompts = await generatePrompts(items);
  const headline =
    items.length > 0
      ? `${items.length} stories in AI today — ${items[0].title}`
      : "No new stories today";

  return {
    id: crypto.randomUUID(),
    date,
    headline,
    items,
    thenVsNow,
    discussionPrompts: prompts,
    generatedAt: new Date(),
  };
}

// ── Re-exports (all types exported at declaration above) ──
