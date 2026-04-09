export type { PersonaDefinition, IpMode, ResolvedPersona } from "./types.js";

export {
  personaRegistry,
  getPersonaById,
  getPersonaByArchetype,
  listPersonaIds,
} from "./registry.js";

export {
  resolvePersona,
  resolveAllPersonas,
  resolvePersonaById,
} from "./resolver.js";
