"use client";

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
} from "lucide-react";
import { useState } from "react";

/* ──────────────────────────────────────────────────────────
   Mock lesson data — replaced by MDX / DB in production
   ────────────────────────────────────────────────────────── */
const lesson = {
  title: "Understanding Neural Networks",
  track: "AI Foundations",
  trackSlug: "ai-foundations",
  order: 7,
  totalInTrack: 12,
  estimatedMinutes: 45,
  personaName: "Professor Hartwell",
  blocks: [
    {
      id: "b1",
      type: "text" as const,
      data: {
        body: `A neural network is a computational model inspired by biological neurons. At its core, it's a function approximator — given inputs, it produces outputs by passing data through layers of interconnected nodes (neurons), each applying a weighted sum followed by a non-linear activation function.\n\nThe key insight: rather than manually programming rules, we let the network **learn** the rules from data. This is the fundamental paradigm shift that separates traditional programming from machine learning.`,
      },
    },
    {
      id: "b2",
      type: "persona_commentary" as const,
      data: {
        personaName: "Professor Hartwell",
        commentary:
          'Pay close attention to the word "inspired." Neural networks are a mathematical abstraction. Real neurons are far more complex. When someone claims AI "thinks like a brain," demand their evidence. (Source: Crick, F. "The Astonishing Hypothesis," 1994)',
      },
    },
    {
      id: "b3",
      type: "then_vs_now" as const,
      data: {
        modernConcept: "Deep Neural Networks (2012–present)",
        eraEquivalent: "Perceptron (Rosenblatt, 1958)",
        era: "1950s",
        explanation:
          "Frank Rosenblatt built a physical machine — the Mark I Perceptron — that could learn to classify images. It had one layer. Today's networks have hundreds of layers and billions of parameters, but the core math (weighted sums + activation) is remarkably similar.",
      },
    },
    {
      id: "b4",
      type: "text" as const,
      data: {
        body: `### How a Single Neuron Works\n\n1. **Inputs** (x₁, x₂, … xₙ) arrive, each multiplied by a **weight** (w₁, w₂, … wₙ)\n2. Products are summed: z = w₁x₁ + w₂x₂ + … + wₙxₙ + b (bias)\n3. Sum passes through an **activation function**: a = σ(z)\n4. Output a is passed to the next layer\n\nCommon activation functions:\n- **ReLU**: max(0, z) — fast, widely used\n- **Sigmoid**: 1/(1 + e⁻ᶻ) — squashes to (0,1)\n- **Tanh**: (eᶻ - e⁻ᶻ)/(eᶻ + e⁻ᶻ) — squashes to (-1,1)`,
      },
    },
    {
      id: "b5",
      type: "code" as const,
      data: {
        language: "python",
        code: `import numpy as np

def relu(z):
    return np.maximum(0, z)

def forward(x, weights, bias):
    """Single neuron forward pass."""
    z = np.dot(weights, x) + bias
    return relu(z)

# Example: 3 inputs
x = np.array([1.0, 0.5, -1.5])
w = np.array([0.4, 0.8, -0.2])
b = 0.1

output = forward(x, w, b)
print(f"Neuron output: {output:.4f}")  # 0.9000`,
        caption: "A single neuron — the building block of every neural network.",
      },
    },
    {
      id: "b6",
      type: "source_card" as const,
      data: {
        sourceName: "Goodfellow, Bengio & Courville",
        sourceTitle: "Deep Learning (MIT Press, 2016)",
        sourceUrl: "https://www.deeplearningbook.org/",
        excerpt:
          "Chapter 6 covers feedforward networks in detail, including activation functions, loss landscapes, and gradient-based optimization.",
      },
    },
    {
      id: "b7",
      type: "quiz" as const,
      data: {
        question:
          "What is the primary purpose of an activation function in a neural network?",
        type: "multiple_choice",
        options: [
          "To initialize the weights randomly",
          "To introduce non-linearity so the network can learn complex patterns",
          "To reduce the number of parameters",
          "To normalize the input data",
        ],
        correctIndex: 1,
        explanation:
          "Without activation functions, a neural network would be a simple linear transformation — no matter how many layers you add. Non-linearity is what gives deep networks their power.",
      },
    },
    {
      id: "b8",
      type: "lab" as const,
      data: {
        labType: "code",
        title: "Build a 2-Layer Neural Network",
        description:
          "Open the Code Lab and implement a 2-layer neural network from scratch using only NumPy. Test it on a simple XOR dataset.",
        href: "/dashboard/labs/code",
      },
    },
  ],
};

