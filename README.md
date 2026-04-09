<div align="center">

# 🎓 RIDGEMONT HIGH

### *Where AI Meets the Halls of Knowledge*

**The 80s/90s-Inspired AI Education Platform**

[![Next.js](https://img.shields.io/badge/Next.js_14-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL_16-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Redis](https://img.shields.io/badge/Redis_7-DC382D?style=for-the-badge&logo=redis&logoColor=white)](https://redis.io/)
[![Turborepo](https://img.shields.io/badge/Turborepo-EF4444?style=for-the-badge&logo=turborepo&logoColor=white)](https://turbo.build/)
[![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)](https://pnpm.io/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

> 🕹️ *10 AI Teacher Personas · 7 Interactive Labs · 9 Learning Tracks · RAG Citations · MCP Tools · Full Safety Layer*

</div>

---

## 📋 TABLE OF CONTENTS

| # | Section | Description |
|:-:|:--------|:------------|
| 🟣 | [**System Overview**](#-system-overview) | What Ridgemont High is and why it exists |
| 🔵 | [**Full System Flow**](#-full-system-flow) | End-to-end request lifecycle diagram |
| 🟢 | [**Architecture Map**](#-architecture-map) | Complete file tree with annotations |
| 🟠 | [**Package Registry**](#-package-registry) | All 12 packages with status & dependencies |
| 🔴 | [**Tech Stack**](#-tech-stack) | Every technology with version and purpose |
| 🟡 | [**AI Teacher Personas**](#-ai-teacher-personas) | All 10 mentors with specializations |
| 🟣 | [**Learning Tracks**](#-learning-tracks) | 9 tracks from Beginner to Advanced |
| 🔵 | [**Interactive Labs**](#-interactive-labs) | 7 hands-on lab environments |
| 🟢 | [**Safety & Moderation**](#-safety--moderation) | Multi-layer content protection |
| 🟠 | [**Design System**](#-design-system) | Retro aesthetic · tokens · components |
| 🔴 | [**Database Schema**](#-database-schema) | 25+ Prisma models with relations |
| 🟡 | [**Pages & Routes**](#-pages--routes) | Every route in the application |
| 🟣 | [**Admin Panel**](#-admin-panel) | Content studio · users · moderation |
| 🔵 | [**Quick Start**](#-quick-start) | Setup in 5 commands |
| 🟢 | [**Environment Variables**](#-environment-variables) | Required config with descriptions |
| 🟠 | [**IP Mode System**](#-ip-mode-system) | Legal safety for cultural references |
| 🔴 | [**Contributing**](#-contributing) | How to add content and features |

---

## 🟣 SYSTEM OVERVIEW

**Ridgemont High** is a production-grade AI education platform that teaches artificial intelligence through the lens of 80s/90s culture. Students learn from 10 themed AI teacher personas, each with unique personalities, teaching styles, and domain expertise. Every lesson is citation-backed, age-appropriate, and moderated.

### The Core Loop

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐     ┌──────────────┐
│   STUDENT   │────▶│  CHOOSE A    │────▶│  LEARN WITH  │────▶│  PRACTICE IN │
│  ENROLLS    │     │  TRACK       │     │  A PERSONA   │     │  A LAB       │
└─────────────┘     └──────────────┘     └─────────────┘     └──────────────┘
                                                │                     │
                                                ▼                     ▼
                                         ┌─────────────┐     ┌──────────────┐
                                         │  CITATIONS   │     │  PROJECTS &  │
                                         │  VERIFIED    │     │  PORTFOLIO   │
                                         └─────────────┘     └──────────────┘
```

---

## 🔵 FULL SYSTEM FLOW

Complete request lifecycle from browser to AI response:

```
╔══════════════════════════════════════════════════════════════════════════╗
║                        🌐 BROWSER (Next.js Client)                     ║
║  Landing Page → Dashboard → Courses → Lessons → Labs → Projects       ║
╚══════════════════════════════╤═══════════════════════════════════════════╝
                               │
                    ┌──────────▼──────────┐
                    │  🔐 AUTH LAYER      │
                    │  NextAuth v5 (JWT)  │
                    │  6 Roles · RBAC     │
                    │  Permission Gates   │
                    └──────────┬──────────┘
                               │
          ┌────────────────────┼────────────────────┐
          │                    │                    │
   ┌──────▼──────┐     ┌──────▼──────┐     ┌──────▼──────┐
   │ 📚 CONTENT  │     │ 🧪 LAB      │     │ 💬 CHAT     │
   │ ENGINE      │     │ ENGINE      │     │ ENGINE      │
   │             │     │             │     │             │
   │ Lesson Load │     │ 7 Lab Types │     │ Persona     │
   │ Block Render│     │ Session Mgmt│     │ Selection   │
   │ Progress    │     │ Sandbox Exec│     │ Context     │
   └──────┬──────┘     └──────┬──────┘     └──────┬──────┘
          │                    │                    │
          └────────────────────┼────────────────────┘
                               │
                    ┌──────────▼──────────┐
                    │  🛡️ SAFETY LAYER    │
                    │  Injection Detect   │
                    │  Content Filter     │
                    │  Age Guardrails     │
                    │  Rate Limiting      │
                    │  Audit Logging      │
                    └──────────┬──────────┘
                               │
          ┌────────────────────┼────────────────────┐
          │                    │                    │
   ┌──────▼──────┐     ┌──────▼──────┐     ┌──────▼──────┐
   │ 🔧 MCP      │     │ 📖 RAG      │     │ 🎭 PERSONA  │
   │ TOOL LAYER  │     │ PIPELINE    │     │ ENGINE      │
   │             │     │             │     │             │
   │ Tool Regist │     │ Chunk Docs  │     │ 10 Mentors  │
   │ Permission  │     │ Embed/Index │     │ System Prmt │
   │ Invoke Gate │     │ Hybrid Srch │     │ IP Mode Rsv │
   │ Audit Trail │     │ RRF Ranking │     │ Style Match │
   └──────┬──────┘     │ Citation Fmt│     └──────┬──────┘
          │            └──────┬──────┘             │
          │                    │                    │
          └────────────────────┼────────────────────┘
                               │
                    ┌──────────▼──────────┐
                    │  🤖 LLM PROVIDER    │
                    │  OpenAI / Local     │
                    │  Structured Output  │
                    │  Token Management   │
                    └──────────┬──────────┘
                               │
          ┌────────────────────┼────────────────────┐
          │                    │                    │
   ┌──────▼──────┐     ┌──────▼──────┐     ┌──────▼──────┐
   │ 🗄️ POSTGRES │     │ ⚡ REDIS    │     │ 📦 MINIO    │
   │ + pgvector  │     │ Cache/Rate  │     │ S3 Storage  │
   │ 25+ Models  │     │ Sessions    │     │ Media/Docs  │
   └─────────────┘     └─────────────┘     └─────────────┘
```

### Data Flow Legend

| Symbol | Layer | Responsibility |
|:------:|:------|:---------------|
| 🌐 | **Browser** | Next.js App Router, SSR/CSR, Framer Motion |
| 🔐 | **Auth** | JWT tokens, role-based access, 6 permission tiers |
| 📚 | **Content** | Lesson blocks, course progress, quiz state |
| 🧪 | **Labs** | Sandboxed execution, session persistence, output versioning |
| 💬 | **Chat** | Persona-scoped conversations, context windows |
| 🛡️ | **Safety** | 5-layer moderation pipeline, audit trail |
| 🔧 | **MCP** | Tool registry, permission gateway, structured invocation |
| 📖 | **RAG** | Document chunking, vector search, citation formatting |
| 🎭 | **Personas** | 10 AI teachers, system prompts, IP mode resolution |
| 🤖 | **LLM** | Model inference, structured output, token management |
| 🗄️ | **Database** | PostgreSQL 16 + pgvector for semantic search |
| ⚡ | **Cache** | Redis 7 for sessions, rate limits, hot data |
| 📦 | **Storage** | MinIO S3 for media, documents, lab outputs |

---

## 🟢 ARCHITECTURE MAP

```
ridgemont-high/
│
├── 📄 package.json                    # Root monorepo config
├── 📄 turbo.json                      # Turborepo pipeline definitions
├── 📄 tsconfig.base.json              # Shared TypeScript config
├── 📄 pnpm-workspace.yaml             # Workspace package declarations
├── 🐳 docker-compose.yml              # PostgreSQL + Redis + MinIO
├── 📄 .env.example                    # Environment variable template
├── 📄 .gitignore                      # Git exclusions
│
├── 📁 apps/
│   └── 📁 web/                        # 🌐 NEXT.JS 14 APPLICATION
│       └── 📁 src/
│           ├── 📁 app/
│           │   ├── 📄 layout.tsx               # Root layout (fonts, metadata)
│           │   ├── 📄 globals.css              # Global styles + Tailwind
│           │   ├── 📄 page.tsx                 # 🏠 Landing page (8 sections)
│           │   └── 📁 (dashboard)/
│           │       ├── 📄 layout.tsx           # Dashboard shell (sidebar+topbar)
│           │       └── 📁 dashboard/
│           │           ├── 📄 page.tsx          # 📊 Dashboard home
│           │           ├── 📁 courses/
│           │           │   ├── 📄 page.tsx      # 📚 Course catalog (9 tracks)
│           │           │   └── 📁 [trackSlug]/
│           │           │       ├── 📄 page.tsx  # 📖 Track detail + lessons
│           │           │       └── 📁 [lessonSlug]/
│           │           │           └── 📄 page.tsx  # 📝 Lesson viewer (7 blocks)
│           │           ├── 📁 labs/
│           │           │   └── 📄 page.tsx      # 🧪 Lab hub (7 types)
│           │           ├── 📁 teachers/
│           │           │   └── 📄 page.tsx      # 🎭 Meet the mentors (10)
│           │           ├── 📁 today/
│           │           │   └── 📄 page.tsx      # 📰 Daily AI briefing
│           │           ├── 📁 projects/
│           │           │   └── 📄 page.tsx      # 🏗️ Student projects
│           │           ├── 📁 settings/
│           │           │   └── 📄 page.tsx      # ⚙️ User preferences
│           │           └── 📁 admin/
│           │               ├── 📄 page.tsx      # 👑 Admin dashboard
│           │               ├── 📁 content/
│           │               │   └── 📄 page.tsx  # ✏️ Content studio
│           │               ├── 📁 users/
│           │               │   └── 📄 page.tsx  # 👥 User management
│           │               ├── 📁 moderation/
│           │               │   └── 📄 page.tsx  # 🛡️ Moderation queue
│           │               ├── 📁 analytics/
│           │               │   └── 📄 page.tsx  # 📈 Platform analytics
│           │               └── 📁 news/
│           │                   └── 📄 page.tsx  # 📰 News curation
│           └── 📁 components/
│               ├── 📁 landing/                  # 🏠 Landing page sections
│               │   ├── 📄 hero.tsx              #   ↳ Animated hero + CTAs
│               │   ├── 📄 how-it-works.tsx      #   ↳ 4-step onboarding
│               │   ├── 📄 meet-teachers.tsx     #   ↳ 10 persona cards
│               │   ├── 📄 lab-showcase.tsx      #   ↳ 7 lab previews
│               │   ├── 📄 current-events-preview.tsx  # ↳ Today in AI
│               │   ├── 📄 course-tracks.tsx     #   ↳ 9 track grid
│               │   ├── 📄 trust-section.tsx     #   ↳ Safety pillars
│               │   └── 📄 cta-section.tsx       #   ↳ Final CTA
│               ├── 📁 layout/
│               │   ├── 📄 site-header.tsx       # 🔝 Global header
│               │   └── 📄 site-footer.tsx       # 🔻 Global footer
│               └── 📁 dashboard/
│                   ├── 📄 sidebar.tsx           # ◀️ Navigation sidebar
│                   └── 📄 topbar.tsx            # 🔍 Search + notifications
│
├── 📁 packages/
│   ├── 📁 auth/                       # 🔐 AUTHENTICATION & RBAC
│   │   ├── 📄 auth.ts                 #   ↳ NextAuth v5 config (JWT)
│   │   ├── 📄 permissions.ts          #   ↳ 6 roles, wildcard matching
│   │   └── 📄 index.ts               #   ↳ Public API
│   │
│   ├── 📁 config/                     # ⚙️ ENVIRONMENT & FLAGS
│   │   ├── 📄 env.ts                  #   ↳ Zod-validated env vars
│   │   ├── 📄 features.ts            #   ↳ Feature flag system
│   │   └── 📄 index.ts               #   ↳ IP_MODE helpers
│   │
│   ├── 📁 content/                    # 📚 SEED CONTENT
│   │   └── 📁 src/
│   │       ├── 📄 index.ts            #   ↳ Track registry + exports
│   │       └── 📁 seeds/
│   │           ├── 📄 ai-foundations.ts    # 3 lessons · Prof. Hartwell
│   │           ├── 📄 prompt-engineering.ts # 3 lessons · Ms. Chen
│   │           └── 📄 ethics-society.ts    # 3 lessons · Coach Williams
│   │
│   ├── 📁 db/                         # 🗄️ DATABASE
│   │   └── 📁 prisma/
│   │       └── 📄 schema.prisma       #   ↳ 25+ models, pgvector
│   │
│   ├── 📁 labs/                       # 🧪 LAB FRAMEWORK
│   │   └── 📁 src/
│   │       └── 📄 index.ts            #   ↳ 7 engines, session mgmt
│   │
│   ├── 📁 mcp/                        # 🔧 MCP TOOL LAYER
│   │   └── 📁 src/
│   │       └── 📄 index.ts            #   ↳ Registry, permissions, audit
│   │
│   ├── 📁 news/                       # 📰 CURRENT EVENTS ENGINE
│   │   └── 📁 src/
│   │       └── 📄 index.ts            #   ↳ Curation, Then vs Now, briefings
│   │
│   ├── 📁 personas/                   # 🎭 AI TEACHER PERSONAS
│   │   ├── 📄 types.ts               #   ↳ PersonaConfig interface
│   │   ├── 📄 registry.ts            #   ↳ All 10 registered
│   │   ├── 📄 resolver.ts            #   ↳ IP_MODE name resolution
│   │   └── 📁 definitions/           #   ↳ 10 persona files
│   │
│   ├── 📁 rag/                        # 📖 RAG PIPELINE
│   │   └── 📁 src/
│   │       └── 📄 index.ts            #   ↳ Chunk, embed, retrieve, cite
│   │
│   ├── 📁 security/                   # 🛡️ SAFETY & MODERATION
│   │   └── 📁 src/
│   │       └── 📄 index.ts            #   ↳ 5-layer pipeline + audit log
│   │
│   ├── 📁 types/                      # 📐 SHARED TYPES
│   │   └── 📁 src/
│   │       └── 📄 index.ts            #   ↳ 250+ lines of interfaces
│   │
│   └── 📁 ui/                         # 🎨 DESIGN SYSTEM
│       ├── 📄 tokens.ts               #   ↳ Colors, shadows, fonts
│       ├── 📄 button.tsx              #   ↳ 7 variants, 5 sizes
│       ├── 📄 card.tsx                #   ↳ 4 variant cards
│       ├── 📄 progress.tsx            #   ↳ Animated progress bar
│       └── 📄 retro-effects.tsx       #   ↳ Scanlines, neon, VHS, badges
│
└── 📁 docs/
    ├── 📁 architecture/
    │   └── 📄 ARCHITECTURE.md         # 📐 System architecture document
    └── 📁 product/
        └── 📄 PRD.md                  # 📋 Product requirements
```

---

## 🟠 PACKAGE REGISTRY

| Status | Package | Purpose | Dependencies |
|:------:|:--------|:--------|:-------------|
| 🟢 | `@ridgemont/types` | Shared TypeScript interfaces (250+ lines) | — |
| 🟢 | `@ridgemont/config` | Zod env validation, IP_MODE, feature flags | — |
| 🟢 | `@ridgemont/ui` | Design tokens, Button, Card, Progress, retro effects | — |
| 🟢 | `@ridgemont/db` | Prisma schema · 25+ models · pgvector | types |
| 🟢 | `@ridgemont/auth` | NextAuth v5 · JWT · 6 roles · RBAC permissions | db |
| 🟢 | `@ridgemont/personas` | 10 AI teacher definitions · system prompts · IP resolver | types, config |
| 🟢 | `@ridgemont/rag` | Chunking · embedding · hybrid retrieval · RRF · citations | types |
| 🟢 | `@ridgemont/mcp` | Tool registry · permission gateway · 3 built-in tools | types |
| 🟢 | `@ridgemont/labs` | 7 lab engines · session management · output versioning | types, mcp |
| 🟢 | `@ridgemont/news` | Source curation · Then vs Now · daily briefings | types, rag |
| 🟢 | `@ridgemont/security` | Injection detect · content filter · rate limit · audit | types |
| 🟢 | `@ridgemont/content` | Seed lessons for 3 tracks (9 lessons total) | types |

> 🟢 = Complete &nbsp;&nbsp; 🟡 = In Progress &nbsp;&nbsp; 🔴 = Not Started

### Package Dependency Graph

```
                    ┌──────────┐
                    │  types   │
                    └────┬─────┘
           ┌─────────┬──┼──┬─────────┬──────────┐
           │         │  │  │         │          │
        ┌──▼──┐   ┌──▼──▼──▼──┐  ┌──▼──┐   ┌──▼──────┐
        │ ui  │   │  config   │  │ rag │   │ security│
        └─────┘   └─────┬─────┘  └──┬──┘   └─────────┘
                        │           │
                   ┌────▼────┐   ┌──▼──┐
                   │personas │   │news │
                   └─────────┘   └─────┘
           ┌────────┐
           │  db    │──────┐
           └────┬───┘      │
                │      ┌───▼───┐
           ┌────▼────┐ │ auth  │
           │ content │ └───────┘
           └─────────┘
              ┌─────────┐
              │  mcp    │
              └────┬────┘
              ┌────▼────┐
              │  labs   │
              └─────────┘
```

---

## 🔴 TECH STACK

### Frontend

| Technology | Version | Purpose |
|:-----------|:--------|:--------|
| **Next.js** | 14 | App Router, SSR, API routes |
| **TypeScript** | 5.x | Type safety across entire codebase |
| **Tailwind CSS** | 3.x | Utility-first styling |
| **Framer Motion** | 11.x | Page & component animations |
| **Lucide React** | Latest | Icon system (consistent, tree-shakeable) |
| **CVA** | 1.x | Class variance authority for component variants |

### Backend

| Technology | Version | Purpose |
|:-----------|:--------|:--------|
| **NextAuth** | v5 | Authentication with JWT strategy |
| **Prisma** | 5.x | Type-safe ORM with migrations |
| **Zod** | 3.x | Runtime schema validation |

### Infrastructure

| Technology | Version | Purpose |
|:-----------|:--------|:--------|
| **PostgreSQL** | 16 | Primary database |
| **pgvector** | 0.7+ | Vector similarity search for RAG |
| **Redis** | 7 | Sessions, caching, rate limiting |
| **MinIO** | Latest | S3-compatible object storage |
| **Docker Compose** | 3.8 | Local development orchestration |

### Tooling

| Technology | Purpose |
|:-----------|:--------|
| **Turborepo** | Monorepo build orchestration |
| **pnpm** | Fast, disk-efficient package manager |
| **ESLint** | Code linting |
| **Vercel** | Production deployment |

---

## 🟡 AI TEACHER PERSONAS

Each persona has a full system prompt, teaching style, domain expertise, and cultural era reference.

| # | Persona | Domain | Era Vibe | Teaching Style |
|:-:|:--------|:-------|:---------|:---------------|
| 1 | **Professor Hartwell** | AI Foundations | 1950s academia | Socratic, rigorous, citation-heavy |
| 2 | **Cipher** | AI Coding | 90s hacker | Direct, code-first, debug-together |
| 3 | **Ms. Chen** | Prompt Engineering | Modern minimalist | Structured, example-driven |
| 4 | **Coach Williams** | Ethics & Society | 80s coach | Motivational, real-world analogies |
| 5 | **Dr. Nakamura** | Agent Frameworks | Cyberpunk lab | Research-oriented, systematic |
| 6 | **Ms. Rivera** | Creative AI | Pop art studio | Creative, visual, project-based |
| 7 | **Mr. Kowalski** | RAG & Search | 90s librarian | Methodical, source-obsessed |
| 8 | **Principal Torres** | Platform Guide | 80s principal | Welcoming, structured orientation |
| 9 | **Ms. Dawson** | Current Events | 90s news anchor | Timely, balanced, discussion-driven |
| 10 | **DJ Lex** | Creative AI | 80s radio DJ | Energetic, freestyle, experimental |

### Persona Resolution Flow

```
Student selects persona
        │
        ▼
┌─────────────────┐     ┌──────────────┐
│ Check IP_MODE   │────▶│  "inspired"  │──▶ Original names (production)
│ env variable    │     └──────────────┘
│                 │     ┌──────────────┐
│                 │────▶│   "homage"   │──▶ Pop-culture references (demo)
└─────────────────┘     └──────────────┘
        │
        ▼
Load system prompt + teaching style + domain constraints
        │
        ▼
Inject into LLM context window with safety guardrails
```

---

## 🟣 LEARNING TRACKS

```
  BEGINNER                    INTERMEDIATE                 ADVANCED
 ─────────                   ──────────────               ──────────
                                                     
 ┌──────────────┐           ┌──────────────┐         ┌──────────────┐
 │  🧠 AI       │     ┌───▶│  🤖 Agent    │    ┌───▶│  🔬 Deep     │
 │  Foundations  │─────┤    │  Frameworks  │    │    │  Learning    │
 │  12 lessons   │     │    │  12 lessons   │    │    │  14 lessons   │
 └──────────────┘     │    └──────────────┘    │    └──────────────┘
                      │                        │
 ┌──────────────┐     │    ┌──────────────┐    │
 │  💬 Prompt   │─────┤    │  🔍 RAG &    │────┘
 │  Engineering │     │    │  Search      │
 │  10 lessons   │     │    │  10 lessons   │
 └──────────────┘     │    └──────────────┘
                      │
 ┌──────────────┐     │    ┌──────────────┐
 │  ⚖️ Ethics   │     │    │  🔧 MCP &    │
 │  & Society   │     │    │  Tools       │
 │  10 lessons   │     │    │  8 lessons    │
 └──────────────┘     │    └──────────────┘
                      │
 ┌──────────────┐     │    ┌──────────────┐
 │  🎨 Creative │─────┘    │  💼 AI &     │
 │  AI          │          │  Business    │
 │  10 lessons   │          │  8 lessons    │
 └──────────────┘          └──────────────┘
```

| Track | Lessons | Level | Lead Persona | Description |
|:------|:-------:|:------|:-------------|:------------|
| AI Foundations | 12 | Beginner | Prof. Hartwell | From Turing to transformers |
| Prompt Engineering | 10 | Beginner | Ms. Chen | Master the art of AI instruction |
| Ethics & Society | 10 | Beginner | Coach Williams | Bias, fairness, and the future of work |
| Agent Frameworks | 12 | Intermediate | Dr. Nakamura | Planners, tools, and reasoning traces |
| RAG & Search | 10 | Intermediate | Mr. Kowalski | Chunking, retrieval, and citations |
| MCP & Tools | 8 | Intermediate | Cipher | Tool registries and permission models |
| Creative AI | 10 | Beginner | Ms. Rivera | Art, music, and media generation |
| Deep Learning | 14 | Advanced | Prof. Hartwell | CNNs, RNNs, transformers, attention |
| AI & Business | 8 | Intermediate | Principal Torres | Strategy, ROI, and adoption |

---

## 🔵 INTERACTIVE LABS

| Lab Type | Icon | Description | Key Features |
|:---------|:----:|:------------|:-------------|
| **Prompt Lab** | 💬 | Live prompt editor | Side-by-side comparison, persona switcher, scoring rubrics |
| **Agent Lab** | 🤖 | Agent workflow builder | Planner selection, tool wiring, reasoning trace inspector |
| **RAG Lab** | 📖 | Document retrieval workspace | Upload docs, visualize chunks/embeddings, test search |
| **MCP Lab** | 🔧 | Tool integration sandbox | Connect tools, simulate permissions, run test jobs |
| **Code Lab** | 💻 | Sandboxed code editor | AI debugging coach, diff viewer, starter apps |
| **Media Analysis** | 🎬 | Cross-era cultural lab | Film/article analysis, theme comparison, timeline |
| **Project Studio** | 🏗️ | Full project canvas | Milestones, mentor assignment, feedback loops, sharing |

### Lab Session Lifecycle

```
CREATE ──▶ CONFIGURE ──▶ EXECUTE ──▶ SAVE ──▶ REVIEW ──▶ EXPORT
  │           │            │          │         │          │
  │    Set lab type,   Run actions,  Auto-save  Mentor    JSON,
  │    pick persona,   get results,  + version  feedback  Markdown,
  │    load config     inspect       history    + rubric  HTML, PDF
  │                    outputs
  │
  └── Each session gets a UUID, tied to user + lab type
```

---

## 🟢 SAFETY & MODERATION

Five-layer content protection pipeline:

```
   INPUT                                                          OUTPUT
     │                                                              ▲
     ▼                                                              │
┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐
│  LAYER  │    │  LAYER  │    │  LAYER  │    │  LAYER  │    │  LAYER  │
│    1    │───▶│    2    │───▶│    3    │───▶│    4    │───▶│    5    │
│         │    │         │    │         │    │         │    │         │
│  Rate   │    │ Prompt  │    │Blocked  │    │  Age    │    │ Output  │
│  Limit  │    │Injection│    │Content  │    │ Check   │    │  Mod    │
│         │    │ Detect  │    │ Filter  │    │         │    │         │
│ 60/min  │    │10 regex │    │5 categ. │    │4 tiers  │    │Citation │
│ per-user│    │patterns │    │violence │    │under13  │    │ verify  │
│per-actn │    │jailbrk  │    │sexual   │    │ 13-15   │    │absolute │
│         │    │sysoverr │    │harmful  │    │ 16-17   │    │ detect  │
│         │    │DAN/INST │    │drugs    │    │  18+    │    │         │
│         │    │         │    │PII      │    │         │    │         │
└─────────┘    └─────────┘    └─────────┘    └─────────┘    └─────────┘
     │              │              │              │              │
     └──────────────┴──────────────┴──────────────┴──────────────┘
                                   │
                            ┌──────▼──────┐
                            │  📋 AUDIT   │
                            │    LOG      │
                            │             │
                            │ Every call  │
                            │ logged with │
                            │ user, input │
                            │ output, mod │
                            │ result, IP  │
                            └─────────────┘
```

---

## 🟠 DESIGN SYSTEM

### Color Palette

| Token | Hex | Usage |
|:------|:----|:------|
| 🟣 `neonMagenta` | `#FF2D95` | Primary accent, CTAs, active states |
| 🔵 `electricBlue` | `#00D4FF` | Secondary accent, links, info |
| 🟡 `warmGold` | `#FFB800` | Highlights, ratings, achievements |
| ⚫ `offBlack` | `#0A0A0F` | Backgrounds, surfaces |
| ⬜ `paperCream` | `#F5F0E8` | Text on dark, light surfaces |
| 🩶 `cassetteGray` | `#2A2A3D` | Cards, borders, secondary surfaces |
| 🟢 `arcadeGreen` | `#39FF14` | Success states, completion |
| 🟣 `vhsPurple` | `#7B2FBE` | Special elements, persona badges |

### Typography

| Font | Usage |
|:-----|:------|
| **Inter** | Body text, UI elements |
| **Space Grotesk** | Headings, display text |
| **JetBrains Mono** | Code blocks, terminal output |

### Components

| Component | Variants | Description |
|:----------|:---------|:------------|
| `Button` | 7 variants × 5 sizes | Primary, secondary, ghost, outline, neon, danger, link |
| `Card` | 4 variants | Default, elevated, neon-border, glass |
| `Progress` | Animated | Gradient fill with configurable colors |
| `ScanlineOverlay` | — | CRT screen effect overlay |
| `NeonBorder` | Configurable | Animated glow border |
| `VhsDivider` | — | Retro section separator |
| `RetroBadge` | Themed | Arcade-style status badge |

---

## 🔴 DATABASE SCHEMA

25+ Prisma models with full relations:

```
┌─────────────┐     ┌─────────────┐     ┌──────────────┐
│    User      │────▶│ UserProfile │     │ GuardianLink │
│  id, email   │     │ avatar, bio │     │ parent↔child │
│  role, hash  │     │ preferences │     │              │
└──────┬──────┘     └─────────────┘     └──────────────┘
       │
       ├──────────────────────────────────────┐
       │                                      │
┌──────▼──────┐     ┌─────────────┐     ┌─────▼────────┐
│ Enrollment  │────▶│   Course    │────▶│LearningTrack │
│ progress %  │     │ title, slug │     │ 9 tracks     │
│ completedAt │     │ lessons[]   │     │ level, icon  │
└─────────────┘     └──────┬──────┘     └──────────────┘
                           │
                    ┌──────▼──────┐     ┌──────────────┐
                    │   Lesson    │────▶│ LessonBlock  │
                    │ slug, order │     │ 10 types:    │
                    │ persona_id  │     │ text, code,  │
                    │             │     │ quiz, source │
                    └─────────────┘     └──────────────┘

┌─────────────┐     ┌─────────────┐     ┌──────────────┐
│ LabSession  │────▶│  LabOutput  │     │  Submission  │
│ 7 lab types │     │ version hist│     │ grade, score │
│ state JSON  │     │ content     │     │ feedback     │
└─────────────┘     └─────────────┘     └──────────────┘

┌─────────────┐     ┌─────────────┐     ┌──────────────┐
│  NewsItem   │     │  Document   │────▶│DocumentChunk │
│ curated feed│     │ uploaded    │     │ vector(1536) │
│ topics, age │     │ metadata    │     │ pgvector idx │
└─────────────┘     └─────────────┘     └──────────────┘

┌─────────────┐     ┌─────────────┐     ┌──────────────┐
│  AuditLog   │     │ModerationLog│     │  FeatureFlag │
│ full trail  │     │ results     │     │ system-wide  │
└─────────────┘     └─────────────┘     └──────────────┘
```

---

## 🟡 PAGES & ROUTES

### Public Routes

| Route | Page | Description |
|:------|:-----|:------------|
| `/` | Landing | 8 animated sections: Hero, How It Works, Meet Teachers, Lab Showcase, Current Events, Course Tracks, Trust, CTA |

### Dashboard Routes (Authenticated)

| Route | Page | Description |
|:------|:-----|:------------|
| `/dashboard` | Home | Stats, continue learning, labs, mentor messages, Today in AI |
| `/dashboard/courses` | Catalog | 9 learning track cards with icons and descriptions |
| `/dashboard/courses/[track]` | Track | Lesson list with progress bar and completion states |
| `/dashboard/courses/[track]/[lesson]` | Lesson | Full lesson with 7 block types + interactive quiz |
| `/dashboard/labs` | Lab Hub | 7 lab type cards with descriptions |
| `/dashboard/teachers` | Mentors | All 10 AI persona profiles |
| `/dashboard/today` | Briefing | Daily AI news + Then vs Now + discussion prompts |
| `/dashboard/projects` | Projects | Student project list with milestones |
| `/dashboard/settings` | Settings | Profile, notifications, appearance, privacy |

### Admin Routes (Admin+ Role)

| Route | Page | Description |
|:------|:-----|:------------|
| `/dashboard/admin` | Admin Home | Stats, quick links, activity feed |
| `/dashboard/admin/content` | Content Studio | CRUD for all educational content |
| `/dashboard/admin/users` | Users | Manage roles, status, enrollments |
| `/dashboard/admin/moderation` | Moderation | Flagged content with approve/reject |
| `/dashboard/admin/analytics` | Analytics | Engagement, completion, persona usage |
| `/dashboard/admin/news` | News | Article curation and briefing management |

---

## 🟣 ADMIN PANEL

```
┌─────────────────────────────────────────────────────────┐
│                  👑 ADMIN DASHBOARD                      │
│                                                          │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐   │
│  │ Students │ │ Courses  │ │ Lab Sess │ │ Content  │   │
│  │  2,847   │ │   42     │ │   389    │ │  1,204   │   │
│  │  +12%    │ │   +3     │ │  +18%    │ │   +26    │   │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘   │
│                                                          │
│  Management Tools:                                       │
│  ┌─────────────────┐  ┌─────────────────┐               │
│  │ ✏️ Content Studio│  │ 👥 User Mgmt    │               │
│  │ Create/edit all │  │ Roles & access  │               │
│  │ educational     │  │ Suspend/promote │               │
│  │ content         │  │                 │               │
│  └─────────────────┘  └─────────────────┘               │
│  ┌─────────────────┐  ┌─────────────────┐               │
│  │ 🛡️ Moderation   │  │ 📰 News Curation│               │
│  │ Approve/reject  │  │ Daily briefing  │               │
│  │ flagged content │  │ management      │               │
│  └─────────────────┘  └─────────────────┘               │
│  ┌─────────────────┐  ┌─────────────────┐               │
│  │ 📈 Analytics    │  │ ⚙️ Settings      │               │
│  │ Engagement &    │  │ Feature flags   │               │
│  │ outcomes        │  │ IP mode config  │               │
│  └─────────────────┘  └─────────────────┘               │
└─────────────────────────────────────────────────────────┘
```

---

## 🔵 QUICK START

```bash
# 1. Clone the repository
git clone https://github.com/FTHTrading/ridgemont-high.git
cd ridgemont-high

# 2. Install dependencies
pnpm install

# 3. Start infrastructure (PostgreSQL, Redis, MinIO)
docker compose up -d

# 4. Configure environment
cp .env.example .env
# Edit .env — see Environment Variables section below

# 5. Push database schema
pnpm --filter @ridgemont/db db:push

# 6. Start development server
pnpm dev
```

Open **http://localhost:3000** — you're in.

### Monorepo Commands

```bash
pnpm dev                              # Start web app in dev mode
pnpm build                            # Build all packages
pnpm lint                             # Lint everything
pnpm --filter @ridgemont/web dev      # Start only the web app
pnpm --filter @ridgemont/db build     # Build only the db package
```

---

## 🟢 ENVIRONMENT VARIABLES

```env
# ─── Database ───────────────────────────────────────────
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/ridgemont

# ─── Authentication ─────────────────────────────────────
NEXTAUTH_SECRET=your-secret-here        # Generate: openssl rand -base64 32
NEXTAUTH_URL=http://localhost:3000

# ─── AI Provider ────────────────────────────────────────
OPENAI_API_KEY=sk-...                   # Required for persona chat & RAG

# ─── IP Mode ────────────────────────────────────────────
IP_MODE=inspired                        # "inspired" (prod) | "homage" (demo)

# ─── Cache ───────────────────────────────────────────────
REDIS_URL=redis://localhost:6379

# ─── Object Storage ─────────────────────────────────────
MINIO_ENDPOINT=localhost
MINIO_PORT=9000
MINIO_ACCESS_KEY=minioadmin
MINIO_SECRET_KEY=minioadmin
```

---

## 🟠 IP MODE SYSTEM

Protects against intellectual property concerns when using cultural references for teaching:

| Mode | Config | Behavior |
|:-----|:-------|:---------|
| **`inspired`** | Production default | All original names — no IP risk |
| **`homage`** | Private demos only | 80s/90s cultural references for nostalgic context |

The resolver in `packages/personas/resolver.ts` dynamically swaps names and references based on the `IP_MODE` environment variable at runtime.

---

## 🔴 CONTRIBUTING

1. **Branch** from `main` with a descriptive name
2. **Follow** existing code patterns — check the design token system in `packages/ui/tokens.ts`
3. **Add seed content** using the `SeedLesson` type from `@ridgemont/content`
4. **Test** all new persona interactions through the safety moderation pipeline
5. **Submit** a PR with clear description and screenshots if UI changes

### Adding a New Lesson

```typescript
import type { SeedLesson } from "@ridgemont/content";

const myLesson: SeedLesson = {
  slug: "my-lesson-slug",
  title: "My Lesson Title",
  trackSlug: "ai-foundations",
  order: 4,
  estimatedMinutes: 20,
  personaId: "professor-hartwell",
  blocks: [
    { type: "text", content: "..." },
    { type: "persona_commentary", personaId: "professor-hartwell", quote: "..." },
    { type: "quiz", question: "...", options: [...], correctIndex: 0, explanation: "..." },
    { type: "lab", labType: "code", labTitle: "...", labDescription: "..." },
  ],
};
```

### Adding a New Lab Engine

Implement the `LabEngine` interface from `@ridgemont/labs` and register it with `registerLabEngine()`.

---

<div align="center">

**Built by [FTH Trading](https://github.com/FTHTrading)**

*Where every student has an AI mentor, every lesson has citations, and the halls still echo with 80s synth.*

🟣🔵🟢🟠🔴🟡

</div>
