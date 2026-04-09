"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Eye, BookOpenCheck, Users } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Cited & Verifiable",
    body: "Every AI-generated claim links to its source. Students see where information comes from — always.",
  },
  {
    icon: Eye,
    title: "Transparent AI",
    body: "Personas explain how they work. No hidden agendas, no unmoderated output, no dark patterns.",
  },
  {
    icon: BookOpenCheck,
    title: "Age-Appropriate Content",
    body: "Multi-layer safety: input filtering, output moderation, topic guardrails, and mandatory citations.",
  },
  {
    icon: Users,
    title: "Guardian Dashboard",
    body: "Parents and guardians can monitor activity, review AI interactions, and set content preferences.",
  },
];

export function TrustSection() {
  return (
    <section className="py-24 sm:py-32 bg-ridgemont-offBlack-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Built for Trust.{" "}
            <span className="gradient-text">Designed for Safety.</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-ridgemont-cassetteGray-300">
            Ridgemont treats safety and transparency as first-class features — not afterthoughts.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-ridgemont-arcadeGreen-500/10 ring-1 ring-ridgemont-arcadeGreen-500/20 mb-5">
                <pillar.icon className="h-7 w-7 text-ridgemont-arcadeGreen-400" />
              </div>
              <h3 className="font-heading text-base font-semibold text-white">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm text-ridgemont-cassetteGray-300 leading-relaxed">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