export default function LessonPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      {/* Breadcrumb + meta */}
      <div>
        <Link
          href={`/dashboard/courses/${lesson.trackSlug}`}
          className="inline-flex items-center gap-1 text-xs text-ridgemont-cassetteGray-500 hover:text-white transition-colors mb-3"
        >
          <ArrowLeft className="h-3 w-3" />
          {lesson.track}
        </Link>
        <h1 className="font-heading text-2xl font-bold text-white">
          {lesson.title}
        </h1>
        <div className="mt-2 flex items-center gap-4 text-xs text-ridgemont-cassetteGray-400">
          <span className="flex items-center gap-1">
            <BookOpen className="h-3.5 w-3.5" /> Lesson {lesson.order} of{" "}
            {lesson.totalInTrack}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {lesson.estimatedMinutes} min
          </span>
          <span className="flex items-center gap-1">
            <GraduationCap className="h-3.5 w-3.5" /> {lesson.personaName}
          </span>
        </div>
      </div>

      {/* Blocks */}
      <div className="space-y-6">
        {lesson.blocks.map((block) => (
          <LessonBlock key={block.id} block={block} />
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between border-t border-ridgemont-cassetteGray-700 pt-6">
        <Link
          href={`/dashboard/courses/${lesson.trackSlug}/deep-learning`}
          className="flex items-center gap-2 text-sm text-ridgemont-cassetteGray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Previous Lesson
        </Link>
        <Link
          href={`/dashboard/courses/${lesson.trackSlug}/transformers`}
          className="flex items-center gap-2 text-sm text-ridgemont-electricBlue-400 hover:text-ridgemont-electricBlue-300 transition-colors"
        >
          Next Lesson <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

/* ── Block renderer ── */
function LessonBlock({
  block,
}: {
  block: (typeof lesson.blocks)[number];
}) {
  switch (block.type) {
    case "text":
      return <TextBlock body={block.data.body as string} />;
    case "persona_commentary":
      return (
        <PersonaCommentaryBlock
          personaName={block.data.personaName as string}
          commentary={block.data.commentary as string}
        />
      );
    case "then_vs_now":
      return <ThenVsNowBlock data={block.data as any} />;
    case "code":
      return <CodeBlock data={block.data as any} />;
    case "source_card":
      return <SourceCardBlock data={block.data as any} />;
    case "quiz":
      return <QuizBlock data={block.data as any} />;
    case "lab":
      return <LabBlock data={block.data as any} />;
    default:
      return null;
  }
}

/* ── Individual block components ── */

function TextBlock({ body }: { body: string }) {
  // Simple markdown-ish rendering (headers, bold, lists)
  const html = body
    .replace(/### (.+)/g, '<h3 class="font-heading text-lg font-semibold text-white mt-4 mb-2">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-white">$1</strong>')
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n- /g, '<br/><span class="text-ridgemont-cassetteGray-300">• </span>')
    .replace(
      /\n(\d+)\. /g,
      '<br/><span class="text-ridgemont-cassetteGray-300">$1. </span>'
    );

  return (
    <div
      className="prose-sm text-sm text-ridgemont-cassetteGray-300 leading-relaxed"
      dangerouslySetInnerHTML={{ __html: `<p>${html}</p>` }}
    />
  );
}

function PersonaCommentaryBlock({
  personaName,
  commentary,
}: {
  personaName: string;
  commentary: string;
}) {
  return (
    <div className="rounded-xl border border-ridgemont-vhsPurple-500/20 bg-ridgemont-vhsPurple-500/5 p-5">
      <div className="flex items-center gap-2 mb-3">
        <Quote className="h-4 w-4 text-ridgemont-vhsPurple-400" />
        <span className="text-xs font-semibold text-ridgemont-vhsPurple-300">
          {personaName}
        </span>
      </div>
      <p className="text-sm text-ridgemont-cassetteGray-300 leading-relaxed italic">
        {commentary}
      </p>
    </div>
  );
}

function ThenVsNowBlock({ data }: { data: any }) {
  return (
    <div className="rounded-xl border border-ridgemont-warmGold-500/20 bg-ridgemont-warmGold-500/5 p-5">
      <div className="flex items-center gap-2 mb-3">
        <History className="h-4 w-4 text-ridgemont-warmGold-400" />
        <span className="text-xs font-semibold text-ridgemont-warmGold-300">
          Then vs Now
        </span>
        <span className="ml-auto rounded bg-ridgemont-offBlack-800/80 px-2 py-0.5 text-[10px] text-ridgemont-cassetteGray-400">
          {data.era}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm mb-3">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-ridgemont-cassetteGray-500">
            Today
          </span>
          <p className="font-medium text-white mt-0.5">{data.modernConcept}</p>
        </div>
        <div>
          <span className="text-[10px] uppercase tracking-wider text-ridgemont-cassetteGray-500">
            Then
          </span>
          <p className="font-medium text-ridgemont-warmGold-200 mt-0.5">
            {data.eraEquivalent}
          </p>
        </div>
      </div>
      <p className="text-sm text-ridgemont-cassetteGray-300 leading-relaxed">
        {data.explanation}
      </p>
    </div>
  );
}

function CodeBlock({ data }: { data: any }) {
  return (
    <div className="rounded-xl border border-ridgemont-cassetteGray-700 bg-ridgemont-offBlack-900 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-ridgemont-cassetteGray-700">
        <span className="text-xs text-ridgemont-cassetteGray-500 font-mono">
          {data.language}
        </span>
      </div>
      <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
        <code className="text-ridgemont-arcadeGreen-300 font-mono">
          {data.code}
        </code>
      </pre>
      {data.caption && (
        <div className="border-t border-ridgemont-cassetteGray-700 px-4 py-2">
          <p className="text-xs text-ridgemont-cassetteGray-500 italic">
            {data.caption}
          </p>
        </div>
      )}
    </div>
  );
}

function SourceCardBlock({ data }: { data: any }) {
  return (
    <div className="rounded-xl border border-ridgemont-cassetteGray-700 bg-ridgemont-offBlack-800/60 p-4">
      <div className="flex items-start gap-3">
        <BookOpen className="h-5 w-5 text-ridgemont-electricBlue-400 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium text-white">{data.sourceTitle}</p>
          <p className="text-xs text-ridgemont-cassetteGray-400 mt-0.5">
            {data.sourceName}
          </p>
          <p className="text-sm text-ridgemont-cassetteGray-300 mt-2 leading-relaxed">
            {data.excerpt}
          </p>
          {data.sourceUrl && (
            <a
              href={data.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs text-ridgemont-electricBlue-400 hover:underline mt-2"
            >
              View Source →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function QuizBlock({ data }: { data: any }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="rounded-xl border border-ridgemont-neonMagenta-500/20 bg-ridgemont-neonMagenta-500/5 p-5">
      <p className="text-sm font-semibold text-white mb-3">{data.question}</p>
      <div className="space-y-2 mb-4">
        {(data.options as string[]).map((opt: string, i: number) => (
          <button
            key={i}
            onClick={() => !submitted && setSelected(i)}
            disabled={submitted}
            className={`w-full text-left rounded-lg px-4 py-2.5 text-sm border transition-colors ${
              submitted && i === data.correctIndex
                ? "border-ridgemont-arcadeGreen-500 bg-ridgemont-arcadeGreen-500/10 text-ridgemont-arcadeGreen-300"
                : submitted && i === selected && i !== data.correctIndex
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
          <CheckCircle2 className="h-4 w-4 text-ridgemont-arcadeGreen-400 shrink-0 mt-0.5" />
          <p className="text-sm text-ridgemont-cassetteGray-300">
            {data.explanation}
          </p>
        </div>
      )}
    </div>
  );
}

function LabBlock({ data }: { data: any }) {
  return (
    <div className="rounded-xl border border-ridgemont-arcadeGreen-500/20 bg-ridgemont-arcadeGreen-500/5 p-5">
      <div className="flex items-center gap-2 mb-3">
        <FlaskConical className="h-4 w-4 text-ridgemont-arcadeGreen-400" />
        <span className="text-xs font-semibold text-ridgemont-arcadeGreen-300">
          Lab Activity
        </span>
      </div>
      <h4 className="text-sm font-semibold text-white">{data.title}</h4>
      <p className="text-sm text-ridgemont-cassetteGray-300 mt-1 leading-relaxed">
        {data.description}
      </p>
      <Link
        href={data.href}
        className="inline-flex items-center gap-1 mt-3 text-sm text-ridgemont-arcadeGreen-400 hover:text-ridgemont-arcadeGreen-300 transition-colors"
      >
        Open Lab <ArrowRight className="h-3 w-3" />
      </Link>
    </div>
  );
}
