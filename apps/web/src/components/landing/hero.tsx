"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Cpu,
  BookOpen,
  Radio,
  Zap,
  Terminal,
  Brain,
  Code2,
  ArrowRight,
} from "lucide-react";

const rotatingPhrases = [
  "Iconic Instructors",
  "Hands-On Labs",
  "Real-World Skills",
  "Today's Top AI",
];

const floatingSnippets = [
  { text: "prompt.generate()", x: "10%", y: "20%", delay: 0 },
  { text: "agent.think()", x: "75%", y: "15%", delay: 1.5 },
  { text: "rag.retrieve()", x: "85%", y: "65%", delay: 3 },
  { text: "model.train()", x: "5%", y: "70%", delay: 2 },
  { text: "tools.connect()", x: "60%", y: "80%", delay: 4 },
];

export function HeroSection() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % rotatingPhrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-grid-pattern">
      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-ridgemont-neonMagenta-500/10 blur-[140px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-ridgemont-electricBlue-500/10 blur-[140px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-ridgemont-warmGold-500/5 blur-[120px]"
        />
      </div>

      {/* Floating code snippets */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {floatingSnippets.map((snippet) => (
          <motion.div
            key={snippet.text}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: snippet.delay,
              ease: "easeInOut",
            }}
            className="absolute font-mono text-xs text-ridgemont-cassetteGray-500"
            style={{ left: snippet.x, top: snippet.y }}
          >
            <span className="text-ridgemont-neonMagenta-500/40">{">"}</span>{" "}
            {snippet.text}
          </motion.div>
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-ridgemont-cassetteGray-600 bg-ridgemont-cassetteGray-700/50 px-4 py-1.5 text-sm text-ridgemont-cassetteGray-200 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ridgemont-arcadeGreen-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ridgemont-arcadeGreen-500" />
              </span>
              Now Open — Free Access
            </motion.div>

            {/* Headline with rotating text */}
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1]">
              <span className="text-white">AI Education</span>
              <br />
              <span className="text-white">from </span>
              <span className="relative inline-block min-w-[280px] sm:min-w-[360px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={phraseIndex}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="gradient-text absolute left-0"
                  >
                    {rotatingPhrases[phraseIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <p className="mt-16 sm:mt-8 max-w-xl text-lg text-ridgemont-cassetteGray-200 sm:text-xl leading-relaxed">
              Inspired by the era. Built for right now. Learn AI online with
              <span className="text-ridgemont-neonMagenta-400 font-medium"> iconic-style instructors</span>,
              real labs, and daily briefings that make today&apos;s technology
              understandable.
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/auth/signup"
                className="group inline-flex h-14 items-center justify-center rounded-xl bg-gradient-to-r from-ridgemont-neonMagenta-500 to-ridgemont-neonMagenta-600 px-8 text-base font-semibold text-white shadow-neon-magenta hover:shadow-[0_0_30px_rgba(255,45,120,0.5)] transition-all duration-300"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Start Learning Free
                <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex h-14 items-center justify-center rounded-xl border-2 border-ridgemont-cassetteGray-500 bg-transparent px-8 text-base font-semibold text-white hover:border-ridgemont-electricBlue-400 hover:bg-ridgemont-electricBlue-500/10 transition-all duration-300"
              >
                See How It Works
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-2">
                {["bg-ridgemont-neonMagenta-500", "bg-ridgemont-electricBlue-500", "bg-ridgemont-warmGold-500", "bg-ridgemont-arcadeGreen-500"].map((bg, i) => (
                  <div
                    key={i}
                    className={`h-8 w-8 rounded-full ${bg} ring-2 ring-ridgemont-offBlack-900 flex items-center justify-center text-[10px] font-bold text-white`}
                  >
                    {["K", "A", "D", "M"][i]}
                  </div>
                ))}
                <div className="h-8 w-8 rounded-full bg-ridgemont-cassetteGray-600 ring-2 ring-ridgemont-offBlack-900 flex items-center justify-center text-[10px] text-white">
                  +2k
                </div>
              </div>
              <p className="text-sm text-ridgemont-cassetteGray-300">
                <span className="text-white font-semibold">2,400+</span> learners enrolled
              </p>
            </div>
          </motion.div>

          {/* Right: Interactive terminal card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="retro-tv-frame">
              <div className="retro-tv-screen crt-scanlines p-6">
                {/* Terminal header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="terminal-dot bg-red-500" />
                  <div className="terminal-dot bg-yellow-500" />
                  <div className="terminal-dot bg-green-500" />
                  <span className="ml-2 text-xs font-mono text-ridgemont-cassetteGray-400">
                    ridgemont-online ~ /ai-lab
                  </span>
                </div>

                {/* Terminal content */}
                <div className="font-mono text-sm space-y-3">
                  <TerminalLine delay={0.5} prompt="$" color="text-ridgemont-arcadeGreen-400">
                    ridgemont init --track &quot;AI Foundations&quot;
                  </TerminalLine>
                  <TerminalLine delay={1.2} prompt="✓" color="text-ridgemont-arcadeGreen-400" dim>
                    Loading instructor: Mr. Miyagi...
                  </TerminalLine>
                  <TerminalLine delay={1.8} prompt="✓" color="text-ridgemont-electricBlue-400" dim>
                    Opening Prompt Lab environment...
                  </TerminalLine>
                  <TerminalLine delay={2.5} prompt="✓" color="text-ridgemont-warmGold-400" dim>
                    Current events feed: connected
                  </TerminalLine>
                  <TerminalLine delay={3.2} prompt="✓" color="text-ridgemont-neonMagenta-400" dim>
                    Safety layer: active (5-layer pipeline)
                  </TerminalLine>
                  <TerminalLine delay={4.0} prompt="→" color="text-white">
                    <span className="text-ridgemont-arcadeGreen-400 font-bold">Ready.</span>{" "}
                    Welcome to Ridgemont AI Academy.
                  </TerminalLine>
                </div>

                {/* Blinking cursor */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 4.8 }}
                  className="mt-4 flex items-center gap-1 font-mono text-sm"
                >
                  <span className="text-ridgemont-neonMagenta-400">$</span>
                  <span className="typing-cursor text-ridgemont-cassetteGray-400" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-4"
        >
          {[
            { icon: BookOpen, label: "9 Learning Tracks", color: "text-ridgemont-neonMagenta-400" },
            { icon: Cpu, label: "7 Interactive Labs", color: "text-ridgemont-electricBlue-400" },
            { icon: Brain, label: "10 AI Instructors", color: "text-ridgemont-warmGold-400" },
            { icon: Radio, label: "Daily AI Briefings", color: "text-ridgemont-arcadeGreen-400" },
            { icon: Terminal, label: "Sandboxed Code Lab", color: "text-ridgemont-vhsPurple-400" },
            { icon: Code2, label: "Build Real Projects", color: "text-ridgemont-electricBlue-400" },
          ].map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-full border border-ridgemont-cassetteGray-600/50 bg-ridgemont-offBlack-800/40 px-4 py-2 text-sm text-ridgemont-cassetteGray-200 backdrop-blur-sm hover:border-ridgemont-cassetteGray-500 transition-colors"
            >
              <Icon className={`h-4 w-4 ${color}`} />
              {label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TerminalLine({
  delay,
  prompt,
  color,
  dim,
  children,
}: {
  delay: number;
  prompt: string;
  color: string;
  dim?: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3 }}
      className={`flex items-start gap-2 ${dim ? "text-ridgemont-cassetteGray-400" : "text-ridgemont-cassetteGray-200"}`}
    >
      <span className={`${color} shrink-0`}>{prompt}</span>
      <span>{children}</span>
    </motion.div>
  );
}
