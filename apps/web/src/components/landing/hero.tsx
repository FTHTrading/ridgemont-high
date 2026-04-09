"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Cpu, BookOpen, Radio } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-ridgemont-neonMagenta-500/10 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-ridgemont-electricBlue-500/10 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-ridgemont-warmGold-500/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          {/* Era badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-ridgemont-cassetteGray-600 bg-ridgemont-cassetteGray-700/50 px-4 py-1.5 text-sm text-ridgemont-cassetteGray-200 backdrop-blur-sm"
          >
            <Radio className="h-3.5 w-3.5 text-ridgemont-neonMagenta-400" />
            Inspired by the energy of the era. Engineered for today.
          </motion.div>

          {/* Headline */}
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-white">AI Education from</span>
            <br />
            <span className="gradient-text">Unforgettable Mentors</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-ridgemont-cassetteGray-200 sm:text-xl">
            Learn AI, build real projects, and understand today&apos;s world
            — guided by themed instructors in a campus that blends 80s/90s
            soul with cutting-edge labs.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/auth/signup"
              className="inline-flex h-12 items-center rounded-xl bg-ridgemont-neonMagenta-500 px-8 text-base font-semibold text-white shadow-neon-magenta hover:bg-ridgemont-neonMagenta-600 hover:shadow-none transition-all"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Start Learning Free
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex h-12 items-center rounded-xl border-2 border-ridgemont-cassetteGray-500 bg-transparent px-8 text-base font-semibold text-white hover:border-ridgemont-electricBlue-400 hover:bg-ridgemont-cassetteGray-700 transition-all"
            >
              See How It Works
            </Link>
          </div>
        </motion.div>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-4"
        >
          {[
            { icon: BookOpen, label: "9 Learning Tracks" },
            { icon: Cpu, label: "7 Interactive Labs" },
            { icon: Sparkles, label: "10 AI Mentors" },
            { icon: Radio, label: "Daily AI Briefings" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-full border border-ridgemont-cassetteGray-600 bg-ridgemont-offBlack-800/60 px-4 py-2 text-sm text-ridgemont-cassetteGray-200 backdrop-blur-sm"
            >
              <Icon className="h-4 w-4 text-ridgemont-electricBlue-400" />
              {label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
