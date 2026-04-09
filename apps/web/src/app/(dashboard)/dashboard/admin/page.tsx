"use client";

import { LayoutDashboard, BookOpen, Users, FileText, Shield, BarChart3, Settings, ChevronRight, Database, Newspaper } from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Total Students", value: "2,847", change: "+12%", icon: Users },
  { label: "Active Courses", value: "42", change: "+3", icon: BookOpen },
  { label: "Lab Sessions Today", value: "389", change: "+18%", icon: Database },
  { label: "Content Items", value: "1,204", change: "+26", icon: FileText },
];

const quickLinks = [
  { label: "Content Studio", href: "/dashboard/admin/content", icon: FileText, description: "Create and manage lessons, courses, and media" },
  { label: "User Management", href: "/dashboard/admin/users", icon: Users, description: "Manage students, guardians, and instructors" },
  { label: "Moderation Queue", href: "/dashboard/admin/moderation", icon: Shield, description: "Review flagged content and submissions" },
  { label: "News Curation", href: "/dashboard/admin/news", icon: Newspaper, description: "Curate daily briefings and current events" },
  { label: "Analytics", href: "/dashboard/admin/analytics", icon: BarChart3, description: "Platform usage, engagement, and outcomes" },
  { label: "System Settings", href: "/dashboard/admin/settings", icon: Settings, description: "Environment, feature flags, and IP mode" },
];

const recentActivity = [
  { action: "Published lesson", detail: "Understanding Neural Networks — AI Foundations Track", time: "12 min ago", user: "Ms. Chen" },
  { action: "Flagged submission", detail: "Student project contained unverified claims", time: "28 min ago", user: "AutoMod" },
  { action: "Updated persona", detail: "Professor Hartwell — refined system prompt", time: "1 hour ago", user: "Admin" },
  { action: "New enrollment", detail: "47 students joined Ethics & Society track", time: "2 hours ago", user: "System" },
  { action: "News curated", detail: "5 articles added to today's briefing", time: "3 hours ago", user: "Ms. Dawson" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
        <p className="mt-1 text-zinc-400">Platform overview and management tools</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
            <div className="flex items-center justify-between">
              <s.icon className="h-5 w-5 text-zinc-500" />
              <span className="text-xs font-medium text-emerald-400">{s.change}</span>
            </div>
            <p className="mt-3 text-2xl font-bold text-white">{s.value}</p>
            <p className="text-sm text-zinc-400">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Quick Links */}
      <div>
        <h2 className="mb-4 text-lg font-semibold text-white">Management Tools</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 transition-colors hover:border-fuchsia-500/30 hover:bg-zinc-800/60"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-fuchsia-500/10 text-fuchsia-400">
                <link.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white">{link.label}</h3>
                  <ChevronRight className="h-4 w-4 text-zinc-600 transition-transform group-hover:translate-x-1 group-hover:text-fuchsia-400" />
                </div>
                <p className="mt-1 text-sm text-zinc-400">{link.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="mb-4 text-lg font-semibold text-white">Recent Activity</h2>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 divide-y divide-zinc-800">
          {recentActivity.map((a, i) => (
            <div key={i} className="flex items-start justify-between gap-4 p-4">
              <div>
                <p className="text-sm font-medium text-white">{a.action}</p>
                <p className="text-sm text-zinc-400">{a.detail}</p>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-xs text-zinc-500">{a.time}</p>
                <p className="text-xs text-zinc-600">{a.user}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
