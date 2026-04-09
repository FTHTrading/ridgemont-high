"use client";

import {
  BookOpen,
  FlaskConical,
  Trophy,
  TrendingUp,
  Newspaper,
  Play,
  ArrowRight,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

/* ── Mock data (will be replaced by server components + API calls) ── */

const continueItems = [
  {
    title: "Understanding Neural Networks",
    track: "AI Foundations",
    progress: 68,
    lesson: 7,
    totalLessons: 12,
    href: "/dashboard/courses/ai-foundations/neural-networks",
  },
  {
    title: "Advanced Prompt Patterns",
    track: "Prompt Engineering",
    progress: 45,
    lesson: 5,
    totalLessons: 10,
    href: "/dashboard/courses/prompt-engineering/advanced-patterns",
  },
];

const todayBriefings = [
  {
    title: "OpenAI launches GPT-5 reasoning model",
    source: "Reuters",
    time: "2h ago",
  },
  {
    title: "EU passes comprehensive AI Act enforcement rules",
    source: "AP News",
    time: "4h ago",
  },
  {
    title: "New breakthrough in protein folding with smaller models",
    source: "arXiv",
    time: "6h ago",
  },
];

const recentLabs = [
  { name: "Prompt Lab", type: "prompt" as const, lastUsed: "Yesterday" },
  { name: "RAG Lab", type: "rag" as const, lastUsed: "2 days ago" },
  { name: "Agent Lab", type: "agent" as const, lastUsed: "3 days ago" },
];

const mentorMessages = [
  {
    mentor: "Professor Hartwell",
    message: "Your neural network essay showed excellent analytical depth. Consider exploring backpropagation next.",
    time: "1h ago",
  },
  {
    mentor: "Mx. Cipher",
    message: "Great work on the chain-of-thought prompts. Try the few-shot lab challenge when ready.",
    time: "3h ago",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome header */}
      <div>
        <h1 className="font-heading text-2xl font-bold text-white">
          Welcome back to Ridgemont
        </h1>
        <p className="mt-1 text-sm text-ridgemont-cassetteGray-400">
          Here&apos;s what&apos;s happening on campus today.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={BookOpen}
          label="Courses Enrolled"
          value="4"
          change="+1 this week"
        />
        <StatCard
          icon={FlaskConical}
          label="Lab Sessions"
          value="23"
          change="+5 this week"
        />
        <StatCard
          icon={Trophy}
          label="Lessons Completed"
          value="31"
          change="+8 this week"
        />
        <StatCard
          icon={TrendingUp}
          label="Current Streak"
          value="7 days"
          change="Personal best!"
        />
      </div>

      {/* Main grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Continue Learning — spans 2 cols */}
        <div className="lg:col-span-2 space-y-4">
          <SectionHeader title="Continue Learning" href="/dashboard/courses" />
          <div className="space-y-3">
            {continueItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="flex items-center justify-between rounded-xl border border-ridgemont-cassetteGray-700 bg-ridgemont-offBlack-800/60 p-4 hover:border-ridgemont-cassetteGray-500 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ridgemont-electricBlue-500/10">
                    <Play className="h-4 w-4 text-ridgemont-electricBlue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white group-hover:text-ridgemont-electricBlue-300">
                      {item.title}
                    </p>
                    <p className="text-xs text-ridgemont-cassetteGray-400">
                      {item.track} · Lesson {item.lesson} of {item.totalLessons}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-24">
                    <div className="h-1.5 rounded-full bg-ridgemont-offBlack-700">
                      <div
                        className="h-1.5 rounded-full bg-gradient-to-r from-ridgemont-neonMagenta-500 to-ridgemont-electricBlue-500"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-xs text-ridgemont-cassetteGray-400 w-8 text-right">
                    {item.progress}%
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Recent Labs */}
          <SectionHeader title="Recent Labs" href="/dashboard/labs" />
          <div className="grid gap-3 sm:grid-cols-3">
            {recentLabs.map((lab) => (
              <Link
                key={lab.name}
                href={`/dashboard/labs/${lab.type}`}
                className="rounded-xl border border-ridgemont-cassetteGray-700 bg-ridgemont-offBlack-800/60 p-4 hover:border-ridgemont-arcadeGreen-500/40 hover:shadow-neon-green/5 transition-all group"
              >
                <FlaskConical className="h-5 w-5 text-ridgemont-arcadeGreen-400 mb-2" />
                <p className="text-sm font-medium text-white">{lab.name}</p>
                <p className="text-xs text-ridgemont-cassetteGray-500 mt-1">
                  {lab.lastUsed}
                </p>
              </Link>
            ))}
          </div>

          {/* Mentor Messages */}
          <SectionHeader title="Mentor Messages" />
          <div className="space-y-3">
            {mentorMessages.map((msg) => (
              <div
                key={msg.mentor}
                className="rounded-xl border border-ridgemont-cassetteGray-700 bg-ridgemont-offBlack-800/60 p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-4 w-4 text-ridgemont-vhsPurple-400" />
                  <span className="text-sm font-medium text-ridgemont-vhsPurple-300">
                    {msg.mentor}
                  </span>
                  <span className="ml-auto text-xs text-ridgemont-cassetteGray-500">
                    {msg.time}
                  </span>
                </div>
                <p className="text-sm text-ridgemont-cassetteGray-300">
                  {msg.message}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — Today in AI */}
        <div className="space-y-4">
          <SectionHeader title="Today in AI" href="/dashboard/today" />
          <div className="rounded-xl border border-ridgemont-warmGold-500/20 bg-ridgemont-offBlack-800/60 p-5">
            <div className="flex items-center gap-2 mb-4">
              <Newspaper className="h-5 w-5 text-ridgemont-warmGold-400" />
              <span className="text-sm font-semibold text-ridgemont-warmGold-300">
                Daily Briefing
              </span>
            </div>
            <div className="space-y-4">
              {todayBriefings.map((item) => (
                <div
                  key={item.title}
                  className="border-b border-ridgemont-cassetteGray-700/50 pb-3 last:border-0 last:pb-0"
                >
                  <p className="text-sm font-medium text-white leading-snug">
                    {item.title}
                  </p>
                  <p className="text-xs text-ridgemont-cassetteGray-500 mt-1">
                    {item.source} · {item.time}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="rounded-xl border border-ridgemont-cassetteGray-700 bg-ridgemont-offBlack-800/60 p-5">
            <h3 className="text-sm font-semibold text-white mb-3">
              Quick Actions
            </h3>
            <div className="space-y-2">
              <QuickAction
                icon={FlaskConical}
                label="Open Prompt Lab"
                href="/dashboard/labs/prompt"
              />
              <QuickAction
                icon={BookOpen}
                label="Browse Courses"
                href="/dashboard/courses"
              />
              <QuickAction
                icon={Zap}
                label="Start New Project"
                href="/dashboard/projects/new"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Sub-components ── */

function StatCard({
  icon: Icon,
  label,
  value,
  change,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  change: string;
}) {
  return (
    <div className="rounded-xl border border-ridgemont-cassetteGray-700 bg-ridgemont-offBlack-800/60 p-5">
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5 text-ridgemont-electricBlue-400" />
        <span className="text-xs text-ridgemont-cassetteGray-400">{label}</span>
      </div>
      <p className="mt-2 text-2xl font-bold text-white">{value}</p>
      <p className="mt-1 text-xs text-ridgemont-arcadeGreen-400">{change}</p>
    </div>
  );
}

function SectionHeader({
  title,
  href,
}: {
  title: string;
  href?: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="font-heading text-base font-semibold text-white">
        {title}
      </h2>
      {href && (
        <Link
          href={href}
          className="flex items-center gap-1 text-xs text-ridgemont-cassetteGray-400 hover:text-white transition-colors"
        >
          View All <ArrowRight className="h-3 w-3" />
        </Link>
      )}
    </div>
  );
}

function QuickAction({
  icon: Icon,
  label,
  href,
}: {
  icon: React.ElementType;
  label: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-ridgemont-cassetteGray-300 hover:bg-ridgemont-offBlack-700 hover:text-white transition-colors"
    >
      <Icon className="h-4 w-4" />
      {label}
    </Link>
  );
}
