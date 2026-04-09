"use client";

import { BarChart3, TrendingUp, Users, Clock, BookOpen, Beaker, MessageSquare } from "lucide-react";

const overviewStats = [
  { label: "Weekly Active Users", value: "1,847", change: "+8.3%", positive: true },
  { label: "Avg Session Duration", value: "24 min", change: "+2.1 min", positive: true },
  { label: "Lessons Completed", value: "3,421", change: "+15%", positive: true },
  { label: "Lab Sessions", value: "892", change: "+22%", positive: true },
];

const trackEngagement = [
  { track: "AI Foundations", enrolled: 847, completion: 72, avgScore: 88 },
  { track: "Prompt Engineering", enrolled: 623, completion: 68, avgScore: 91 },
  { track: "Ethics & Society", enrolled: 534, completion: 81, avgScore: 85 },
  { track: "Agent Frameworks", enrolled: 412, completion: 55, avgScore: 79 },
  { track: "RAG & Search", enrolled: 389, completion: 62, avgScore: 83 },
  { track: "MCP & Tools", enrolled: 298, completion: 48, avgScore: 86 },
  { track: "Creative AI", enrolled: 567, completion: 74, avgScore: 90 },
  { track: "Deep Learning", enrolled: 345, completion: 41, avgScore: 77 },
  { track: "AI & Business", enrolled: 256, completion: 59, avgScore: 84 },
];

const personaUsage = [
  { name: "Professor Hartwell", sessions: 1240, avgRating: 4.8 },
  { name: "Cipher", sessions: 1089, avgRating: 4.9 },
  { name: "Ms. Chen", sessions: 967, avgRating: 4.7 },
  { name: "Coach Williams", sessions: 845, avgRating: 4.6 },
  { name: "Dr. Nakamura", sessions: 734, avgRating: 4.8 },
  { name: "Ms. Rivera", sessions: 623, avgRating: 4.5 },
  { name: "Mr. Kowalski", sessions: 512, avgRating: 4.7 },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white">Analytics</h1>
        <p className="text-sm text-zinc-400">Platform engagement, learning outcomes, and usage trends</p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {overviewStats.map((s) => (
          <div key={s.label} className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
            <p className="text-sm text-zinc-400">{s.label}</p>
            <p className="mt-2 text-2xl font-bold text-white">{s.value}</p>
            <p className={`mt-1 text-xs font-medium ${s.positive ? "text-emerald-400" : "text-red-400"}`}>
              {s.change} vs last week
            </p>
          </div>
        ))}
      </div>

      {/* Track Engagement */}
      <div>
        <h2 className="mb-4 text-lg font-semibold text-white">Track Engagement</h2>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-800 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">
                <th className="px-4 py-3">Track</th>
                <th className="px-4 py-3 text-right">Enrolled</th>
                <th className="px-4 py-3">Completion Rate</th>
                <th className="px-4 py-3 text-right">Avg Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {trackEngagement.map((t) => (
                <tr key={t.track} className="hover:bg-zinc-800/40">
                  <td className="px-4 py-3 text-sm font-medium text-white">{t.track}</td>
                  <td className="px-4 py-3 text-right text-sm text-zinc-400">{t.enrolled}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-zinc-800">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500"
                          style={{ width: `${t.completion}%` }}
                        />
                      </div>
                      <span className="w-10 text-right text-xs text-zinc-400">{t.completion}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right text-sm text-zinc-400">{t.avgScore}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Persona Usage */}
      <div>
        <h2 className="mb-4 text-lg font-semibold text-white">Persona Usage</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {personaUsage.map((p) => (
            <div key={p.name} className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
              <p className="font-semibold text-white">{p.name}</p>
              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="text-zinc-400">{p.sessions.toLocaleString()} sessions</span>
                <span className="text-amber-400">★ {p.avgRating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
