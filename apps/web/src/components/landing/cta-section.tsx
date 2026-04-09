"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Sparkles className="mx-auto h-10 w-10 text-ridgemont-warmGold-400 mb-6" />
          <h2 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            The Future of AI Education
            <br />
            <span className="gradient-text">Starts at Ridgemont.</span>
          </h2>
          <p className="mt-6 text-lg text-ridgemont-cassetteGray-300 max-w-2xl mx-auto leading-relaxed">
            Ten unforgettable mentors. Nine structured tracks. Seven hands-on labs.
            Daily current events. One platform built to launch the next generation
            of AI-literate thinkers and builders.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-ridgemont-neonMagenta-500 px-8 py-3.5 text-base font-semibold text-white shadow-neon-magenta hover:bg-ridgemont-neonMagenta-400 transition-colors"
            >
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/courses"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-ridgemont-cassetteGray-600 px-8 py-3.5 text-base font-medium text-ridgemont-cassetteGray-200 hover:border-ridgemont-cassetteGray-400 hover:text-white transition-colors"
            >
              Browse Courses
            </a>
          </div>
          <p className="mt-6 text-xs text-ridgemont-cassetteGray-500">
            Free tier available. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
