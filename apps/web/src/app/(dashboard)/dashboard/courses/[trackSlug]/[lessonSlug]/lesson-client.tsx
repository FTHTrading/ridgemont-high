"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock,
  GraduationCap,
  Quote,
  History,
  FlaskConical,
  CheckCircle2,
  MessageCircle,
  Volume2,
  VolumeX,
  Send,
  X,
} from "lucide-react";
import {
  getCourseLesson,
  getAdjacentLessons,
  type SeedBlock,
} from "@ridgemont/content";

// ─── Instructor Display Names ────────────────────────────────
const INSTRUCTOR_NAMES: Record<string, string> = {
  spicoli: "Jeff Spicoli",
  ferris: "Ferris Bueller",
  miyagi: "Mr. Miyagi",
  bender: "John Bender",
  claire: "Claire Standish",
  brian: "Brian Johnson",
  cameron: "Cameron Frye",
  zack: "Zack Morris",
  lisa: "Lisa Turtle",
  dwayne: "Dwayne Wayne",
};

// Change this after deploying the Cloudflare Worker
const AI_API_URL = "https://ridgemont-api.kevanbtc.workers.dev";

// ─── Chat Types ──────────────────────────────────────────────
interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

// ─── TTS Hook ────────────────────────────────────────────────
function useVoice() {
  const [speaking, setSpeaking] = useState(false);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  const speak = useCallback((text: string) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const cleaned = text
      .replace(/#{1,3}\s/g, "")
      .replace(/\*\*(.+?)\*\*/g, "$1")
      .replace(/\n- /g, ". ")
      .replace(/\n\d+\.\s/g, ". ");
    const utter = new SpeechSynthesisUtterance(cleaned);
    utter.rate = 0.95;
    utter.pitch = 1;
    utter.onend = () => setSpeaking(false);
    utter.onerror = () => setSpeaking(false);
    utterRef.current = utter;
    setSpeaking(true);
    window.speechSynthesis.speak(utter);
  }, []);

  const stop = useCallback(() => {
    window.speechSynthesis?.cancel();
    setSpeaking(false);
  }, []);

  return { speaking, speak, stop };
}

// ─── Progress Helpers ────────────────────────────────────────
function getProgressKey(track: string, lesson: string) {
  return `ridgemont:progress:${track}:${lesson}`;
}
function isCompleted(track: string, lesson: string): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(getProgressKey(track, lesson)) === "done";
}
function markComplete(track: string, lesson: string) {
  localStorage.setItem(getProgressKey(track, lesson), "done");
}

// ═════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═════════════════════════════════════════════════════════════

