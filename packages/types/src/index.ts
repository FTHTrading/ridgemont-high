// ---- User & Auth ----
export type UserRole = "student" | "guardian" | "instructor" | "content_editor" | "admin" | "super_admin";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatarUrl?: string;
  createdAt: Date;
}

export interface UserProfile {
  userId: string;
  displayName: string;
  bio?: string;
  learnerLevel: LearnerLevel;
  preferredPersonaId?: string;
  timezone?: string;
  onboardingComplete: boolean;
}

export type LearnerLevel = "beginner" | "intermediate" | "advanced";

// ---- Courses & Curriculum ----
export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  trackId: string;
  level: LearnerLevel;
  thumbnailUrl?: string;
  published: boolean;
  lessonCount: number;
  estimatedHours: number;
}

export interface LearningTrack {
  id: string;
  slug: string;
  title: string;
  description: string;
  color: string;
  icon: string;
  order: number;
}

export interface Lesson {
  id: string;
  courseId: string;
  slug: string;
  title: string;
  order: number;
  contentMdx: string;
  blocks: LessonBlock[];
  personaId?: string;
  estimatedMinutes: number;
  published: boolean;
}

export type LessonBlockType =
  | "text"
  | "code"
  | "quiz"
  | "timeline"
  | "comparison"
  | "source_card"
  | "then_vs_now"
  | "persona_commentary"
  | "lab"
  | "project_assignment";

export interface LessonBlock {
  id: string;
  type: LessonBlockType;
  data: Record<string, unknown>;
  order: number;
}

export interface Quiz {
  id: string;
  lessonId: string;
  title: string;
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  type: "multiple_choice" | "free_response" | "code";
  options?: string[];
  correctIndex?: number;
  rubric?: string;
}

// ---- Personas ----
export interface PersonaConfig {
  id: string;
  archetypeSlug: string;
  inspiredName: string;
  homageName: string;
  role: string;
  biography: string;
  teachingPhilosophy: string;
  communicationStyle: string;
  strengths: string[];
  subjectOwnership: string[];
  toneProfile: string;
  systemPrompt: string;
  allowedTools: string[];
  blockedBehaviors: string[];
  escalationRules: string[];
  outputFormat: string;
  avatarInspired?: string;
  avatarHomage?: string;
}

// ---- Labs ----
export type LabType =
  | "prompt"
  | "agent"
  | "mcp"
  | "rag"
  | "code"
  | "media_analysis"
  | "project";

export interface LabSession {
  id: string;
  userId: string;
  labType: LabType;
  title: string;
  state: Record<string, unknown>;
  outputs: LabOutput[];
  feedback?: string;
  personaId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface LabOutput {
  id: string;
  sessionId: string;
  type: string;
  content: string;
  metadata: Record<string, unknown>;
  version: number;
  createdAt: Date;
}

// ---- Current Events ----
export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  sourceUrl: string;
  sourceName: string;
  publishedAt: Date;
  ingestedAt: Date;
  topics: string[];
  sentiment: "positive" | "neutral" | "negative";
  educationalRelevance: number; // 0-1
  relatedCourseIds: string[];
  thenVsNowCard?: ThenVsNowCard;
}

export interface ThenVsNowCard {
  modernConcept: string;
  eraEquivalent: string;
  era: string;
  explanation: string;
  culturalReference?: string;
}

// ---- Media ----
export interface MediaItem {
  id: string;
  title: string;
  year: number;
  type: "film" | "tv" | "music" | "article" | "trailer";
  era: string;
  genres: string[];
  themes: string[];
  rightsStatus: "licensed" | "public_domain" | "metadata_only" | "deep_link";
  thumbnailUrl?: string;
  streamingLinks?: Record<string, string>;
  educationalContext?: string;
}

// ---- RAG ----
export type KnowledgeZone =
  | "curriculum"
  | "current_events"
  | "culture_media"
  | "lab_docs"
  | "student_projects"
  | "admin_policy";

export type RetrievalMode =
  | "explain"
  | "evidence"
  | "compare"
  | "timeline"
  | "beginner"
  | "advanced"
  | "current_events"
  | "era_comparison";

export interface Citation {
  sourceId: string;
  sourceName: string;
  sourceUrl?: string;
  chunk: string;
  confidence: number;
  retrievedAt: Date;
}

// ---- Evaluation ----
export interface Rubric {
  id: string;
  criteria: RubricCriterion[];
}

export interface RubricCriterion {
  label: string;
  description: string;
  maxScore: number;
}

export interface Feedback {
  id: string;
  submissionId: string;
  personaId?: string;
  scores: Record<string, number>;
  strengths: string[];
  improvements: string[];
  nextSteps: string[];
  createdAt: Date;
}

// ---- Cohorts / Multi-tenancy ----
export interface Cohort {
  id: string;
  name: string;
  organizationId?: string;
  instructorIds: string[];
  studentIds: string[];
  courseIds: string[];
  startDate?: Date;
  endDate?: Date;
}

// ---- Audit ----
export interface AuditLogEntry {
  id: string;
  userId: string;
  action: string;
  resource: string;
  resourceId: string;
  metadata: Record<string, unknown>;
  timestamp: Date;
}
