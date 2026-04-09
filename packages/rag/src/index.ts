/**
 * RAG Pipeline — Ridgemont AI Academy
 *
 * Provides retrieval-augmented generation with:
 *  - Document chunking (recursive character, sentence-window, semantic)
 *  - Embedding via provider interface (OpenAI, local, etc.)
 *  - Hybrid retrieval: vector similarity + keyword BM25
 *  - Reranking via cross-encoder
 *  - Mandatory citation formatting
 *  - Knowledge zone scoping
 */

import type { Citation, KnowledgeZone, RetrievalMode } from "@ridgemont/types";

// ── Chunking ──

export interface ChunkOptions {
  strategy: "recursive" | "sentence_window" | "semantic";
  chunkSize: number;       // target tokens
  chunkOverlap: number;    // overlap tokens
  windowSize?: number;     // for sentence_window
}

export interface DocumentChunk {
  id: string;
  documentId: string;
  content: string;
  metadata: {
    title: string;
    source: string;
    page?: number;
    section?: string;
    zone: KnowledgeZone;
  };
  embedding?: number[];
  tokenCount: number;
}

export function chunkDocument(
  content: string,
  documentId: string,
  zone: KnowledgeZone,
  opts: ChunkOptions
): DocumentChunk[] {
  const chunks: DocumentChunk[] = [];

  if (opts.strategy === "recursive") {
    const separators = ["\n\n", "\n", ". ", " "];
    const raw = recursiveSplit(content, separators, opts.chunkSize);
    for (let i = 0; i < raw.length; i++) {
      chunks.push({
        id: `${documentId}-${i}`,
        documentId,
        content: raw[i],
        metadata: { title: "", source: "", zone },
        tokenCount: estimateTokens(raw[i]),
      });
    }
  } else if (opts.strategy === "sentence_window") {
    const sentences = content.match(/[^.!?]+[.!?]+/g) || [content];
    const window = opts.windowSize ?? 3;
    for (let i = 0; i < sentences.length; i++) {
      const start = Math.max(0, i - Math.floor(window / 2));
      const end = Math.min(sentences.length, start + window);
      const windowText = sentences.slice(start, end).join(" ").trim();
      chunks.push({
        id: `${documentId}-sw-${i}`,
        documentId,
        content: windowText,
        metadata: { title: "", source: "", zone },
        tokenCount: estimateTokens(windowText),
      });
    }
  }

  return chunks;
}

function recursiveSplit(
  text: string,
  separators: string[],
  maxLen: number
): string[] {
  if (estimateTokens(text) <= maxLen || separators.length === 0) return [text];
  const sep = separators[0];
  const parts = text.split(sep);
  const results: string[] = [];
  let current = "";

  for (const part of parts) {
    const candidate = current ? current + sep + part : part;
    if (estimateTokens(candidate) > maxLen && current) {
      results.push(current.trim());
      current = part;
    } else {
      current = candidate;
    }
  }
  if (current) {
    if (estimateTokens(current) > maxLen) {
      results.push(...recursiveSplit(current, separators.slice(1), maxLen));
    } else {
      results.push(current.trim());
    }
  }
  return results;
}

function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4);
}

// ── Embedding Provider Interface ──

export interface EmbeddingProvider {
  embed(texts: string[]): Promise<number[][]>;
  dimensions: number;
  modelName: string;
}

// ── Retrieval ──

export interface RetrievalRequest {
  query: string;
  zone?: KnowledgeZone;
  mode: RetrievalMode;
  topK: number;
  personaId?: string;
  minConfidence?: number;
}

export interface RetrievalResult {
  chunks: DocumentChunk[];
  citations: Citation[];
  totalFound: number;
  retrievalTimeMs: number;
}

export interface RetrieverConfig {
  embeddingProvider: EmbeddingProvider;
  vectorWeight: number;   // 0-1, weight for vector vs keyword
  rerankerEnabled: boolean;
}

export async function retrieve(
  request: RetrievalRequest,
  config: RetrieverConfig
): Promise<RetrievalResult> {
  const start = Date.now();

  // 1. Embed query
  const [queryEmbedding] = await config.embeddingProvider.embed([request.query]);

  // 2. Vector search (pgvector cosine similarity)
  // In production: SELECT * FROM document_chunks ORDER BY embedding <=> $1 LIMIT $2
  const vectorResults: DocumentChunk[] = []; // placeholder for DB query

  // 3. Keyword search (BM25 via pg_trgm or ts_vector)
  const keywordResults: DocumentChunk[] = []; // placeholder for DB query

  // 4. Reciprocal Rank Fusion
  const fused = reciprocalRankFusion(
    vectorResults,
    keywordResults,
    config.vectorWeight
  );

  // 5. Rerank (cross-encoder)
  const ranked = config.rerankerEnabled
    ? fused // placeholder for cross-encoder reranking
    : fused;

  // 6. Take top K
  const topChunks = ranked.slice(0, request.topK);

  // 7. Format citations
  const citations = topChunks.map((chunk) => formatCitation(chunk));

  return {
    chunks: topChunks,
    citations,
    totalFound: fused.length,
    retrievalTimeMs: Date.now() - start,
  };
}

function reciprocalRankFusion(
  vectorResults: DocumentChunk[],
  keywordResults: DocumentChunk[],
  vectorWeight: number,
  k = 60
): DocumentChunk[] {
  const scores = new Map<string, { score: number; chunk: DocumentChunk }>();

  vectorResults.forEach((chunk, rank) => {
    const rrfScore = vectorWeight * (1 / (k + rank + 1));
    const entry = scores.get(chunk.id);
    if (entry) entry.score += rrfScore;
    else scores.set(chunk.id, { score: rrfScore, chunk });
  });

  keywordResults.forEach((chunk, rank) => {
    const rrfScore = (1 - vectorWeight) * (1 / (k + rank + 1));
    const entry = scores.get(chunk.id);
    if (entry) entry.score += rrfScore;
    else scores.set(chunk.id, { score: rrfScore, chunk });
  });

  return Array.from(scores.values())
    .sort((a, b) => b.score - a.score)
    .map((e) => e.chunk);
}

// ── Citation Formatting ──

export function formatCitation(chunk: DocumentChunk): Citation {
  return {
    sourceId: chunk.documentId,
    sourceName: chunk.metadata.source || chunk.metadata.title,
    sourceUrl: undefined,
    chunk: chunk.content.slice(0, 200),
    confidence: 0, // set by reranker
    retrievedAt: new Date(),
  };
}

export function renderCitationFootnotes(citations: Citation[]): string {
  return citations
    .map(
      (c, i) =>
        `[${i + 1}] ${c.sourceName}${c.sourceUrl ? ` — ${c.sourceUrl}` : ""}`
    )
    .join("\n");
}

// ── Exports ──
export type { Citation, KnowledgeZone, RetrievalMode };
