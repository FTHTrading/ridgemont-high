# Ridgemont AI Academy — System Architecture

## Overview

Ridgemont AI Academy is a production-grade educational platform that blends 80s/90s generational nostalgia with modern AI education, labs, and current-events intelligence. The architecture is a Turborepo monorepo with Next.js frontend, a FastAPI AI orchestration backend, PostgreSQL+pgvector for storage and retrieval, Redis for caching/queues, and a multi-agent persona system powered by MCP and RAG.

## Guiding Principles

1. **Real, not fake** — every UI element has a working backend path.
2. **Legally safe** — IP_MODE flag governs character naming; production ships "inspired" archetypes only.
3. **Education-first** — nostalgia is the wrapper; the learning OS is the product.
4. **Citation integrity** — all AI outputs trace to sources; "insufficient evidence" is a valid response.
5. **Modular** — persona, lab, retrieval, and content systems are independently extensible.
6. **Age-appropriate** — content moderation and safety are built into every agent and output path.

---

## High-Level Diagram

```
┌──────────────────────────────────────────────────────────────────┐
│                        CLIENT (Next.js)                         │
│  Landing · Dashboard · Courses · Labs · Media · Admin · Parent  │
└──────────────────┬──────────────────────────┬───────────────────┘
                   │ REST / tRPC / SSE        │ WebSocket (labs)
┌──────────────────▼──────────────────────────▼───────────────────┐
│                    API LAYER (Next.js Route Handlers)            │
│         Auth · RBAC · Rate-Limit · Audit · Feature Flags        │
└──────────────────┬──────────────────────────┬───────────────────┘
                   │                          │
   ┌───────────────▼──────────┐  ┌────────────▼────────────────┐
   │  AI ORCHESTRATION (FastAPI)│  │     WORKER (BullMQ/Node)   │
   │  Persona Router           │  │  Ingestion · Embeddings     │
   │  Agent Runtime            │  │  News Fetch · Content Index  │
   │  MCP Tool Gateway         │  │  Moderation · Notifications  │
   │  RAG Pipeline             │  │  Scheduled Jobs              │
   │  Safety Layer             │  └────────────┬────────────────┘
   └───────────────┬──────────┘               │
                   │                          │
   ┌───────────────▼──────────────────────────▼───────────────────┐
   │                     DATA LAYER                                │
   │  PostgreSQL + pgvector │ Redis │ S3/MinIO (objects)           │
   │  Prisma ORM            │ BullMQ│ Media Metadata Store         │
   └──────────────────────────────────────────────────────────────┘
```

---

## Monorepo Structure

```
ridgemont-ai-academy/
├── apps/
│   ├── web/              # Next.js 14 frontend (App Router)
│   ├── api/              # FastAPI AI orchestration service
│   ├── worker/           # BullMQ background job runner (Node/TS)
│   ├── ingest/           # Document & news ingestion pipeline (Python)
│   └── admin/            # Admin CMS (Next.js, separate deploy optional)
├── packages/
│   ├── ui/               # Shared React components (shadcn/ui + custom)
│   ├── config/           # Shared config: env, IP_MODE, feature flags
│   ├── db/               # Prisma schema, migrations, seed
│   ├── auth/             # Auth utilities, RBAC, session helpers
│   ├── agents/           # Agent runtime, router, memory, evaluation
│   ├── personas/         # Persona definitions, prompt files, templates
│   ├── mcp/              # MCP tool registry, gateway, permission layer
│   ├── rag/              # RAG pipeline: chunk, embed, retrieve, rerank
│   ├── retrieval/        # Hybrid search: BM25 + vector + fusion
│   ├── embeddings/       # Embedding model interface + batch pipeline
│   ├── labs/             # Lab framework: sandbox, execution, grading
│   ├── curriculum/       # Course/lesson/quiz data structures + MDX
│   ├── media/            # Media metadata, rights layer, era tagging
│   ├── news/             # Current-events engine, source curation
│   ├── evaluation/       # Rubrics, feedback, scoring, completion
│   ├── telemetry/        # Observability, trace logging, analytics
│   ├── security/         # Content moderation, safety filters, audit
│   ├── types/            # Shared TypeScript types
│   └── utils/            # Shared utilities
├── docs/
│   ├── architecture/     # This document + ADRs
│   ├── product/          # PRD, user stories, roadmap
│   ├── personas/         # Persona design docs
│   ├── curriculum/       # Course outlines, learning objectives
│   ├── rag/              # RAG design, chunking strategy
│   ├── mcp/              # MCP tool catalog, permission model
│   ├── ops/              # Deployment, infrastructure, monitoring
│   ├── rights/           # Media rights policy, licensing approach
│   └── safety/           # Content safety policy, moderation rules
├── prisma/               # Symlinked from packages/db
├── turbo.json
├── package.json
├── tsconfig.base.json
├── .env.example
├── .gitignore
├── docker-compose.yml
└── README.md
```

