"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  FlaskConical,
  Brain,
  Newspaper,
  Award,
} from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    value: 2400,
    suffix: "+",
    label: "Learners Enrolled",
    color: "text-ridgemont-neonMagenta-400",
    glowClass: "shadow-[0_0_20px_rgba(255,45,120,0.2)]",
  },
  {
    icon: BookOpen,
    value: 80,
    suffix: "+",
    label: "Lessons Available",
    color: "text-ridgemont-electricBlue-400",
    glowClass: "shadow-[0_0_20px_rgba(0,191,255,0.2)]",
  },
  {
    icon: FlaskConical,
    value: 7,
    suffix: "",
    label: "Interactive Labs",
    color: "text-ridgemont-warmGold-400",
    glowClass: "shadow-[0_0_20px_rgba(255,184,0,0.2)]",
  },
  {
    icon: Brain,
    value: 10,
    suffix: "",
    label: "AI Mentors",
    color: "text-ridgemont-arcadeGreen-400",
    glowClass: "shadow-[0_0_20px_rgba(57,255,20,0.2)]",
  },
  {
    icon: Newspaper,
    value: 365,
    suffix: "",
    label: "Daily Briefings / Year",
    color: "text-ridgemont-vhsPurple-400",
    glowClass: "shadow-[0_0_20px_rgba(155,89,208,0.2)]",
  },
  {
    icon: Award,
    value: 9,
    suffix: "",
    label: "Learning Tracks",
    color: "text-ridgemont-electricBlue-400",
    glowClass: "shadow-[0_0_20px_rgba(0,191,255,0.2)]",
  },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="py-20 sm:py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-ridgemont-offBlack-900 via-ridgemont-offBlack-800/50 to-ridgemont-offBlack-900" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            The Numbers Speak
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className={`stat-glow rounded-2xl border border-white/5 bg-ridgemont-offBlack-800/60 p-5 text-center backdrop-blur-sm hover:${stat.glowClass} transition-all duration-300`}
            >
              <stat.icon className={`mx-auto h-6 w-6 ${stat.color} mb-3`} />
              <div className={`font-heading text-3xl font-bold ${stat.color}`}>
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-1 text-xs text-ridgemont-cassetteGray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
