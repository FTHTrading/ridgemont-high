"use client";

import { motion } from "framer-motion";
import { UserCheck, BookOpen, FlaskConical, Newspaper } from "lucide-react";

const steps = [
  {
    icon: UserCheck,
    title: "Meet Your Mentor",
    description:
      "Choose from 10 themed AI instructors — each with a unique teaching style, personality, and subject expertise. They adapt to your learning level.",
    color: "text-ridgemont-neonMagenta-400",
    borderColor: "border-ridgemont-neonMagenta-500/30",
  },
  {
    icon: BookOpen,
    title: "Follow a Learning Track",
    description:
      "Structured courses from AI foundations to agent systems, prompting, RAG, media literacy, and building. Each lesson includes quizzes, source citations, and projects.",
    color: "text-ridgemont-electricBlue-400",
    borderColor: "border-ridgemont-electricBlue-500/30",
  },
  {
    icon: FlaskConical,
    title: "Build in the Labs",
    description:
      "Seven hands-on labs: Prompt Lab, Agent Lab, MCP Lab, RAG Lab, Code Lab, Media Analysis Lab, and Project Studio. Create real things, not worksheets.",
    color: "text-ridgemont-warmGold-400",
    borderColor: "border-ridgemont-warmGold-500/30",
  },
  {
    icon: Newspaper,
    title: "Stay Current",
    description:
      "Every day, the platform explains what's happening in AI and the world — in terms you understand. With 'Then vs Now' cards that connect today to the era you know.",
    color: "text-ridgemont-arcadeGreen-400",
    borderColor: "border-ridgemont-arcadeGreen-500/30",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-ridgemont-cassetteGray-300">
            A real educational OS with a memorable surface and a powerful core.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative rounded-xl border ${step.borderColor} bg-ridgemont-offBlack-800/60 p-6 backdrop-blur-sm`}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-ridgemont-cassetteGray-700">
                <step.icon className={`h-6 w-6 ${step.color}`} />
              </div>
              <div className="absolute top-4 right-4 font-display text-3xl font-bold text-ridgemont-cassetteGray-700">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-heading font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-ridgemont-cassetteGray-300 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
