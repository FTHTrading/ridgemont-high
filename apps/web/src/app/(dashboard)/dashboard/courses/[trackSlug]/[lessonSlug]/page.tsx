import LessonPageClient from "./lesson-client";
import { getAllLessonParams } from "@ridgemont/content";

export function generateStaticParams() {
  return getAllLessonParams();
}

export default function LessonPage() {
  return <LessonPageClient />;
}
