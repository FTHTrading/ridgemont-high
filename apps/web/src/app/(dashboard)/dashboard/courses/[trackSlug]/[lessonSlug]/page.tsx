import LessonPageClient from "./lesson-client";

export function generateStaticParams() {
  return [{ trackSlug: "ai-foundations", lessonSlug: "neural-networks" }];
}

export default function LessonPage() {
  return <LessonPageClient />;
}
