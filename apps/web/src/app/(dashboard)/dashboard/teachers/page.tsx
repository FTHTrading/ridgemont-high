"use client";

import {
  GraduationCap,
  MessageCircle,
  Paintbrush,
  Code2,
  Shield,
  Scale,
  Building2,
  Brain,
  Film,
  Newspaper,
} from "lucide-react";

const teachers = [
  {
    name: "Professor Hartwell",
    role: "The Disciplinarian",
    subject: "AI Foundations & Ethics",
    style:
      "Structured, exacting, citation-mandatory. Demands evidence and clear reasoning. No hand-holding.",
    icon: GraduationCap,
    color: "from-ridgemont-electricBlue-500/20 to-ridgemont-electricBlue-500/5",
    iconColor: "text-ridgemont-electricBlue-400",
    border: "border-ridgemont-electricBlue-500/20",
  },
  {
    name: "Mx. Cipher",
    role: "The Prompt Whisperer",
    subject: "Prompt Engineering",
    style:
      "Socratic, playful, iterative. Asks leading questions, hints rather than tells, celebrates creative prompts.",
    icon: MessageCircle,
    color: "from-ridgemont-neonMagenta-500/20 to-ridgemont-neonMagenta-500/5",
    iconColor: "text-ridgemont-neonMagenta-400",
    border: "border-ridgemont-neonMagenta-500/20",
  },
  {
    name: "Coach Dex",
    role: "The Hype Coach",
    subject: "Agent Systems & MCP",
    style:
      "Energetic, encouraging, sports-metaphor heavy. Breaks complex agent patterns into plays and drills.",
    icon: Brain,
    color: "from-orange-500/20 to-orange-500/5",
    iconColor: "text-orange-400",
    border: "border-orange-500/20",
  },
  {
    name: "Ms. Waverly",
    role: "The Creative Director",
    subject: "Generative AI & Creativity",
    style:
      "Artistic, expansive, portfolio-oriented. Encourages cross-medium experimentation and aesthetic critique.",
    icon: Paintbrush,
    color: "from-ridgemont-warmGold-500/20 to-ridgemont-warmGold-500/5",
    iconColor: "text-ridgemont-warmGold-400",
    border: "border-ridgemont-warmGold-500/20",
  },
  {
    name: "Mr. Stacks",
    role: "The Code Mentor",
    subject: "AI-Assisted Coding",
    style:
      "Deadpan humorous, practical, code-first. Every lesson ends with working code you can ship.",
    icon: Code2,
    color: "from-ridgemont-arcadeGreen-500/20 to-ridgemont-arcadeGreen-500/5",
    iconColor: "text-ridgemont-arcadeGreen-400",
    border: "border-ridgemont-arcadeGreen-500/20",
  },
  {
    name: "Dr. Safelight",
    role: "The Guardian",
    subject: "AI Safety & Alignment",
    style:
      "Careful, measured, scenario-driven. Presents dilemmas, never prescribes — develops critical judgment.",
    icon: Shield,
    color: "from-red-500/20 to-red-500/5",
    iconColor: "text-red-400",
    border: "border-red-500/20",
  },
  {
    name: "Judge Fairfax",
    role: "The Ethicist",
    subject: "AI Ethics & Society",
    style:
      "Debate-facilitator, balanced, primary-source focused. Assigns opposing positions and grades argumentation.",
    icon: Scale,
    color: "from-ridgemont-vhsPurple-500/20 to-ridgemont-vhsPurple-500/5",
    iconColor: "text-ridgemont-vhsPurple-400",
    border: "border-ridgemont-vhsPurple-500/20",
  },
  {
    name: "Principal Torres",
    role: "The Industry Insider",
    subject: "AI in Industry",
    style:
      "Executive, case-study driven, ROI-conscious. Speaks in business outcomes and real-world transformations.",
    icon: Building2,
    color: "from-cyan-500/20 to-cyan-500/5",
    iconColor: "text-cyan-400",
    border: "border-cyan-500/20",
  },
  {
    name: "Mr. Rewind",
    role: "The Media Historian",
    subject: "Media & Cultural AI Context",
    style:
      "Nostalgic, encyclopedic, connection-focused. Links every AI concept to its cultural antecedent.",
    icon: Film,
    color: "from-amber-500/20 to-amber-500/5",
    iconColor: "text-amber-400",
    border: "border-amber-500/20",
  },
  {
    name: "Diana Datastream",
    role: "The News Anchor",
    subject: "Current Events & AI in the News",
    style:
      "Professional, concise, cited. Delivers daily briefings, source transparency, no editorializing.",
    icon: Newspaper,
    color: "from-emerald-500/20 to-emerald-500/5",
    iconColor: "text-emerald-400",
    border: "border-emerald-500/20",
  },
];

export default function TeachersPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-2xl font-bold text-white">
          Your Mentors
        </h1>
        <p className="mt-1 text-sm text-ridgemont-cassetteGray-400">
          Ten AI mentors — each with a distinct personality, teaching style, and subject expertise.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {teachers.map((t) => (
          <div
            key={t.name}
            className={`rounded-xl border ${t.border} bg-gradient-to-br ${t.color} p-6`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ridgemont-offBlack-800/80">
                <t.icon className={`h-6 w-6 ${t.iconColor}`} />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-white">
                  {t.name}
                </h3>
                <p className="text-xs text-ridgemont-cassetteGray-400">
                  {t.role}
                </p>
              </div>
            </div>
            <p className="text-xs font-medium text-ridgemont-cassetteGray-300 mb-2">
              {t.subject}
            </p>
            <p className="text-sm text-ridgemont-cassetteGray-300 leading-relaxed">
              {t.style}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