export default function LessonPageClient() {
  const params = useParams<{ trackSlug: string; lessonSlug: string }>();
  const trackSlug = params.trackSlug;
  const lessonSlug = params.lessonSlug;
  const lesson = getCourseLesson(trackSlug, lessonSlug);
  const { prev, next } = getAdjacentLessons(trackSlug, lessonSlug);

  const [chatOpen, setChatOpen] = useState(false);
  const [completed, setCompleted] = useState(false);
  const { speaking, speak, stop } = useVoice();

  useEffect(() => {
    setCompleted(isCompleted(trackSlug, lessonSlug));
  }, [trackSlug, lessonSlug]);

  if (!lesson) {
    return (
      <div className="mx-auto max-w-3xl py-20 text-center">
        <h1 className="text-xl font-bold text-white mb-2">Lesson Not Found</h1>
        <p className="text-sm text-ridgemont-cassetteGray-400 mb-6">
          This lesson doesn&apos;t exist yet or the URL is incorrect.
        </p>
        <Link
          href="/dashboard/courses"
          className="text-ridgemont-electricBlue-400 hover:underline text-sm"
        >
          &larr; Back to Courses
        </Link>
      </div>
    );
  }

  const instructorName = INSTRUCTOR_NAMES[lesson.personaId] ?? lesson.personaId;

  function handleComplete() {
    markComplete(trackSlug, lessonSlug);
    setCompleted(true);
  }

  function narrateAll() {
    const allText = lesson!.blocks
      .filter((b): b is Extract<SeedBlock, { type: "text" }> => b.type === "text")
      .map((b) => b.content)
      .join("\n\n");
    speak(allText);
  }

  return (
    <div className="relative">
      <div className="mx-auto max-w-3xl space-y-8 pb-24">
        {/* Header */}
        <div>
          <Link
            href={`/dashboard/courses/${trackSlug}`}
            className="inline-flex items-center gap-1 text-xs text-ridgemont-cassetteGray-500 hover:text-white transition-colors mb-3"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to Track
          </Link>
          <h1 className="font-heading text-2xl font-bold text-white">{lesson.title}</h1>
          <p className="mt-1 text-sm text-ridgemont-cassetteGray-400">{lesson.summary}</p>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-ridgemont-cassetteGray-400">
            <span className="flex items-center gap-1">
              <BookOpen className="h-3.5 w-3.5" /> Lesson {lesson.order} of 12
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> {lesson.estimatedMinutes} min
            </span>
            <span className="flex items-center gap-1">
              <GraduationCap className="h-3.5 w-3.5" /> {instructorName}
            </span>
            <button
              onClick={speaking ? stop : narrateAll}
              className="flex items-center gap-1 text-ridgemont-electricBlue-400 hover:text-ridgemont-electricBlue-300 transition-colors"
            >
              {speaking ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
              {speaking ? "Stop Narration" : "Narrate Lesson"}
            </button>
          </div>

          {/* Learning Objectives */}
          <div className="mt-4 rounded-lg border border-ridgemont-cassetteGray-700 bg-ridgemont-offBlack-800/40 p-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ridgemont-cassetteGray-500 mb-2">
              Learning Objectives
            </h3>
            <ul className="space-y-1">
              {lesson.learningObjectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-ridgemont-cassetteGray-300">
                  <span className="text-ridgemont-arcadeGreen-400 mt-0.5">&#10003;</span>
                  {obj}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content Blocks */}
        <div className="space-y-6">
          {lesson.blocks.map((block, i) => (
            <LessonBlock key={i} block={block} speak={speak} speaking={speaking} stop={stop} />
          ))}
        </div>

        {/* Completion */}
        {!completed ? (
          <div className="text-center py-4">
            <button
              onClick={handleComplete}
              className="rounded-lg bg-ridgemont-arcadeGreen-500 px-6 py-2.5 text-sm font-semibold text-black hover:bg-ridgemont-arcadeGreen-400 transition-colors"
            >
              Mark Lesson Complete
            </button>
          </div>
        ) : (
          <div className="text-center py-4">
            <span className="inline-flex items-center gap-2 text-sm text-ridgemont-arcadeGreen-400">
              <CheckCircle2 className="h-4 w-4" /> Lesson Complete
            </span>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between border-t border-ridgemont-cassetteGray-700 pt-6">
          {prev ? (
            <Link
              href={`/dashboard/courses/${trackSlug}/${prev.slug}`}
              className="flex items-center gap-2 text-sm text-ridgemont-cassetteGray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> {prev.title}
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/dashboard/courses/${trackSlug}/${next.slug}`}
              className="flex items-center gap-2 text-sm text-ridgemont-electricBlue-400 hover:text-ridgemont-electricBlue-300 transition-colors"
            >
              {next.title} <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <Link
              href={`/dashboard/courses/${trackSlug}`}
              className="flex items-center gap-2 text-sm text-ridgemont-arcadeGreen-400 hover:text-ridgemont-arcadeGreen-300 transition-colors"
            >
              Back to Track <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>

      {/* Floating Chat Button */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-ridgemont-vhsPurple-500 px-5 py-3 text-sm font-medium text-white shadow-lg hover:bg-ridgemont-vhsPurple-400 transition-colors"
        >
          <MessageCircle className="h-4 w-4" />
          Ask {instructorName}
        </button>
      )}

      {/* Chat Drawer */}
      {chatOpen && (
        <ChatDrawer
          instructorId={lesson.personaId}
          instructorName={instructorName}
          lessonTitle={lesson.title}
          trackSlug={trackSlug}
          onClose={() => setChatOpen(false)}
        />
      )}
    </div>
  );
}

// ═════════════════════════════════════════════════════════════
// CHAT DRAWER
// ═════════════════════════════════════════════════════════════

function ChatDrawer({
  instructorId,
  instructorName,
  lessonTitle,
  trackSlug,
  onClose,
}: {
  instructorId: string;
  instructorName: string;
  lessonTitle: string;
  trackSlug: string;
  onClose: () => void;
}) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  async function send() {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const userMsg: ChatMessage = { role: "user", content: trimmed };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${AI_API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updated,
          instructorId,
          lessonTitle,
          trackSlug,
        }),
      });

      if (!res.ok || !res.body) {
        throw new Error("Chat API error");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");
        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6);
          if (data === "[DONE]") break;
          try {
            const parsed = JSON.parse(data);
            const delta = parsed.choices?.[0]?.delta?.content;
            if (delta) {
              assistantText += delta;
              setMessages((prev) => {
                const copy = [...prev];
                copy[copy.length - 1] = { role: "assistant", content: assistantText };
                return copy;
              });
            }
          } catch {
            // skip malformed SSE lines
          }
        }
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I couldn't connect to the AI service right now. Try again in a moment!" },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-0 right-0 z-50 w-full sm:w-[400px] h-[500px] flex flex-col rounded-tl-xl border-l border-t border-ridgemont-cassetteGray-700 bg-ridgemont-offBlack-900 shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-ridgemont-cassetteGray-700 px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-white">{instructorName}</p>
          <p className="text-[10px] text-ridgemont-cassetteGray-500">AI Teaching Assistant</p>
        </div>
        <button onClick={onClose} className="text-ridgemont-cassetteGray-500 hover:text-white">
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {messages.length === 0 && (
          <div className="text-center py-8">
            <MessageCircle className="h-8 w-8 text-ridgemont-cassetteGray-600 mx-auto mb-2" />
            <p className="text-sm text-ridgemont-cassetteGray-500">
              Ask {instructorName} anything about this lesson.
            </p>
          </div>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`text-sm leading-relaxed rounded-lg px-3 py-2 max-w-[85%] ${
              msg.role === "user"
                ? "ml-auto bg-ridgemont-electricBlue-500/20 text-ridgemont-cassetteGray-200"
                : "bg-ridgemont-vhsPurple-500/10 text-ridgemont-cassetteGray-300 border border-ridgemont-vhsPurple-500/20"
            }`}
          >
            {msg.content || (loading && i === messages.length - 1 ? "Thinking..." : "")}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="border-t border-ridgemont-cassetteGray-700 px-3 py-2">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && send()}
            placeholder={`Ask ${instructorName}...`}
            className="flex-1 rounded-lg border border-ridgemont-cassetteGray-700 bg-ridgemont-offBlack-800 px-3 py-2 text-sm text-white placeholder-ridgemont-cassetteGray-500 focus:border-ridgemont-vhsPurple-500 focus:outline-none"
            disabled={loading}
          />
          <button
            onClick={send}
            disabled={loading || !input.trim()}
            className="rounded-lg bg-ridgemont-vhsPurple-500 p-2 text-white hover:bg-ridgemont-vhsPurple-400 disabled:opacity-40 transition-colors"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ═════════════════════════════════════════════════════════════
// BLOCK RENDERERS
// ═════════════════════════════════════════════════════════════

function LessonBlock({
  block,
  speak,
  speaking,
  stop,
}: {
  block: SeedBlock;
  speak: (text: string) => void;
  speaking: boolean;
  stop: () => void;
}) {
  switch (block.type) {
    case "text":
      return <TextBlock content={block.content} speak={speak} speaking={speaking} stop={stop} />;
    case "persona_commentary":
      return (
        <PersonaCommentaryBlock
          personaId={block.personaId}
          quote={block.quote}
          speak={speak}
          speaking={speaking}
          stop={stop}
        />
      );
    case "then_vs_now":
      return <ThenVsNowBlock block={block} />;
    case "code":
      return <CodeBlock block={block} />;
    case "source_card":
      return <SourceCardBlock block={block} />;
    case "quiz":
      return <QuizBlock block={block} />;
    case "lab":
      return <LabBlock block={block} />;
    default:
      return null;
  }
}

function TextBlock({
  content,
  speak,
  speaking,
  stop,
}: {
  content: string;
  speak: (text: string) => void;
  speaking: boolean;
  stop: () => void;
}) {
  const html = content
    .replace(/### (.+)/g, '<h3 class="font-heading text-lg font-semibold text-white mt-4 mb-2">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-white">$1</strong>')
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n- /g, '<br/><span class="text-ridgemont-cassetteGray-300">&bull; </span>')
    .replace(/\n(\d+)\.\s/g, '<br/><span class="text-ridgemont-cassetteGray-300">$1. </span>');

  return (
    <div className="relative group">
      <button
        onClick={() => (speaking ? stop() : speak(content))}
        className="absolute -right-2 top-0 opacity-0 group-hover:opacity-100 transition-opacity text-ridgemont-cassetteGray-500 hover:text-ridgemont-electricBlue-400 p-1"
        title={speaking ? "Stop" : "Read aloud"}
      >
        {speaking ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
      </button>
      <div
        className="prose-sm text-sm text-ridgemont-cassetteGray-300 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: `<p>${html}</p>` }}
      />
    </div>
  );
}

function PersonaCommentaryBlock({
  personaId,
  quote,
  speak,
  speaking,
  stop,
}: {
  personaId: string;
  quote: string;
  speak: (text: string) => void;
  speaking: boolean;
  stop: () => void;
}) {
  const name = INSTRUCTOR_NAMES[personaId] ?? personaId;
  return (
    <div className="rounded-xl border border-ridgemont-vhsPurple-500/20 bg-ridgemont-vhsPurple-500/5 p-5 relative group">
      <button
        onClick={() => (speaking ? stop() : speak(quote))}
        className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity text-ridgemont-cassetteGray-500 hover:text-ridgemont-vhsPurple-400 p-1"
        title={speaking ? "Stop" : "Read aloud"}
      >
        {speaking ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
      </button>
      <div className="flex items-center gap-2 mb-3">
        <Quote className="h-4 w-4 text-ridgemont-vhsPurple-400" />
        <span className="text-xs font-semibold text-ridgemont-vhsPurple-300">{name}</span>
      </div>
      <p className="text-sm text-ridgemont-cassetteGray-300 leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
    </div>
  );
}

function ThenVsNowBlock({ block }: { block: Extract<SeedBlock, { type: "then_vs_now" }> }) {
  return (
    <div className="rounded-xl border border-ridgemont-warmGold-500/20 bg-ridgemont-warmGold-500/5 p-5">
      <div className="flex items-center gap-2 mb-3">
        <History className="h-4 w-4 text-ridgemont-warmGold-400" />
        <span className="text-xs font-semibold text-ridgemont-warmGold-300">Then vs Now</span>
        <span className="ml-auto rounded bg-ridgemont-offBlack-800/80 px-2 py-0.5 text-[10px] text-ridgemont-cassetteGray-400">
          {block.era}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm mb-3">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-ridgemont-cassetteGray-500">Then</span>
          <p className="font-medium text-ridgemont-warmGold-200 mt-0.5">{block.thenLabel}</p>
          <p className="text-xs text-ridgemont-cassetteGray-400 mt-1">{block.thenDescription}</p>
        </div>
        <div>
          <span className="text-[10px] uppercase tracking-wider text-ridgemont-cassetteGray-500">Now</span>
          <p className="font-medium text-white mt-0.5">{block.nowLabel}</p>
          <p className="text-xs text-ridgemont-cassetteGray-400 mt-1">{block.nowDescription}</p>
        </div>
      </div>
    </div>
  );
}

function CodeBlock({ block }: { block: Extract<SeedBlock, { type: "code" }> }) {
  return (
    <div className="rounded-xl border border-ridgemont-cassetteGray-700 bg-ridgemont-offBlack-900 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-ridgemont-cassetteGray-700">
        <span className="text-xs text-ridgemont-cassetteGray-500 font-mono">{block.language}</span>
      </div>
      <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
        <code className="text-ridgemont-arcadeGreen-300 font-mono">{block.code}</code>
      </pre>
      {block.caption && (
        <div className="border-t border-ridgemont-cassetteGray-700 px-4 py-2">
          <p className="text-xs text-ridgemont-cassetteGray-500 italic">{block.caption}</p>
        </div>
      )}
    </div>
  );
}

function SourceCardBlock({ block }: { block: Extract<SeedBlock, { type: "source_card" }> }) {
  return (
    <div className="rounded-xl border border-ridgemont-cassetteGray-700 bg-ridgemont-offBlack-800/60 p-4">
      <div className="flex items-start gap-3">
        <BookOpen className="h-5 w-5 text-ridgemont-electricBlue-400 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium text-white">{block.title}</p>
          <p className="text-xs text-ridgemont-cassetteGray-400 mt-0.5">
            {block.author} &mdash; {block.publication} ({block.year})
          </p>
          <p className="text-sm text-ridgemont-cassetteGray-300 mt-2 leading-relaxed">{block.description}</p>
          {block.url && (
            <a
              href={block.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs text-ridgemont-electricBlue-400 hover:underline mt-2"
            >
              View Source &rarr;
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function QuizBlock({ block }: { block: Extract<SeedBlock, { type: "quiz" }> }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="rounded-xl border border-ridgemont-neonMagenta-500/20 bg-ridgemont-neonMagenta-500/5 p-5">
      <p className="text-sm font-semibold text-white mb-3">{block.question}</p>
      <div className="space-y-2 mb-4">
        {block.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => !submitted && setSelected(i)}
            disabled={submitted}
            className={`w-full text-left rounded-lg px-4 py-2.5 text-sm border transition-colors ${
              submitted && i === block.correctIndex
                ? "border-ridgemont-arcadeGreen-500 bg-ridgemont-arcadeGreen-500/10 text-ridgemont-arcadeGreen-300"
                : submitted && i === selected && i !== block.correctIndex
                  ? "border-red-500 bg-red-500/10 text-red-300"
                  : selected === i
                    ? "border-ridgemont-electricBlue-500 bg-ridgemont-electricBlue-500/10 text-white"
                    : "border-ridgemont-cassetteGray-700 text-ridgemont-cassetteGray-300 hover:border-ridgemont-cassetteGray-500"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
      {!submitted ? (
        <button
          onClick={() => selected !== null && setSubmitted(true)}
          disabled={selected === null}
          className="rounded-lg bg-ridgemont-neonMagenta-500 px-5 py-2 text-sm font-medium text-white disabled:opacity-40 hover:bg-ridgemont-neonMagenta-400 transition-colors"
        >
          Submit Answer
        </button>
      ) : (
        <div className="flex items-start gap-2">
          <CheckCircle2
            className={`h-4 w-4 shrink-0 mt-0.5 ${
              selected === block.correctIndex ? "text-ridgemont-arcadeGreen-400" : "text-red-400"
            }`}
          />
          <p className="text-sm text-ridgemont-cassetteGray-300">{block.explanation}</p>
        </div>
      )}
    </div>
  );
}

function LabBlock({ block }: { block: Extract<SeedBlock, { type: "lab" }> }) {
  return (
    <div className="rounded-xl border border-ridgemont-arcadeGreen-500/20 bg-ridgemont-arcadeGreen-500/5 p-5">
      <div className="flex items-center gap-2 mb-3">
        <FlaskConical className="h-4 w-4 text-ridgemont-arcadeGreen-400" />
        <span className="text-xs font-semibold text-ridgemont-arcadeGreen-300">Lab Activity</span>
        <span className="ml-auto text-[10px] text-ridgemont-cassetteGray-500 uppercase">{block.labType}</span>
      </div>
      <h4 className="text-sm font-semibold text-white">{block.labTitle}</h4>
      <p className="text-sm text-ridgemont-cassetteGray-300 mt-1 leading-relaxed">{block.labDescription}</p>
    </div>
  );
}
