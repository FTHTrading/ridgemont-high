"use client";

import { useState } from "react";
import { Plus, Search, FileText, BookOpen, Image, Video, Filter, MoreVertical, Eye, Pencil, Trash2, ChevronDown } from "lucide-react";

type ContentType = "all" | "lesson" | "course" | "media" | "quiz";
type ContentStatus = "draft" | "review" | "published" | "archived";

interface ContentItem {
  id: string;
  title: string;
  type: "lesson" | "course" | "media" | "quiz";
  status: ContentStatus;
  track: string;
  author: string;
  updatedAt: string;
}

const mockContent: ContentItem[] = [
  { id: "1", title: "Understanding Neural Networks", type: "lesson", status: "published", track: "AI Foundations", author: "Prof. Hartwell", updatedAt: "2 hours ago" },
  { id: "2", title: "Prompt Engineering Masterclass", type: "course", status: "published", track: "Prompt Engineering", author: "Ms. Chen", updatedAt: "1 day ago" },
  { id: "3", title: "Ethics Case Study: Bias in Hiring AI", type: "lesson", status: "review", track: "Ethics & Society", author: "Coach Williams", updatedAt: "3 hours ago" },
  { id: "4", title: "RAG Architecture Diagram", type: "media", status: "published", track: "RAG & Search", author: "Mr. Kowalski", updatedAt: "5 hours ago" },
  { id: "5", title: "Agent Framework Quiz — Module 3", type: "quiz", status: "draft", track: "Agent Frameworks", author: "Dr. Nakamura", updatedAt: "12 hours ago" },
  { id: "6", title: "MCP Tool Builder Walkthrough", type: "lesson", status: "draft", track: "MCP & Tools", author: "Cipher", updatedAt: "1 day ago" },
  { id: "7", title: "Creative AI: From Pixels to Prompts", type: "course", status: "published", track: "Creative AI", author: "Ms. Rivera", updatedAt: "2 days ago" },
  { id: "8", title: "Deep Learning Loss Functions", type: "lesson", status: "review", track: "Deep Learning", author: "Prof. Hartwell", updatedAt: "4 hours ago" },
];

const typeIcons: Record<string, typeof FileText> = {
  lesson: FileText,
  course: BookOpen,
  media: Image,
  quiz: FileText,
};

const statusColors: Record<ContentStatus, string> = {
  draft: "bg-zinc-700 text-zinc-300",
  review: "bg-amber-500/20 text-amber-400",
  published: "bg-emerald-500/20 text-emerald-400",
  archived: "bg-zinc-800 text-zinc-500",
};

export default function ContentStudioPage() {
  const [filter, setFilter] = useState<ContentType>("all");
  const [search, setSearch] = useState("");

  const filtered = mockContent.filter((item) => {
    if (filter !== "all" && item.type !== filter) return false;
    if (search && !item.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Content Studio</h1>
          <p className="text-sm text-zinc-400">Create, edit, and manage all educational content</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-fuchsia-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-fuchsia-500">
          <Plus className="h-4 w-4" />
          New Content
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[240px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            placeholder="Search content..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800/60 py-2 pl-10 pr-4 text-sm text-white placeholder:text-zinc-500 focus:border-fuchsia-500 focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-1 rounded-lg border border-zinc-700 bg-zinc-800/60 p-1">
          {(["all", "lesson", "course", "media", "quiz"] as ContentType[]).map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium capitalize transition-colors ${
                filter === t
                  ? "bg-fuchsia-600 text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Content Table */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-800 text-left text-xs font-medium uppercase tracking-wider text-zinc-500">
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Track</th>
              <th className="px-4 py-3">Author</th>
              <th className="px-4 py-3">Updated</th>
              <th className="px-4 py-3 w-10"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            {filtered.map((item) => {
              const Icon = typeIcons[item.type] ?? FileText;
              return (
                <tr key={item.id} className="transition-colors hover:bg-zinc-800/40">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-zinc-500" />
                      <span className="text-sm font-medium text-white">{item.title}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-xs capitalize text-zinc-400">{item.type}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColors[item.status]}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-400">{item.track}</td>
                  <td className="px-4 py-3 text-sm text-zinc-400">{item.author}</td>
                  <td className="px-4 py-3 text-xs text-zinc-500">{item.updatedAt}</td>
                  <td className="px-4 py-3">
                    <button className="rounded p-1 text-zinc-500 hover:bg-zinc-700 hover:text-white">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="py-12 text-center text-sm text-zinc-500">No content found matching your filters.</div>
        )}
      </div>
    </div>
  );
}
