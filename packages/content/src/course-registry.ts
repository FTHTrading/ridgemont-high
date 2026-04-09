/**
 * Course Registry — lookup lessons by track/slug.
 * Client-side friendly: all data is statically imported.
 */
import { AI_FOUNDATIONS_LESSONS, type SeedLesson } from "./seeds/ai-foundations-full";

export type { SeedLesson, SeedBlock } from "./seeds/ai-foundations-full";

const lessonsByTrack: Record<string, SeedLesson[]> = {
  "ai-foundations": AI_FOUNDATIONS_LESSONS,
};

export function getCourseLesson(trackSlug: string, lessonSlug: string): SeedLesson | null {
  const lessons = lessonsByTrack[trackSlug];
  return lessons?.find((l) => l.slug === lessonSlug) ?? null;
}

export function getLessonsForTrack(trackSlug: string): SeedLesson[] {
  return lessonsByTrack[trackSlug] ?? [];
}

export function getAdjacentLessons(trackSlug: string, lessonSlug: string) {
  const lessons = lessonsByTrack[trackSlug] ?? [];
  const idx = lessons.findIndex((l) => l.slug === lessonSlug);
  return {
    prev: idx > 0 ? lessons[idx - 1] : null,
    next: idx >= 0 && idx < lessons.length - 1 ? lessons[idx + 1] : null,
  };
}

export function getAllLessonParams(): { trackSlug: string; lessonSlug: string }[] {
  return Object.entries(lessonsByTrack).flatMap(([trackSlug, lessons]) =>
    lessons.map((l) => ({ trackSlug, lessonSlug: l.slug }))
  );
}
