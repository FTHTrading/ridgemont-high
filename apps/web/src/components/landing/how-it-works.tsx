"use client";

import { motion } from "framer-motion";
import { UserCheck, BookOpen, FlaskConical, Newspaper, ChevronRight } from "lucide-react";

const steps = [
  {
    icon: UserCheck,
    title: "Meet Your Mentor",
    description:
      "Choose from 10 themed AI instructors — each with a unique teaching style, personality, and subject expertise. They adapt to your learning level.",
    color: "text-ridgemont-neonMagenta-400",
    borderColor: "border-ridgemont-neonMagenta-500/30",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(255,45,120,0.15)]",
    bgAccent: "bg-ridgemont-neonMagenta-500/10",
    number: "01",
  },
  {
    icon: BookOpen,
    title: "Follow a Learning Track",
    description:
      "Structured courses from AI foundations to agent systems, prompting, RAG, media literacy, and building. Each lesson includes quizzes, citations, and projects.",
    color: "text-ridgemont-electricBlue-400",
    borderColor: "border-ridgemont-electricBlue-500/30",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(0,191,255,0.15)]",
    bgAccent: "bg-ridgemont-electricBlue-500/10",
    number: "02",
  },
  {
    icon: FlaskConical,
    title: "Build in the Labs",
    description:
      "Seven hands-on labs: Prompt Lab, Agent Lab, MCP Lab, RAG Lab, Code Lab, Media Analysis Lab, and Project Studio. Create real things, not worksheets.",
    color: "text-ridgemont-warmGold-400",
    borderColor: "border-ridgemont-warmGold-500/30",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(255,184,0,0.15)]",
    bgAccent: "bg-ridgemont-warmGold-500/10",
    number: "03",
  },
  {
    icon: Newspaper,
    title: "Stay Current",
    description:
      "Every day, the platform explains what's happening in AI and the world — in terms you understand. With 'Then vs Now' cards connecting today to the past.",
    color: "text-ridgemont-arcadeGreen-400",
    borderColor: "border-ridgemont-arcadeGreen-500/30",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(57,255,20,0.15)]",
    bgAccent: "bg-ridgemont-arcadeGreen-500/10",
    number: "04",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern-blue opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-1.5 rounded-md bg-ridgemont-electricBlue-500/10 px-3 py-1 text-xs font-medium text-ridgemont-electricBlue-400 ring-1 ring-inset ring-ridgemont-electricBlue-500/20 mb-4">
            How It Works
          </span>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-5xl">
            Four steps to{" "}
            <span className="gradient-text">AI mastery</span>
          </h2>
          <p className="mt-4 text-lg text-ridgemont-cassetteGray-300 max-w-2xl mx-auto">
            A real educational OS with a memorable surface and a powerful core.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className={`group relative rounded-2xl border ${step.borderColor} bg-ridgemont-offBlack-800/60 p-6 backdrop-blur-sm ${step.glowColor} transition-all duration-500 hover:-translate-y-1`}
            >
              {/* Step number */}
              <div className="absolute top-4 right-4 font-display text-4xl font-bold text-ridgemont-cassetteGray-800 group-hover:text-ridgemont-cassetteGray-700 transition-colors">
                {step.number}
              </div>

              {/* Connecting arrow (except last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ChevronRight className="h-5 w-5 text-ridgemont-cassetteGray-600" />
                </div>
              )}

              <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${step.bgAccent} ring-1 ring-white/5`}>
                <step.icon className={`h-7 w-7 ${step.color}`} />
              </div>
              <h3 className="text-lg font-heading font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-ridgemont-cassetteGray-300 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
