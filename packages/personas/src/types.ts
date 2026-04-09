export interface PersonaDefinition {
  readonly id: string;
  readonly archetypeSlug: string;
  readonly inspiredName: string;
  readonly homageName: string;
  readonly role: string;
  readonly biography: string;
  readonly teachingPhilosophy: string;
  readonly communicationStyle: string;
  readonly strengths: readonly string[];
  readonly subjectOwnership: readonly string[];
  readonly toneProfile: string;
  readonly systemPrompt: string;
  readonly allowedTools: readonly string[];
  readonly blockedBehaviors: readonly string[];
  readonly escalationRules: readonly string[];
  readonly outputFormat: string;
  readonly sampleGreeting: string;
  readonly sampleCorrection: string;
  readonly sampleLabGuidance: string;
  readonly bannedBehaviors: readonly string[];
}

export type IpMode = "production" | "demo";

export interface ResolvedPersona {
  readonly id: string;
  readonly displayName: string;
  readonly biography: string;
  readonly role: string;
  readonly systemPrompt: string;
}
