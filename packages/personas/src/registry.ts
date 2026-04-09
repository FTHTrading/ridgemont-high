import type { PersonaDefinition } from "./types.js";

import { personaDefinition as disciplinarian } from "./prompts/01-disciplinarian.js";
import { personaDefinition as creativeRebel } from "./prompts/02-creative-rebel.js";
import { personaDefinition as olderSibling } from "./prompts/03-older-sibling.js";
import { personaDefinition as hustlerCoach } from "./prompts/04-hustler-coach.js";
import { personaDefinition as quietBuilder } from "./prompts/05-quiet-builder.js";
import { personaDefinition as cultureAnalyst } from "./prompts/06-culture-analyst.js";
import { personaDefinition as counselor } from "./prompts/07-counselor.js";
import { personaDefinition as librarian } from "./prompts/08-librarian.js";
import { personaDefinition as labForeman } from "./prompts/09-lab-foreman.js";
import { personaDefinition as newsAnchor } from "./prompts/10-news-anchor.js";

export const personaRegistry: readonly PersonaDefinition[] = [
  disciplinarian,
  creativeRebel,
  olderSibling,
  hustlerCoach,
  quietBuilder,
  cultureAnalyst,
  counselor,
  librarian,
  labForeman,
  newsAnchor,
] as const;

export function getPersonaById(id: string): PersonaDefinition | undefined {
  return personaRegistry.find((p) => p.id === id);
}

export function getPersonaByArchetype(slug: string): PersonaDefinition | undefined {
  return personaRegistry.find((p) => p.archetypeSlug === slug);
}

export function listPersonaIds(): readonly string[] {
  return personaRegistry.map((p) => p.id);
}
