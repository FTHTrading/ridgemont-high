import { BookOpen, Clock, Circle } from "lucide-react";
import Link from "next/link";
import { getLessonsForTrack, ALL_TRACKS } from "@ridgemont/content";

export function generateStaticParams() {
  return ALL_TRACKS.map((t) => ({ trackSlug: t.slug }));
}

export default function TrackDetailPage({
  params,
}: {
  params: { trackSlug: string };
}) {
  const { trackSlug } = params;
  const track = ALL_TRACKS.find((t) => t.slug === trackSlug);
  const lessons = getLessonsForTrack(trackSlug);

  const trackTitle = track?.name ?? trackSlug;
  const trackDescription =
    track?.slug === "ai-foundations"
      ? "Core concepts: what AI is, how models learn, neural networks, transformers, and the landscape of modern AI."
      : `Explore the ${trackTitle} curriculum.`;

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <Link
          href="/dashboard/courses"
          className="text-xs text-ridgemont-cassetteGray-500 hover:text-white transition-colors mb-2 inline-block"
        >
          &larr; Back to Tracks
        </Link>
        <h1 className="font-heading text-2xl font-bold text-white">
          {trackTitle}
        </h1>
        <p className="mt-1 text-sm text-ridgemont-cassetteGray-400">
          {trackDescription}
        </p>
      </div>

      {/* Progress placeholder */}
      <div className="rounded-xl border border-ridgemont-cassetteGray-700 bg-ridgemont-offBlack-800/60 p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-ridgemont-cassetteGray-300">
            Track Progress
          </span>
          <span className="text-sm font-medium text-white">
            {lessons.length} lessons
          </span>
        </div>
        <div className="h-2 rounded-full bg-ridgemont-offBlack-700">
          <div
            className="h-2 rounded-full bg-gradient-to-r from-ridgemont-neonMagenta-500 to-ridgemont-electricBlue-500 transition-all"
            style={{ width: "0%" }}
          />
        </div>
      </div>

      {/* Lessons list */}
      <div className="space-y-2">
        {lessons.map((lesson, i) => (
          <Link
            key={lesson.slug}
            href={`/dashboard/courses/${trackSlug}/${lesson.slug}`}
          >
            <div className="flex items-center gap-4 rounded-xl border border-ridgemont-cassetteGray-700 bg-ridgemont-offBlack-800/60 p-4 hover:border-ridgemont-electricBlue-500/30 transition-colors group cursor-pointer">
              <span className="shrink-0 w-8 text-center text-xs text-ridgemont-cassetteGray-500 font-mono">
                {String(i + 1).padStart(2, "0")}
              </span>
              <Circle className="h-5 w-5 shrink-0 text-ridgemont-electricBlue-400" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate text-white group-hover:text-ridgemont-electricBlue-300 transition-colors">
                  {lesson.title}
                </p>
                <p className="text-xs text-ridgemont-cassetteGray-500 truncate mt-0.5">
                  {lesson.summary}
                </p>
              </div>
              <span className="flex items-center gap-1 text-xs text-ridgemont-cassetteGray-500 shrink-0">
                <Clock className="h-3 w-3" /> {lesson.estimatedMinutes} min
              </span>
            </div>
          </Link>
        ))}

        {lessons.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-8 w-8 text-ridgemont-cassetteGray-600 mx-auto mb-2" />
            <p className="text-sm text-ridgemont-cassetteGray-500">
              Lessons for this track are coming soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
