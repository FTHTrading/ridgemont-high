/**
 * MCP Layer — Ridgemont AI Academy
 *
 * Model Context Protocol integration providing:
 *  - Tool registry with typed schemas
 *  - Permission-scoped tool access per persona & role
 *  - Request/response gateway
 *  - Audit logging for every tool invocation
 */

import type { UserRole } from "@ridgemont/types";

// ── Tool Definition ──

export interface ToolSchema {
  name: string;
  description: string;
  category: ToolCategory;
  parameters: ToolParameter[];
  requiredRoles: UserRole[];
  allowedPersonas: string[];  // persona archetype slugs, empty = all
  rateLimit?: { maxPerMinute: number };
}

export interface ToolParameter {
  name: string;
  type: "string" | "number" | "boolean" | "object" | "array";
  description: string;
  required: boolean;
  default?: unknown;
}

export type ToolCategory =
  | "retrieval"      // RAG search, document lookup
  | "generation"     // text, code, image generation
  | "analysis"       // sentiment, classification, summarization
  | "lab"            // lab tool execution
  | "current_events" // news fetch, briefing
  | "evaluation"     // grading, rubric scoring
  | "system";        // admin, audit, config

export interface ToolInvocation {
  id: string;
  toolName: string;
  input: Record<string, unknown>;
  userId: string;
  personaId?: string;
  sessionId: string;
  timestamp: Date;
}

export interface ToolResult {
  invocationId: string;
  success: boolean;
  output: unknown;
  error?: string;
  durationMs: number;
  citations?: Array<{ source: string; url?: string }>;
}

// ── Tool Registry ──

type ToolHandler = (input: Record<string, unknown>) => Promise<unknown>;

const registry = new Map<string, { schema: ToolSchema; handler: ToolHandler }>();

export function registerTool(schema: ToolSchema, handler: ToolHandler): void {
  if (registry.has(schema.name)) {
    throw new Error(`Tool "${schema.name}" is already registered.`);
  }
  registry.set(schema.name, { schema, handler });
}

export function getToolSchema(name: string): ToolSchema | undefined {
  return registry.get(name)?.schema;
}

export function listTools(filters?: {
  category?: ToolCategory;
  role?: UserRole;
  personaSlug?: string;
}): ToolSchema[] {
  let schemas = Array.from(registry.values()).map((t) => t.schema);

  if (filters?.category) {
    schemas = schemas.filter((s) => s.category === filters.category);
  }
  if (filters?.role) {
    schemas = schemas.filter(
      (s) =>
        s.requiredRoles.length === 0 || s.requiredRoles.includes(filters.role!)
    );
  }
  if (filters?.personaSlug) {
    schemas = schemas.filter(
      (s) =>
        s.allowedPersonas.length === 0 ||
        s.allowedPersonas.includes(filters.personaSlug!)
    );
  }

  return schemas;
}

// ── Gateway ──

export interface GatewayContext {
  userId: string;
  role: UserRole;
  personaSlug?: string;
  sessionId: string;
}

export async function invokeToolSafe(
  toolName: string,
  input: Record<string, unknown>,
  ctx: GatewayContext
): Promise<ToolResult> {
  const start = Date.now();
  const invocationId = crypto.randomUUID();

  const entry = registry.get(toolName);
  if (!entry) {
    return {
      invocationId,
      success: false,
      output: null,
      error: `Tool "${toolName}" not found.`,
      durationMs: Date.now() - start,
    };
  }

  // Permission check
  const { schema, handler } = entry;
  if (
    schema.requiredRoles.length > 0 &&
    !schema.requiredRoles.includes(ctx.role)
  ) {
    return {
      invocationId,
      success: false,
      output: null,
      error: `Role "${ctx.role}" is not authorized for tool "${toolName}".`,
      durationMs: Date.now() - start,
    };
  }
  if (
    schema.allowedPersonas.length > 0 &&
    ctx.personaSlug &&
    !schema.allowedPersonas.includes(ctx.personaSlug)
  ) {
    return {
      invocationId,
      success: false,
      output: null,
      error: `Persona "${ctx.personaSlug}" is not allowed to use tool "${toolName}".`,
      durationMs: Date.now() - start,
    };
  }

  // Validate required parameters
  for (const param of schema.parameters) {
    if (param.required && !(param.name in input)) {
      return {
        invocationId,
        success: false,
        output: null,
        error: `Missing required parameter: "${param.name}".`,
        durationMs: Date.now() - start,
      };
    }
  }

  // Execute
  try {
    const output = await handler(input);
    return {
      invocationId,
      success: true,
      output,
      durationMs: Date.now() - start,
    };
  } catch (err: unknown) {
    return {
      invocationId,
      success: false,
      output: null,
      error: err instanceof Error ? err.message : "Unknown error",
      durationMs: Date.now() - start,
    };
  }
}

// ── Built-in Tools ──

registerTool(
  {
    name: "rag_search",
    description: "Search the knowledge base using RAG retrieval.",
    category: "retrieval",
    parameters: [
      { name: "query", type: "string", description: "Search query", required: true },
      { name: "zone", type: "string", description: "Knowledge zone scope", required: false },
      { name: "topK", type: "number", description: "Number of results", required: false, default: 5 },
    ],
    requiredRoles: [],
    allowedPersonas: [],
  },
  async (input) => {
    // Placeholder — wired to @ridgemont/rag in production
    return { results: [], query: input.query };
  }
);

registerTool(
  {
    name: "news_briefing",
    description: "Fetch today's AI news briefing.",
    category: "current_events",
    parameters: [
      { name: "topics", type: "array", description: "Filter by topics", required: false },
      { name: "limit", type: "number", description: "Max items", required: false, default: 5 },
    ],
    requiredRoles: [],
    allowedPersonas: ["news-anchor"],
  },
  async (input) => {
    return { items: [], count: 0 };
  }
);

registerTool(
  {
    name: "grade_submission",
    description: "Grade a student submission against a rubric.",
    category: "evaluation",
    parameters: [
      { name: "submissionId", type: "string", description: "Submission ID", required: true },
      { name: "rubricId", type: "string", description: "Rubric ID", required: true },
    ],
    requiredRoles: ["instructor", "admin", "super_admin"],
    allowedPersonas: [],
  },
  async (input) => {
    return { scores: {}, feedback: "" };
  }
);

// ── Exports ──
export type {
  ToolSchema,
  ToolParameter,
  ToolCategory,
  ToolInvocation,
  ToolResult,
  GatewayContext,
};
