"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Courses", href: "#courses" },
  { label: "Labs", href: "#labs" },
  { label: "Instructors", href: "#instructors" },
  { label: "Today in AI", href: "#today" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-ridgemont-offBlack-900/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-ridgemont-neonMagenta-500 to-ridgemont-electricBlue-500 shadow-neon-magenta group-hover:shadow-[0_0_25px_rgba(255,45,120,0.5)] transition-shadow duration-300">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold text-white leading-none">
              Ridgemont <span className="text-ridgemont-neonMagenta-400">AI</span>
            </span>
            <span className="text-[10px] font-mono text-ridgemont-cassetteGray-400 tracking-widest uppercase">
              Academy
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm text-ridgemont-cassetteGray-200 hover:text-white transition-colors group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-ridgemont-neonMagenta-500 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/auth/signin"
            className="hidden sm:inline-flex text-sm font-medium text-ridgemont-cassetteGray-200 hover:text-white transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/auth/signup"
            className="inline-flex h-9 items-center rounded-lg bg-ridgemont-neonMagenta-500 px-4 text-sm font-medium text-white shadow-neon-magenta hover:bg-ridgemont-neonMagenta-600 hover:shadow-[0_0_25px_rgba(255,45,120,0.4)] transition-all duration-300"
          >
            Get Started
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-ridgemont-cassetteGray-600 text-ridgemont-cassetteGray-200 hover:text-white hover:border-ridgemont-cassetteGray-400 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-white/5 bg-ridgemont-offBlack-900/95 backdrop-blur-xl"
          >
            <nav className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-ridgemont-cassetteGray-200 hover:bg-ridgemont-cassetteGray-700/50 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-ridgemont-cassetteGray-700 my-2" />
              <Link
                href="/auth/signin"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm text-ridgemont-cassetteGray-200 hover:bg-ridgemont-cassetteGray-700/50 hover:text-white transition-colors"
              >
                Sign In
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
