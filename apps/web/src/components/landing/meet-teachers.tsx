"use client";

import { motion } from "framer-motion";
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
} from "lucide-react";

const teachers = [
  {
    name: "Professor Hartwell",
    role: "The Disciplinarian",
    subject: "AI Foundations & Systems Thinking",
    icon: GraduationCap,
    color: "from-red-500 to-orange-500",
    style: "Strict but fair. Demands evidence. Breaks concepts into fundamentals.",
  },
  {
    name: "Coach Waverly",
    role: "The Creative Rebel",
    subject: "Prompting & Experimentation",
    icon: Palette,
    color: "from-ridgemont-electricBlue-500 to-cyan-400",
    style: "Laid-back genius. Lowers fear. Makes ideas feel possible.",
  },
  {
    name: "Alex Navarro",
    role: "The Older Sibling",
    subject: "Onboarding & Confidence",
    icon: Heart,
    color: "from-pink-500 to-ridgemont-neonMagenta-500",
    style: "Warm, patient. Helps you find your path without pressure.",
  },
  {
    name: "Marcus Sterling",
    role: "The Hustler Coach",
    subject: "Marketing & Persuasion Ethics",
    icon: Megaphone,
    color: "from-ridgemont-warmGold-500 to-amber-400",
    style: "Energetic persuasion teacher. Ethics-first storytelling.",
  },
  {
    name: "Dana Kowalski",
    role: "The Quiet Builder",
    subject: "Code & Architecture",
    icon: Code2,
    color: "from-ridgemont-arcadeGreen-500 to-emerald-400",
    style: "Clean abstractions. Ships working systems. Fixes your code.",
  },
  {
    name: "Jordan Myles",
    role: "The Culture Analyst",
    subject: "Media Literacy & Era Comparisons",
    icon: Film,
    color: "from-ridgemont-vhsPurple-500 to-violet-400",
    style: "How media shapes thinking. Sourced comparisons. Critical analysis.",
  },
  {
    name: "Dr. Robin Sato",
    role: "The Counselor",
    subject: "Goal Setting & Learning Wellness",
    icon: Compass,
    color: "from-teal-500 to-cyan-400",
    style: "Pacing, reflection, overwhelm control. Personalized roadmaps.",
  },
  {
    name: "Ms. Calloway",
    role: "The Librarian",
    subject: "Research & Source Curation",
    icon: BookMarked,
    color: "from-indigo-500 to-blue-400",
    style: "Precision retrieval. Evidence standards. Citation verification.",
  },
  {
    name: "Tony Machado",
    role: "The Lab Foreman",
    subject: "Making & Prototyping",
    icon: Wrench,
    color: "from-orange-500 to-yellow-500",
    style: "Build it, test it, improve it. Practical output over theory.",
  },
  {
    name: "Priya Dhillon",
    role: "The News Anchor",
    subject: "Current Events & AI Today",
    icon: Newspaper,
    color: "from-ridgemont-neonMagenta-400 to-ridgemont-electricBlue-400",
    style: "Daily explainers. Why it matters. What it would have meant in the 80s.",
  },
];

export function MeetTeachers() {
  return (
    <section id="teachers" className="py-24 sm:py-32 bg-ridgemont-offBlack-800/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Meet the Teachers
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-ridgemont-cassetteGray-300">
            Ten AI instructors inspired by classic archetypes. Each one brings a unique
            teaching style, subject expertise, and personality to your learning journey.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {teachers.map((teacher, i) => (
            <motion.div
              key={teacher.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="group relative rounded-xl border border-ridgemont-cassetteGray-600 bg-ridgemont-offBlack-800/80 p-5 hover:border-ridgemont-cassetteGray-400 transition-all cursor-pointer"
            >
              <div
                className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${teacher.color}`}
              >
                <teacher.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-heading text-sm font-semibold text-white">
                {teacher.name}
              </h3>
              <p className="text-xs text-ridgemont-neonMagenta-400 font-medium">
                {teacher.role}
              </p>
              <p className="mt-1 text-xs text-ridgemont-cassetteGray-300">
                {teacher.subject}
              </p>
              <p className="mt-2 text-[11px] text-ridgemont-cassetteGray-400 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity">
                {teacher.style}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
