/**
 * Safety & Moderation Layer — Ridgemont AI Academy
 *
 * Multi-layer content safety for an educational platform:
 *  - Input filtering (prompt injection, jailbreak, off-topic)
 *  - Output moderation (toxicity, hallucination flags, age-appropriateness)
 *  - Topic guardrails per age tier
 *  - Rate limiting per user
 *  - Audit logging for all AI interactions
 */

// ── Types ──

export type Severity = "none" | "low" | "medium" | "high" | "critical";
export type AuditAction =
  | "chat_message"
  | "lab_execution"
  | "content_generation"
  | "search_query"
  | "submission"
  | "moderation_override";

export interface ModerationResult {
  allowed: boolean;
  severity: Severity;
  reasons: string[];
  sanitizedContent?: string;
}

export interface AuditEntry {
  id: string;
  userId: string;
  action: AuditAction;
  input: string;
  output?: string;
  moderationResult: ModerationResult;
  personaId?: string;
  sessionId?: string;
  timestamp: Date;
  ip?: string;
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt: Date;
}

// ── Prompt Injection Detection ──

const INJECTION_PATTERNS = [
  /ignore\s+(all\s+)?(previous|prior|above)\s+(instructions?|prompts?|rules?)/i,
  /disregard\s+(your|the)\s+(instructions?|rules?|guidelines?)/i,
  /you\s+are\s+now\s+(a|an)\s+/i,
  /pretend\s+(you\s+are|to\s+be)\s+/i,
  /act\s+as\s+(if|though)\s+you\s+(have|are)\s+no\s+(rules?|restrictions?)/i,
  /\bDAN\b.*\bdo\s+anything\s+now\b/i,
  /system\s*:\s*/i,
  /\[INST\]/i,
  /\<\|im_start\|\>/i,
  /bypass\s+(safety|content|moderation)\s+(filter|check|system)/i,
  /jailbreak/i,
];

export function detectPromptInjection(input: string): ModerationResult {
  const matches = INJECTION_PATTERNS.filter((p) => p.test(input));
  if (matches.length > 0) {
    return {
      allowed: false,
      severity: "critical",
      reasons: ["Prompt injection attempt detected"],
    };
  }
  return { allowed: true, severity: "none", reasons: [] };
}

// ── Blocked Content Filter ──

