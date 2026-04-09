import type { UserRole } from "@ridgemont/types";

/** Actions each role can perform. Extensible per resource. */
export const ROLE_PERMISSIONS: Record<UserRole, Set<string>> = {
  student: new Set([
    "course:read",
    "lesson:read",
    "lab:use",
    "project:create",
    "project:read:own",
    "submission:create",
    "submission:read:own",
    "news:read",
    "media:read",
    "search:use",
    "persona:interact",
    "profile:read:own",
    "profile:update:own",
  ]),
  guardian: new Set([
    "course:read",
    "lesson:read",
    "news:read",
    "media:read",
    "search:use",
    "profile:read:own",
    "profile:update:own",
    "child:read:linked",
    "child:progress:read",
    "child:activity:read",
  ]),
  instructor: new Set([
    "course:read",
    "course:create",
    "course:update:own",
    "lesson:read",
    "lesson:create",
    "lesson:update:own",
    "lab:use",
    "lab:review",
    "project:read",
    "project:review",
    "submission:read",
    "submission:review",
    "news:read",
    "media:read",
    "search:use",
    "persona:interact",
    "cohort:read:own",
    "cohort:manage:own",
    "profile:read:own",
    "profile:update:own",
    "analytics:read:own",
  ]),
  content_editor: new Set([
    "course:read",
    "course:create",
    "course:update",
    "lesson:read",
    "lesson:create",
    "lesson:update",
    "media:read",
    "media:create",
    "media:update",
    "news:read",
    "news:curate",
    "search:use",
    "persona:interact",
    "profile:read:own",
    "profile:update:own",
    "source:manage",
  ]),
  admin: new Set([
    "course:*",
    "lesson:*",
    "lab:*",
    "project:*",
    "submission:*",
    "news:*",
    "media:*",
    "search:*",
    "persona:*",
    "cohort:*",
    "user:read",
    "user:update",
    "profile:*",
    "analytics:*",
    "moderation:*",
    "source:*",
    "audit:read",
    "feature_flag:read",
  ]),
  super_admin: new Set(["*"]),
};

/**
 * Check if a role has a specific permission.
 * Supports wildcards: "course:*" matches "course:read", "course:update", etc.
 */
export function hasPermission(role: UserRole, permission: string): boolean {
  const perms = ROLE_PERMISSIONS[role];
  if (!perms) return false;

  // Super admin wildcard
  if (perms.has("*")) return true;

  // Exact match
  if (perms.has(permission)) return true;

  // Wildcard match: "course:*" covers "course:read"
  const [resource] = permission.split(":");
  if (perms.has(`${resource}:*`)) return true;

  return false;
}

/**
 * Role hierarchy for elevation checks.
 * Higher number = more authority.
 */
export const ROLE_HIERARCHY: Record<UserRole, number> = {
  student: 0,
  guardian: 1,
  instructor: 2,
  content_editor: 3,
  admin: 4,
  super_admin: 5,
};

export function isAtLeast(userRole: UserRole, requiredRole: UserRole): boolean {
  return ROLE_HIERARCHY[userRole] >= ROLE_HIERARCHY[requiredRole];
}
