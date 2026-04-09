"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Palette,
  Heart,
  Megaphone,
  Code2,
  Film,
  Compass,
  BookMarked,
  Wrench,
  Newspaper,
  Quote,
} from "lucide-react";

const instructors = [
  {
    name: "Jeff Spicoli",
    role: "The Creative Rebel",
    subject: "Prompting & AI Basics",
    icon: Palette,
    color: "from-ridgemont-electricBlue-500 to-cyan-400",
    accent: "text-ridgemont-electricBlue-400",
    ring: "ring-ridgemont-electricBlue-500/20",
    style: "Laid-back genius. Makes AI feel approachable. Zero jargon, all vibes.",
    quote: "Dude, AI is just talking to computers. And I talk to everything.",
  },
  {
    name: "Ferris Bueller",
    role: "The Hustler Coach",
    subject: "AI for Business & Side Hustles",
    icon: Megaphone,
    color: "from-ridgemont-warmGold-500 to-amber-400",
    accent: "text-ridgemont-warmGold-400",
    ring: "ring-ridgemont-warmGold-500/20",
    style: "Energetic. Ships fast. Turns ideas into products before lunch.",
    quote: "Life moves pretty fast. AI moves faster. Let's keep up.",
  },
  {
    name: "Mr. Miyagi",
    role: "The Disciplinarian",
    subject: "AI Foundations & Systems Thinking",
    icon: GraduationCap,
    color: "from-red-500 to-orange-500",
    accent: "text-red-400",
    ring: "ring-red-500/20",
    style: "Patient master. Builds from fundamentals. No shortcuts, no wasted steps.",
    quote: "First learn stand, then learn fly. AI same — foundation is everything.",
  },
  {
    name: "John Bender",
    role: "The Culture Analyst",
    subject: "Media Literacy & Power Structures",
    icon: Film,
    color: "from-ridgemont-vhsPurple-500 to-violet-400",
    accent: "text-ridgemont-vhsPurple-400",
    ring: "ring-ridgemont-vhsPurple-500/20",
    style: "Questions everything. Cuts through hype. Sees what others miss.",
    quote: "Who controls the AI controls the narrative. Pay attention.",
  },
  {
    name: "Claire Standish",
    role: "The Older Sibling",
    subject: "Quality Writing & Personal Brand",
    icon: Heart,
    color: "from-pink-500 to-ridgemont-neonMagenta-500",
    accent: "text-pink-400",
    ring: "ring-pink-500/20",
    style: "Polished. Sets the standard. Makes every deliverable shine.",
    quote: "Good enough isn't good enough. Let's make it excellent.",
  },
  {
    name: "Brian Johnson",
    role: "The Librarian",
    subject: "Research & Source Verification",
    icon: BookMarked,
    color: "from-indigo-500 to-blue-400",
    accent: "text-indigo-400",
    ring: "ring-indigo-500/20",
    style: "Methodical researcher. Traces every claim. Trusts evidence, not confidence.",
    quote: "A claim without a source is just an opinion. Let's find the source.",
  },
  {
    name: "Cameron Frye",
    role: "The Counselor",
    subject: "AI Safety & Responsible Use",
    icon: Compass,
    color: "from-teal-500 to-cyan-400",
    accent: "text-teal-400",
    ring: "ring-teal-500/20",
    style: "Careful planner. Thinks about what could go wrong before it does.",
    quote: "I would like to dedicate this section to safe, responsible AI use.",
  },
  {
    name: "Zack Morris",
    role: "The Operator",
    subject: "Growth, Leverage & Product Launch",
    icon: Megaphone,
    color: "from-ridgemont-arcadeGreen-500 to-emerald-400",
    accent: "text-ridgemont-arcadeGreen-400",
    ring: "ring-ridgemont-arcadeGreen-500/20",
    style: "Strategic thinker. Sees angles. Builds systems that scale.",
    quote: "Time out! Before we build, let's make sure it matters.",
  },
  {
    name: "Lisa Turtle",
    role: "The Trend Spotter",
    subject: "Design, Culture & Creative AI",
    icon: Newspaper,
    color: "from-ridgemont-neonMagenta-400 to-ridgemont-electricBlue-400",
    accent: "text-ridgemont-neonMagenta-400",
    ring: "ring-ridgemont-neonMagenta-500/20",
    style: "Culture-first lens. Spots trends. Knows what looks good and why.",
    quote: "AI can generate anything. Taste decides what's worth keeping.",
  },
  {
    name: "Dwayne Wayne",
    role: "The Quiet Builder",
    subject: "Code, APIs & Agent Architecture",
    icon: Code2,
    color: "from-orange-500 to-yellow-500",
    accent: "text-orange-400",
    ring: "ring-orange-500/20",
    style: "Builds what works. Ships clean systems. Fixes your code, keeps it minimal.",
    quote: "Ship it, then improve it. Perfect code that never ships is worthless.",
  },
];

export function MeetTeachers() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="instructors" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ridgemont-offBlack-800/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 rounded-md bg-ridgemont-neonMagenta-500/10 px-3 py-1 text-xs font-medium text-ridgemont-neonMagenta-400 ring-1 ring-inset ring-ridgemont-neonMagenta-500/20 mb-4">
            Instructors
          </span>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-5xl">
            Meet Your <span className="gradient-text">Instructors</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-ridgemont-cassetteGray-300">
            Ten AI instructors inspired by iconic 80s &amp; 90s characters. Each
            brings a unique teaching style to your online AI education.
          </p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {instructors.map((instructor, i) => (
            <motion.div
              key={instructor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              onClick={() => setSelected(selected === i ? null : i)}
              className={`group relative rounded-xl border border-ridgemont-cassetteGray-600 bg-ridgemont-offBlack-800/80 p-5 cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                selected === i
                  ? `ring-1 ${instructor.ring} border-opacity-60`
                  : "hover:border-ridgemont-cassetteGray-400"
              }`}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div
                  className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${instructor.color} shadow-lg`}
                >
                  <instructor.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-heading text-sm font-semibold text-white">
                  {instructor.name}
                </h3>
                <p className={`text-xs ${instructor.accent} font-medium`}>
                  {instructor.role}
                </p>
                <p className="mt-1 text-xs text-ridgemont-cassetteGray-300">
                  {instructor.subject}
                </p>

                <AnimatePresence>
                  {selected === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 pt-3 border-t border-ridgemont-cassetteGray-700">
                        <div className="flex gap-2">
                          <Quote className={`h-3 w-3 ${instructor.accent} shrink-0 mt-0.5`} />
                          <p className="text-[11px] text-ridgemont-cassetteGray-300 italic leading-relaxed">
                            {instructor.quote}
                          </p>
                        </div>
                        <p className="mt-2 text-[11px] text-ridgemont-cassetteGray-400">
                          {instructor.style}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 text-center text-xs text-ridgemont-cassetteGray-500"
        >
          Click any instructor to see their philosophy
        </motion.p>
      </div>
    </section>
  );
}
