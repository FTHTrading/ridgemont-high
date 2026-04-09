import { BookOpen, Clock, CheckCircle2, Circle, Lock } from "lucide-react";
import Link from "next/link";

export function generateStaticParams() {
  return [
    { trackSlug: "ai-foundations" },
    { trackSlug: "prompt-engineering" },
    { trackSlug: "creative-ai" },
    { trackSlug: "agent-frameworks" },
    { trackSlug: "ethics-society" },
    { trackSlug: "rag-search" },
    { trackSlug: "mcp-tools" },
    { trackSlug: "ai-business" },
  ];
}

/* Mock data — replaced by server component + Prisma in production */
const trackData = {
  slug: "ai-foundations",
  title: "AI Foundations",
  description:
    "Core concepts: what AI is, how models learn, neural networks, transformers, and the landscape of modern AI.",
  level: "Beginner → Advanced",
  lessons: [
    { slug: "what-is-ai", title: "What Is Artificial Intelligence?", est: 25, status: "completed" as const },
    { slug: "history-of-ai", title: "A Brief History of AI", est: 30, status: "completed" as const },
    { slug: "ml-vs-ai", title: "Machine Learning vs AI", est: 20, status: "completed" as const },
    { slug: "supervised-learning", title: "Supervised Learning Explained", est: 35, status: "completed" as const },
    { slug: "unsupervised-learning", title: "Unsupervised & Self-Supervised Learning", est: 30, status: "completed" as const },
    { slug: "deep-learning", title: "Introduction to Deep Learning", est: 40, status: "completed" as const },
    { slug: "neural-networks", title: "Understanding Neural Networks", est: 45, status: "in_progress" as const },
    { slug: "transformers", title: "The Transformer Architecture", est: 45, status: "locked" as const },
    { slug: "llms", title: "Large Language Models", est: 40, status: "locked" as const },
    { slug: "multimodal", title: "Multimodal AI Systems", est: 35, status: "locked" as const },
    { slug: "scaling", title: "Scaling Laws & Compute", est: 30, status: "locked" as const },
    { slug: "frontier", title: "The Frontier: What's Next in AI", est: 35, status: "locked" as const },
  ],
};

const statusStyles = {
  completed: { icon: CheckCircle2, color: "text-ridgemont-arcadeGreen-400", hoverBorder: "hover:border-ridgemont-arcadeGreen-500/30" },
  in_progress: { icon: Circle, color: "text-ridgemont-electricBlue-400", hoverBorder: "hover:border-ridgemont-electricBlue-500/30" },
  locked: { icon: Lock, color: "text-ridgemont-cassetteGray-600", hoverBorder: "" },
};

export default function TrackDetailPage() {
  const completedCount = trackData.lessons.filter(
    (l) => l.status === "completed"
  ).length;

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <Link
          href="/dashboard/courses"
          className="text-xs text-ridgemont-cassetteGray-500 hover:text-white transition-colors mb-2 inline-block"
        >
          ← Back to Tracks
        </Link>
        <h1 className="font-heading text-2xl font-bold text-white">
          {trackData.title}
        </h1>
        <p className="mt-1 text-sm text-ridgemont-cassetteGray-400">
          {trackData.description}
        </p>
      </div>

      {/* Progress */}
      <div className="rounded-xl border border-ridgemont-cassetteGray-700 bg-ridgemont-offBlack-800/60 p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-ridgemont-cassetteGray-300">
            Track Progress
          </span>
          <span className="text-sm font-medium text-white">
            {completedCount}/{trackData.lessons.length} lessons
          </span>
        </div>
        <div className="h-2 rounded-full bg-ridgemont-offBlack-700">
          <div
            className="h-2 rounded-full bg-gradient-to-r from-ridgemont-neonMagenta-500 to-ridgemont-electricBlue-500 transition-all"
            style={{
              width: `${(completedCount / trackData.lessons.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Lessons list */}
      <div className="space-y-2">
        {trackData.lessons.map((lesson, i) => {
          const s = statusStyles[lesson.status];
          const StatusIcon = s.icon;
          const isInteractive = lesson.status !== "locked";

          const content = (
            <div
              className={`flex items-center gap-4 rounded-xl border border-ridgemont-cassetteGray-700 bg-ridgemont-offBlack-800/60 p-4 ${s.hoverBorder} transition-colors ${
                isInteractive ? "group cursor-pointer" : "opacity-60"
              }`}
            >
              <span className="shrink-0 w-8 text-center text-xs text-ridgemont-cassetteGray-500 font-mono">
                {String(i + 1).padStart(2, "0")}
              </span>
              <StatusIcon className={`h-5 w-5 shrink-0 ${s.color}`} />
              <div className="flex-1 min-w-0">
                <p
                  className={`text-sm font-medium truncate ${
                    isInteractive ? "text-white group-hover:text-ridgemont-electricBlue-300" : "text-ridgemont-cassetteGray-500"
                  } transition-colors`}
                >
                  {lesson.title}
                </p>
              </div>
              <span className="flex items-center gap-1 text-xs text-ridgemont-cassetteGray-500 shrink-0">
                <Clock className="h-3 w-3" /> {lesson.est} min
              </span>
            </div>
          );

          return isInteractive ? (
            <Link
              key={lesson.slug}
              href={`/dashboard/courses/${trackData.slug}/${lesson.slug}`}
            >
              {content}
            </Link>
          ) : (
            <div key={lesson.slug}>{content}</div>
          );
        })}
      </div>
    </div>
  );
}