const BLOCKED_CATEGORIES = {
  violence: [
    /\b(weapon|gun|bomb|explosive|kill|murder|attack|assault)\b/i,
    /how\s+to\s+(make|build|create)\s+(a\s+)?(weapon|bomb|explosive)/i,
  ],
  sexual: [
    /\b(nsfw|pornograph|sexually\s+explicit)\b/i,
  ],
  harmful: [
    /\b(self[- ]?harm|suicide\s+method|eating\s+disorder\s+tips?)\b/i,
    /how\s+to\s+(hack|exploit|breach|ddos)/i,
  ],
  drugs: [
    /how\s+to\s+(make|synthesize|cook)\s+(meth|drugs?|narcotics?)/i,
  ],
  personal_info: [
    /\b(social\s+security|ssn|credit\s+card)\s+(number|#)/i,
    /\b\d{3}[-.]?\d{2}[-.]?\d{4}\b/, // SSN pattern
  ],
};

export function filterBlockedContent(input: string): ModerationResult {
  const reasons: string[] = [];

  for (const [category, patterns] of Object.entries(BLOCKED_CATEGORIES)) {
    for (const pattern of patterns) {
      if (pattern.test(input)) {
        reasons.push(`Blocked category: ${category}`);
        break;
      }
    }
  }

  if (reasons.length > 0) {
    return {
      allowed: false,
      severity: reasons.length >= 2 ? "critical" : "high",
      reasons,
    };
  }

  return { allowed: true, severity: "none", reasons: [] };
}

// ── Age-Appropriate Topic Guardrails ──

export type AgeGroup = "under13" | "13-15" | "16-17" | "18+";

const AGE_RESTRICTED_TOPICS: Record<string, AgeGroup> = {
  "autonomous weapons": "18+",
  "deepfake generation": "16-17",
  "surveillance technology": "16-17",
  "ai in warfare": "18+",
  "predictive policing debate": "16-17",
  "social credit systems": "16-17",
  "dark patterns": "13-15",
};

export function checkAgeAppropriateness(
  topics: string[],
  userAge: AgeGroup
): ModerationResult {
  const ageOrder: AgeGroup[] = ["under13", "13-15", "16-17", "18+"];
  const userLevel = ageOrder.indexOf(userAge);

  const restricted: string[] = [];
  for (const topic of topics) {
    const lower = topic.toLowerCase();
    const required = AGE_RESTRICTED_TOPICS[lower];
    if (required && ageOrder.indexOf(required) > userLevel) {
      restricted.push(topic);
    }
  }

  if (restricted.length > 0) {
    return {
      allowed: false,
      severity: "medium",
      reasons: restricted.map((t) => `Topic "${t}" not available for age group ${userAge}`),
    };
  }

  return { allowed: true, severity: "none", reasons: [] };
}

// ── Output Moderation ──

export function moderateOutput(output: string): ModerationResult {
  const reasons: string[] = [];

  // Check for unverified claims patterns
  const unverifiedClaims = /\b(studies\s+show|research\s+proves|scientists\s+say|experts\s+agree)\b/i;
  if (unverifiedClaims.test(output) && !/\[\d+\]/.test(output)) {
    reasons.push("Output contains unverified claims without citations");
  }

  // Check for absolute statements that could mislead
  const absolutes = /\b(always|never|guaranteed|100%|impossible|certain)\b.*\b(will|is|are)\b/i;
  if (absolutes.test(output)) {
    reasons.push("Output contains absolute statements — may need hedging");
  }

  // Run blocked content filter on output too
  const blocked = filterBlockedContent(output);
  if (!blocked.allowed) {
    return blocked;
  }

  return {
    allowed: true,
    severity: reasons.length > 0 ? "low" : "none",
    reasons,
  };
}

// ── Rate Limiting ──

const rateLimitStore = new Map<string, { count: number; windowStart: number }>();

const RATE_LIMITS = {
  chat_message: { max: 60, windowMs: 60_000 },
  lab_execution: { max: 20, windowMs: 60_000 },
  search_query: { max: 30, windowMs: 60_000 },
  content_generation: { max: 10, windowMs: 60_000 },
  submission: { max: 5, windowMs: 60_000 },
  moderation_override: { max: 3, windowMs: 60_000 },
};

export function checkRateLimit(userId: string, action: AuditAction): RateLimitResult {
  const limit = RATE_LIMITS[action];
  const key = `${userId}:${action}`;
  const now = Date.now();

  let entry = rateLimitStore.get(key);
  if (!entry || now - entry.windowStart > limit.windowMs) {
    entry = { count: 0, windowStart: now };
  }

  entry.count++;
  rateLimitStore.set(key, entry);

  const remaining = Math.max(0, limit.max - entry.count);
  const resetAt = new Date(entry.windowStart + limit.windowMs);

  return {
    allowed: entry.count <= limit.max,
    remaining,
    resetAt,
  };
}

// ── Full Moderation Pipeline ──

export interface ModerationPipelineInput {
  userId: string;
  action: AuditAction;
  content: string;
  userAge?: AgeGroup;
  topics?: string[];
}

export async function runModerationPipeline(
  input: ModerationPipelineInput
): Promise<ModerationResult> {
  // 1. Rate limit
  const rateResult = checkRateLimit(input.userId, input.action);
  if (!rateResult.allowed) {
    return {
      allowed: false,
      severity: "medium",
      reasons: [`Rate limit exceeded for ${input.action}. Try again at ${rateResult.resetAt.toISOString()}`],
    };
  }

  // 2. Prompt injection
  const injectionResult = detectPromptInjection(input.content);
  if (!injectionResult.allowed) return injectionResult;

  // 3. Blocked content
  const blockedResult = filterBlockedContent(input.content);
  if (!blockedResult.allowed) return blockedResult;

  // 4. Age check
  if (input.userAge && input.topics) {
    const ageResult = checkAgeAppropriateness(input.topics, input.userAge);
    if (!ageResult.allowed) return ageResult;
  }

  return { allowed: true, severity: "none", reasons: [] };
}

// ── Audit Logger ──

const auditLog: AuditEntry[] = [];

export function logAuditEntry(entry: Omit<AuditEntry, "id" | "timestamp">): AuditEntry {
  const full: AuditEntry = {
    ...entry,
    id: crypto.randomUUID(),
    timestamp: new Date(),
  };
  auditLog.push(full);
  return full;
}

export function getAuditLog(filters?: {
  userId?: string;
  action?: AuditAction;
  since?: Date;
  limit?: number;
}): AuditEntry[] {
  let result = auditLog;

  if (filters?.userId) result = result.filter((e) => e.userId === filters.userId);
  if (filters?.action) result = result.filter((e) => e.action === filters.action);
  if (filters?.since) result = result.filter((e) => e.timestamp >= filters.since!);

  result.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

  if (filters?.limit) result = result.slice(0, filters.limit);

  return result;
}

// ── Exports ──
export type {
  ModerationResult,
  AuditEntry,
  RateLimitResult,
  ModerationPipelineInput,
};
