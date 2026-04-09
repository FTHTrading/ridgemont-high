"use client";

import { useState } from "react";
import { Search, Plus, Newspaper, Check, Clock, Eye, ExternalLink } from "lucide-react";

interface NewsArticle {
  id: string;
  title: string;
  source: string;
  status: "pending" | "approved" | "scheduled" | "published";
  topics: string[];
  ageRating: string;
  publishedAt: string;
  curatedBy: string;
}

const mockArticles: NewsArticle[] = [
  { id: "1", title: "Google DeepMind Introduces Gemini 3.0 with Multimodal Reasoning", source: "Google AI Blog", status: "published", topics: ["llm", "multimodal"], ageRating: "all", publishedAt: "Today", curatedBy: "Ms. Dawson" },
  { id: "2", title: "New Study Reveals Bias Patterns in LLM Hiring Tools", source: "MIT Tech Review", status: "approved", topics: ["ethics", "bias"], ageRating: "13+", publishedAt: "Today", curatedBy: "AutoCurate" },
  { id: "3", title: "Open-Source RAG Framework Surpasses Commercial Alternatives", source: "Hugging Face Blog", status: "scheduled", topics: ["rag", "open-source"], ageRating: "all", publishedAt: "Tomorrow", curatedBy: "AutoCurate" },
  { id: "4", title: "EU AI Act Enforcement Begins: What Developers Need to Know", source: "MIT Tech Review", status: "pending", topics: ["regulation", "ethics"], ageRating: "13+", publishedAt: "Today", curatedBy: "AutoCurate" },
  { id: "5", title: "Anthropic Introduces Constitutional AI 2.0", source: "arXiv", status: "pending", topics: ["llm", "ethics"], ageRating: "all", publishedAt: "Today", curatedBy: "AutoCurate" },
  { id: "6", title: "MCP Protocol Gains Traction in Enterprise Agent Deployments", source: "Industry", status: "approved", topics: ["agents", "tools"], ageRating: "all", publishedAt: "Yesterday", curatedBy: "Ms. Dawson" },
];

const statusBadge: Record<string, string> = {
  pending: "bg-amber-500/20 text-amber-400",
  approved: "bg-blue-500/20 text-blue-400",
  scheduled: "bg-purple-500/20 text-purple-400",
  published: "bg-emerald-500/20 text-emerald-400",
};

export default function NewsCurationPage() {
  const [search, setSearch] = useState("");

  const filtered = mockArticles.filter((a) =>
    search ? a.title.toLowerCase().includes(search.toLowerCase()) : true
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">News Curation</h1>
          <p className="text-sm text-zinc-400">Curate AI news for daily student briefings</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-fuchsia-600 px-4 py-2 text-sm font-medium text-white hover:bg-fuchsia-500">
          <Plus className="h-4 w-4" />
          Add Article
        </button>
      </div>

      {/* Today's Briefing Status */}
      <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-5">
        <div className="flex items-center gap-3">
          <Newspaper className="h-6 w-6 text-cyan-400" />
          <div>
            <h3 className="font-semibold text-white">Today&apos;s Briefing</h3>
            <p className="text-sm text-zinc-400">
              3 articles published &middot; 2 pending review &middot; 1 scheduled for tomorrow
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800/60 py-2 pl-10 pr-4 text-sm text-white placeholder:text-zinc-500 focus:border-fuchsia-500 focus:outline-none"
        />
      </div>

      <div className="space-y-3">
        {filtered.map((article) => (
          <div key={article.id} className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-white">{article.title}</h3>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${statusBadge[article.status]}`}>
                    {article.status}
                  </span>
                </div>
                <p className="mt-1 text-xs text-zinc-500">
                  {article.source} &middot; {article.publishedAt} &middot; Curated by {article.curatedBy} &middot; {article.ageRating}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {article.topics.map((t) => (
                    <span key={t} className="rounded bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              {article.status === "pending" && (
                <div className="flex shrink-0 gap-2">
                  <button className="rounded-lg bg-emerald-600/20 px-3 py-1.5 text-xs font-medium text-emerald-400 hover:bg-emerald-600/30">
                    Approve
                  </button>
                  <button className="rounded-lg bg-zinc-700 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:bg-zinc-600">
                    Dismiss
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
