import type { IpMode, PersonaDefinition, ResolvedPersona } from "./types.js";
import { personaRegistry } from "./registry.js";

/**
 * Resolves a persona's display fields based on IP_MODE.
 *
 * - "production" → uses inspiredName (original archetype names safe for production)
 * - "demo"       → uses homageName (internal-only themed labels)
 */
export function resolvePersona(
  persona: PersonaDefinition,
  mode: IpMode,
): ResolvedPersona {
  return {
    id: persona.id,
    displayName: mode === "production" ? persona.inspiredName : persona.homageName,
    biography: persona.biography,
    role: persona.role,
    systemPrompt: persona.systemPrompt,
  };
}

/**
 * Resolves all personas in the registry for the given IP mode.
 */
export function resolveAllPersonas(mode: IpMode): readonly ResolvedPersona[] {
  return personaRegistry.map((p) => resolvePersona(p, mode));
}

/**
 * Resolves a single persona by ID for the given IP mode.
 * Returns undefined if the ID is not found.
 */
export function resolvePersonaById(
  id: string,
  mode: IpMode,
): ResolvedPersona | undefined {
  const persona = personaRegistry.find((p) => p.id === id);
  if (!persona) return undefined;
  return resolvePersona(persona, mode);
}