---

## Technology Choices

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Frontend | Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui | SSR+SSG, streaming, modern DX |
| State | Zustand (client), TanStack Query (server) | Lightweight, no boilerplate |
| Motion | Framer Motion | Declarative, performant animations |
| Content | MDX + structured JSON blocks | Rich lessons with interactive components |
| API | Next.js Route Handlers + FastAPI | Route Handlers for CRUD; FastAPI for AI/ML workloads |
| ORM | Prisma | Type-safe, migration-friendly |
| Database | PostgreSQL 16 + pgvector | Relational + vector search in one DB |
| Cache | Redis 7 | Sessions, rate-limits, queues, ephemeral state |
| Queue | BullMQ | Reliable job processing, retries |
| Search | pg_trgm (BM25-approx) + pgvector (ANN) + cross-encoder rerank | Hybrid retrieval without extra infra |
| Auth | NextAuth.js v5 (Auth.js) | Flexible providers, JWT+session |
| AI | OpenAI / Anthropic / local model adapters | Provider-agnostic agent layer |
| MCP | Custom gateway with tool registry | First-class tool integration |
| Object Storage | S3 / MinIO (dev) | Uploads, media metadata, exports |
| Observability | OpenTelemetry + custom trace logs | Agent traces, retrieval traces, audit |
| Deploy | Docker Compose (dev), Vercel+Fly.io or AWS (prod) | Frontend edge, backend containers |

---

## Key Subsystems

### 1. IP Mode Configuration
- `IP_MODE=inspired` (default, production) — original archetype characters
- `IP_MODE=homage` (private demo only) — themed internal references
- Controlled via environment variable, affects persona name/bio resolution

### 2. Persona Agent System
- 10 archetype instructors, each with full system prompts
- Per-persona: allowed tools, blocked behaviors, escalation rules, output format
- Agent runtime routes student interactions to the right persona
- Personas have lesson templates, rubric templates, reflection prompts

### 3. RAG Pipeline
- Knowledge Zones: curriculum, current-events, culture/media, labs, student projects, admin/policy
- Pipeline: upload → clean → chunk → embed → hybrid index → rerank → cite
- Retrieval modes: explain, evidence, compare, timeline, beginner, advanced, era-comparison

### 4. Current Events Engine
- Scheduled ingestion from trusted sources
- Tagging: topic, date, confidence, sentiment, educational relevance
- Daily explainers mapped to course modules
- "Then vs Now" card generation

### 5. Lab Framework
- Sandboxed execution environments per lab type
- Prompt Lab, Agent Lab, MCP Lab, RAG Lab, Code Lab, Media Analysis Lab, Project Studio
- Lab history, versioning, downloadable outputs
- Instructor feedback integration

### 6. Safety & Moderation
- Source allowlists/blocklists
- Prompt abuse detection
- Student-safe response mode
- Content moderation pipeline
- Guardian visibility controls
- Full audit logging

---

## Data Flow: Student Learning Session

```
Student opens lesson
  → Frontend loads lesson MDX + structured blocks
  → TanStack Query fetches personalized context from API
  → API checks RBAC, loads persona config
  → Student asks question
    → API routes to AI Orchestration (FastAPI)
    → Persona agent activated with system prompt + tools
    → RAG retrieval: hybrid search across relevant knowledge zones
    → MCP tools invoked if needed (web search, code sandbox, etc.)
    → Safety layer validates response
    → Citation metadata attached
    → Streaming response to frontend
  → Student completes lab exercise
    → Lab framework executes in sandbox
    → Evaluation engine scores against rubric
    → Feedback generated by persona agent
    → Progress recorded in database
```

---

## Environment Variables

See `.env.example` for full list. Key variables:

```
DATABASE_URL=postgresql://...
REDIS_URL=redis://localhost:6379
NEXTAUTH_SECRET=...
NEXTAUTH_URL=http://localhost:3000
IP_MODE=inspired
OPENAI_API_KEY=...
S3_BUCKET=ridgemont-uploads
S3_ENDPOINT=http://localhost:9000
MCP_GATEWAY_URL=http://localhost:8400
NEWS_INGEST_SCHEDULE=0 */4 * * *
```

---

## Phase Execution

| Phase | Scope | Status |
|-------|-------|--------|
| 1 | Architecture, monorepo, auth, schema, theme, homepage, dashboard | **Current** |
| 2 | Personas, courses, lesson engine, content studio | Next |
| 3 | Labs, MCP, RAG ingestion, hybrid retrieval, citations | Planned |
| 4 | Current-events engine, then-vs-now, media explorer, homeroom | Planned |
| 5 | Admin, parent portal, moderation, analytics, evaluation | Planned |
| 6 | Testing, polish, deployment, documentation, demo data | Planned |
