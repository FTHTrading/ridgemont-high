"use client";

import { Newspaper, ExternalLink, History, MessageCircle } from "lucide-react";

const briefings = [
  {
    title: "OpenAI launches GPT-5 with extended reasoning capabilities",
    summary:
      "The latest model demonstrates multi-step planning and self-correction across math, code, and open-ended tasks. Early benchmarks show significant gains in agentic tool-use scenarios.",
    source: "Reuters",
    sourceUrl: "#",
    time: "2h ago",
    topics: ["foundation models", "reasoning", "agents"],
    thenVsNow: {
      modern: "GPT-5 multi-step reasoning",
      historical: "1956 Logic Theorist (Newell & Simon)",
      explanation:
        "The earliest AI program that could prove mathematical theorems — symbolic reasoning vs. today's neural reasoning.",
    },
  },
  {
    title: "EU AI Act enforcement rules take effect across 27 member states",
    summary:
      "New regulations classify AI systems by risk level. High-risk systems (healthcare, law enforcement) require conformity assessments, transparency reports, and human oversight.",
    source: "AP News",
    sourceUrl: "#",
    time: "4h ago",
    topics: ["regulation", "policy", "ethics"],
    thenVsNow: {
      modern: "EU AI Act risk classification",
      historical: "1970s US Technology Assessment Act",
      explanation:
        "The first systematic government effort to evaluate emerging technologies for societal impact.",
    },
  },
  {
    title: "Researchers achieve protein structure prediction with 100M-parameter model",
    summary:
      "A team at Cambridge demonstrates that smaller, efficient models can match AlphaFold's accuracy on common protein families, reducing compute costs by 95%.",
    source: "arXiv",
    sourceUrl: "#",
    time: "6h ago",
    topics: ["biology", "efficiency", "research"],
    thenVsNow: {
      modern: "Efficient protein folding models",
      historical: "Levinthal's Paradox (1969)",
      explanation:
        "Cyrus Levinthal noted a protein could take longer than the age of the universe to fold by random search — the original challenge these models solve.",
    },
  },
  {
    title: "Major automaker deploys vision-language model for quality inspection",
    summary:
      "Toyota integrates multimodal AI into manufacturing lines — the system identifies defects with 99.7% accuracy using natural language defect descriptions rather than coded rules.",
    source: "Bloomberg",
    sourceUrl: "#",
    time: "8h ago",
    topics: ["industry", "vision", "manufacturing"],
    thenVsNow: null,
  },
];

const discussionPrompts = [
  "Should AI reasoning models be required to 'show their work' in high-stakes decisions?",
  "How does the EU's risk-based approach compare to a US sector-by-sector approach?",
  "What happens when smaller models outperform larger ones — does scaling still matter?",
];

export default function TodayPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <Newspaper className="h-7 w-7 text-ridgemont-warmGold-400" />
        <div>
          <h1 className="font-heading text-2xl font-bold text-white">
            Today in AI
          </h1>
          <p className="mt-0.5 text-sm text-ridgemont-cassetteGray-400">
            Your daily briefing — curated, cited, ready for discussion.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main briefing feed */}
        <div className="lg:col-span-2 space-y-5">
          {briefings.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-ridgemont-cassetteGray-700 bg-ridgemont-offBlack-800/60 p-6"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className="font-heading text-base font-semibold text-white leading-snug">
                  {item.title}
                </h2>
                <a
                  href={item.sourceUrl}
                  className="shrink-0 text-ridgemont-cassetteGray-500 hover:text-white"
                  aria-label="Open source"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <p className="text-sm text-ridgemont-cassetteGray-300 leading-relaxed mb-3">
                {item.summary}
              </p>
              <div className="flex items-center gap-3 text-xs text-ridgemont-cassetteGray-500">
                <span>{item.source}</span>
                <span>·</span>
                <span>{item.time}</span>
                <span>·</span>
                <div className="flex gap-1.5">
                  {item.topics.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-ridgemont-offBlack-700 px-1.5 py-0.5 text-[10px] text-ridgemont-cassetteGray-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Then vs Now card */}
              {item.thenVsNow && (
                <div className="mt-4 rounded-lg border border-ridgemont-warmGold-500/20 bg-ridgemont-warmGold-500/5 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <History className="h-4 w-4 text-ridgemont-warmGold-400" />
                    <span className="text-xs font-medium text-ridgemont-warmGold-300">
                      Then vs Now
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs mb-2">
                    <div>
                      <span className="text-ridgemont-cassetteGray-500">
                        Today:
                      </span>
                      <p className="text-white font-medium">
                        {item.thenVsNow.modern}
                      </p>
                    </div>
                    <div>
                      <span className="text-ridgemont-cassetteGray-500">
                        Then:
                      </span>
                      <p className="text-ridgemont-warmGold-200 font-medium">
                        {item.thenVsNow.historical}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-ridgemont-cassetteGray-300">
                    {item.thenVsNow.explanation}
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          <div className="rounded-xl border border-ridgemont-cassetteGray-700 bg-ridgemont-offBlack-800/60 p-5">
            <div className="flex items-center gap-2 mb-4">
              <MessageCircle className="h-5 w-5 text-ridgemont-electricBlue-400" />
              <h3 className="text-sm font-semibold text-white">
                Discussion Prompts
              </h3>
            </div>
            <div className="space-y-3">
              {discussionPrompts.map((prompt, i) => (
                <div
                  key={i}
                  className="rounded-lg bg-ridgemont-offBlack-700 p-3"
                >
                  <p className="text-sm text-ridgemont-cassetteGray-200 leading-relaxed">
                    {prompt}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-ridgemont-cassetteGray-700 bg-ridgemont-offBlack-800/60 p-5">
            <h3 className="text-sm font-semibold text-white mb-3">
              Source Policy
            </h3>
            <ul className="space-y-2 text-xs text-ridgemont-cassetteGray-400">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ridgemont-arcadeGreen-400" />
                Every claim is linked to a primary source
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ridgemont-arcadeGreen-400" />
                Sources: Reuters, AP, arXiv, official company blogs
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ridgemont-arcadeGreen-400" />
                No social media reposts or unverified claims
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ridgemont-arcadeGreen-400" />
                All summaries are human-readable and age-appropriate
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
